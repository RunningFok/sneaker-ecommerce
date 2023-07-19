"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselSlides() {
  const responsive = [
    "https://links.papareact.com/gi1",
    "https://links.papareact.com/6ff",
    "https://links.papareact.com/7ma",
  ];
  return (
    <div className=" items-center px-5 py-8">
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
          <div className="justify-items-center place-content-center">
            <img
              loading="lazy"
              src={"https://links.papareact.com/gi1"}
              alt=""
              className="h-96"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
