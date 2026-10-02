import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function StorySection({ data }) {
  return (
    <SectionWrapper id="story" title="Our Story">
      <p className="mb-12 font-display text-xl italic text-gold">
        A few favorite chapters of our story
      </p>
      <ol className="relative space-y-12 before:absolute before:bottom-4 before:left-[13px] before:top-4 before:w-px before:bg-gold/40 md:space-y-16 md:before:left-1/2">
        {data.story.map((story, index) => {
          const imageOnLeft = index % 2 === 1;

          return (
            <li
              key={story.year + story.title}
              className="relative grid gap-5 pl-10 text-left md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-center md:gap-x-6 md:pl-0"
            >
              <div
                className={`flex flex-col justify-center ${imageOnLeft ? "md:col-start-3 md:row-start-1 md:text-left" : "md:col-start-1 md:row-start-1 md:text-right"}`}
              >
                <span className="mb-2 text-sm font-semibold tracking-[0.2em] text-gold">
                  {story.year}
                </span>
                <h3 className="font-display text-2xl text-ink">{story.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{story.description}</p>
              </div>

              <span
                aria-hidden="true"
                className="absolute left-0 top-2 grid size-[27px] place-items-center rounded-full border border-gold/50 bg-blush md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              >
                <span className="size-2 rounded-full bg-gold" />
              </span>

              {story.image && (
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className={`aspect-4/3 w-full rounded-md object-cover shadow-sm ${imageOnLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}