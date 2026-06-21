import { ImageResponse } from "next/og";

export const alt = "Vijay Pandey — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 520px at 82% -12%, rgba(124,108,245,0.40), transparent 60%), #0a0b16",
          color: "#f4f5fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9295c6",
            letterSpacing: 3,
          }}
        >
          MEETVIJAY.COM
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 112,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            Vijay Pandey
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              marginTop: 14,
              color: "#a78bfa",
            }}
          >
            Full-Stack Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              marginTop: 26,
              color: "#a4a7c6",
              maxWidth: 920,
            }}
          >
            Building scalable web products with React, Next.js, TypeScript & AWS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 26,
            color: "#c4b5fd",
            fontWeight: 600,
          }}
        >
          <span>React</span>
          <span style={{ color: "#4b4e6b" }}>/</span>
          <span>Next.js</span>
          <span style={{ color: "#4b4e6b" }}>/</span>
          <span>TypeScript</span>
          <span style={{ color: "#4b4e6b" }}>/</span>
          <span>NestJS</span>
          <span style={{ color: "#4b4e6b" }}>/</span>
          <span>AWS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
