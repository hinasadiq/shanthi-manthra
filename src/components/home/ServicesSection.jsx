import {
  FaSun,
  FaBrain,
  FaWind,
  FaHeartbeat,
  FaBaby,
} from "react-icons/fa";

const services = [
  {
    title: "Beginner Yoga Foundation",
    desc: "25 classes per month. Joint loosening, Yogasanas, Surya Namaskara, Pranayama, posture correction and guided meditation.",
    icon: <FaSun />,
  },
  {
    title: "Meditation Workshops",
    desc: "Thai meditation, Buddha meditation, Chakra meditation and Pancha Kosha meditation sessions for inner peace.",
    icon: <FaBrain />,
  },
  {
    title: "Pranayama – Soulful Breathing",
    desc: "Breathing techniques, nose cleansing, stress relief pranayamas and torso breathing relaxation methods.",
    icon: <FaWind />,
  },
  {
    title: "Yoga Therapy Sessions",
    desc: "Personalized therapy for neuro-muscular issues, digestive problems and lifestyle disorders.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Motherhood Yoga",
    desc: "Gentle yoga, pranayama and meditation designed for expecting mothers’ wellness.",
    icon: <FaBaby />,
  },
];
export default function ServicesSection() {
  return (
    <section id="services" className="bg-beige py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
            Services Offered
          </h2>

          <p className="mt-4 text-sm leading-6 text-ink/70 sm:text-base">
            Online & Offline yoga programs designed for overall well-being,
            guided with a calm and traditional approach.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl bg-cream p-8 text-center ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-md"
            >

              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-sageDark text-cream text-xl shadow-md">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="mt-10 text-base font-semibold tracking-wide text-ink">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-ink/70">
                {s.desc}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 inline-block text-sm font-semibold text-sageDark hover:opacity-90"
              >
                Enquire →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
