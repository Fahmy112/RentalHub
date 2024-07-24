
import React from 'react'
import { SliderData } from './sliderdata.js'
const index = () => {
  return (
    <div>
      {SliderData.map((slide , index) =>{
        return(
         
          <img src={slide.image} alt='img slider' />
        )
      } 
      )}
    </div>
  );
};

export default index;
