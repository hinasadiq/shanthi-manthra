

const certificates = [
  {
    title: "Diploma in Yoga Teacher Training",
    org: "Bharat Sevak Samaj (Govt. of India)",
    year: "2017–2018",
    image: "/assets/certificates/1.jpeg",
  },
  {
    title: "Yoga Instructor – NSQF Level 4",
    org: "Skill India / PMKVY",
    year: "2019",
    image: "/assets/certificates/2.jpeg",
  },
  {
    title: "YCB Certification",
    org: "Ministry of AYUSH, Govt. of India",
    year: "Certified",
    image: "/assets/certificates/3.jpeg",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Certifications
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/70 sm:text-base">
            Professional certifications that reflect authentic training and recognized standards.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-3xl bg-white/70 ring-1 ring-ink/10"
            >
              <img
                src={c.image}
                alt={c.title}
                className="h-60 w-full object-cover transition duration-300 hover:scale-[1.03]"
                loading="lazy"
              />

              <div className="p-5">
                <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
                <p className="mt-1 text-xs text-ink/70">{c.org}</p>
                <p className="mt-1 text-xs text-ink/50">{c.year}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
