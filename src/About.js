import React from 'react';
import './styles/global.css';
import './about.css';
     
import footballImage1 from './photo/football1.jpeg';
import footballImage2 from './photo/football1.jpeg';
import footballImage3 from './photo/football1.jpeg';
import footballImage4 from './photo/football1.jpeg';
import footballImage5 from './photo/football1.jpeg';
import footballImage6 from './photo/football1.jpeg';
import footballImage7 from './photo/football1.jpeg';
import footballImage8 from './photo/football1.jpeg';
import footballImage9 from './photo/football1.jpeg';
import footballImage10 from './photo/football1.jpeg';

function About() {
    const images = [
    footballImage1,
    footballImage2,
    footballImage3,
    footballImage4,
    footballImage5,
    footballImage6,
    footballImage7,
    footballImage8,
    footballImage9,
    footballImage10,
  ];

  return (
    <div className="about1">
      <h1>About Us</h1>
      <p>This is a football website showcasing seasons and more!</p>

 

    <div className="about">
      <h1>About Football</h1>
      <p>
        Football, also known as soccer, is a popular team sport played between two teams of eleven players using a spherical ball. The objective is to score more goals than the opposing team by kicking or heading the ball into the opponent's goal.
      </p>

      <div className="image-gallery">
        {images.map((imag, index) => (
          <img key={index} src={imag} alt={` ${index + 1}`} />
         ) )}
      </div>
    </div>
    </div>
  );
}

export default About;
   