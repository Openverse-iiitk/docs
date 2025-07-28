"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  items: string[];
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
}

interface TabProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({ items, children, className, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>
        <div className="flex flex-wrap border-b border-border">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                activeTab === item
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

export function Tab({ value, children, className }: TabProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within Tabs");
  }

  const { activeTab } = context;

  if (activeTab !== value) {
    return null;
  }

  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
      {children}
    </div>
  );
}