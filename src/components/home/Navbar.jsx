import { useState } from "react";
import logo from "../../assets/brand/shantimantra-logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">Shanthi Manthra</p>
            <p className="text-xs text-ink/60">Yoga Center</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-ink"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-sageDark px-4 py-2 text-sm text-cream"
          >
            Book
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="text-2xl text-ink md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10">
          <div className="flex flex-col px-4 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/80 hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
