import * as React from "react";

export interface TypeTableProps {
  children: React.ReactNode;
}

// For MDX table markdown, just render children directly (no wrapper)
export function TypeTable({ children }: TypeTableProps) {
  return <>{children}</>;
}
