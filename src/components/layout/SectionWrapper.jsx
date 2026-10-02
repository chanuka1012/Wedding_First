import Reveal from "../common/Reveal.jsx";

export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-16 px-6 py-20 text-center">
      <Reveal>
        {title && (
          <h2 className="mb-10 font-display text-3xl text-gold md:text-4xl">{title}</h2>
        )}
        {children}
      </Reveal>
    </section>
  );
}