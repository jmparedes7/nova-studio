import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { ContactData, LandingPageData } from "@/templates/types";

type ContactSectionProps = {
  data: ContactData;
  theme?: LandingPageData["theme"];
};

export function ContactSection({ data, theme = "studio" }: ContactSectionProps) {
  const isClinic = theme === "clinic";

  return (
    <section
      className={`py-20 sm:py-24 ${
        isClinic ? "bg-[#f3fbf8]" : "bg-[var(--landing-band)]"
      }`}
      id="contacto"
    >
      <Container>
        <div
          className={`grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 ${
            isClinic
              ? "rounded-[1.4rem] border border-[#d8ece6] bg-white text-[var(--landing-ink)] shadow-[0_24px_64px_rgba(15,79,74,0.1)]"
              : "rounded-[2rem] bg-[var(--landing-primary)] text-bone"
          }`}
        >
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--landing-accent)]">
              Contacto
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">
              {data.title}
            </h2>
            <p
              className={`mt-5 max-w-xl leading-8 ${
                isClinic ? "text-[var(--landing-muted)]" : "text-bone/72"
              }`}
            >
              {data.description}
            </p>
            <div
              className={`mt-8 space-y-3 text-sm ${
                isClinic ? "text-[var(--landing-muted)]" : "text-bone/78"
              }`}
            >
              <p>{data.email}</p>
              <p>{data.whatsapp}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              className={`p-5 text-ink sm:p-6 ${
                isClinic
                  ? "rounded-[1.15rem] border border-[#d8ece6] bg-[#f7fffc]"
                  : "rounded-3xl bg-bone"
              }`}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  {data.formLabels.name}
                  <input
                    className="mt-2 min-h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 outline-none ring-[var(--landing-accent)] transition focus:ring-4"
                    name="name"
                    placeholder={data.formPlaceholders.name}
                    type="text"
                  />
                </label>
                <label className="text-sm font-semibold">
                  {data.formLabels.reason}
                  <input
                    className="mt-2 min-h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 outline-none ring-[var(--landing-accent)] transition focus:ring-4"
                    name="reason"
                    placeholder={data.formPlaceholders.reason}
                    type="text"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm font-semibold">
                {data.formLabels.message}
                <textarea
                  className="mt-2 min-h-36 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none ring-[var(--landing-accent)] transition focus:ring-4"
                  name="message"
                  placeholder={data.formPlaceholders.message}
                />
              </label>
              <Button className="mt-5 w-full" href={data.whatsappHref}>
                {data.submitLabel}
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
