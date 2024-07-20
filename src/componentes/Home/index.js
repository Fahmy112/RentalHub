import React, { useState } from 'react';
import back from './back.svg';
import next from './back.svg';
import 'react-slideshow-image/dist/styles.css';
import '../Home/index.css' 


   
const imagesArray = [
  "../../assets/0.jpeg",
  "../../assets/1.jpeg",
  "../../assets/2.jpeg",
  "../../assets/3.jpg",
  "../../assets/4.jpg",
  "../../assets/5.jpg",
  "../../assets/6.jpg",
  "../../assets/7.jpg",
 
];

function Home() {
  const [activeImage, setActiveImage] = useState(0);

  const goToNextImage = () => {
    if (activeImage === imagesArray.length - 1) {
      setActiveImage(0);
      return;
    }
    setActiveImage(activeImage + 1);
  };

  const goToPreviousImage = () => {
    if (activeImage === 0) {
      setActiveImage(imagesArray.length - 1);
      return;
    }
    setActiveImage(activeImage - 1);
  };

  return (
    <main>
      <section>
        <div>
          <img
            src={back}
            alt=""
            width={50}
            height={50}
            className="icon-left"
            onClick={goToPreviousImage}
          />

          <img
            src={next}
            alt=""
            width={50}
            height={50}
            className="icon-right"
            onClick={goToNextImage}
          />
          <img  src={imagesArray[activeImage]} alt="no-image" className="main-image" />
          <div className='Caption'>
          <h1>Rental Hub</h1>
          <p>Make Your Dream </p>
          <spam>___________</spam>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
      

