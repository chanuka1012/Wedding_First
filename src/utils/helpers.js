// Wedding date + time as a real Date object
export function weddingTarget(w) {
  return new Date(`${w.date}T${w.time}:00${w.utcOffset}`);
}

// "2026-12-20" -> "Sunday, 20 December 2026"
export function formatLongDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const telLink = (num) => `tel:${num}`;

export const whatsappLink = (num, text = "") =>
  `https://wa.me/${num.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Share sheet on phones, copy link on desktop
export async function shareInvitation(title) {
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title, url });
      return "shared";
    }
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "cancelled";
  }
}