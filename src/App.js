import './App.css';
import React from 'react';
import { SpanishFlag, EnglishFlag } from './flags'; // Import the flag components
import flashcards from './flashcards'; // Import the flashcards array

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="flag">
        {showAnswer ? <EnglishFlag /> : <SpanishFlag />}
      </div>
      <div className="flashcard-content">
        <div dangerouslySetInnerHTML={{ __html: showAnswer ? answer : question }} /> 
      </div>
    </div>
  );
}

function App() {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const shuffledFlashcards = [...flashcards].sort(() => Math.random() - 0.5);

  // Shuffle flashcards array and pick a random card initially
  // React.useEffect(() => {
  //   const shuffledFlashcards = [...flashcards].sort(() => Math.random() - 0.5);
  //   setCurrentCardIndex(0);
  //   console.log(shuffledFlashcards)
  // }, []);

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
      <Flashcard
        question={shuffledFlashcards[currentCardIndex].question}
        answer={shuffledFlashcards[currentCardIndex].answer}
        onSwipe={handleSwipe}
      />
      <div className='buttons'>
        <button onClick={() => handleSwipe('left')}>Swipe Left</button>
        <button onClick={() => handleSwipe('right')}>Swipe Right</button>
      </div>
    </div>
  );
}

export default App;
