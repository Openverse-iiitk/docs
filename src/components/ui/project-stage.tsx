"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ProjectStageProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export function ProjectStage({ title, description, icon, className }: ProjectStageProps) {
  return (
    <div className={cn("flex items-start gap-3 p-4 rounded-lg bg-muted/50 border", className)}>
      {icon && (
        <div className="text-2xl mt-1">{icon}</div>
      )}
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
