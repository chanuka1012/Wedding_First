import SectionWrapper from "../layout/SectionWrapper.jsx";

function EventCard({ event }) {
  return (
    <div className="relative isolate overflow-hidden rounded-xl bg-white p-6 text-left shadow">
      {event.image && (
        <img
          src={event.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative">
        <h3 className="font-display text-xl text-gold">{event.title}</h3>
        <p className="mt-2 text-lg">{event.time}</p>
        {event.location && <p className="text-sm opacity-70">{event.location}</p>}
        {event.description && <p className="mt-3 text-sm">{event.description}</p>}
      </div>
    </div>
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