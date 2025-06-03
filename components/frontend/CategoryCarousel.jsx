"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
// const categories = [
//   {
//     id: 1,
//     href: "/",
//     name: "Vegetables",
//     image: "/apple.jpg",
//   },
//   {
//     id: 2,
//     href: "/",
//     name: "oranges",
//     image: "/apple.jpg",
//   },
//   {
//     id: 3,
//     href: "/",
//     name: "Mangos",
//     image: "/apple.jpg",
//   },
//   {
//     id: 4,
//     href: "/",
//     name: "Bananas",
//     image: "/apple.jpg",
//   },
//   {
//     id: 5,
//     href: "/",
//     name: "Guavas",
//     image: "/apple.jpg",
//   },
//   {
//     id: 6,
//     href: "/",
//     name: "Cashews",
//     image: "/apple.jpg",
//   },
//   {
//     id: 7,
//     href: "/",
//     name: "Pineapples",
//     image: "/apple.jpg",
//   },
//   {
//     id: 8,
//     href: "/",
//     name: "Grapes",
//     image: "/apple.jpg",
//   },
//   {
//     id: 9,
//     href: "/",
//     name: "Pawpaws",
//     image: "/apple.jpg",
//   },
// ];

export default function CategoryCarousel({ products }) {
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
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </Carousel>
  );
}
