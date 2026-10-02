import { useRef, useState } from "react";

export default function MusicControl({ src, title }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-xl text-white shadow-lg"
      >
        {playing ? "❚❚" : "♪"}
      </button>
    </>
  );
}