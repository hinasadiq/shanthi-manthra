export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            Contact Us
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Book a session or enquire about our yoga programs.
          </p>
        </div>

        {/* Form + Address */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}
          <form className="space-y-5 rounded-3xl bg-white/70 p-8 ring-1 ring-ink/10">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-ink">
                Full Name
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-ink/20 px-4 py-3 text-sm outline-none focus:border-sageDark"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-ink">
                Contact Number
              </label>
              <input
                type="tel"
                required
                className="mt-2 w-full rounded-xl border border-ink/20 px-4 py-3 text-sm outline-none focus:border-sageDark"
                placeholder="Enter phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-ink">
                Email Address
              </label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-ink/20 px-4 py-3 text-sm outline-none focus:border-sageDark"
                placeholder="Enter email"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="text-sm font-medium text-ink">
                Select Service
              </label>
              <select
                required
                className="mt-2 w-full rounded-xl border border-ink/20 px-4 py-3 text-sm outline-none focus:border-sageDark"
              >
                <option value="">Choose a program</option>
                <option>Beginner Yoga Foundation</option>
                <option>Meditation Workshops</option>
                <option>Pranayama Classes</option>
                <option>Yoga Therapy Sessions</option>
                <option>Motherhood Yoga</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full bg-sageDark px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
            >
              Submit Enquiry
            </button>
          </form>

          {/* Address / Details */}
          <div className="rounded-3xl bg-beige p-8 ring-1 ring-ink/10">

            <h3 className="text-lg font-semibold text-ink">
              Shanthi Manthra Yoga Center
            </h3>

            <p className="mt-4 text-sm text-ink/70">
              Sreekrishna Towers, Sulthanpet,  
              Palakkad, Kerala, India
            </p>

            <div className="mt-6 space-y-2 text-sm text-ink/70">
              <p>📞 +91 98475 32978</p>
              <p>📞 +91 98475 32910</p>
              <p>📧 santhimanthrayoga@gmail.com</p>
            </div>

            {/* Map Placeholder */}
             <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-ink/10">
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
