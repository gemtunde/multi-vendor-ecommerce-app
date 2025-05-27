import React from "react";
import Image from "next/image";
import { Carousel } from "nuka-carousel";

export default function HeroCarousel() {
  return (
    <Carousel
      autoplay
      className="rounded-md overflow-hidden"
      wrap-Around
      slidesToShow={1}
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>◀</button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>▶</button>
      )}
      renderBottomCenterControls={({ currentSlide, slideCount, goToSlide }) => {
        const pages = Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              margin: "0 5px",
              background: currentSlide === index ? "#333" : "#ccc",
              border: "none",
              cursor: "pointer",
            }}
          />
        ));
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {pages}
          </div>
        );
      }}
    >
      <img src="/banners/banner1.gif" />
      <img src="/banners/banner2.jpg" />
      <img src="/banners/banner3.gif" />
      <img src="/banners/banner4.png" />
      <img src="/banners/banner5.gif" />
    </Carousel>
  );
}
