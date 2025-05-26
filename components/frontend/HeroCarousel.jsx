import React from "react";
import Image from "next/image";
import { Carousel } from "nuka-carousel";

export default function HeroCarousel() {
  return (
    <Carousel autoplay className="rounded-md overflow-hidden" wrap-Around>
      <img src="/banners/banner1.gif" />
      <img src="/banners/banner2.jpg" />
      <img src="/banners/banner3.gif" />
      <img src="/banners/banner4.png" />
      <img src="/banners/banner5.gif" />
    </Carousel>
  );
}
