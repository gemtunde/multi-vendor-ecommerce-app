"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import Link from "next/link";

export default function HeroCarousel({ banners }) {
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
      {banners.map((banner) => {
        return (
          <img
            width={712}
            height={284}
            src={banner.imageUrl}
            // className="w-full"
            alt={banner.title}
          />
        );
      })}
      {/* <img src="/banners/banner1.gif" /> */}
    </Carousel>
  );
}
