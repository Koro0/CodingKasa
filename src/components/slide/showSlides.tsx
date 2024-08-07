import React, { useState } from 'react';
import BtnSlider from './btnSlider';
export interface SlideShowProps {
  images: string[];
}

export default function ShowSlides({ images }: SlideShowProps) {
  const fadeImages = images;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  function nextSlide() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  return (
    <div className="slideShow_container">
      <BtnSlider actionSlide={prevSlide} direction={'prev'} />
      <BtnSlider actionSlide={nextSlide} direction={'next'} />
      {fadeImages.map((fadeImage: string, index: number) => {
        return (
          <div className="slide fade active" key={index}>
            {index === currentSlide && (
              <>
                <img src={fadeImage} alt="image_du_bien" />
                <p className="slide_Captation">
                  {index + 1}/{images.length}
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
