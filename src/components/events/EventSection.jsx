import SectionWrapper from "../layout/SectionWrapper.jsx";

function EventCard({ event }) {
  return (
    <article className="overflow-hidden rounded-md bg-white text-left shadow-sm">
      {event.image && (
        <img
          src={event.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-56 w-full object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="font-display text-xl text-gold">{event.title}</h3>
        <p className="mt-2 text-lg">{event.time}</p>
        {event.location && <p className="text-sm opacity-70">{event.location}</p>}
        {event.description && <p className="mt-3 text-sm">{event.description}</p>}
      </div>
    </article>
  );
}

export default function EventSection({ data }) {
  return (
    <SectionWrapper id="events" title="Wedding Schedule">
      <div className="grid gap-6 md:grid-cols-2">
        {data.events.map((e) => (
          <EventCard key={e.title + e.time} event={e} />
        ))}
      </div>
    </SectionWrapper>
  );
}