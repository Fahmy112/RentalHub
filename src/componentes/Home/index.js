import React, { Component } from 'react';
import '../Home/index.css' 
import Slider from 'react-slick';  
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

var images = [{
  src:"/assets/images/0.jpeg",
  title:"Rental Hub",
  description:"Make Your Life More Comfortable"
}, {
  src:"/assets/images/1.jpeg",
  // title:"test2",
  // description:"desc12"
},{
  src:"/assets/images/2.jpeg",
  // title:"test3",
  // description:"desc3"
}]
class Home extends Component {  

 
  render() {  
    const settings = {  
      infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnFocus: false,
    pauseOnHover:true,
    cssEase: 'linear',
    centerMode: true,
    //centerMode: false,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true 
    };  

    return (  
      <div className="carousel-container" style={{overflow:"hidden"}}>  
        
      <div className='slider'>
        
        <Slider {...settings}>  
        
        {images.map((item, index) => {
          return  <div className={`slide ${index = 2 ? "animation":""}`} key={index}>  
          <img src={item.src} alt="Description of image 1" />  
          <div className='img-caption'>  
            <h1>{item.title}</h1>  
            <p>{item.description}</p>  
{
  item.title && item.description && 
  <spam>_________________</spam>

}
            </div> 
        </div>  
        })}
          {/* <div className="slide">  
            <img src="/assets/images/0.jpeg" alt="Description of image 1" />  
            <div className='img-caption'>  
              <h1>Rental Hub</h1>  
              <p>Make Your Life More Comfortable</p>  
              <spam>_________________</spam>
              </div> 
          </div>  
          <div className="slide">  
            <img src="/assets/images/1.jpeg" alt="Description of image 1" />  
            <div className='img-caption'>  
              <h1>Rental Hub</h1>  
              <p>Make Your Life More Comfortable</p>  
              <spam>_________________</spam>
              </div> 
          </div>  
          <div className="slide">  
            <img src="/assets/images/2.jpeg" alt="Description of image 1" />  
            <div className='img-caption'>  
              <h1>Rental Hub</h1>  
              <p>Make Your Life More Comfortable</p>  
              <spam>_________________</spam>
              </div> 
          </div>  */}
          

            

        </Slider>
      
        </div>  
      </div>  
    );  
  }  
}  

export default Home;  

 