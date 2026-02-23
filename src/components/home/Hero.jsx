

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] overflow-hidden">
      <img
        src="/assets/hero/heroimg.jpg"
        alt="Yoga meditation background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/45" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-cream">
        {/* <p className="inline-block w-fit rounded-full bg-cream/15 px-4 py-1 text-xs font-medium ring-1 ring-cream/25">
          Peace • Balance • Wellness
        </p> */}

        <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
          Authentic Yoga for a Calm and Healthy Life
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-6 text-cream/85 sm:text-base">
          Online & Offline classes • Yoga Therapy • Pranayama • Meditation workshops — guided with
          a calm, traditional approach.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink hover:opacity-95"
          >
            Book Free Trial
          </a>
          <a
            href="#services"
            className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
