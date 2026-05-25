import { Code2, Cpu, Figma, Search } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import Button from '@/components/Button';
import ContactSection from '@/components/ContactSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { MarqueeImage } from '@/components/MarqueeImage';
import Portfolio from '@/components/Portfolio';
import { Skills } from '@/components/Skills';
import TrainingTimeline from '@/components/TrainingTimeline';

const heroCallouts = [
  {
    title: 'Discover',
    description: 'Product context',
    icon: Search,
    className: 'left-6 top-[150px] hidden xl:flex 2xl:left-16 2xl:top-[150px]',
  },
  {
    title: 'Design',
    description: 'Clean interfaces',
    icon: Figma,
    className: 'left-24 top-[310px] hidden xl:flex 2xl:left-36 2xl:top-[320px]',
  },
  {
    title: 'Build',
    description: 'Full-stack systems',
    icon: Code2,
    className:
      'right-10 top-[170px] hidden xl:flex 2xl:right-20 2xl:top-[170px]',
  },
  {
    title: 'Automate',
    description: 'Practical AI flows',
    icon: Cpu,
    className:
      'right-24 top-[340px] hidden xl:flex 2xl:right-44 2xl:top-[350px]',
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
      <section>
        <div className="hero-panel relative m-3 overflow-hidden rounded-[1.25rem] bg-[oklch(0.965_0.004_75)] pt-8 pb-4 text-zinc-950 sm:m-6 md:pt-12 md:pb-8 lg:pt-16 xl:pt-20">
          <div className="hero-grid-dots hero-grid-dots-left" />
          <div className="hero-grid-dots hero-grid-dots-right" />
          <div className="hero-orbit" />
          {heroCallouts.map((callout, index) => {
            const Icon = callout.icon;

            return (
              <div
                className={`hero-callout absolute z-10 items-center gap-4 ${callout.className}`}
                key={callout.title}
                style={{ '--hero-callout-index': index } as React.CSSProperties}
              >
                <div className="hero-callout-icon">
                  <Icon className="size-6" strokeWidth={1.7} />
                </div>
                <div>
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
          <div className="hero-copy relative z-10 mx-auto mb-10 max-w-5xl px-3 sm:mb-16 lg:mb-20">
            <div className="hero-eyebrow mb-5 flex w-full justify-center">
              <p className="flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.26em]">
                <span className="size-1.5 rounded-full bg-orange-600" />
                Open to product engineering opportunities
              </p>
            </div>
            <div className="hero-heading mb-5 text-center lg:mb-7">
              <h1 className="mx-auto max-w-[1040px] text-balance font-display font-semibold text-[2.6rem] leading-[0.98] max-[415px]:text-[2.15rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[6rem] xl:text-[6.8rem]">
                Building clean interfaces, backend systems, and{' '}
                <span className="font-normal text-orange-600 italic">
                  practical AI automation.
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-[640px] text-balance font-medium text-base text-zinc-600 leading-7 sm:text-lg xl:mt-5">
                I build clean web products, reliable backend flows, and useful
                AI automations that help teams move faster.
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
          <div className="hero-work-label relative z-10 mx-auto mb-3 flex max-w-[1360px] justify-end px-4 sm:px-8">
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
      <section id="about">
        <div className="about-panel mx-3 my-4 overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-[oklch(0.985_0.004_75)] text-zinc-950 sm:mx-6 sm:my-6">
          <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-10 sm:px-8 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-14">
            <div className="about-copy max-w-3xl">
              <p className="mb-4 flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
                <span className="size-1.5 rounded-full bg-orange-600" />
                About
              </p>
              <h2 className="max-w-[760px] text-balance font-display font-semibold text-[2.45rem] leading-[1.02] sm:text-5xl lg:text-[4.4rem]">
                I connect product thinking with the systems that run the
                business.
              </h2>
              <div className="mt-6 space-y-5 text-pretty font-medium text-base text-zinc-600 leading-8 sm:text-lg">
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
                      <span className="font-medium text-xs text-orange-600 tabular-nums">
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
      <section>
        <div className="mx-3 my-4 max-w-[1400px] sm:mx-auto sm:my-6">
          <div className="mx-auto max-w-7xl px-4 py-4 text-left sm:py-10 sm:text-center md:px-8 lg:px-10">
            <h2 className="mb-2 font-display font-semibold text-3xl sm:text-5xl">
              My Professional Journey
            </h2>
            <p className="mx-auto max-w-md text-base text-muted-foreground md:text-base dark:text-neutral-300">
              Here&apos;s a timeline of my career journey, highlighting key
              experiences and achievements along the way.
            </p>
          </div>
          <div className="space-y-4">
            <ExperienceTimeline />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-3 my-4 max-w-[1400px] sm:mx-auto sm:my-6">
          <div className="mx-auto max-w-7xl px-4 py-4 text-left sm:py-10 sm:text-center md:px-8 lg:px-10">
            <h2 className="mb-2 font-display font-semibold text-3xl sm:text-5xl">
              My Training and Achievement
            </h2>
            <p className="mx-auto max-w-md text-base text-muted-foreground md:text-base dark:text-neutral-300">
              Explore my academic background, specialized training, and key
              certifications that have shaped my expertise.
            </p>
          </div>
          <div className="space-y-4">
            <TrainingTimeline />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

export default Home;
