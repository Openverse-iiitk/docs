"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface DevLogProps {
  date: string;
  summary: string;
  project?: string;
  className?: string;
}

export function DevLog({ date, summary, project, className }: DevLogProps) {
  return (
    <div className={cn("border-l-4 border-primary pl-4 py-2", className)}>
      <div className="flex items-center gap-2 mb-1">
        <time className="text-sm text-muted-foreground font-medium">{date}</time>
        {project && (
          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
            {project}
          </span>
        )}
      </div>
      <p className="text-sm">{summary}</p>
    </div>
  );
}
