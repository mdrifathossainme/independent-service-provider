import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='container aboutme'>
            <div className="about-title text-center"><h1>About Me</h1></div>
           <div className="aboutme-content">
           <div className="aboutme-left">
                <h1>MD RIFAT HOSSAIN </h1>
                <h4>My Goal (Next 5-6 month) </h4>
                <p>My only goal for the next five or six months is to manage for a job or an internship. All I forgot was to give my revision and try to learn something new so that it would be convenient to give a job interview. I will always try to learn something new in the coming days.</p>
            </div>
            <div className="about-right">
                <img src={'https://i.ibb.co/4p66Fwz/unnamed-removebg-preview.png'} alt="" />
            </div>
           </div>
        </div>
    );
};

export default About;