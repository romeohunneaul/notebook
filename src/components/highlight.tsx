import type { ReactNode } from "react";

type HighlightProps = { children: ReactNode; punch?: boolean };

/** A marker stroke behind a word. Highlight is meaning, so a real <mark>; ink colour kept for the night theme. */
export function Highlight({ children, punch = false }: HighlightProps) {
  const c = punch ? "var(--highlight-punch)" : "var(--highlight)";
  return (
    <mark
      className="text-inherit px-0.5"
      style={{ background: `linear-gradient(transparent 14%, ${c} 14%, ${c} 86%, transparent 86%)` }}
    >
      {children}
    </mark>
  );
}
