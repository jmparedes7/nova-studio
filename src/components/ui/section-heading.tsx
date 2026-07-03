import { FadeIn } from "@/components/animation/fade-in";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <FadeIn className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isDark ? "text-bone/68" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
