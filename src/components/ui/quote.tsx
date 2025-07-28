"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className }: QuoteProps) {
  return (
    <blockquote className={cn("border-l-4 border-primary pl-4 italic text-lg my-4", className)}>
      {children}
      {author && (
        <footer className="mt-2 text-sm text-muted-foreground">— {author}</footer>
      )}
    </blockquote>
  );
}
