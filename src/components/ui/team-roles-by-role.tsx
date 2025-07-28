"use client";
import React from "react";
import { cn } from "@/lib/utils";


const memberLinks: Record<string, { linkedin?: string; github?: string }> = {
  "Sam": {
    linkedin: "https://www.linkedin.com/in/samjoe404/",
    github: "https://github.com/KingRain"
  },
  "Sudhanshu": {
    linkedin: "https://www.linkedin.com/in/sudhanshu-rai-5a3290335/",
    github: "https://github.com/SudhanshuRai356"
  },
  "Kushal": {
    linkedin: "https://www.linkedin.com/in/kushal-arora-141183306/",
    github: "https://github.com/Kushal-39"
  },
  "Shaun": {
    linkedin: "https://www.linkedin.com/in/shaun-sebastian-46266a325/",
    github: "https://github.com/Babu-Nambothiri"
  },
  "Aishik": {
    linkedin: "https://www.linkedin.com/in/royaishik/",
    github: "https://github.com/royaishik"
  },
  "Dheeraj": {
    linkedin: "https://www.linkedin.com/in/dheeraj-gujrathi-7ab940339/",
    github: ""
  },
  "Prajwal": {
    linkedin: "https://www.linkedin.com/in/prajwal-kumar-karnad-632411307/",
    github: "https://github.com/Prajwal-k-tech"
  },
  "Abhinav": {
    linkedin: "https://www.linkedin.com/in/abhinav-sudhi-k/",
    github: "https://github.com/AbhiKamp"
  },
  "Nandana": {
    linkedin: "https://www.linkedin.com/in/nandana-s-kalapurayil-208410321/",
    github: ""
  },
  "Pranav": {
    linkedin: "https://www.linkedin.com/in/pranav-c-r/",
    github: "https://github.com/pranav-c-r"
  },
  "Anupam": {
    linkedin: "https://www.linkedin.com/in/anupam-mishra-223583324/",
    github: "https://github.com/make-ki"
  },
};

const roleMap = [
  {
    role: "Hardware and Engineering",
    members: ["Aishik", "Shaun"],
  },
  {
    role: "Design",
    members: ["Aishik", "Pranav"],
  },
  {
    role: "Software and Engineering",
    members: ["Prajwal", "Sudhanshu"],
  },
  {
    role: "Vision and Ecosystem",
    members: ["Prajwal", "Manvith"],
  },
  {
    role: "Test and Bug",
    members: ["Anupam", "Sam"],
  },
  {
    role: "Community and Events",
    members: ["Manvith", "Abhinav", "Nandana"],
  },
  {
    role: "Documentation and Knowledge",
    members: ["Kushal", "Dheeraj", "Sudhanshu"],
  },
  {
    role: "Outreach and Content",
    members: ["Nandana"],
  },
];

export function TeamRolesByRole({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {roleMap.map((item) => (
        <div key={item.role} className="rounded-lg bg-muted p-4 shadow">
          <div className="font-bold text-lg mb-2">{item.role}</div>
          <div className="flex flex-wrap gap-2">
            {item.members.map((name) => {
              const links = memberLinks[name] || {};
              return (
                <span key={name} className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium flex items-center gap-2">
                  {links.linkedin ? (
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">{name}</a>
                  ) : (
                    name
                  )}
                  {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="ml-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="inline-block align-middle"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                    </a>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
