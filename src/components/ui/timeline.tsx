"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <ol className={cn("relative border-l border-border ml-4", className)}>
      {children}
    </ol>
  );
}

interface TimelineItemProps {
  title: string;
  description?: string;
  date?: string;
  children?: React.ReactNode;
  className?: string;
}

export function TimelineItem({ title, description, date, children, className }: TimelineItemProps) {
  return (
    <li className={cn("mb-10 ml-6", className)}>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-4 ring-white dark:ring-gray-900">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6"/></svg>
      </span>
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      {date && <time className="block mb-2 text-sm font-semibold text-muted-foreground">{date}</time>}
      {description && <p className="mb-2 text-sm text-muted-foreground">{description}</p>}
      {children}
    </li>
  );
}
