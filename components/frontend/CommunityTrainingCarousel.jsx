"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
const slides = [
  {
    id: 1,
    href: "/",
    name: "Green apples delivered fresh! Crisp, fresh and hand-picked!.",
    description:
      "Carefully hand-picked, these blueberries are crisp and fresh.Fresh blueberries are considered as a powerful antioxidant food. Blueberries are rich in antioxidants and phytoflavinoids. Fresh blueberries also contain potassium and vitamin C.",
    image: "/apple.jpg",
  },
  {
    id: 2,
    href: "/",
    name: "These apples are crisp and juicy, with a bright green skin ",
    description:
      "Carefully hand-picked, these blueberries are crisp and fresh.Fresh blueberries are considered as a powerful antioxidant food. Blueberries are rich in antioxidants and phytoflavinoids. Fresh blueberries also contain potassium and vitamin C.",

    image: "/apple.jpg",
  },
  {
    id: 3,
    href: "/",
    name: " used in a wide range of recipes, from salads and pies to smoothies and juices..",
    description:
      "Carefully hand-picked, these blueberries are crisp and fresh.Fresh blueberries are considered as a powerful antioxidant food. Blueberries are rich in antioxidants and phytoflavinoids. Fresh blueberries also contain potassium and vitamin C.",

    image: "/apple.jpg",
  },
  {
    id: 4,
    href: "/",
    name: "They’re perfect for snacking on their own.",
    description:
      "Carefully hand-picked, these blueberries are crisp and fresh.Fresh blueberries are considered as a powerful antioxidant food. Blueberries are rich in antioxidants and phytoflavinoids. Fresh blueberries also contain potassium and vitamin C.",

    image: "/apple.jpg",
  },
  {
    id: 5,
    href: "/",
    name: "A perfect snack on-the-go or yummy in a soft pie!",
    description:
      "Carefully hand-picked, these blueberries are crisp and fresh.Fresh blueberries are considered as a powerful antioxidant food. Blueberries are rich in antioxidants and phytoflavinoids. Fresh blueberries also contain potassium and vitamin C.",

    image: "/apple.jpg",
  },
  // {
  //   id: 6,
  //   href: "/",
  //   name: "Cashews",
  //   image: "/apple.jpg",
  // },
  // {
  //   id: 7,
  //   href: "/",
  //   name: "Pineapples",
  //   image: "/apple.jpg",
  // },
  // {
  //   id: 8,
  //   href: "/",
  //   name: "Grapes",
  //   image: "/apple.jpg",
  // },
  // {
  //   id: 9,
  //   href: "/",
  //   name: "Pawpaws",
  //   image: "/apple.jpg",
  // },
];

export default function CommunityTrainingCarousel() {
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
      {slides.map((slide) => {
        return (
          <div className="mx-2" key={slide.id}>
            <Link
              href={slide.href}
              className="rounded-lg "
              // className="flex items-center gap-3 p-2 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-600 duration-500 transition-all "
            >
              <Image
                width={556}
                height={556}
                className="w-full"
                // className="w-12 h-12 rounded-full object-cover border border-lime-300"
                src={slide.image}
                alt="fruits"
              />
              <div className="p-2">
                <h2 className=" text-slate-600 dark:text-slate-100  font-semibold dark:font-semibold text-center">
                  {slide.name}
                </h2>
                <p className=" text-slate-800 dark:text-slate-100 ">
                  {slide.description}
                </p>
                <div className="flex item-center justify-center gap-8  py-4">
                  <button className=" text-slate-800  bg-green-600 px-4 py-2 rounded-lg dark:text-slate-50 text-[1rem]">
                    Read More
                  </button>
                  <h2 className=" text-slate-400 dark:text-slate-50 font-semibold text-[1.2rem] mt-1">
                    Talk to consultant
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
}
