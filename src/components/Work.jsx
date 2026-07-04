/* eslint-disable react/prop-types */
import { useState } from "react";

const projects = [
  {
    name: "Career Copilot",
    category: "AI Career Platform",
    description:
      "A full-stack AI career platform that helps users analyze resumes, generate tailored cover letters, get career guidance, and save their resume analysis history.",
    images: [
      {
        src: "/assets/career-copilot-1.png",
        caption: "Career dashboard",
      },
      {
        src: "/assets/career-copilot-2.png",
        caption: "AI resume analysis",
      },
      {
        src: "/assets/career-copilot-3.png",
        caption: "Cover letter generator",
      },
      {
        src: "/assets/career-copilot-4.png",
        caption: "AI career coach",
      },
      {
        src: "/assets/career-copilot-5.png",
        caption: "Secure sign-in",
      },
      {
        src: "/assets/career-copilot-6.png",
        caption: "Account registration",
      },
    ],
    imageRatio: "aspect-[3024/1722]",
    link: "https://career-copilot-ruby.vercel.app",
    github: "https://github.com/WendiZhang/career-copilot",
    color: "bg-[#d8ece3]",
    mediaColor: "bg-[#dce7e2]",
    tech: ["React", "TypeScript", "Flask", "OpenAI API"],
  },
  {
    name: "AI Product Studio",
    category: "AI SaaS Tool",
    description:
      "An AI-powered product content tool for e-commerce workflows, with product management, AI description generation, JWT authentication, and a dashboard.",
    images: [
      {
        src: "/assets/ai-product-studio-1.png",
        caption: "Dashboard overview",
      },
      {
        src: "/assets/ai-product-studio-2.png",
        caption: "Product catalog",
      },
      {
        src: "/assets/ai-product-studio-3.png",
        caption: "AI description generator",
      },
    ],
    imageRatio: "aspect-[3024/1722]",
    link: "https://ai-product-studio-three.vercel.app",
    github: "https://github.com/WendiZhang/ai-product-studio",
    color: "bg-[#efc9b7]",
    mediaColor: "bg-[#eadfd8]",
    tech: ["React", "Flask", "SQLAlchemy", "JWT"],
  },
  {
    name: "Smart Task Manager",
    category: "AI Productivity App",
    description:
      "A full-stack productivity app with secure login, task CRUD, due dates, subtasks, drag-and-drop organization, and AI-generated task breakdowns.",
    images: [
      {
        src: "/assets/task-manager-1.png",
        caption: "Task workspace",
      },
      {
        src: "/assets/task-manager-2.png",
        caption: "Account registration",
      },
      {
        src: "/assets/task-manager-3.png",
        caption: "Secure login",
      },
    ],
    imageRatio: "aspect-[3024/1722]",
    link: "https://smart-task-manager-ebon.vercel.app",
    github: "https://github.com/WendiZhang/smart-task-manager",
    color: "bg-[#d9d5ed]",
    mediaColor: "bg-[#e2e0ed]",
    tech: ["React", "Flask", "JWT", "OpenAI API"],
  },
];

function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = project.images.length > 1;
  const currentImage = project.images[activeImage];

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? project.images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % project.images.length);
  };

  return (
    <article className="group/card grid min-h-[455px] grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-[28px] bg-white/5 text-[#131514] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-white/25 max-md:grid-cols-1">
      <div
        className={`flex min-h-[455px] items-center overflow-hidden p-7 max-md:min-h-0 max-md:p-5 ${project.mediaColor}`}
      >
        <figure className="mx-auto w-full max-w-[620px]">
          <div
            className={`relative overflow-hidden rounded-lg bg-white/65 shadow-[0_20px_45px_rgba(29,34,31,0.15)] ring-1 ring-black/10 ${project.imageRatio}`}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 ease-out group-hover/card:scale-[1.012] motion-reduce:transition-none"
              src={currentImage.src}
              alt={`${project.name}: ${currentImage.caption}`}
              loading="lazy"
            />

            {hasMultipleImages && (
              <>
                <button
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#121615]/75 text-xl text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#121615] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  type="button"
                  aria-label={`Show previous ${project.name} screenshot`}
                  onClick={showPreviousImage}
                >
                  ←
                </button>

                <button
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#121615]/75 text-xl text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#121615] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  type="button"
                  aria-label={`Show next ${project.name} screenshot`}
                  onClick={showNextImage}
                >
                  →
                </button>
              </>
            )}
          </div>

          <figcaption className="mt-4 flex flex-col items-center justify-center gap-1 text-center text-sm font-semibold text-ink/65">
            <span>{currentImage.caption}</span>
            {hasMultipleImages && (
              <span className="shrink-0 text-xs tracking-[0.08em] text-ink/50">
                {activeImage + 1} / {project.images.length}
              </span>
            )}
          </figcaption>
        </figure>
      </div>

      <div
        className={`flex flex-col justify-between px-10 pb-[38px] pt-[34px] max-md:min-h-[360px] max-md:px-6 max-md:py-[26px] ${project.color}`}
      >
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.08em] text-ink/60">
          <span>0{index + 1}</span>
          <span>{project.category}</span>
        </div>

        <div>
          <h3 className="mb-4 mt-[34px] font-display text-[clamp(34px,4vw,54px)] font-semibold leading-none tracking-[-0.055em]">
            {project.name}
          </h3>

          <p className="max-w-[460px] text-[17px] leading-7 text-ink/70">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                className="rounded-full border border-ink/15 bg-white/35 px-3 py-1.5 text-xs font-medium text-ink/70"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-ink/20 pt-[18px] max-sm:grid-cols-1">
          <a
            className="group/live flex min-h-[48px] items-center justify-between rounded-full border border-ink/15 bg-white/70 px-5 text-sm font-semibold text-[#131514] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Live project
            <span className="text-lg transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 motion-reduce:transition-none">
              ↗
            </span>
          </a>

          <a
            className="group/github flex min-h-[48px] items-center justify-between rounded-full border border-ink/25 bg-white/25 px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <svg
              className="h-[18px] w-[18px] transition-transform group-hover/github:scale-105 motion-reduce:transition-none"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-16 bg-[#121615] py-[120px] text-white max-md:py-[84px]"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-md:w-[calc(100%-32px)]">
        <div className="mb-[68px] grid grid-cols-[1.25fr_0.75fr] items-end gap-16 max-md:mb-12 max-md:grid-cols-1 max-md:gap-6">
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#aeb4af] before:h-px before:w-5 before:bg-current before:content-['']">
              Selected work
            </span>

            <h2 className="max-w-[760px] font-display text-[clamp(42px,5.4vw,74px)] font-medium leading-[1.05] tracking-[-0.055em]">
              Full-stack products designed with real users and practical AI in mind.
            </h2>
          </div>

          <p className="mb-1 text-lg leading-8 text-[#aeb4af]">
            A selection of deployed projects that demonstrate my ability to build polished
            React interfaces, secure Flask APIs, authentication, database-driven features,
            and AI-powered workflows from concept to launch.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
