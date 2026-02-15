export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Shanthi Manthra Yoga Center</h3>
            <p className="mt-3 text-sm leading-6 text-cream/70">
              A calm and supportive space for authentic yoga, meditation, pranayama,
              and yoga therapy in Palakkad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li><a className="hover:text-cream" href="#about">About</a></li>
              <li><a className="hover:text-cream" href="#services">Services</a></li>
              <li><a className="hover:text-cream" href="#benefits">Benefits</a></li>
              <li><a className="hover:text-cream" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-cream" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-cream/70">
              <p>Sreekrishna Towers, Sulthanpet, Palakkad, Kerala</p>
              <p>Phone: +91 98475 32978</p>
              <p>Phone: +91 98475 32910</p>
              <p>Email: santhimanthrayoga@gmail.com</p>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                className="rounded-full bg-cream px-4 py-2 text-xs font-semibold text-ink hover:opacity-90"
                href="https://www.instagram.com/santhimantrayoga"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="rounded-full border border-cream/30 px-4 py-2 text-xs font-semibold text-cream hover:bg-cream/10"
                href="https://www.facebook.com/people/Santhimantra-Yoga/100070685212737/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Shanthi Manthra Yoga Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
