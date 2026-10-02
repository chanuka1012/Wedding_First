import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function InvitationSection({ data }) {
  const { title, message, image } = data.invitation;

  return (
    <SectionWrapper id="invitation">
      <div className="relative isolate overflow-hidden rounded-2xl bg-white px-6 py-14 shadow-sm md:px-12 md:py-20">
        {image && (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
        )}
        <div className="absolute inset-0 bg-blush/55" aria-hidden="true" />
        <div className="relative">
          <p className="mb-4 uppercase tracking-widest">{title}</p>
          <p className="font-display text-2xl leading-relaxed md:text-3xl">{message}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}