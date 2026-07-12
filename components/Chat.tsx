"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, ArrowUp, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { profile } from "@/lib/data";

type Msg = { role: "user" | "model"; text: string };

const SUGGESTIONS = [
  "What does Vijay do?",
  "What's his tech stack?",
  "Tell me about his experience",
  "How can I contact him?",
];

const GREETING: Msg = {
  role: "model",
  text: `Hi! I'm an AI assistant for ${profile.name}. Ask me anything about his skills, experience, or projects.`,
};

export function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;

    const history: Msg[] = [...messages, { role: "user", text: question }];
    // Add the user turn plus an empty assistant turn we stream into.
    setMessages([...history, { role: "model", text: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Drop the greeting; the server prepends its own system prompt.
        body: JSON.stringify({ messages: history.slice(1) }),
      });

      if (!res.ok || !res.body) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || "Request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "model", text: acc };
          return next;
        });
      }
      if (!acc.trim()) {
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = {
            role: "model",
            text: "Sorry, I couldn't generate a response. Please try again.",
          };
          return next;
        });
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "model",
          text: `⚠️ ${message}. You can also reach Vijay at ${profile.email}.`,
        };
        return next;
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Ask about Vijay"}
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full accent-fill btn-glow transition-transform hover:scale-105 md:bottom-8 md:right-8"
        whileTap={{ scale: 0.92 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(70vh,560px)] w-[min(92vw,400px)] flex-col overflow-hidden rounded-2xl border border-border-strong bg-surface glow-ring md:bottom-28 md:right-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-surface-2 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full accent-fill">
                <Sparkles size={17} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold leading-tight">
                  Ask about {profile.name.split(" ")[0]}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-faint">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 pulse-dot" />
                  AI assistant 
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "whitespace-pre-wrap rounded-br-sm accent-fill font-medium"
                        : "rounded-bl-sm border border-border bg-surface-2 text-text [&_a]:text-accent [&_a]:underline [&_li]:my-0.5 [&_ol]:list-decimal [&_ol]:pl-4 [&_p+p]:mt-2 [&_ul]:list-disc [&_ul]:pl-4"
                    }`}
                  >
                    {m.text ? (
                      m.role === "model" ? (
                        <ReactMarkdown>{m.text}</ReactMarkdown>
                      ) : (
                        m.text
                      )
                    ) : busy && i === messages.length - 1 ? (
                      <span className="inline-flex gap-1">
                        <Dot /> <Dot d={0.15} /> <Dot d={0.3} />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}

              {/* Suggestions — only before the first question */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-surface-2 px-3 py-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="min-w-0 flex-1 rounded-full border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none placeholder:text-faint focus:border-accent"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full accent-fill transition-opacity disabled:opacity-40"
              >
                <ArrowUp size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ d = 0 }: { d?: number }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-faint"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 0.9, repeat: Infinity, delay: d }}
    />
  );
}
