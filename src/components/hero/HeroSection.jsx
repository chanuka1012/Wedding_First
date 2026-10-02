import { formatLongDate } from "../../utils/helpers.js";

export default function HeroSection({ data }) {
  const { hero, couple, wedding } = data;

  return (
    <header
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-blush text-center text-ink"
    >
      <picture>
        {hero.mobileImage && <source media="(max-width: 767px)" srcSet={hero.mobileImage} />}
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
      </picture>

      {hero.video && (
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-blush/70" />

      <div className="relative px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]">{hero.tagline}</p>
        <h1 className="font-display text-5xl md:text-7xl">{couple.displayName}</h1>
        <p className="mt-6 text-lg">{formatLongDate(wedding.date)}</p>
        <a href="#invitation" className="mt-10 inline-block animate-bounce underline">
          View Invitation ↓
        </a>
      </div>
    </header>
  );
}