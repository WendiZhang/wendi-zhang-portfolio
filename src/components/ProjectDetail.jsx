/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Footer from "./Footer";
import { projects } from "../projects";

export default function ProjectDetail({ project }) {
  useEffect(() => {
    document.title = `${project.name} — Wendi Zhang`;
    return () => { document.title = "Wendi Zhang — Full-stack Developer"; };
  }, [project.name]);

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <main id="top" className="bg-[#f7f5ef] text-[#131514]">
        <nav className="mx-auto flex h-[88px] w-[min(1160px,calc(100%-48px))] items-center justify-between gap-4 max-md:w-[calc(100%-32px)]" aria-label="Project navigation">
          <a className="rounded-full border border-[#131514]/20 px-4 py-2 text-sm font-semibold transition hover:bg-[#131514] hover:text-white" href="/#work">← Back to work</a>
          <a className="font-display text-[26px] font-bold tracking-[-0.08em]" href="/" aria-label="Wendi Zhang, home">WZ<span className="text-[#75649c]">.</span></a>
          <a className="text-sm font-semibold underline decoration-[#75649c] underline-offset-4" href="/#contact">Let’s connect ↗</a>
        </nav>

        <article>
          <header className="mx-auto w-[min(1160px,calc(100%-48px))] pb-10 pt-16 max-md:w-[calc(100%-32px)] max-md:pt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#75649c]">Project / {project.category}</span>
            <h1 className="mt-5 max-w-[950px] font-display text-[clamp(52px,8vw,108px)] font-medium leading-[0.98] tracking-[-0.07em]">{project.name}</h1>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-7">
              <p className="max-w-[690px] text-[clamp(18px,2vw,24px)] leading-[1.5] text-[#505a53]">{project.summary}</p>
              <div className="flex flex-wrap gap-3">
                <a className="rounded-full bg-[#131514] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#514765]" href={project.link} target="_blank" rel="noreferrer">Live project ↗</a>
                {project.github && <a className="rounded-full border border-[#131514]/25 px-5 py-3 text-sm font-semibold transition hover:bg-white" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
              </div>
            </div>
          </header>

          <div className={`project-hero project-hero--${project.theme}`}>
            <img className="project-hero__image" src={project.mockup} alt={`${project.name} shown on an office desk device`} />
          </div>

          <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[1.15fr_0.85fr] gap-20 py-[110px] max-md:w-[calc(100%-32px)] max-md:grid-cols-1 max-md:gap-12 max-md:py-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#75649c]">The project</span>
              <h2 className="mt-4 font-display text-[clamp(36px,4.5vw,58px)] font-medium leading-[1.08] tracking-[-0.05em]">What it does</h2>
              <p className="mt-6 max-w-[680px] text-lg leading-8 text-[#505a53]">{project.overview}</p>
            </div>
            <div className="border-t border-[#131514]/20 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#75649c]">Key features</h3>
              <ul className="mt-5 space-y-4">
                {project.highlights.map((highlight) => <li className="border-b border-[#131514]/15 pb-4 text-[17px] leading-7" key={highlight}>{highlight}</li>)}
              </ul>
              <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-[#75649c]">Built with</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => <span className="rounded-full border border-[#131514]/20 px-3 py-1.5 text-sm" key={item}>{item}</span>)}
              </div>
            </div>
          </div>

          <section className="bg-[#eae6de] py-[110px] max-md:py-20" aria-labelledby="screenshots-heading">
            <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-md:w-[calc(100%-32px)]">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#75649c]">Inside the experience</span>
              <h2 id="screenshots-heading" className="mt-4 font-display text-[clamp(36px,4.5vw,58px)] font-medium leading-[1.08] tracking-[-0.05em]">Screenshots</h2>
              <div className="project-gallery mt-10">
                {project.images.map((image, index) => (
                  <figure className="project-gallery__item" key={image.src}>
                    <div className="overflow-hidden rounded-[18px] border border-[#131514]/10 bg-white p-2 shadow-[0_18px_48px_rgba(19,21,20,0.1)]">
                      <img className="block w-full rounded-[11px]" src={image.src} alt={`${project.name}: ${image.caption}`} loading="lazy" />
                    </div>
                    <figcaption className="mt-4 flex items-baseline gap-3 text-sm font-medium text-[#505a53]">
                      <span className="text-[#75649c]">0{index + 1}</span>{image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </article>

        <a className="block bg-[#121615] px-6 py-20 text-center text-white transition hover:bg-[#1f2923]" href={`/?project=${nextProject.slug}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#aa9acb]">Next project ↗</span>
          <span className="mt-5 block font-display text-[clamp(38px,6vw,76px)] leading-none tracking-[-0.055em]">{nextProject.name}</span>
        </a>
      </main>
      <Footer />
    </>
  );
}
