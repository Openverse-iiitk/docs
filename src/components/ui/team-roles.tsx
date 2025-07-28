"use client";
import React from "react";
import { cn } from "@/lib/utils";

const roles = [
  { name: "Aishik", tags: ["Hardware and Engineering", "Design"] },
  { name: "Shaun", tags: ["Hardware and Engineering"] },
  { name: "Prajwal", tags: ["Software and Engineering", "Vision and Ecosystem", "Documentation and Knowledge"] },
  { name: "Sudhanshu", tags: ["Software and Engineering"] },
  { name: "Anupam", tags: ["Test and Bug"] },
  { name: "Sam", tags: ["Test and Bug"] },
  { name: "Manvith", tags: ["Vision and Ecosystem", "Community and Events"] },
  { name: "Pranav", tags: ["Design"] },
  { name: "Kushal", tags: ["Documentation and Knowledge"] },
  { name: "Nandana", tags: ["Outreach and Content", "Community and Events"] },
  { name: "Dheeraj", tags: ["Documentation and Knowledge"] },
  { name: "Abhinav", tags: ["Community and Events"] },
];

export function TeamRoles({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {roles.map((role) => (
        <div key={role.name} className="rounded-lg bg-muted p-4 shadow">
          <div className="font-bold text-lg mb-1">{role.name}</div>
          <div className="flex flex-wrap gap-2">
            {role.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
