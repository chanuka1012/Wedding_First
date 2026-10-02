import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function StorySection({ data }) {
  return (
    <SectionWrapper id="story" title="Our Story">
      <ol className="space-y-12 border-l-2 border-gold pl-6 text-left">
        {data.story.map((s) => (
          <li key={s.year + s.title}>
            <span className="text-gold">{s.year}</span>
            <h3 className="font-display text-xl">{s.title}</h3>
            <p className="mb-3 opacity-80">{s.description}</p>
            {s.image && (
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow md:max-w-md"
              />
            )}
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}