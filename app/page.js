"use client";

import Link from "next/link";
import { Carousel, Button } from "@material-tailwind/react";
import Header from "@components/header";
import Footer from "@components/footer";

export default function App() {
  const carouselStockImages = [
    "/images/fons-heijnsbroek-Etx28ghAU5k-unsplash.jpg",
    "/images/ross-parmly-rf6ywHVkrlY-unsplash.jpg",
    "/images/leandro-maldini-bXn0euMWSJc-unsplash.jpg",
  ];

  return (
    <main className="flex flex-col gap-y-8">
      <Header />

      <div className="w-full flex flex-col items-center gap-y-4 py-12 bg-[url('/images/istockphoto-1215589555-1024x1024-removebg-opacity.png')] bg-center bg-no-repeat bg-cover">
        <h1 className="lg:text-6xl text-4xl font-semibold text-gray-600">
          Are you ready for a trip?
        </h1>
        <p className="text-md text-gray-600">
          Travel with us and feel the comfort that we provide
        </p>
        <Link href="/book-ticket">
          <Button>Travel Now</Button>
        </Link>
      </div>

      <Carousel
        className="rounded-xl w-11/12 h-96 mx-auto mb-24 overflow-hidden"
        autoplay
        loop
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {carouselStockImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </Carousel>

      <Footer />
    </main>
  );
}
