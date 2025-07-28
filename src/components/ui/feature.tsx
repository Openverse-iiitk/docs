"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Feature({ icon, title, description, children, className }: FeatureProps) {
  return (
    <div className={cn("flex items-start gap-4 p-4 rounded-lg bg-muted", className)}>
      {icon && <div className="text-2xl">{icon}</div>}
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        {description && <p className="text-muted-foreground mb-2">{description}</p>}
        {children}
      </div>
    </div>
  );
}
