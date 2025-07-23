import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16" id="contact">
      {/* Call to Action */}
      <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
        <h3 className="mb-3 font-semibold text-xl">
          Interested in working together?
        </h3>
        <p className="mb-6 text-muted-foreground">
          I&apos;m always open to discussing new opportunities and interesting
          projects.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="mailto:farizfhrian@gmail.com">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/assets/CV-Fariz_Fahrian.pdf" target="_blank">
              View Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}