"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Person = {
  id: number;
  name: string;
  role?: string;
  image: string;
  bgClass?: string;
};

const defaultPeople: Person[] = [
  {
    id: 1,
    name: "Will Tait",
    image: "/man-portrait-studio-clean-background.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 2,
    name: "Connor Acott",
    image: "/middle-aged-man-portrait.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 3,
    name: "Andrew Fulton",
    image: "/young-man-portrait-studio.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 4,
    name: "James MacDonald",
    image: "/studio-male-portrait.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 5,
    name: "Mae Chen",
    image: "/smiling-bearded-man-headshot.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 6,
    name: "Ibrahim Ali",
    image: "/professional-male-headshot.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 7,
    name: "Sofia Perez",
    image: "/professional-woman-portrait.png",
    bgClass: "bg-[#F6C957]/30",
  },
  {
    id: 8,
    name: "Lucas Meyer",
    image: "/studio-male-portrait-clean-background.png",
    bgClass: "bg-[#F6C957]/30",
  },
];

export type ClientSliderProps = {
  people?: Person[];
  title?: string;
  subtitle?: string;
  className?: string;
  autoPlayDelayMs?: number;
};

export function ClientSlider({
  people = defaultPeople,
  title = "Dedicated support, all the time.",
  subtitle = "A team of support experts ready to assist you. With fast response times, help is only a moment away.",
  className,
  autoPlayDelayMs = 3500,
}: ClientSliderProps) {
  const autoplayRef = React.useRef(
    Autoplay({
      delay: autoPlayDelayMs,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  interface EmblaApi {
    selectedScrollSnap(): number;
    scrollSnapList(): number[];
    on(event: string, callback: (api: EmblaApi) => void): void;
    scrollPrev(): void;
    scrollNext(): void;
    scrollTo(index: number): void;
  }

  const onSelect = React.useCallback((api: EmblaApi) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
    autoplayRef.current?.stop();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
    autoplayRef.current?.stop();
  }, [emblaApi]);

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  };

  return (
    <section className={cn("w-full py-8", className)}>
      <div className="">
        <header className="mb-8 md:mb-12  text-center">
          <h2 className="text-pretty text-3xl md:text-4xl font-medium tracking-tight">
            {title}
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <p className="mt-6 font-medium text-sm text-muted-foreground">
            Meet our Customer Success team
          </p>
        </header>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 z-10 pointer-events-auto">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-sm"
              onClick={scrollPrev}
              aria-label="Previous slides"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-sm"
              onClick={scrollNext}
              aria-label="Next slides"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={emblaRef}
            className="overflow-hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer team carousel"
            tabIndex={0}
            onKeyDown={onKey}
          >
            <div className="flex gap-6 will-change-transform">
              {people.map((p, index) => (
                <article
                  key={p.id}
                  className={cn(
                    "flex-none",
                    "basis-[80%] md:basis-[25%]",
                    "group",
                    index === 0 ? "md:ml-6" : ""
                  )}
                >
                  <div
                    className={cn(
                      "w-full rounded-3xl p-3 bg-[#F6C957]/30 border",
                      p.bgClass
                    )}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={`${p.name} portrait`}
                        width={640}
                        height={420}
                        className="h-[320px] sm:h-[360px] md:h-[420px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        priority={p.id <= 4}
                      />
                      <span className="absolute left-3 bottom-3 inline-flex items-center rounded-full bg-[#F6C957] text-black text-sm md:text-base px-3 py-1.5 shadow-sm">
                        {p.name}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            className="mt-10 flex items-center justify-center gap-2"
            aria-label="Carousel pagination"
          >
            {scrollSnaps.map((_, i) => {
              const active = i === selectedIndex;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={active ? "true" : "false"}
                  onClick={() => {
                    emblaApi?.scrollTo(i);
                    autoplayRef.current?.stop();
                  }}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    active
                      ? "bg-[#F6C957]"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSlider;
