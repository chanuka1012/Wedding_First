import Reveal from "../common/Reveal.jsx";

const sectionBackgrounds = {
  invitation: "bg-lilac/50",
  events: "bg-white/60",
  venue: "bg-sage/55",
  story: "bg-lilac/35",
  contact: "bg-sage/35",
};

export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className={`scroll-mt-16 px-6 py-20 text-center ${sectionBackgrounds[id] ?? ""}`}>
      <Reveal>
        <div className="mx-auto max-w-4xl">
          {title && (
            <h2 className="mb-10 font-display text-3xl text-gold md:text-4xl">{title}</h2>
          )}
          {children}
        </div>
      </Reveal>
    </section>
  );
}