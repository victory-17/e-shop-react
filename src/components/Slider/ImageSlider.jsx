import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../"

const ImageSlider = ({ images, direction }) => {
  const animationClass =
    direction === "right" ? "animate-slideRight" : "animate-slideLeft";
  const imageItems = images;
  return (
    <div className="relative overflow-hidden">
      <div className={`flex space-x-4 ${animationClass} hover:pause-animation`}>
        {imageItems.map((image, index) => (
          <Link to={`/${image.id}`}>
            <div
              key={index}
              className="relative flex-shrink-0 h-[150px] w-[150px] hover:bg-red-700 duration-500 rounded-xl"
            >
              <img
                src={
                  image.images[Math.floor(Math.random() * image.images.length)]
                }
                alt={`Slide ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default ImageSlider;
