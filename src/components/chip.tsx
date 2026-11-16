import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  /** selected turns it to ink; disabled drops to 38%. */
  state?: "rest" | "selected" | "disabled";
};

/**
 * A small rounded tag in the body face: soft ink on a hairline. Static, nothing moves on hover;
 * `selected` turns it to ink. See `.chip` in notebook.css.
 */
export function Chip({ children, state = "rest" }: ChipProps) {
  return (
    <span className="chip text-meta inline-block px-1.5 whitespace-nowrap" data-state={state}>
      {children}
    </span>
  );
}
