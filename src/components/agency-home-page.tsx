import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { LandingPageData } from "@/templates/types";

type AgencyHomePageProps = {
  data: LandingPageData;
};

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Demos", href: "#demos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

const problemSolution = [
  {
    label: "Problema",
    title: "Una web prolija no alcanza si parece genérica.",
    text: "El visitante decide rápido si confía, entiende la oferta y tiene ganas de escribir.",
  },
  {
    label: "Solución",
    title: "Una landing por rubro, con dirección visual y mensaje comercial.",
    text: "Nova ordena estética, copy, estructura y CTA para que el negocio parezca más profesional desde el primer scroll.",
  },
];

export function AgencyHomePage({ data }: AgencyHomePageProps) {
  const services = data.services ?? [];
  const demos = data.portfolio ?? [];
  const process = data.process ?? [];
  const pricing = data.pricing ?? [];
  const contact = data.contact;

  return (
    <main className="landing-theme landing-theme-studio min-h-screen overflow-hidden bg-[#101713] text-[#f6f1e8]">
      <section className="relative border-b border-[#f6f1e8]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(184,255,92,0.14),transparent_30rem),radial-gradient(circle_at_86%_4%,rgba(189,111,60,0.20),transparent_26rem)]" />
        <Container className="relative">
          <nav className="flex items-center justify-between py-5">
            <a className="text-lg font-black tracking-tight" href="#">
              {data.hero.businessName}
            </a>
            <div className="hidden items-center gap-6 text-sm font-semibold text-[#f6f1e8]/68 lg:flex">
              {navItems.map((item) => (
                <a
                  className="transition hover:text-[#b8ff5c]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="rounded-full border border-[#f6f1e8]/15 bg-[#f6f1e8]/8 px-4 py-2 text-sm font-bold text-[#f6f1e8] transition hover:-translate-y-0.5 hover:border-[#b8ff5c] hover:bg-[#b8ff5c] hover:text-[#101713]"
              href="#contacto"
            >
              Pedir propuesta
            </a>
          </nav>

          <div className="grid items-center gap-12 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:pb-24 lg:pt-20">
            <FadeIn>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b8ff5c] sm:text-sm">
                {data.hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-[3.05rem] leading-[0.96] text-[#f6f1e8] sm:text-6xl lg:text-[4.9rem]">
                {data.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f6f1e8]/72">
                {data.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="!bg-[#b8ff5c] !text-[#101713] hover:!bg-[#d2ff8f]"
                  href={data.hero.primaryHref ?? "#contacto"}
                >
                  {data.hero.primaryCta}
                </Button>
                <Button href={data.hero.secondaryHref ?? "#demos"} variant="secondary">
                  {data.hero.secondaryCta}
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {data.hero.stats.map((stat) => (
                  <span
                    className="rounded-full border border-[#f6f1e8]/10 bg-[#f6f1e8]/8 px-4 py-2 text-sm font-bold text-[#f6f1e8]/72"
                    key={stat.label}
                  >
                    {stat.value} · {stat.label}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="relative">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#f6f1e8]/12 bg-[#151f19] p-4 shadow-[0_34px_110px_rgba(0,0,0,0.32)]">
                  <div className="rounded-[1.1rem] border border-[#f6f1e8]/10 bg-[#0d130f] p-4">
                    <div className="flex items-center justify-between border-b border-[#f6f1e8]/10 pb-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8ff5c]">
                          Sistema Nova
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#f6f1e8]/62">
                          Landings premium por rubro
                        </p>
                      </div>
                      <span className="rounded-full bg-[#b8ff5c] px-3 py-1 text-xs font-black text-[#101713]">
                        7 días
                      </span>
                    </div>

                    <div className="grid gap-4 py-5 md:grid-cols-[1fr_0.78fr]">
                      <div className="rounded-[1rem] bg-[#f6f1e8] p-4 text-[#111312]">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-[#101713] px-3 py-1 text-xs font-bold text-[#f6f1e8]">
                            Demo dental
                          </span>
                          <span className="text-xs font-black text-[#bd6f3c]">
                            WhatsApp CTA
                          </span>
                        </div>
                        <div className="mt-8 h-3 w-5/6 rounded-full bg-[#101713]" />
                        <div className="mt-3 h-3 w-2/3 rounded-full bg-[#101713]/20" />
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <div className="h-24 rounded-[0.85rem] bg-[#dfe9e3]" />
                          <div className="h-24 rounded-[0.85rem] bg-[#b8ff5c]/30" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        {(data.hero.visual?.systemCards ?? []).slice(0, 3).map((card) => (
                          <div
                            className="rounded-[1rem] border border-[#f6f1e8]/10 bg-[#f6f1e8]/7 p-4"
                            key={card.title}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#b8ff5c]">
                                {card.eyebrow}
                              </span>
                              <span className="rounded-full bg-[#f6f1e8]/10 px-2 py-1 text-[0.68rem] font-bold text-[#f6f1e8]/70">
                                {card.meta}
                              </span>
                            </div>
                            <p className="mt-2 text-sm font-black text-[#f6f1e8]">
                              {card.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-[#f6f1e8]/58">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-2 border-t border-[#f6f1e8]/10 pt-4 text-xs font-bold text-[#f6f1e8]/68 sm:grid-cols-3">
                      {(data.hero.previewItems ?? []).map((item) => (
                        <span
                          className="rounded-[0.85rem] bg-[#f6f1e8]/8 px-3 py-2"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f1e8] py-16 text-[#111312] sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {problemSolution.map((item, index) => (
              <FadeIn
                className="rounded-[1.25rem] border border-[#111312]/10 bg-white p-6 shadow-[0_18px_52px_rgba(17,19,18,0.08)] sm:p-8"
                delay={index * 0.05}
                key={item.label}
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#bd6f3c]">
                  {item.label}
                </p>
                <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 leading-8 text-[#111312]/68">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-[#111312] sm:py-24" id="servicios">
        <Container>
          <SectionIntro
            eyebrow="Servicios"
            title="Lo que Nova vende no es una página: es una primera impresión comercial."
            text="Cada entrega combina dirección visual, copy, estructura, performance y publicación para que el negocio parezca listo para recibir consultas."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <FadeIn
                className="rounded-[1.15rem] border border-[#111312]/10 bg-[#f3f5f1] p-6 transition hover:-translate-y-1 hover:border-[#bd6f3c]/70 hover:bg-white hover:shadow-[0_18px_50px_rgba(17,19,18,0.08)]"
                delay={index * 0.04}
                key={item.title}
              >
                <span className="text-sm font-black text-[#bd6f3c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#111312]/66">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#101713] py-16 text-[#f6f1e8] sm:py-24" id="demos">
        <Container>
          <SectionIntro
            eyebrow="Demos"
            title="Demos por nicho para vender con ejemplos, no con promesas."
            text="La home muestra el sistema Nova. Cada demo muestra cómo se adapta la estrategia visual y comercial a un rubro concreto."
            dark
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {demos.map((demo, index) => (
              <FadeIn
                className="group rounded-[1.25rem] border border-[#f6f1e8]/12 bg-[#f6f1e8]/7 p-6 transition hover:-translate-y-1 hover:border-[#b8ff5c]/55 hover:bg-[#f6f1e8]/10"
                delay={index * 0.05}
                key={demo.title}
              >
                <a className="block h-full" href={demo.href ?? "#contacto"}>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8ff5c]">
                    {demo.niche}
                  </p>
                  <h3 className="mt-12 text-2xl font-black">{demo.title}</h3>
                  <p className="mt-3 leading-7 text-[#f6f1e8]/66">
                    {demo.result}
                  </p>
                  <span className="mt-8 inline-flex text-sm font-black text-[#f6f1e8] transition group-hover:translate-x-1 group-hover:text-[#b8ff5c]">
                    {demo.visualDetail ?? "Ver demo"} -&gt;
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f1e8] py-16 text-[#111312] sm:py-24" id="proceso">
        <Container>
          <SectionIntro
            eyebrow="Proceso"
            title="Un sistema claro para lanzar rápido sin parecer barato."
            text="El proceso está armado para reducir vueltas, decidir mejor y publicar una landing comercial con criterio."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <FadeIn
                className="rounded-[1.15rem] border border-[#111312]/10 bg-white p-6"
                delay={index * 0.04}
                key={step.step}
              >
                <span className="text-sm font-black text-[#bd6f3c]">
                  {step.step}
                </span>
                <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#111312]/66">
                  {step.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-[#111312] sm:py-24" id="precios">
        <Container>
          <SectionIntro
            eyebrow="Precios"
            title="Ofertas simples para comprar sin perderse."
            text="Paquetes pensados para vender valor, velocidad y presencia premium sin convertir la conversación en una consultoría eterna."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <FadeIn
                className={`rounded-[1.25rem] border p-6 transition hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-[#bd6f3c] bg-[#101713] text-[#f6f1e8] shadow-[0_24px_70px_rgba(17,19,18,0.18)]"
                    : "border-[#111312]/10 bg-[#f3f5f1] hover:bg-white hover:shadow-[0_18px_50px_rgba(17,19,18,0.08)]"
                }`}
                delay={index * 0.05}
                key={plan.name}
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#bd6f3c]">
                  {plan.name}
                </p>
                <p className="mt-8 text-4xl font-black">{plan.price}</p>
                <p
                  className={`mt-4 leading-7 ${
                    plan.highlighted ? "text-[#f6f1e8]/70" : "text-[#111312]/66"
                  }`}
                >
                  {plan.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#101713] py-16 text-[#f6f1e8] sm:py-24" id="contacto">
        <Container>
          <div className="grid gap-8 rounded-[1.5rem] border border-[#f6f1e8]/10 bg-[#f6f1e8]/7 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <FadeIn>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8ff5c]">
                Contacto
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                {contact?.title ?? "Contame tu rubro y te devuelvo una dirección concreta."}
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[#f6f1e8]/70">
                {contact?.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-[1.2rem] bg-[#f6f1e8] p-5 text-[#111312] sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#bd6f3c]">
                  Brief express
                </p>
                <div className="mt-6 grid gap-3 text-sm font-bold text-[#111312]/76">
                  <div className="rounded-[0.9rem] border border-[#111312]/10 bg-white p-4">
                    Rubro y ciudad
                  </div>
                  <div className="rounded-[0.9rem] border border-[#111312]/10 bg-white p-4">
                    Servicio que querés vender primero
                  </div>
                  <div className="rounded-[0.9rem] border border-[#111312]/10 bg-white p-4">
                    Estilo: clínico, boutique, tech o editorial
                  </div>
                </div>
                <Button className="mt-6 w-full" href={contact?.whatsappHref ?? "#"}>
                  {contact?.submitLabel ?? "Pedir propuesta"}
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <FadeIn className="max-w-3xl">
      <p
        className={`text-sm font-black uppercase tracking-[0.24em] ${
          dark ? "text-[#b8ff5c]" : "text-[#bd6f3c]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl leading-tight sm:text-5xl ${
          dark ? "text-[#f6f1e8]" : "text-[#111312]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-lg leading-8 ${
          dark ? "text-[#f6f1e8]/68" : "text-[#111312]/68"
        }`}
      >
        {text}
      </p>
    </FadeIn>
  );
}
