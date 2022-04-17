import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselItem.css"

const CarouselItem = () => {
    return (
        <>
         <Carousel fade>
  <Carousel.Item >
  <img
      className="d-block w-100 caro-img"
      src="https://i.ibb.co/qFpDNt0/954ecc99c601540ccfe837cdd64df8bb.png"
      alt="Second slide"
    />
 
    <Carousel.Caption>
      <h3>I have a lot of experience coaching football</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100 caro-img"
      src="https://i.ibb.co/SdDtcPr/1189036143-850x560.png"
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>I have coached many clubs and have had success</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro-img"
      src="https://i.ibb.co/C6v9sBV/17-DOG-ZIDANE-super-Jumbo.png"
      alt="Third slide"
    />

    <Carousel.Caption>
     <h3>I can work in any situation</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default CarouselItem;