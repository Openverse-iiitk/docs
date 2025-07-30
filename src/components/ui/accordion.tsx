
'use client';
'use client';
import * as React from "react";

export interface AccordionProps {
  children: React.ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="accordion-root">{children}</div>;
}

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.5em 0",
          cursor: "pointer"
        }}
      >
        {title}
      </button>
      {open && <div className="accordion-content" style={{paddingLeft: "1em"}}>{children}</div>}
    </div>
  );
}
