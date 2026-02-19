import centerImg from "../../assets/founder/yogaimg1.jpeg";
import founderImg from "../../assets/founder/trainer-img-bg.png";

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ===================== 1) ABOUT SHANTHI MANTHRA ===================== */}
        <div className="rounded-3xl bg-sageDark/10 p-8 sm:p-12">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              About Shanthi Manthra Yoga Center
            </h2>

            <p className="mt-4 text-sm leading-6 text-ink/70 sm:text-base">
              Established on 11 July 2018 in the heart of Palakkad town with a
              vision to promote authentic and holistic yoga practices for
              overall well-being.
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
                We offer daily yoga classes, yoga therapy sessions, pranayama
                classes, meditation workshops, Thai yoga-based relaxation
                techniques, and group training sessions. Our approach is
                traditional, structured, and supportive for all levels.
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

            {/* Center Image */}
            <div className="overflow-hidden rounded-3xl ring-1 ring-ink/10">
              <img
                src={centerImg}
                alt="Shanthi Manthra Yoga Center"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-ink/10" />

        {/* ===================== 2) ABOUT FOUNDER ===================== */}
        <div className="mt-16">
          <div className="rounded-3xl bg-beige/60 p-6 ring-1 ring-ink/10 sm:p-10">
            <div className="grid items-start gap-10 lg:grid-cols-2">

              {/* LEFT: Image */}
              <div className="overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/10">
                <img
                  src={founderImg}
                  alt="Founder / Trainer"
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                  loading="lazy"
                />
              </div>

              {/* RIGHT: Text */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Founder 
                </h3>

                <p className="mt-2 text-sm font-semibold text-ink/80 sm:text-base">
                  (Yoga Trainer • Meditation Guide)
                </p>

                <p className="mt-2 text-sm font-medium text-ink/70">
                  Founder, Shanthi Manthra Yoga Center
                </p>

                <div className="mt-4 inline-flex items-center rounded-full bg-sageDark/10 px-4 py-2 text-sm font-semibold text-sageDark">
                  6+ years of experience
                </div>

                <p className="mt-6 text-sm leading-7 text-ink/70 sm:text-base">
                  The founder focuses on breath, alignment, and consistency—helping students of all
                  levels build a safe and sustainable practice. Sessions include posture correction,
                  joint-loosening techniques, yogasanas, pranayama, and guided meditation.
                </p>

                <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base">
                  Our approach is calm, traditional, and supportive. Each student is guided step-by-step
                  to improve flexibility, reduce stress, and build strength safely over time.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full bg-sageDark px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
                >
                  Book a Session
                </a>

                {/* Optional dots */}
                <div className="mt-8 flex items-center gap-2">
                  <span className="h-2 w-7 rounded-full bg-sageDark/50" />
                  <span className="h-2 w-2 rounded-full bg-ink/20" />
                  <span className="h-2 w-2 rounded-full bg-ink/20" />
                  <span className="h-2 w-2 rounded-full bg-ink/20" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ===================== FEATURE CARD ===================== */
function Feature({ title, children }) {
  return (
    <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-ink/10">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-xs leading-5 text-ink/70">{children}</p>
    </div>
  );
}
