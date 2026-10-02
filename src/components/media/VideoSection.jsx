import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function VideoSection({ data }) {
  const v = data.videoHighlight;
  if (!v) return null;

  return (
    <SectionWrapper id="video" title={v.title}>
      <video
        controls
        playsInline
        preload="none"
        poster={v.poster}
        className="w-full rounded-2xl shadow-lg"
      >
        <source src={v.src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      {v.caption && <p className="mt-4 opacity-80">{v.caption}</p>}
    </SectionWrapper>
  );
}