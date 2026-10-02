import { useState } from "react";

const links = [
  ["Invitation", "#invitation"],
  ["Events", "#events"],
  ["Venue", "#venue"],
  ["Story", "#story"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-blush/90 shadow-sm backdrop-blur" aria-label="Main">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg text-gold">{name}</a>

        <ul className="hidden gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-gold">{label}</a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center text-2xl md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="border-t border-gold/20 bg-blush px-6 pb-4 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-3">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}