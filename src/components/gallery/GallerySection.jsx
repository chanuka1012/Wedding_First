import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function GallerySection({ data }) {
  const videoRefs = useRef([]);
  const [isMuted, setIsMuted] = useState(false);
  const videoItems = data.gallery?.filter((item) => item.type === "video") ?? [];

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
      {videoItems.length > 0 && (
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            aria-pressed={!isMuted}
            onClick={() => setIsMuted((muted) => !muted)}
            className="rounded-md border border-gold px-4 py-2 text-sm text-ink hover:bg-white"
          >
            {isMuted ? "Turn sound on" : "Mute videos"}
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {data.gallery.map((item) => {
          if (item.type === "image") {
            return (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover"
            />
            );
          }

          const videoIndex = videoItems.findIndex((video) => video.src === item.src);

          return (
            <video
              key={item.src}
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
              className="aspect-square w-full rounded-xl bg-black object-cover"
              onEnded={() => videoRefs.current[videoIndex + 1]?.play()}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          );
        })}
      </div>
    </SectionWrapper>
  );
}