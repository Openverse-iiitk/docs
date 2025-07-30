import * as React from "react";

export interface BannerProps {
  href: string;
  text: string;
}

export function Banner({ href, text }: BannerProps) {
  return (
    <div style={{
      background: "#e0f2fe",
      border: "1px solid #38bdf8",
      borderRadius: "0.5em",
      padding: "1em",
      margin: "1.5em 0",
      textAlign: "center"
    }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0ea5e9",
          fontWeight: 600,
          textDecoration: "none",
          fontSize: "1.1em"
        }}
      >
        {text}
      </a>
    </div>
  );
}
