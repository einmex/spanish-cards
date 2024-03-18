import './App.css';
import React from 'react';
import { Flag } from './flags'; // Import the flag components
import { lang } from './constants'; // import languages
import flashcards from './flashcards'; // Import the flashcards array

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div className={`flashcard ${showAnswer ? lang.eng : lang.esp}-side`} onClick={() => setShowAnswer(!showAnswer)}>
       <Flag origin={showAnswer ? lang.eng : lang.esp} /> 
       <div className="flashcard-content">
        <div dangerouslySetInnerHTML={{ __html: showAnswer ? answer : question }} /> 
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
      <h1>Flashcards App</h1>
      {shuffledFlashcards.length > 0 && ( // Ensure shuffledFlashcards is not empty before rendering
        <Flashcard
          question={shuffledFlashcards[currentCardIndex].question}
          answer={shuffledFlashcards[currentCardIndex].answer}
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
