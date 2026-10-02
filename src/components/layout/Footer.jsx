export default function Footer({ data }) {
  return (
    <footer className="bg-lilac px-6 py-12 text-center text-ink">
      <p className="font-display text-2xl text-gold">{data.couple.displayName}</p>
      <p className="mt-2">Thank you for being part of our special day.</p>
      <p className="mt-6 text-sm opacity-60">
        © {new Date().getFullYear()} {data.couple.displayName}
      </p>
    </footer>
  );
}