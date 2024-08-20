import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function AutoPlayingSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    {
      url: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1674027392887-751d6396b710?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9ubGluZSUyMHN0b3JlfGVufDB8fDB8fHww",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1684785617500-fb22234eeedd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === slides.length - 1 ? 0 : nextIndex + 1
    );
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  const Arrow = ({ direction, onClick }) => (
    <div
      className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer"
      style={{ [direction]: "20px" }}
    >
      {direction === "left" ? (
        <BsFillArrowLeftCircleFill onClick={onClick} size={20} />
      ) : (
        <BsFillArrowRightCircleFill onClick={onClick} size={20} />
      )}
    </div>
  );
  return (
    <>
      <div
        style={{
          backgroundImage: `url("${slides[currentIndex].url}")`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 py-12"
      ></div>
      <Arrow direction={"left"} onClick={prevSlide} />
      <Arrow direction={"right"} onClick={nextSlide} />
    </>
  );
}

export default AutoPlayingSlider;
