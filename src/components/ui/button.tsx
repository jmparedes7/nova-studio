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
    primary:
      "bg-[var(--landing-primary)] text-bone shadow-[0_14px_34px_rgba(21,23,22,0.16)] hover:-translate-y-0.5 hover:bg-[var(--landing-primary-hover)] hover:shadow-[0_18px_42px_rgba(57,72,59,0.22)]",
    secondary:
      "border border-ink/15 bg-white/55 text-[var(--landing-ink)] hover:-translate-y-0.5 hover:border-[var(--landing-accent)] hover:bg-white hover:shadow-[0_12px_28px_rgba(21,23,22,0.08)]",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
