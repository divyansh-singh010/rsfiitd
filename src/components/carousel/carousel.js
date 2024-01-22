import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ items, timeout = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, timeout);

    return () => clearInterval(intervalId);
  }, [currentIndex, timeout, items.length]);

  const currentItem = items[currentIndex];

  return (
    <div className="home-events">
      <div className="home-events-head">Our Events</div>
      <div className="home-events-container">
        <div className="home-events-card">
          <img
            src={currentItem.image}
            alt="event"
            className="home-events-card-img"
          />
          <div className="home-events-card-text">{currentItem.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
