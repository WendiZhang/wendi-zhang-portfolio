import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-black/15 bg-[#f7f5ef]/85 text-[#131514] backdrop-blur-lg"
          : "text-white"
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex h-[82px] w-[min(1160px,calc(100%-48px))] items-center justify-between max-md:h-[68px] max-md:w-[calc(100%-32px)]">
        <a
          className="font-display text-[26px] font-bold tracking-[-0.08em]"
          href="#top"
          aria-label="Wendi Zhang, home"
        >
          WZ<span className={scrolled ? "text-[#75649c]" : "text-[#aa9acb]"}>.</span>
        </a>

        <button
          className="hidden p-2 max-md:block"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="m-1.5 block h-px w-6 bg-current" />
          <span className="m-1.5 block h-px w-6 bg-current" />
        </button>

        <div
          className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[68px] flex-col bg-[#f7f5ef] p-3.5 text-sm text-[#131514] shadow-[0_20px_50px_rgba(0,0,0,0.16)] max-md:border max-md:border-black/15 md:static md:flex md:flex-row md:items-center md:gap-[34px] md:bg-transparent md:p-0 md:text-inherit md:shadow-none`}
        >
          {links.map(([label, href]) => (
            <a
              className="px-2.5 py-[13px] opacity-75 transition-opacity hover:opacity-100 md:p-0"
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
