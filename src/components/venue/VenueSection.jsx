import SectionWrapper from "../layout/SectionWrapper.jsx";
import Button from "../common/Button.jsx";

export default function VenueSection({ data }) {
  const { name, address, mapUrl, embedUrl, image } = data.venue;

  return (
    <SectionWrapper id="venue" title="Venue">
      {image && (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="mb-8 aspect-video w-full rounded-2xl object-cover shadow"
        />
      )}

      <h3 className="font-display text-2xl">{name}</h3>
      <p className="mb-8 mt-2 opacity-80">{address}</p>

      {embedUrl && (
        <iframe
          src={embedUrl}
          title={`Map of ${name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mb-8 h-72 w-full rounded-2xl border-0 shadow"
        />
      )}

      <Button href={mapUrl} target="_blank" rel="noopener noreferrer">
        Get Directions
      </Button>
    </SectionWrapper>
  );
}