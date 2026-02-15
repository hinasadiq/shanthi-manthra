import founderImg from "../../assets/founder/trainer-img-bg.png";


export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            About Shanthi Manthra Yoga Center
          </h2>
          <p className="mt-4 text-sm leading-6 text-ink/70 sm:text-base">
            Established on 11 July 2018 in the heart of Palakkad town with a vision to
            promote authentic and holistic yoga practices for overall well-being.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-ink">
              A calm space for health, clarity, and inner balance
            </h3>

            <p className="mt-4 text-sm leading-6 text-ink/70">
              We offer daily yoga classes, yoga therapy sessions, pranayama classes,
              meditation workshops, Thai yoga-based relaxation techniques, and group training
              sessions. Our approach is traditional, structured, and supportive for all levels.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Feature title="Online + Offline">
                Flexible sessions to join from home or at the center.
              </Feature>
              <Feature title="Therapy Support">
                Personalized yoga therapy after consultation.
              </Feature>
              <Feature title="Meditation & Breathing">
                Guided meditation and pranayama for calmness.
              </Feature>
              <Feature title="All Levels Welcome">
                Beginner-friendly foundation and posture correction.
              </Feature>
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex rounded-full bg-sageDark px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
            >
              View Programs
            </a>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-3xl ring-1 ring-ink/10">
            <img
              src={founderImg}
              alt="Founder / Trainer"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, children }) {
  return (
    <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-ink/10">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-xs leading-5 text-ink/70">{children}</p>
    </div>
  );
}
