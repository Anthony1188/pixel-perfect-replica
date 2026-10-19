import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Globe, Settings, BarChart3 } from "lucide-react";
import { SiteHeader, Wordmark } from "@/components/commercial/SiteHeader";
import hero from "@/assets/hero-workshop.png.asset.json";
import creator from "@/assets/creator-core.png.asset.json";
import fleet from "@/assets/fleetflow-tablet.jpg";
import tierFrame from "@/assets/tier-frame.jpg";
import svcBrand from "@/assets/svc-brand.jpg";
import svcAuto from "@/assets/svc-automation.jpg";
import svcCrm from "@/assets/svc-crm.jpg";
import svcLocal from "@/assets/svc-local.jpg";
import svcContent from "@/assets/svc-content.jpg";
import svcDash from "@/assets/svc-dashboards.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVAGENTEC Commercial — Your Business. Connected." },
      { name: "description", content: "Brand, websites and connected systems for local businesses, growing teams and creators." },
      { property: "og:title", content: "NOVAGENTEC Commercial — Your Business. Connected." },
      { property: "og:description", content: "Brand, websites and connected systems for local businesses, growing teams and creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Destinations pending from the owner: "#" links are placeholders.
const PENDING = "#contact";

function TextLink({ href = PENDING, children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4 ${className}`}>
      {children} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
    </a>
  );
}

const capabilities = [
  { icon: Globe, title: "Web Infrastructure", text: "Professional websites, hosting and essential tools built for real businesses." },
  { icon: Settings, title: "Connected Operations", text: "Turn inquiries into booked work, with systems that keep you organized." },
  { icon: BarChart3, title: "Business Strategy", text: "Practical guidance to help you grow, streamline and take on what's next." },
];

const tiers = [
  { n: "01", title: "Launch", text: "Your brand, website and first customer touchpoints." },
  { n: "02", title: "Automated Engine", text: "Connect inquiries, booking and follow-up." },
  { n: "03", title: "Custom Core Systems", text: "Tools built around the way your team operates." },
];

const services = [
  { img: svcBrand, title: "Brand & Identity", text: "A consistent and professional foundation." },
  { img: svcAuto, title: "Automation & Workflows", text: "Save time and keep things moving." },
  { img: svcCrm, title: "CRM & Integrations", text: "Bring your tools and data together." },
  { img: svcLocal, title: "Local Search & Visibility", text: "Get found by the right customers." },
  { img: svcContent, title: "Content & Social Systems", text: "Create and share with a purpose." },
  { img: svcDash, title: "Operations Dashboards", text: "See what matters and stay in control." },
];

const steps = [
  { n: "01", title: "Understand the business", text: "We start with your goals, operations and what's getting in the way." },
  { n: "02", title: "Connect the right systems", text: "We design and implement the tools that make the biggest difference." },
  { n: "03", title: "Build, test & improve", text: "We launch, refine and support your progress over time." },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden bg-card">
          <div className="relative mx-auto max-w-7xl">
            {/* Optional background video slot: add <video poster={hero.url} muted loop playsInline className="motion-reduce:hidden ..."> when an approved clip exists. */}
            <img
              src={hero.url}
              alt="Bright mobile workshop with a laptop, camera gear and a white service van"
              width={1122}
              height={1402}
              fetchPriority="high"
              className="h-[640px] w-full object-cover object-bottom sm:h-[760px] lg:h-[820px] lg:object-[center_75%]"
            />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-card via-card/85 to-transparent px-5 pt-10 pb-24 text-center sm:pt-16">
              <h1 id="hero-title" className="text-[2.6rem] sm:text-6xl lg:text-8xl">
                Your business.
                <br />
                Connected.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
                Brand, websites and connected systems for local businesses, growing teams and creators.
              </p>
              <div className="mt-6 flex flex-col items-center gap-2">
                <a href="#contact" className="inline-flex min-h-12 items-center gap-3 bg-primary px-6 font-display text-sm uppercase text-primary-foreground">
                  Let's talk business <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <TextLink href="#build" className="text-sm">Explore the systems</TextLink>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section aria-label="Capabilities" className="bg-muted">
          <ul className="mx-auto grid max-w-7xl gap-0 px-5 py-8 md:grid-cols-3 md:gap-8">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5 border-b border-border py-5 last:border-0 md:border-0">
                <Icon className="mt-1 h-8 w-8 shrink-0" aria-hidden />
                <div className="min-w-0">
                  <h3 className="text-base">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Tiers */}
        <section id="build" aria-labelledby="build-title" className="mx-auto max-w-7xl px-5 py-16">
          <p className="eyebrow text-muted-foreground">Start where your business is.</p>
          <h2 id="build-title" className="mt-2 text-4xl sm:text-5xl">Three ways to build.</h2>
          <p className="mt-3 text-muted-foreground">A clear starting point. Systems that grow with you.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <article key={t.n} className="flex flex-col border border-border bg-card">
                <img src={tierFrame} alt="Illustrative laptop frame — product screenshot coming soon" width={1024} height={640} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-sm uppercase">Tier {t.n}</p>
                  <h3 className="mt-1 text-2xl">{t.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{t.text}</p>
                  <TextLink className="mt-2 self-start" >Explore this system<span className="sr-only">: {t.title}</span></TextLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-labelledby="services-title" className="bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <p className="eyebrow text-muted-foreground">Built for more than just a website</p>
            <h2 id="services-title" className="mt-2 text-4xl sm:text-5xl">Beyond the website.</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">A complete foundation for your brand, operations and long-term growth.</p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.title} className="grid grid-cols-[minmax(0,40%)_minmax(0,1fr)] bg-card">
                  <img src={s.img} alt="" width={480} height={480} loading="lazy" className="aspect-square h-full w-full object-cover" />
                  <div className="min-w-0 p-4">
                    <h3 className="text-base sm:text-lg">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                    <TextLink className="text-sm">Learn more<span className="sr-only"> about {s.title}</span></TextLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FleetFlow */}
        <section id="fleetflow" aria-labelledby="fleet-title" className="bg-graphite text-graphite-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-16 lg:grid-cols-2 lg:pb-16">
            <div>
              <p className="font-display text-3xl uppercase sm:text-4xl">Built around real work.</p>
              <h2 id="fleet-title" className="mt-6 text-4xl sm:text-6xl">
                <span className="text-fleet">FleetFlow™</span>
                <br />
                For businesses in the field.
              </h2>
              <p className="mt-4 max-w-md text-lg text-graphite-muted">A connected home for leads, jobs, and daily operations.</p>
              <TextLink className="text-lg">Explore this system<span className="sr-only">: FleetFlow</span></TextLink>
            </div>
            <figure>
              <img src={fleet} alt="FleetFlow demo workspace on a rugged tablet" width={1280} height={960} loading="lazy" className="w-full" />
              <figcaption className="eyebrow bg-ink py-3 text-center text-ink-foreground">Demo workspace · Sample data</figcaption>
            </figure>
          </div>
        </section>

        {/* Creator Core */}
        <section id="creator-core" aria-labelledby="creator-title" className="bg-graphite text-graphite-foreground border-t border-ink">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[2fr_3fr]">
            <div>
              <h2 id="creator-title" className="text-4xl sm:text-6xl">
                <span className="text-creator">Creator Core™</span>
                <br />
                Your brand. Your platform.
              </h2>
              <p className="mt-4 max-w-md text-lg text-graphite-muted">A digital home for your content, offers and customer journey.</p>
              <TextLink className="text-lg">Explore Creator Core</TextLink>
            </div>
            <figure>
              <img src={creator.url} alt="Creator Core demo pages for fictional creators Alexandra Reyes, Jordan Vale and Nora Wilde" width={1122} height={1402} loading="lazy" className="mx-auto w-full max-w-xl" />
              <figcaption className="eyebrow mt-3 text-center text-graphite-muted">Demo pages · Fictional creator concepts</figcaption>
            </figure>
          </div>
        </section>

        {/* Customer work */}
        <section aria-labelledby="work-title" className="mx-auto max-w-7xl px-5 py-16">
          <h2 id="work-title" className="text-4xl sm:text-5xl">Real work. Real businesses.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {["Local service businesses", "Creator & personal brand"].map((t) => (
              <article key={t}>
                <div className="grid aspect-[16/10] place-items-center border border-dashed border-border bg-muted">
                  <span className="eyebrow text-muted-foreground">Coming soon</span>
                </div>
                <h3 className="mt-3 text-lg">{t}</h3>
                <p className="text-muted-foreground">Selected customer work will appear here.</p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" aria-labelledby="process-title" className="bg-muted">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <p className="eyebrow text-muted-foreground">The Synergy Standard™</p>
            <h2 id="process-title" className="mt-2 text-4xl sm:text-5xl">A clearer way forward.</h2>
            <ol className="mt-8 grid gap-0 md:grid-cols-3 md:gap-8">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-6 border-b border-border py-6 last:border-0 md:border-0">
                  <span className="font-display text-5xl text-muted-foreground" aria-hidden>{s.n}</span>
                  <div className="min-w-0">
                    <h3 className="text-lg"><span className="sr-only">Step {s.n}: </span>{s.title}</h3>
                    <p className="mt-1 text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" aria-labelledby="cta-title" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <h2 id="cta-title" className="text-5xl sm:text-7xl">Let's build<br />what's next.</h2>
            <p className="max-w-sm text-lg text-muted-foreground">Tell us what you run, what's slowing you down and where you want to go.</p>
          </div>
          {/* Contact workflow pending from owner — no fake form submission. */}
          <a href="#contact" className="mt-10 flex min-h-14 w-full items-center justify-center gap-3 bg-primary px-8 font-display uppercase text-primary-foreground sm:inline-flex sm:w-auto">
            Start a conversation <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark />
          <p className="text-sm">Built around real business.</p>
        </div>
      </footer>
    </div>
  );
}
