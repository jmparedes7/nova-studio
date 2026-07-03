"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type FadeInProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function FadeIn<T extends ElementType = "div">({
  as,
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps<T>) {
  const Component = motion(as ?? "div");
  const shouldReduceMotion = useReducedMotion();

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut", delay }
      }
      {...props}
    >
      {children}
    </Component>
  );
}
