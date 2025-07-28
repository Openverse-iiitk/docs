"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function HighlightCard({ title, description, children, className }: HighlightCardProps) {
  return (
    <div className={cn("p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border", className)}>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-4">{description}</p>}
      {children}
    </div>
  );
}
