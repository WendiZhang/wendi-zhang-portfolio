const items = [
  [
    "01",
    "Modern Frontend",
    "Responsive, accessible user interfaces built with React, TypeScript, JavaScript, semantic HTML, modern CSS, and reusable component architecture.",
  ],
  [
    "02",
    "Full-Stack Engineering",
    "Secure backend systems using Flask, REST APIs, authentication, databases, and well-structured application architecture for reliable user experiences.",
  ],
  [
    "03",
    "AI Integration",
    "AI-powered features using LLM APIs, including content generation, resume analysis, intelligent task planning, document processing, and workflow automation.",
  ],
];

const tools = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Flask",
  "SQLAlchemy",
  "JWT Authentication",
  "REST APIs",
  "OpenAI API",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[#f3efe7] py-[120px] max-md:py-[84px]"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-md:w-[calc(100%-32px)]">
        <div className="mb-[68px] grid grid-cols-[1.25fr_0.75fr] items-end gap-16 max-md:mb-12 max-md:grid-cols-1 max-md:gap-6">
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f766f] before:h-px before:w-5 before:bg-current before:content-['']">
              About me
            </span>

            <h2 className="max-w-[660px] font-display text-[clamp(42px,5.4vw,74px)] font-medium leading-[1.05] tracking-[-0.055em] text-[#1f2923]">
              Creating user-focused applications powered by modern web
              technologies and AI.
            </h2>
          </div>

          <p className="mb-1 text-lg leading-8 text-[#5f675f]">
            I’m a full-stack developer with over 8 years of web development
            experience. I build modern applications with React, Python, and AI,
            creating intuitive user experiences, scalable backends, and
            intelligent features that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-3 overflow-hidden rounded-[28px] border border-[#d7d0c4] bg-[#fbf8f1] shadow-sm max-md:grid-cols-1">
          {items.map(([number, title, body], index) => (
            <article
              className={`min-h-[280px] p-8 transition duration-300 hover:bg-white max-md:min-h-0 ${
                index > 0
                  ? "border-l border-[#d7d0c4] max-md:border-l-0 max-md:border-t"
                  : ""
              }`}
              key={number}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e9dfcf] text-xs font-semibold text-[#5f675f]">
                {number}
              </span>

              <h3 className="mb-4 mt-20 font-display text-[24px] font-semibold tracking-[-0.03em] text-[#1f2923] max-md:mt-10">
                {title}
              </h3>

              <p className="leading-7 text-[#666b67]">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <span className="mr-auto text-[13px] font-semibold uppercase tracking-[0.12em] text-[#6a6f6b] max-md:mb-2.5 max-md:w-full">
            Current toolkit
          </span>

          {tools.map((tool) => (
            <div
              className="rounded-full border border-[#d7d0c4] bg-[#fbf8f1] px-4 py-2 text-[13px] text-[#384139] shadow-sm"
              key={tool}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}