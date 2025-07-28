"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Department } from "./department";

const departments = [
  { name: "Vision and Ecosystem", leads: ["Prajwal", "Manvith"] },
  { name: "Software and Engineering", leads: ["Prajwal", "Sudhanshu"] },
  { name: "Hardware and Engineering", leads: ["Aishik", "Shaun"] },
  { name: "Documentation and Knowledge", leads: ["Kushal", "Dheeraj", "Sudhanshu"] },
  { name: "Design", leads: ["Aishik", "Pranav"] },
  { name: "Outreach and Content", leads: ["Nandana"] },
  { name: "Test and Bug", leads: ["Anupam", "Sam"] },
  { name: "Community and Events", leads: ["Manvith", "Abhinav", "Nandana"] },
];

interface TeamGridProps {
  className?: string;
}

export function TeamGrid({ className }: TeamGridProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {departments.map((dept) => (
        <Department 
          key={dept.name} 
          name={dept.name} 
          leads={dept.leads}
        />
      ))}
    </div>
  );
}
