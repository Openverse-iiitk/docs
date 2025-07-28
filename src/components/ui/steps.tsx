"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  const stepArray = React.Children.toArray(children);
  
  return (
    <div className={cn("space-y-6", className)}>
      {stepArray.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {index + 1}
            </div>
            {index < stepArray.length - 1 && (
              <div className="mt-2 h-full w-px bg-border" />
            )}
          </div>
          <div className="flex-1 pb-8">
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Step({ children, className }: StepProps) {
  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
      {children}
    </div>
  );
}