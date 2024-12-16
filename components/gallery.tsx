"use client";

import { cn } from "@/lib/utils";
import image1 from "@/public/image-1.png";
import image2 from "@/public/image-2.png";
import image3 from "@/public/image-3.png";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const IMAGES = [
  {
    image: image1,
    alt: "Example alt text",
  },
  {
    image: image2,
    alt: "Example alt text",
  },
  {
    image: image3,
    alt: "Example alt text",
  },
];

type ImageData = (typeof IMAGES)[number];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla relative overflow-hidden md:grid md:grid-cols-[auto_1fr] md:gap-x-6">
      <div className="embla-thumbs hidden lg:block">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex flex-col gap-5">
            {IMAGES.map((image, index) => {
              return (
                <Thumb
                  key={index}
                  image={image}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="embla__viewport w-full overflow-hidden"
        ref={emblaMainRef}
      >
        <div className="embla__container flex">
          {IMAGES.map((image, index) => (
            <div
              className="embla__slide flex-[0_0_100%] overflow-hidden md:rounded-medium"
              key={index}
            >
              <Image
                src={image.image}
                alt={image.alt}
                className="w-full"
                sizes="(max-width: 701px) 100vw, (max-width: 1101px) 36vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type ThumbProps = { image: ImageData; selected: boolean; onClick: () => void };

function Thumb({ image, selected, onClick }: ThumbProps) {
  return (
    <div
      className={cn(
        "relative h-[140px] w-[140px] overflow-hidden rounded-medium",
        selected && "border-2 border-primary",
      )}
    >
      <button onClick={onClick} type="button" title="Select image">
        <Image
          src={image.image}
          alt={image.alt}
          sizes="140px"
          fill
          className="size-full object-cover"
        />
      </button>
    </div>
  );
}
