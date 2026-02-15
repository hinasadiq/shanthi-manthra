const benefits = [
  "Flexibility Improvement",
  "Stress Reduction",
  "Better Sleep",
  "Enhanced Posture",
  "Detoxification",
  "Mind–Body Balance",
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Benefits of Yoga
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/70 sm:text-base">
              Regular practice supports your body and mind—helping you feel stronger, calmer, and
              more balanced in daily life.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="rounded-2xl bg-white/60 p-4 ring-1 ring-ink/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sageDark" />
                    <p className="text-sm font-medium text-ink">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl bg-beige p-8 ring-1 ring-ink/10">
            <p className="text-sm font-semibold text-ink">Simple Daily Routine</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              10 minutes pranayama + 20 minutes yogasanas + 10 minutes meditation.
              Small steps, consistent practice, and you will feel the change.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Tag>Beginner Friendly</Tag>
              <Tag>Stress Relief</Tag>
              <Tag>Better Sleep</Tag>
              <Tag>Mindfulness</Tag>
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-sageDark px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
            >
              Start Your Practice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full bg-cream px-4 py-2 text-xs font-medium text-ink ring-1 ring-ink/10">
      {children}
    </span>
  );
}
