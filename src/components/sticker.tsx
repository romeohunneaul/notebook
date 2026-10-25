import type { ReactNode } from "react";

type StickerProps = { children: ReactNode; rotate?: number };

/** One per page, at most. Tilted, hard shadow, marker background. */
export function Sticker({ children, rotate = -3 }: StickerProps) {
  return (
    <span
      className="border-rule text-sticker inline-block border-[length:var(--border)] bg-[var(--highlight)] px-2.5 py-1 font-mono shadow-[var(--shadow-rest)]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
