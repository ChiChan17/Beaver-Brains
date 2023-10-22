import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import './Card.scss'; // Assuming you have a CSS file named Card.css for styles

const initialX = 0; // Set an initial X position

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [matched, setMatched] = useState([]); // Initialize the matched cards array
  //Don't use? const [cards, setCards] = useState([...]); // Initialize your cards array
  const [isSwiped, setSwiped] = useState(false); //See if card is swiped to use the slow card animation
  const cards = [/* Add your card data here as an array of objects */];

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      // Swiped right, so flip the card
      setSwiped(true);
      setFlipped(true);
      // Add card data to the "matched" array
      setMatched((prevMatched) => [...prevMatched, {/* Add your card data here */}]);
    } else if (direction === 'left') {
      // Swiped left, remove card and load new card in
      setSwiped(true);
  
      // Check if there are more cards to display
      if (cardIndex < cards.length - 1) {
        setCardIndex(cardIndex + 1);
      }
  
      // Reset the flip state to show the card's front
      setFlipped(false);
    }
  };

  //If it is swipped left or right new card load after contact content
  const loadNewCard = () => {
    // Check if there are more cards to display
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
    // Reset the flip state to show the card's front
    setFlipped(false);
  };

  const resetCard = () => {
    setFlipped(false);
  };

  const returnCenter = isFlipped ? "card-ex swipe-right" : "card-ex";
  const cardClass = isSwiped ? "card-ex slow-card" : "card-ex";

  return (
    <TinderCard
      swipePower={0}
      className={`card-ex ${returnCenter} ${isSwiped ? "slow-card" : ""}`} //Flips card over and makes it return to center of the screen
      preventSwipe={['up', 'down']} // Specify which directions to prevent swiping
      dragConstraints={{ left: 0, right: 0 }}
      scale={0.2}
      onSwipe={(dir) => handleSwipe(dir)}
    >
      {isFlipped ? (
        <div className="flipped-content">
          <h1 className="contact">&nbsp;Contact-info</h1>
          <div className="contact-body">
            <h2 className="Email">&nbsp;Email: </h2>
            <h2 className="Phone Number">&nbsp;Phone Number: </h2>
            <h2 className="Discord">&nbsp;Discord: </h2>
            {/*Loads new card whenever the button is clicked */}
            <div className="next-card-container">
              <button className="next-card" onClick={loadNewCard}>Load New Card</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-content">
          <h1 className="name">&nbsp;Name</h1>
          <div className="image-container">
            <img src="./hero.png" alt="" />
          </div>
          <div className="year">
            <h2>Year:</h2> 
          </div>
          <div className="major">
            <h2>Major:</h2>
          </div>
          <div className="classes">
            <h2>Classes:</h2>
          </div>
          <div className="description">
            <h2>Description:</h2>
          </div>
        </div>
      )}
    </TinderCard>
  );
};

export default Card;
