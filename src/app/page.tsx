import { Code2, Cpu, Figma, Search } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import Button from '@/components/Button';
import ContactSection from '@/components/contact-section';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { MarqueeImage } from '@/components/MarqueeImage';
import Portfolio from '@/components/Portfolio';
import { Skills } from '@/components/Skills';
import SectionReveal from '@/components/section-reveal';
import TrainingTimeline from '@/components/training-timeline';

const heroCallouts = [
  {
    title: 'Discover',
    description: 'Product context',
    icon: Search,
    className: 'hero-callout-discover hidden 2xl:flex',
  },
  {
    title: 'Design',
    description: 'Clean interfaces',
    icon: Figma,
    className: 'hero-callout-design hidden 2xl:flex',
  },
  {
    title: 'Build',
    description: 'Backend flows',
    icon: Code2,
    className: 'hero-callout-build hidden 2xl:flex',
  },
  {
    title: 'AI',
    description: 'Useful flows',
    icon: Cpu,
    className: 'hero-callout-automate hidden 2xl:flex',
  },
];

const aboutFocus = [
  'ERP workflows',
  'Payment gateways',
  'Admin dashboards',
  'Customer automation',
];

const aboutLoop = [
  'Understand the workflow',
  'Design the interface',
  'Model the data',
  'Build the system',
  'Improve under real constraints',
];

