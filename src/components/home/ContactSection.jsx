// import { FaUser, FaEnvelope, FaPhoneAlt, FaPenNib } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";


export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            Contact Us
          </h2>
          <p className="mt-3 text-sm text-ink/70 sm:text-base">
            Book a session or enquire about our yoga programs.
          </p>
        </div>

        {/* Form + Address */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Form Card */}
          <form className="rounded-3xl bg-white/60 p-6 sm:p-8 ring-1 ring-ink/10 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">Get in Touch</h3>
            <p className="mt-1 text-sm text-ink/60">
              We’ll contact you soon with the details.
            </p>

            <div className="mt-6 space-y-5">
              {/* Name */}
              <Field
                label="Your Name"
                type="text"
                placeholder="Your Name"
                icon={<FaUser />}
              />

              {/* Email */}
              <Field
                label="Email Address"
                type="email"
                placeholder="Email Address"
                icon={<FaEnvelope />}
              />

              {/* Phone */}
              <Field
                label="Phone Number"
                type="tel"
                placeholder="Phone number"
                icon={<FaPhoneAlt />}
              />

              {/* Subject (Select) */}
              <SelectField
                label="Choose Subject"
                iconRight={<FiChevronDown />}
                options={[
                  "Beginner Yoga Foundation",
                  "Meditation Workshops",
                  "Pranayama Classes",
                  "Yoga Therapy Sessions",
                  "Motherhood Yoga",
                ]}
              />

              {/* Message */}
              <TextAreaField
                label="Appointment Note"
                placeholder="Type Appointment Note..."
                icon={<FaPenNib />}
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-sageDark px-6 py-4 text-sm font-semibold text-cream shadow-sm transition hover:opacity-95 active:scale-[0.99]"
              >
                BOOK AN APPOINTMENT
              </button>

              <p className="text-center text-xs text-ink/50">
                By submitting, you agree to be contacted by Shanthi Manthra.
              </p>
            </div>
          </form>

          {/* Address / Details */}
          <div className="rounded-3xl bg-beige p-6 sm:p-8 ring-1 ring-ink/10">
            <h3 className="text-lg font-semibold text-ink">
              Shanthi Manthra Yoga Center
            </h3>

            <p className="mt-4 text-sm text-ink/70">
              Sreekrishna Towers, Sulthanpet, Palakkad, Kerala, India
            </p>

            <div className="mt-6 space-y-2 text-sm text-ink/70">
              <a href="tel:+919847532978" className="block hover:text-ink">
                📞 +91 98475 32978
              </a>
              <a href="tel:+919847532910" className="block hover:text-ink">
                📞 +91 98475 32910
              </a>
              <a
                href="mailto:santhimanthrayoga@gmail.com"
                className="block hover:text-ink"
              >
                📧 santhimanthrayoga@gmail.com
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-ink/10">
              <iframe
                title="Shanthi Manthra Yoga Center Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d125400.11982961686!2d76.45529977844343!3d10.830147914418758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSreekrishna%20Towers%2C%20Sulthanpet%2C%20Palakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1771113616711!5m2!1sen!2sin"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UI Helpers ---------------- */

function Field({ label, type, placeholder, icon }) {
  return (
    <div>
      <label className="sr-only">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full rounded-full bg-cream/70 px-5 py-4 pr-12 text-sm text-ink placeholder:text-ink/40 ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-sageDark/40"
        />
        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-ink/45">
          {icon}
        </span>
      </div>
    </div>
  );
}

function SelectField({ label, options, iconRight }) {
  return (
    <div>
      <label className="sr-only">{label}</label>
      <div className="relative">
        <select
          required
          className="w-full appearance-none rounded-full bg-cream/70 px-5 py-4 pr-12 text-sm text-ink ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-sageDark/40"
          defaultValue=""
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-ink/50">
          {iconRight}
        </span>
      </div>
    </div>
  );
}

function TextAreaField({ label, placeholder, icon }) {
  return (
    <div>
      <label className="sr-only">{label}</label>
      <div className="relative">
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full rounded-3xl bg-cream/70 px-5 py-4 pr-12 text-sm text-ink placeholder:text-ink/40 ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-sageDark/40"
        />
        <span className="pointer-events-none absolute right-5 top-6 text-ink/45">
          {icon}
        </span>
      </div>
    </div>
  );
}
