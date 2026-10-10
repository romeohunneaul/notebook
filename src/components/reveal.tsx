"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

/**
 * Entrance animation. Content is visible by default: GSAP animates *from* a hidden
 * state, so a JS failure leaves the page readable. `matchMedia` honours
 * prefers-reduced-motion with no manual check.
 */
export function Reveal({ children, delay = 0 }: RevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(container.current, {
          opacity: 0,
          y: 16,
          duration: 0.7,
          delay,
          ease: "power2.out",
        });
      });

      return () => mm.revert();
    },
    { scope: container, dependencies: [delay] },
  );

  return <div ref={container}>{children}</div>;
}
