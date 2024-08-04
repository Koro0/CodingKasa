import React from 'react';
import { Fade } from 'react-slideshow-image';

export interface SlideShowProps {
  images: string[];
}

export default function ShowSlides({ images }: SlideShowProps) {
  const fadeImages = images;
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage: string, index: number) => (
          <div key={index}>
            <img className="fadeImg" src={fadeImage} alt="image_du_bien" />
            <div className="fadeCaptation">
              <h2>
                {index + 1}/{images.length}
              </h2>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
