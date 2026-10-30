import { projects } from "../projects";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 bg-[#eae6f0] py-[120px] text-[#131514] max-md:py-[84px]">
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-md:w-[calc(100%-32px)]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 max-md:mb-9">
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#514765] before:h-px before:w-5 before:bg-current before:content-['']">
              Selected work
            </span>
            <h2 className="max-w-[760px] font-display text-[clamp(42px,5.4vw,74px)] font-medium leading-[1.05] tracking-[-0.055em]">
              Projects, up close.
            </h2>
          </div>
          <p className="max-w-[330px] text-base leading-7 text-[#555b57]">
            Explore the products, the thinking behind them, and the details that make them work.
          </p>
        </div>

        <div className="work-collage">
          {projects.map((project) => (
            <a
              className="work-tile"
              href={`/?project=${project.slug}`}
              key={project.slug}
              aria-label={`View ${project.name} project details`}
            >
              <img className="work-tile__photo" src={project.mockup} alt="" loading="lazy" />
              <span className="work-tile__caption">
                <span className="work-tile__name">{project.name}</span>
                <span className="work-tile__arrow" aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
