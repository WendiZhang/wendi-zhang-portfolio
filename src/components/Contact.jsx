import { useState } from "react";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/wendizhang05@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const result = await response.json();

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error("The message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setFeedback(
        "Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as I can."
      );
    } catch {
      setStatus("error");
      setFeedback(
        "Something went wrong. Please try again or connect with me on LinkedIn."
      );
    }
  };

  const fieldClass =
    "w-full rounded-2xl border border-[#514765]/25 bg-white/35 px-4 py-3.5 text-[15px] text-[#131514] outline-none transition placeholder:text-[#514765]/60 focus:border-[#514765] focus:bg-white/55 focus:ring-2 focus:ring-[#514765]/15";

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[#c9c0dc] py-[120px] max-md:py-[84px]"
    >
      <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[0.9fr_1.1fr] items-start gap-20 max-lg:gap-12 max-md:w-[calc(100%-32px)] max-md:grid-cols-1">
        <div className="max-w-[520px]">
          <span className="mb-[18px] inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#514765] before:h-px before:w-5 before:bg-current before:content-['']">
            Get in touch
          </span>

          <h2 className="font-display text-[clamp(46px,6vw,78px)] font-medium leading-[0.98] tracking-[-0.06em] text-[#131514]">
            Let's build something great together.
          </h2>

          <p className="mb-8 mt-7 max-w-[500px] text-lg leading-8 text-[#514765]">
            I'm currently open to full-stack developer, frontend developer, and
            AI application developer opportunities. Whether you're hiring,
            building a product, or looking for someone to create modern web
            applications with AI-powered features, I'd love to hear from you.
          </p>

          <a
            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-[#514765]/35 px-5 text-sm font-semibold text-[#131514] transition hover:-translate-y-0.5 hover:bg-white/30 motion-reduce:transition-none"
            href="https://www.linkedin.com/in/wendi-zhang-tech/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <span>↗</span>
          </a>
        </div>

        <form
          className="rounded-[28px] border border-[#514765]/20 bg-[#eeeaf4]/65 p-8 shadow-[0_24px_70px_rgba(65,54,91,0.12)] backdrop-blur-sm max-md:p-5"
          onSubmit={handleSubmit}
        >
          <input
            className="hidden"
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            type="hidden"
            name="_subject"
            value="New message from Wendi Zhang Portfolio"
          />

          <input type="hidden" name="_template" value="table" />

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <label className="grid gap-2 text-sm font-semibold text-[#332d40]">
              Name
              <input
                className={fieldClass}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#332d40]">
              Email
              <input
                className={fieldClass}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-semibold text-[#332d40]">
            Subject
            <input
              className={fieldClass}
              type="text"
              name="subject"
              placeholder="What would you like to build or discuss?"
              required
            />
          </label>

          <label className="mt-4 grid gap-2 text-sm font-semibold text-[#332d40]">
            Message
            <textarea
              className={`${fieldClass} min-h-[150px] resize-y`}
              name="message"
              placeholder="Tell me a little about the role, project, or opportunity..."
              required
            />
          </label>

          <div className="mt-6 flex items-center justify-between gap-5 max-sm:flex-col max-sm:items-stretch">
            <p
              className={`text-sm leading-6 ${
                status === "error" ? "text-[#8b2935]" : "text-[#514765]"
              }`}
              role="status"
              aria-live="polite"
            >
              {feedback || "I typically reply within 1–2 business days."}
            </p>

            <button
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#131514] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-65 motion-reduce:transition-none"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}