import React, { useState } from "react";
import data from "./tour_data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Tours = () => {
  const [index, setIndex] = useState(0);
  const { title, image, text } = data[index];
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextTour = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevTour = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <article className="tour">
      <div className="img-container">
        <img src={image} alt={title} className="tour-img" />
      </div>
      <h4 className="title">{title}</h4>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevTour}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextTour}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Tours;
