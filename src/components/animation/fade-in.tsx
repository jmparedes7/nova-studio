"use client";

import { motion } from "framer-motion";
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

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {children}
    </Component>
  );
}
