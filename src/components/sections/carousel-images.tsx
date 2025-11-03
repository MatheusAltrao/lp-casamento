"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselImages() {
  const images = [
    "/image-1.jpeg",
    "/image-2.jpeg",
    "/image-3.jpeg",
    "/image-4.jpeg",
    "/image-5.jpeg",
    "/image-6.jpeg",
    "/image-7.jpeg",
    "/image-8.jpeg",
    "/image-9.jpeg",
  ];
  return (
    <div className="relative overflow-hidden py-20 px-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/5 ">
              <div className="p-1 h-[400px] w-full ">
                <img src={image} alt="Maria e Matheus" className="w-full h-full object-cover  rounded-md" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
