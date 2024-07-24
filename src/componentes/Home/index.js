import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css'

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} touch={true} keyboard={true} >
      <Carousel.Item >
      <img
            className="img"
            src="/images/0.jpeg"
            alt="Third slide"
          />
        <Carousel.Caption >
          <h2>Rental Hub</h2>
          <p>Make Your Dream </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
            className="img"
            src="/images/1.jpeg"
            alt="Third slide"
          />
        <Carousel.Caption >
        <h2>Rental Hub</h2>
          <p>Make Your Dream </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="img"
            src="/images/2.jpeg"
            alt="Third slide"
          />
        <Carousel.Caption >
        <h2>Rental Hub</h2>
        <p>Make Your Dream </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
      
  );
}

export default Home;