import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ExperienceTimeline() {
  const data = [
    {
      date: "Feb 2025– Present",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 font-bold mb-2">
            Davila (Marketing Agency)– Software Developer & UI/UX Designer Lead
          </h3>
          <p className="mb-2 text-sm font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Led a team of 3 (1 UI/UX Designer & 2 Software Developers), conducting code reviews, sprint planning, and performance evaluations.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Coordinated cross‑functional collaboration between design, frontend, and backend teams to deliver high‑impact marketing projects on schedule.
          </p>
        </div>
      ),
    },
    {
      date: "Feb 2024 – Jan 2025",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 font-bold mb-2">
            Graviton Softworks (Self‑Employed) – Software Developer & UI/UX Designer
          </h3>
          <p className="mb-2 text-sm font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Architected and delivered multiple web solutions, including a registration platform handling hundreds of simultaneous users.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Managed full project lifecycle from requirements gathering through deployment, showcasing end‑to‑end full‑stack development skills.
          </p>
        </div>
      ),
    },
    {
      date: "Sep 2022 – Apr 2023",
      content: (
        <div>
          <h3 className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-200 font-bold mb-2">
            Mulawarman University – Lab Assistant
          </h3>
          <p className="mb-2 text-sm font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Designed and delivered modules on Computer Graphics, 2D Animation, and AR/VR, developing hands‑on lab materials.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-700 md:text-sm dark:text-neutral-300">
            Mentored students through project work, providing guidance on software tools and best practices.
          </p>
        </div>
      ),
    },
  ];  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
