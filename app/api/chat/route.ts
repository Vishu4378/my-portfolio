import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/lib/resume-context";

// Uses the Node.js runtime so process.env and the SDK work as expected.
export const runtime = "nodejs";
// Never cache — every question is dynamic.
export const dynamic = "force-dynamic";

const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-pro";

type ClientMessage = { role: "user" | "model"; text: string };

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The chat is not configured yet — missing GEMINI_API_KEY." },
      { status: 503 }
    );
  }

  let messages: ClientMessage[];
  try {
    const body = await req.json();
    messages = body?.messages;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json(
      { error: "`messages` must be a non-empty array." },
      { status: 400 }
    );
  }

  // Keep context bounded: last 12 turns, each capped at 4k chars.
  const contents = messages
    .slice(-12)
    .filter((m) => m && typeof m.text === "string" && m.text.trim())
    .map((m) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: m.text.slice(0, 4000) }],
    }));

  const ai = new GoogleGenAI({ apiKey });

  let stream: AsyncGenerator<{ text?: string }>;
  try {
    stream = await ai.models.generateContentStream({
      model: MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 1024,
        temperature: 0.6,
      },
    });
  } catch (err) {
    console.error("Gemini request failed:", err);
    return Response.json(
      { error: "Failed to reach the AI service." },
      { status: 502 }
    );
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
      } catch (err) {
        console.error("Gemini stream error:", err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
