"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const categories = [
  {
    id: 1,
    href: "/",
    name: "Vegetables",
    image: "/apple.jpg",
  },
  {
    id: 2,
    href: "/",
    name: "oranges",
    image: "/apple.jpg",
  },
  {
    id: 3,
    href: "/",
    name: "Mangos",
    image: "/apple.jpg",
  },
  {
    id: 4,
    href: "/",
    name: "Bananas",
    image: "/apple.jpg",
  },
  {
    id: 5,
    href: "/",
    name: "Guavas",
    image: "/apple.jpg",
  },
  {
    id: 6,
    href: "/",
    name: "Cashews",
    image: "/apple.jpg",
  },
  {
    id: 7,
    href: "/",
    name: "Pineapples",
    image: "/apple.jpg",
  },
  {
    id: 8,
    href: "/",
    name: "Grapes",
    image: "/apple.jpg",
  },
  {
    id: 9,
    href: "/",
    name: "Pawpaws",
    image: "/apple.jpg",
  },
];

export default function CategoryCarousel() {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {categories.map((category) => {
        return (
          <div className="mx-2" key={category.id}>
            <Link
              href={category.href}
              className="rounded-lg "
              // className="flex items-center gap-3 p-2 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-600 duration-500 transition-all "
            >
              <Image
                width={556}
                height={556}
                className="w-full"
                // className="w-12 h-12 rounded-full object-cover border border-lime-300"
                src={category.image}
                alt="fruits"
              />
              <h2 className="bg-slate-200 rounded-b-lg dark:bg-slate-600 text-slate-600 dark:text-slate-100 p-2 text-center">
                {category.name}
              </h2>
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
}
