import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-ink text-bone hover:bg-moss",
    secondary:
      "border border-ink/15 bg-white/60 text-ink hover:border-copper hover:bg-white",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
