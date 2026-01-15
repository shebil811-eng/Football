import React, { useEffect } from 'react';
import './home.css';
import logo from'./photo/foot.png';

function Home() {
  useEffect(() => {
    const title = document.querySelector('.title');
    const paragraph = document.querySelector('.paragraph');
    const ball = document.querySelector('.ball');

    title.classList.add('animate-title');
    paragraph.classList.add('animate-paragraph');
    ball.classList.add('animate-ball');
  }, []);

  return (
    <div className="home">
      <h1 className="title">Welcome to Football Website</h1>
      
      <p className="paragraph">This is a football website showcasing seasons and more!</p>
      <div className="ball-container">
        <img src={logo} alt="Football Animation" className="ball" />
      </div>

    </div>
  );
}

export default Home;