import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">

        {/* Grid */}
       <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">


          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">
              Shanthi Manthra Yoga Center
            </h3>
            <p className="mt-3 text-sm leading-6 text-cream/70">
              A calm and supportive space for authentic yoga, meditation,
              pranayama, and yoga therapy in Palakkad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>

            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li><a href="#about" className="hover:text-cream">About</a></li>
              <li><a href="#services" className="hover:text-cream">Services</a></li>
              <li><a href="#benefits" className="hover:text-cream">Benefits</a></li>
              <li><a href="#gallery" className="hover:text-cream">Gallery</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>

            <div className="mt-3 space-y-2 text-sm text-cream/70">

              <p>
                Sreekrishna Towers, Sulthanpet, Palakkad, Kerala
              </p>

              <a
                href="tel:+919847532978"
                className="block hover:text-cream"
              >
                📞 +91 98475 32978
              </a>

              <a
                href="tel:+919847532910"
                className="block hover:text-cream"
              >
                📞 +91 98475 32910
              </a>

              <a
                href="mailto:santhimanthrayoga@gmail.com"
                className="block hover:text-cream"
              >
                📧 santhimanthrayoga@gmail.com
              </a>
            </div>

            {/* Social Icons (INSIDE contact column) */}
            <div className="mt-5 flex gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/santhimantrayoga"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink hover:opacity-90"
              >
                <FaInstagram size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Santhimantra-Yoga/100070685212737/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream hover:bg-cream/10"
              >
                <FaFacebookF size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Shanthi Manthra Yoga Center.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
