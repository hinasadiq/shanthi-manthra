const services = [
  {
    title: "Beginner Yoga Foundation (Online + Offline)",
    points: [
      "25 classes per month",
      "1-hour sessions | Evening 5:00 PM – 6:00 PM",
      "Joint loosening, Yogasanas, Surya Namaskara",
      "Pranayama, posture correction, guided meditation",
      "Includes one free trial session",
    ],
  },
  {
    title: "Meditation Workshops (Online + Offline)",
    points: [
      "10 classes per month | 30–45 minutes",
      "Morning 6:00 AM – 7:00 AM",
      "Thai meditation, Buddha meditation",
      "Prana meditation, Chakra meditation",
      "Pancha Kosha meditation",
    ],
  },
  {
    title: "Pranayama – Soulful Breathing (Online + Offline)",
    points: [
      "10 breathing technique classes | 30–45 minutes",
      "Nose-cleansing techniques",
      "Pranayamas for stress relief",
      "Relaxing torso-breathing methods",
    ],
  },
  {
    title: "Yoga Therapy Sessions (Online + Offline)",
    points: [
      "Provided after consultation (individual needs)",
      "Neuro-muscular issues support",
      "Breathing & digestive problems support",
      "Lifestyle disorders: Diabetes, BP, Thyroid, PCOD, Cholesterol",
    ],
  },
  {
    title: "Motherhood Yoga (Online + Offline)",
    points: [
      "Scheduled based on participant requirements",
      "Gentle exercises",
      "Pranayama & meditation for expecting mothers",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-beige py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Services Offered
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/70 sm:text-base">
            Online & Offline programs designed for overall well-being, guided with a calm and
            traditional approach.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl bg-cream p-6 ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-ink">{s.title}</h3>

              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sageDark/70" />
                    <span className="leading-6">{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-5 inline-flex text-sm font-semibold text-sageDark hover:opacity-90"
              >
                Enquire →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
