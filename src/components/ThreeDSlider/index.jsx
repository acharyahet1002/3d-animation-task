import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ThreeDSlider.css";
import { Typography } from "@mui/material";
import { slides } from "../../utils/planetsArray";

const ThreeDSlider = ({ onChange = () => {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Sample data with different images for each planet

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    if (onChange) {
      onChange(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    if (onChange) {
      onChange(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    }
  };

  // Handle image load
  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  // Handle image error
  const handleImageError = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: false }));
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Get adjacent slides for side previews
  const getAdjacentSlides = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

    return {
      prev: slides[prevIndex],
      next: slides[nextIndex],
      current: slides[currentIndex],
    };
  };

  const { prev, next, current } = getAdjacentSlides();

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {/* Previous Planet Preview */}
        <div className="planet-preview planet-preview-prev" onClick={prevSlide}>
          <div className="preview-image-container">
            <img
              src={prev.image}
              alt={prev.title}
              className="preview-image"
              onLoad={() => handleImageLoad(`prev-${prev.id}`)}
              onError={() => handleImageError(`prev-${prev.id}`)}
            />
            {!imagesLoaded[`prev-${prev.id}`] && (
              <div className="image-loading">Loading...</div>
            )}
            {/* <div className="preview-overlay" /> */}
          </div>
          <div className="preview-label">
            <Typography variant={"34"}>{prev.title}</Typography>
          </div>
        </div>

        {/* Main Slider Track - Only render active slide */}
        <div className="slider-track">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="slide active"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateY: 180,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateY: -180,
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="slide-content">
                <div className="slide-image-container">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="slide-image"
                    onLoad={() => handleImageLoad(current.id)}
                    onError={() => handleImageError(current.id)}
                  />
                  {/* <div className="slide-overlay" /> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Planet Preview */}
        <div className="planet-preview planet-preview-next" onClick={nextSlide}>
          <div className="preview-image-container">
            <img
              src={next.image}
              alt={next.title}
              className="preview-image"
              onLoad={() => handleImageLoad(`next-${next.id}`)}
              onError={() => handleImageError(`next-${next.id}`)}
            />
            {!imagesLoaded[`next-${next.id}`] && (
              <div className="image-loading">Loading...</div>
            )}
          </div>
          <div className="preview-label">
            <Typography variant={"34"}>{next.title}</Typography>
          </div>
        </div>
      </div>

      {/* Optional: Slide indicator dots */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${
              index === currentIndex ? "dot-active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDSlider;
