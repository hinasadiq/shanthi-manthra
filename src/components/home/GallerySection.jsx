import g1 from "../../assets/gallery/heroyogaimg2.jpeg";
import g2 from "../../assets/gallery/heroyogaimg3.jpeg";
import g3 from "../../assets/gallery/heroyogaimg4.jpeg";
import g4 from "../../assets/gallery/heroyogaimg5.jpeg";
import g5 from "../../assets/gallery/heroyogaimg6.jpeg";
import g6 from "../../assets/gallery/yogaimg1.jpeg";

const images = [
  { src: g1, alt: "Yoga session 1" },
  { src: g2, alt: "Yoga session 2" },
  { src: g3, alt: "Yoga session 3" },
  { src: g4, alt: "Yoga session 4" },
  { src: g5, alt: "Yoga session 5" },
  { src: g6, alt: "Yoga session 6" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-beige py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Gallery
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/70 sm:text-base">
            Moments from classes, workshops, and community programs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <figure
              key={img.alt + i}
              className="group overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
