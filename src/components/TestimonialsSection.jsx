const testimonials = [
  {
    name: "Anjali",
    role: "Beginner Yoga Foundation",
    text: "I feel more flexible and calm within a few weeks. The sessions are structured and easy to follow. Highly recommended.",
  },
  {
    name: "Rahul",
    role: "Pranayama & Meditation",
    text: "Pranayama classes helped reduce stress and improved my sleep. The guidance is gentle and very clear.",
  },
  {
    name: "Sreelakshmi",
    role: "Yoga Therapy",
    text: "After consultation, the therapy sessions were tailored for my needs. I feel better posture and more energy now.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-beige py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Client Testimonials
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/70 sm:text-base">
            Real feedback from students who experienced calm, balance, and wellness.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-3xl bg-cream p-6 ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sageDark text-cream">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/60">{t.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-ink/70">
                “{t.text}”
              </p>

              <div className="mt-5 flex gap-1 text-sageDark">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z"
      />
    </svg>
  );
}
