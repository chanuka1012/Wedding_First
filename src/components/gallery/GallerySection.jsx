import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function GallerySection({ data }) {
  const videoRefs = useRef([]);
  const [isMuted, setIsMuted] = useState(false);
  const reduceMotion = useReducedMotion();
  const videoItems = data.gallery?.filter((item) => item.type === "video") ?? [];
  const tileLayouts = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (!firstVideo) return;

    firstVideo.play().catch(() => {
      firstVideo.muted = true;
      setIsMuted(true);
      return firstVideo.play();
    }).catch(() => setIsMuted(true));
  }, [videoItems.length]);

  useEffect(() => {
    const gallerySection = document.getElementById("gallery");
    if (!gallerySection) return;

    const pauseVideos = () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) pauseVideos();
    });

    observer.observe(gallerySection);
    return () => {
      observer.disconnect();
      pauseVideos();
    };
  }, []);

  if (!data.gallery || data.gallery.length === 0) return null;

  return (
    <SectionWrapper id="gallery" title="Gallery">
      <p className="mb-8 font-display text-xl italic text-gold">
        Little moments, held close
      </p>
      {videoItems.length > 0 && (
        <div className="mb-5 flex justify-center">
          <button
            type="button"
            aria-pressed={!isMuted}
            onClick={() => setIsMuted((muted) => !muted)}
            className="rounded-sm border border-gold/50 bg-white/70 px-4 py-2 text-sm text-ink transition-colors hover:bg-lilac"
          >
            {isMuted ? "Turn sound on" : "Mute videos"}
          </button>
        </div>
      )}
      <div className="grid auto-rows-32 grid-flow-dense grid-cols-2 gap-3 md:auto-rows-40 md:grid-cols-4 md:gap-4">
        {data.gallery.map((item, index) => {
          const tileClass = tileLayouts[index % tileLayouts.length];

          if (item.type === "image") {
            return (
              <motion.figure
                key={item.src}
                className={`group relative isolate ${tileClass} overflow-hidden rounded-md bg-white shadow-sm`}
                initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.4),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-white/85 px-3 py-2 text-left text-xs text-ink">
                  {item.alt}
                </figcaption>
              </motion.figure>
            );
          }

          const videoIndex = videoItems.findIndex((video) => video.src === item.src);

          return (
            <motion.figure
              key={item.src}
              className={`relative ${tileClass} overflow-hidden rounded-md bg-ink shadow-sm`}
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.4),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <video
                ref={(element) => {
                  videoRefs.current[videoIndex] = element;
                }}
                controls
                autoPlay={false}
                muted={isMuted}
                playsInline
                preload="metadata"
                poster={item.poster}
                aria-label={item.alt}
                className="h-full w-full object-cover"
                onEnded={() => videoRefs.current[videoIndex + 1]?.play()}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            </motion.figure>
          );
        })}
      </div>
    </SectionWrapper>
  );
}