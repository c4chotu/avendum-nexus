import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandButton } from "./BrandButton";
import hero1 from "@/assets/site/hero-1.jpg";
import hero2 from "@/assets/site/hero-2.jpg";
import hero3 from "@/assets/site/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "NETIQ — Flagship AI-Enhanced Network Intelligence Platform",
    title: "Find what your NMS is hiding.",
    subtitle:
      "Autonomous network intelligence and NMS audit platform parsing daily configuration dumps across multi-vendor networks to resolve parameter conflicts and drifts.",
    cta: { to: "/products/netiq", label: "Explore NETIQ" },
  },
  {
    image: hero1,
    eyebrow: "Enterprise Telecom Automation — Live in Production",
    title: "The intelligence layer your network deserves.",
    subtitle:
      "Purpose-built AI platforms that automate microwave deployment planning and NMS compliance auditing — engineered for the scale and complexity of telecom operators on a larger scale.",
    cta: { to: "/demo", label: "Request a Demo" },
  },
  {
    image: hero2,
    eyebrow: "NETRA — Network Planning & Deployment Automation",
    title: "Network Planning & Deployment",
    subtitle:
      "NETRA replaces fragmented spreadsheet-based deployment planning with a centralised, role-aware platform — tracking every plan across its complete lifecycle.",
    cta: { to: "/products/netra", label: "Explore NETRA" },
  },
];

export function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 28 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="relative -mt-24">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 shrink-0 grow-0 basis-full">
              <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="relative mx-auto max-w-7xl px-6 h-full flex items-center">
                  <div className="max-w-2xl animate-fade-up">
                    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      {s.eyebrow}
                    </span>
                    <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                      {s.title.split(" ").map((w, j) =>
                        j === 1 ? (
                          <span key={j} className="text-gradient">
                            {" "}
                            {w}{" "}
                          </span>
                        ) : (
                          <span key={j}>{w} </span>
                        ),
                      )}
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                      {s.subtitle}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link to={s.cta.to}>
                        <BrandButton size="lg">
                          {s.cta.label} <ArrowRight className="h-4 w-4" />
                        </BrandButton>
                      </Link>
                      <Link to="/services">
                        <BrandButton variant="secondary" size="lg">
                          What we build
                        </BrandButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-4">
        <button
          onClick={() => embla?.scrollPrev()}
          className="rounded-full glass p-2 hover:text-primary"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${index === i ? "w-8 bg-primary" : "w-3 bg-foreground/30"
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => embla?.scrollNext()}
          className="rounded-full glass p-2 hover:text-primary"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
