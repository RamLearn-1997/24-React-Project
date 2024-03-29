import React, { useState, useEffect } from 'react';
import imageData from '../data';
import './ImageSlider.css'; // Import CSS for styling

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initialize to 0
  const images = imageData;

  useEffect(() => {
    startAutoSlide(); // Start auto sliding when component mounts
  }, []);

  const startAutoSlide = () => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCircleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${image.url}`}
            alt={`Image ${image.id}`}
            className={index === currentImageIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevClick}>&lt;</button>
        <div className="circles">
          {images.map((_, index) => (
            <div
              key={index}
              className={`circle ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};
  
export default ImageSlider;
