import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/Button';

export default function ContactSection() {
  return (
    <section
      className="section-stage section-stage-contact mx-3 my-4 sm:mx-6 sm:my-6"
      id="contact"
    >
      <div className="contact-panel mx-auto max-w-[1400px] overflow-hidden rounded-[1.25rem] border border-zinc-200 px-5 py-10 text-zinc-950 sm:px-8 md:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.4fr)] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-semibold text-[0.68rem] text-zinc-700 uppercase tracking-[0.24em]">
              <span className="size-1.5 rounded-full bg-orange-600" />
              Start a conversation
            </p>
            <h2 className="mt-5 max-w-[820px] text-balance font-display font-semibold text-4xl leading-tight sm:text-5xl">
              Let&apos;s talk about the product, the role, or the workflow you
              need shipped.
            </h2>
            <p className="mt-5 max-w-[680px] text-base text-zinc-600 leading-7">
              I&apos;m most useful where interface quality, backend logic, and
              business operations meet. Send the context and I&apos;ll reply
              with a practical next step.
            </p>

            <div className="mt-7 grid gap-2 border-zinc-200 border-t pt-5 text-sm text-zinc-600 sm:grid-cols-3">
              <p>
                <span className="font-semibold text-zinc-950">Good fit:</span>{' '}
                product engineering
              </p>
              <p>
                <span className="font-semibold text-zinc-950">Strength:</span>{' '}
                design-to-build execution
              </p>
              <p>
                <span className="font-semibold text-zinc-950">Open to:</span>{' '}
                roles and selected projects
              </p>
            </div>
          </div>

          <div className="rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.985_0.004_75)] p-5">
            <p className="font-semibold text-[0.68rem] text-zinc-500 uppercase tracking-[0.16em]">
              Direct line
            </p>
            <a
              className="mt-3 inline-flex break-all font-semibold text-zinc-950 transition-colors hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.985_0.004_75)]"
              href="mailto:farizfhrian@gmail.com"
            >
              farizfhrian@gmail.com
            </a>

            <div className="mt-6 grid gap-3 border-zinc-200 border-t pt-5">
              <Button
                className="w-full"
                link="mailto:farizfhrian@gmail.com?subject=Project%20or%20role%20conversation"
                text="Email Fariz"
              />
              <Button
                className="w-full"
                link="/assets/CV-Fariz_Fahrian.pdf"
                text="Open CV"
                variant="secondary"
              />
            </div>

            <a
              className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-600 text-sm transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.985_0.004_75)]"
              href="https://linkedin.com/in/fariz-fahrian-60a75014a"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn profile
              <ArrowUpRight className="size-4" strokeWidth={1.9} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
