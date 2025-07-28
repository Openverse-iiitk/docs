"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ChecklistProps {
  children: React.ReactNode;
  className?: string;
}

export function Checklist({ children, className }: ChecklistProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  );
}