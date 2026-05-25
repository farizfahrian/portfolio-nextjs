import { Award, BadgeCheck, BookOpenCheck } from 'lucide-react';
import Chip from './Chip';

const featuredCredentials = [
  {
    title: 'Becoming a React Web Developer Expert',
    issuer: 'Dicoding',
    date: 'June 2025',
    signal: 'Advanced frontend delivery',
    summary:
      'Structured practice across clean code, Redux state management, automated testing, CI/CD, and deployment-ready React applications.',
    proof: ['Clean code', 'Redux', 'Automated testing', 'CI/CD'],
  },
  {
    title: '3rd Place, Provincial Youth Creativity Festival',
    issuer: 'East Kalimantan Province',
    date: 'August 2023',
    signal: 'Recognized software work',
    summary:
      'Awarded in the software category for designing and presenting a digital solution under competitive constraints.',
    proof: ['Software category', 'Problem solving', 'Team delivery'],
  },
  {
    title: 'Database Foundations',
    issuer: 'Oracle',
    date: 'September 2020',
    signal: 'Data modeling fundamentals',
    summary:
      'Covered relational modeling, normalization, SQL operations, joins, aggregation, and indexing fundamentals used later in production systems.',
    proof: ['ER modeling', 'SQL', 'Normalization', 'Indexing'],
  },
  {
    title: 'Alibaba Cloud Apsara Clouder',
    issuer: 'Alibaba Cloud',
    date: 'January 2021',
    signal: 'Cloud infrastructure baseline',
    summary:
      'Certification training in auto scaling, resource management, workload adaptation, and cloud architecture design principles.',
    proof: ['Auto scaling', 'Resource management', 'Cloud architecture'],
  },
];

const credentialArchive = [
  ['React Web Fundamentals', 'Dicoding', 'February 2025'],
  [
    'Learning to Build Web Applications with React',
    'Dicoding',
    'September 2024',
  ],
  ['Flutter App Development for Beginners', 'Dicoding', 'June 2022'],
  ['Java Programming', 'Oracle', 'August 2021'],
  ['Node.js Web Development', 'Progate', 'August 2021'],
  ['SOLID Programming Principles', 'Dicoding', 'May 2021'],
  ['Dart Programming Basics', 'Dicoding', 'May 2021'],
  ['Machine Learning for Beginners', 'Dicoding', 'November 2020'],
  ['Python Programming Basics', 'Dicoding', 'October 2020'],
  ['Data Visualization Fundamentals', 'Dicoding', 'September 2020'],
  ['Kotlin Programming Basics', 'Dicoding', 'August 2020'],
];

const learningTracks = [
  ['Frontend depth', 'React, Next.js, testing, deployment'],
  ['Backend foundations', 'Node.js, Java, databases, SOLID'],
  ['Systems breadth', 'Cloud, Flutter, Python, ML, data visualization'],
];

export function TrainingTimeline() {
  return (
    <div className="training-dossier grid gap-4 lg:grid-cols-[0.42fr_1fr] lg:items-start">
      <aside className="rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)] lg:sticky lg:top-6">
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[oklch(0.985_0.018_55)] text-orange-700">
            <BookOpenCheck className="size-5" strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-semibold text-[0.68rem] text-orange-600 uppercase tracking-[0.16em]">
              Credential record
            </p>
            <p className="mt-1 font-display font-semibold text-2xl text-zinc-950 leading-tight">
              Learning that backs the work.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-zinc-600 leading-7">
          These are not filler certificates. They show repeated investment in
          frontend quality, backend fundamentals, data modeling, cloud basics,
          and competitive software delivery.
        </p>

        <div className="mt-6 grid gap-3 border-zinc-200 border-t pt-5">
          {learningTracks.map(([title, description]) => (
            <div className="flex gap-3" key={title}>
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-orange-600"
                strokeWidth={1.9}
              />
              <div>
                <p className="font-semibold text-sm text-zinc-950">{title}</p>
                <p className="mt-1 text-sm text-zinc-600 leading-6">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          {featuredCredentials.map((credential) => (
            <article
              className="training-card rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)]"
              key={credential.title}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Chip
                  className="border-orange-200 bg-[oklch(0.985_0.018_55)] px-3 py-1.5 text-orange-700 text-xs"
                  text={credential.issuer}
                />
                <p className="font-semibold text-xs text-zinc-500">
                  {credential.date}
                </p>
              </div>

              <h3 className="mt-4 font-display font-semibold text-2xl text-zinc-950 leading-tight">
                {credential.title}
              </h3>
              <p className="mt-2 font-semibold text-orange-600 text-sm">
                {credential.signal}
              </p>
              <p className="mt-3 text-sm text-zinc-600 leading-7">
                {credential.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 border-zinc-200 border-t pt-4">
                {credential.proof.map((item) => (
                  <Chip
                    className="border-zinc-200/90 px-3 py-1.5 text-xs"
                    key={item}
                    text={item}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[1.125rem] border border-zinc-200 bg-[oklch(0.995_0.004_75)] p-5 shadow-[0_1px_2px_rgb(9_9_11/0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-zinc-200 border-b pb-4">
            <div>
              <p className="font-semibold text-[0.68rem] text-zinc-500 uppercase tracking-[0.16em]">
                Additional coursework
              </p>
              <h3 className="mt-1 font-display font-semibold text-2xl text-zinc-950 leading-tight">
                Breadth across the stack
              </h3>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-[oklch(0.985_0.004_75)] px-3 py-2">
              <Award
                aria-hidden="true"
                className="size-4 text-orange-600"
                strokeWidth={1.9}
              />
              <span className="font-semibold text-xs text-zinc-700">
                {credentialArchive.length} more records
              </span>
            </div>
          </div>

          <div className="mt-2 divide-y divide-zinc-200">
            {credentialArchive.map(([title, issuer, date]) => (
              <div
                className="grid gap-2 py-3 sm:grid-cols-[minmax(0,1fr)_8rem_8rem] sm:items-center"
                key={title}
              >
                <p className="font-semibold text-sm text-zinc-950">{title}</p>
                <p className="text-sm text-zinc-600">{issuer}</p>
                <p className="font-semibold text-xs text-zinc-500 sm:text-right">
                  {date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingTimeline;
