"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselSlides() {
  const router = useRouter();
  const responsive = [
    {
      image: "/static/images/nike-banner.webp",
      size: "h-40 sm:h-96 sm:object-none",
      link: "/DD1391-401",
    },
    {
      image: "/static/images/crocs-banner.jpg",
      size: "h-40 sm:h-96 sm:object-fill",
      link: "/search?q=crocs",
    },
    {
      image: "/static/images/hoka-banner.webp",
      size: "h-40 sm:h-96 sm:object-fill",
      link: "/search?q=hoka",
    },
  ];
  return (
    <div className=" items-center px-5 py-3 sm:py-8">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showArrows={true}
        showThumbs={false}
        interval={5000}
        useKeyboardArrows={false}
      >
        {responsive.map((item) => (
          <div
            className="justify-items-center place-content-center"
            key={item.link}
          >
            <button
              type="button"
              onClick={() => router.push(item.link)}
              className="w-full"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.image}
                className={item.size}
              />
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
