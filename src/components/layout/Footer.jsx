export default function Footer({ data }) {
  return (
    <footer className="bg-ink px-6 py-12 text-center text-white/80">
      <p className="font-display text-2xl text-white">{data.couple.displayName}</p>
      <p className="mt-2">Thank you for being part of our special day.</p>
      <p className="mt-6 text-sm opacity-60">
        © {new Date().getFullYear()} {data.couple.displayName}
      </p>
    </footer>
  );
}