import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import CardItem from '../../Components/CardItem/CardItem';
import CarouselItem from '../../Components/CarouselItem/CarouselItem';
import "./Home.css"


const Home = () => {
    return (
      <>
      <CarouselItem/>
      <div className="aboutSction my-5 container ">
          <h1 className='text-center'>About Me</h1>
          <div className="about">
              <div className="about-left">
                  <h3><b>Name :</b><span></span> Zinedine Zidane.</h3>
                  <h3><b>Full Name :</b><span></span> Zinedine Yazid Zidane.</h3>
                  <h3><b>Date of birth</b> :<span></span> 23 June 1972 (age 49).</h3>
                  <h3><b>Place of birth</b> :<span></span> Marseille, France.</h3>
                  <h3><b>Height</b> :<span></span> 	1.85 m (6 ft 1 in)</h3>
                  <h3><b>Coaching career</b> :<span></span> 8 Years plus.</h3>  
                  <h3><b>Coaching team</b> :<span></span> FC Bayern Munich(assistant) (2011-2013) 	Real Madrid (assistant)(2013–2014), 	Real Madrid Castilla(2014–2016),	Real Madrid(2016–2021)</h3>  
                 
              </div>
              <div className="about-right ">
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/330px-Zinedine_Zidane_by_Tasnim_03.jpg"} alt="" />
              </div>
          </div>
      </div>
      <div className="service">
          <h1 className='text-center my-5'> My Coaching Service</h1>
          <CardItem/>
      </div>
      </>
    );
};

export default Home;