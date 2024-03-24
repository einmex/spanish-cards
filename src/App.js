import './App.css';
import React from 'react';
import { Flag } from './flags'; // Import the flag components
import { lang } from './constants'; // import languages
import flashcards from "./flashcards";

function Flashcard({ side1, side2 }) {
  const [showCardSide, setShowCardSide] = React.useState(false);

  return (
    <div className={`flashcard ${showCardSide ? lang.eng : lang.esp}-side`} onClick={() => setShowCardSide(!showCardSide)}>
       <Flag origin={showCardSide ? lang.eng : lang.esp} /> 
       <div className="flashcard-content">
        <div dangerouslySetInnerHTML={{ __html: showCardSide ? side2 : side1 }} /> 
      </div>
    </div>
  );
}

function App() {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [shuffledFlashcards, setShuffledFlashcards] = React.useState([]);

  // Shuffle flashcards array and pick a random card initially
  React.useEffect(() => {
    const shuffledFlashcards = [...flashcards].sort(() => Math.random() - 0.5);
    setShuffledFlashcards(shuffledFlashcards);
    setCurrentCardIndex(0);
  }, []);

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else if (direction === 'right' && currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div>
      <h1>Language cards</h1>
      {shuffledFlashcards.length > 0 && ( // Ensure shuffledFlashcards is not empty before rendering
        <Flashcard
          side1={shuffledFlashcards[currentCardIndex].side1}
          side2={shuffledFlashcards[currentCardIndex].side2}
          onSwipe={handleSwipe}
        />
      )}
      <div className='buttons'>
        {currentCardIndex > 0 && <button onClick={() => handleSwipe('left')}>Swipe Left</button>}
        {currentCardIndex < shuffledFlashcards.length -1 && <button className="swipe-right" onClick={() => handleSwipe('right')}>Swipe Right</button>}
      </div>
    </div>
  );
}

export default App;
