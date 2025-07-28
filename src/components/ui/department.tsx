"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface DepartmentProps {
  name: string;
  leads: string[];
  className?: string;
}

export function Department({ name, leads, className }: DepartmentProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}>
      <h4 className="font-semibold text-lg mb-2">{name}</h4>
      <div className="flex flex-wrap gap-2">
        {leads.map((lead) => (
          <span key={lead} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
            {lead}
          </span>
        ))}
      </div>
    </div>
  );
}
