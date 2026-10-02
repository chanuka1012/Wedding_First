import { useCountdown } from "../../hooks/useCountdown.js";
import { weddingTarget } from "../../utils/helpers.js";
import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function CountdownTimer({ data }) {
  const t = useCountdown(weddingTarget(data.wedding));

  if (t.finished) {
    return (
      <SectionWrapper id="countdown" title="Thank you for celebrating with us 💛">
        <p>We are so grateful for your love and blessings.</p>
      </SectionWrapper>
    );
  }

  const boxes = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <SectionWrapper id="countdown" title="Counting Down">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {boxes.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-6 shadow">
            <div className="font-display text-4xl text-gold">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-sm uppercase tracking-widest">{label}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}