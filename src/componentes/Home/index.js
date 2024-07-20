import React, { useState } from 'react';
import back from "../../assets/back.svg";
import next from "../../assets/back.svg";
import 'react-slideshow-image/dist/styles.css';
import '../Home/index.css' 


   
const imagesArray = [
  "../../assets/0.jpeg",
  "../../assets/1.jpeg",
  "https://littlelosttravel.com/wp-content/uploads/2020/11/Finland.jpg",
  "https://littlelosttravel.com/wp-content/uploads/2020/11/Hawaii-jelle-de-gie-u.jpg",
  " https://littlelosttravel.com/wp-content/uploads/2020/11/Morocco-sergey-pesterev-u.jpg",
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
          <img src={imagesArray[activeImage]} alt="" className="main-image" />
        </div>
      </section>
    </main>
  );
}

export default Home;
      