function Home() {
  return (
    <>
      <SectionReveal />
      <section className="section-stage section-stage-hero">
        <div className="hero-panel relative overflow-hidden pt-8 pb-4 text-zinc-950 md:pt-12 md:pb-8 lg:pt-16 xl:pt-20">
          <div className="hero-grid-dots hero-grid-dots-left" />
          <div className="hero-grid-dots hero-grid-dots-right" />
          <div className="hero-orbit" />
          {heroCallouts.map((callout, index) => {
            const Icon = callout.icon;

            return (
              <div
                className={`hero-callout absolute z-2 items-center gap-3 ${callout.className}`}
                key={callout.title}
                style={{ '--hero-callout-index': index } as React.CSSProperties}
              >
                <div className="hero-callout-icon">
                  <Icon className="size-6" strokeWidth={1.7} />
                </div>
                <div className="hero-callout-copy">
                  <p className="font-semibold text-sm text-zinc-950 uppercase tracking-[0.12em]">
                    {callout.title}
                  </p>
                  <p className="mt-1 max-w-32 text-sm text-zinc-600 leading-6">
                    {callout.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="hero-copy relative z-10 mx-auto mb-10 max-w-[1220px] px-4 sm:mb-16 sm:px-6 lg:mb-16">
            <div className="hero-eyebrow mb-5 flex w-full justify-center">
              <div className="hero-availability inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-[oklch(0.995_0.004_75_/_0.86)] px-3 py-2 shadow-[0_10px_26px_-22px_rgb(9_9_11_/_0.42)] sm:gap-3 sm:px-4">
                <span className="size-2.5 shrink-0 rounded-full bg-orange-600 shadow-[0_0_0_4px_oklch(0.82_0.12_45_/_0.22)]" />
                <p className="font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.2em] max-[420px]:tracking-[0.12em]">
                  Available for product engineering roles
                </p>
                <span className="hidden h-4 w-px bg-zinc-200 sm:block" />
                <span className="hidden font-medium text-xs text-zinc-500 sm:inline">
                  UI, systems, and practical AI workflows
                </span>
              </div>
            </div>
            <div className="hero-heading mb-5 text-center lg:mb-7">
              <h1 className="mx-auto max-w-[1180px] text-balance font-display font-semibold text-[2.6rem] leading-[0.98] max-[415px]:text-[2.15rem] sm:text-[4rem] md:text-[5.35rem] lg:text-[6.25rem] xl:text-[7.25rem]">
                Building clean interfaces, backend systems, and
                <span className="font-normal text-orange-600 italic">
                  practical AI automation.
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-[640px] text-balance font-medium text-base text-zinc-600 leading-7 sm:text-lg xl:mt-5">
                Product-minded engineering for teams that need sharp UI,
                dependable systems, and automation that removes real operational
                drag.
              </p>
            </div>
            <div className="hero-actions mb-8 flex w-full justify-center gap-4 max-[520px]:flex-col max-[520px]:gap-3">
              <Button
                className="max-[520px]:w-full"
                link="#portfolio"
                text="View selected work"
              />
              <div className="flex items-center justify-center gap-2 max-[520px]:mt-1">
                <Button
                  ariaLabel="View GitHub profile"
                  iconOnly={true}
                  link="https://github.com/farizfahrian"
                  trailingIcon="/assets/icons/Github.svg"
                  variant="ghost"
                />
                <Button
                  ariaLabel="View LinkedIn profile"
                  iconOnly={true}
                  link="https://linkedin.com/in/fariz-fahrian-60a75014a"
                  trailingIcon="/assets/icons/Linkedin.svg"
                  variant="ghost"
                />
                <Button
                  ariaLabel="Open CV"
                  iconOnly={true}
                  link="/assets/CV-Fariz_Fahrian.pdf"
                  trailingIcon="/assets/icons/CV.svg"
                  variant="ghost"
                />
              </div>
            </div>
          </div>
          <div className="hero-work-label page-content relative z-10 mb-3 flex justify-end px-4 sm:px-8">
            <a
              aria-label="View my work"
              className="hero-work-image-link"
              href="#portfolio"
            >
              <Image
                alt=""
                className="h-auto w-[74px] sm:w-[96px]"
                height={42}
                loading="eager"
                src="/assets/images/Mywork-arrow.png"
                width={96}
              />
            </a>
          </div>
          <MarqueeImage />
        </div>
      </section>
      <section className="section-stage section-stage-about" id="about">
        <div className="about-panel panel-shell my-4 overflow-hidden rounded-[1.25rem] border border-zinc-200 text-zinc-950 sm:my-6">
          <div className="page-content grid gap-10 px-5 py-10 sm:px-8 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-14">
            <div className="about-copy max-w-3xl">
              <p className="mb-4 flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
                <span className="size-1.5 rounded-full bg-orange-600" />
                About
              </p>
              <h2 className="max-w-[760px] text-balance font-display font-semibold text-4xl leading-tight sm:text-5xl">
                I connect product thinking with the systems that run the
                business.
              </h2>
              <div className="mt-6 space-y-5 text-pretty font-medium text-base text-zinc-600 leading-7">
                <p>
                  I&apos;m Fariz Fahrian, a software engineer working across
                  frontend, backend, UI/UX, and AI-assisted workflows. I focus
                  on software that maps clearly to business operations.
                </p>
                <p>
                  My strength is turning workflow understanding into shipped
                  systems: designing the interface, modeling the data, building
                  the product, and improving it under real constraints.
                </p>
              </div>
            </div>
            <div className="about-system">
              <div>
                <p className="font-semibold text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Operational focus
                </p>
                <div className="mt-4 divide-y divide-zinc-200 border-zinc-200 border-y">
                  {aboutFocus.map((item, index) => (
                    <div
                      className="about-focus-row flex items-center justify-between gap-4 py-4"
                      key={item}
                      style={
                        { '--about-row-index': index } as React.CSSProperties
                      }
                    >
                      <span className="font-semibold text-sm text-zinc-950 sm:text-base">
                        {item}
                      </span>
                      <span className="font-medium text-orange-600 text-xs tabular-nums">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)]">
                <p className="font-semibold text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Working loop
                </p>
                <ol className="mt-4 grid gap-3">
                  {aboutLoop.map((item, index) => (
                    <li
                      className="about-loop-item flex items-center gap-3 text-sm text-zinc-700"
                      key={item}
                      style={
                        { '--about-row-index': index } as React.CSSProperties
                      }
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[oklch(0.965_0.004_75)] font-semibold text-[0.7rem] text-zinc-950 tabular-nums">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <div id="portfolio">
        <Portfolio />
      </div>
      <section className="section-stage section-stage-journey">
        <div className="section-frame">
          <div className="journey-panel overflow-hidden rounded-[1.25rem] border border-zinc-200 px-4 py-12 text-zinc-950 sm:px-6 md:px-8 lg:px-10 lg:py-16">
            <div className="page-content">
              <div className="mb-9 grid gap-8 border-zinc-200 border-b pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.48fr)] lg:items-end">
                <div>
                  <p className="flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
                    <span className="size-1.5 rounded-full bg-orange-600" />
                    Professional journey
                  </p>
                  <h2 className="mt-4 max-w-[820px] text-balance font-display font-semibold text-4xl leading-tight sm:text-5xl">
                    Progress shaped by production pressure, not just job titles.
                  </h2>
                  <p className="mt-5 max-w-3xl text-base text-zinc-600 leading-7">
                    A concise view of the roles where I built, led, debugged,
                    and shipped. The thread is consistent: understand the
                    operation, reduce friction, and leave the system easier to
                    run.
                  </p>
                </div>
                <div className="journey-summary-grid grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    ['6M rows', 'database performance improved'],
                    ['1,500+', 'event signups supported'],
                    ['PR review', 'delivery discipline added'],
                  ].map(([value, label]) => (
                    <div
                      className="rounded-2xl border border-zinc-200 bg-[oklch(0.995_0.004_75)] px-4 py-3"
                      key={value}
                    >
                      <p className="font-display font-semibold text-2xl text-zinc-950 leading-none">
                        {value}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </section>
      <section className="section-stage section-stage-training">
        <div className="section-frame">
          <div className="training-panel overflow-hidden rounded-[1.25rem] border border-zinc-200 px-4 py-12 text-zinc-950 sm:px-6 md:px-8 lg:px-10 lg:py-16">
            <div className="page-content">
              <div className="mb-9 grid gap-6 border-zinc-200 border-b pb-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.42fr)] lg:items-end">
                <div>
                  <p className="flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
                    <span className="size-1.5 rounded-full bg-orange-600" />
                    Training and achievement
                  </p>
                  <h2 className="mt-4 max-w-[820px] text-balance font-display font-semibold text-4xl leading-tight sm:text-5xl">
                    Proof of study that connects back to shipped work.
                  </h2>
                </div>
                <p className="max-w-xl text-base text-zinc-600 leading-7 lg:justify-self-end">
                  A curated record of certifications, coursework, and one
                  competitive award, organized by practical value rather than
                  chronology.
                </p>
              </div>
              <TrainingTimeline />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

export default Home;
