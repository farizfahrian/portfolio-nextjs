import Button from '@/components/Button';

export default function ContactSection() {
  return (
    <section className="section-stage section-stage-contact" id="contact">
      <div className="contact-panel overflow-hidden border border-zinc-200 px-5 py-10 text-zinc-950 sm:px-8 md:px-10 lg:py-14">
        <div className="page-content grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.4fr)] lg:items-end">
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

          <div className="rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)]">
            <div className="flex items-center justify-between gap-4 border-zinc-200 border-b pb-4">
              <p className="font-semibold text-[0.68rem] text-zinc-500 uppercase tracking-[0.16em]">
                Direct line
              </p>
              <span className="shrink-0 rounded-full border border-zinc-200 bg-[oklch(0.985_0.004_75)] px-2.5 py-1 font-medium text-[0.68rem] text-zinc-600">
                Replies personally
              </span>
            </div>

            <a
              className="mt-5 block rounded-xl border border-zinc-200 bg-[oklch(0.985_0.004_75)] px-4 py-4 transition-colors hover:border-orange-200 hover:bg-[oklch(0.982_0.018_58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.995_0.004_75)]"
              href="mailto:farizfhrian@gmail.com"
            >
              <span className="block break-all font-semibold text-xl text-zinc-950 leading-tight tracking-[-0.01em]">
                farizfhrian@gmail.com
              </span>
              <span className="mt-3 block text-sm text-zinc-600 leading-6">
                Send the context. I&apos;ll reply with a practical next step.
              </span>
            </a>

            <div className="mt-3 grid gap-3 min-[420px]:grid-cols-2">
              <Button
                className="w-full"
                link="mailto:farizfhrian@gmail.com?subject=Project%20or%20role%20conversation"
                text="Email Fariz"
                trailingIcon={null}
              />
              <Button
                className="w-full"
                link="/assets/CV-Fariz_Fahrian.pdf"
                text="Open CV"
                trailingIcon={null}
                variant="secondary"
              />
            </div>

            <a
              className="mt-4 inline-flex min-h-8 items-center border-zinc-300 border-b font-semibold text-sm text-zinc-600 transition-colors hover:border-orange-600 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.995_0.004_75)]"
              href="https://linkedin.com/in/fariz-fahrian-60a75014a"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
