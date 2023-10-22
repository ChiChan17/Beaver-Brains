import React from 'react';
import Hero from '../components/home/hero/Hero';
import Card from '../components/home/card/Card';
import { Link } from 'react-router-dom'; 
import "./button.scss"

function HomePage() {
  return (
    <div className='HomePage'>
      <Hero />
      <Card /> 
      <div className= "button-container">
        <button>
          <Link to="/updateprofile">Update Profile</Link>
        </button>
      </div> 

      <div className="Log-out">
        <button className="logout-button">
          <Link to="/">Log Out</Link>
        </button>
      </div>
    </div>

  );
}

export default HomePage




