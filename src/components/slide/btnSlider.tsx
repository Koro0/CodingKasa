import React from 'react';
import leftArrow from '../../images/arrow_left.svg';
import rightArrow from '../../images/arrow_Right.svg';

export interface slideBtn {
  actionSlide: () => void;
  direction: string;
}
export default function BtnSlider({ actionSlide, direction }: slideBtn) {
  console.log(actionSlide, direction);
  return (
    <>
      <button
        className={direction === 'prev' ? 'btn_slide prev' : 'btn_slide next'}
        onClick={actionSlide}
      >
        {/* {direction === 'prev' ? '<' : '>'} */}
        {<img src={direction === 'prev' ? leftArrow : rightArrow} alt="" />}
      </button>
    </>
  );
}
