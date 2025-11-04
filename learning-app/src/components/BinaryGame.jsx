import { useState, useEffect } from 'react';
import './BinaryGame.css';

function BinaryGame() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [bits, setBits] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('easy'); // easy, medium, hard

  useEffect(() => {
    generateNewNumber();
  }, [level]);

  const generateNewNumber = () => {
    let max;
    switch(level) {
      case 'easy':
        max = 15; // 4 bits
        break;
      case 'medium':
        max = 63; // 6 bits
        break;
      case 'hard':
        max = 255; // 8 bits
        break;
      default:
        max = 15;
    }
    const newNumber = Math.floor(Math.random() * max) + 1;
    setTargetNumber(newNumber);
    setBits([0, 0, 0, 0, 0, 0, 0, 0]);
    setMessage('');
  };

  const toggleBit = (index) => {
    const newBits = [...bits];
    newBits[index] = newBits[index] === 0 ? 1 : 0;
    setBits(newBits);
  };

  const calculateDecimal = () => {
    let decimal = 0;
    bits.forEach((bit, index) => {
      decimal += bit * Math.pow(2, 7 - index);
    });
    return decimal;
  };

  const checkAnswer = () => {
    const userAnswer = calculateDecimal();
    if (userAnswer === targetNumber) {
      setMessage('🎉 Correct! Great job!');
      setScore(score + 1);
      setTimeout(() => {
        generateNewNumber();
      }, 1500);
    } else {
      setMessage(`❌ Not quite! You made ${userAnswer}. Try again!`);
    }
  };

  const bitsToShow = level === 'easy' ? 4 : level === 'medium' ? 6 : 8;

  return (
    <div className="binary-game">
      <div className="game-header">
        <h2>🎮 Binary Number Game</h2>
        <div className="score">Score: {score}</div>
      </div>

      <div className="level-selector">
        <button
          className={level === 'easy' ? 'active' : ''}
          onClick={() => setLevel('easy')}
        >
          Easy (4 bits)
        </button>
        <button
          className={level === 'medium' ? 'active' : ''}
          onClick={() => setLevel('medium')}
        >
          Medium (6 bits)
        </button>
        <button
          className={level === 'hard' ? 'active' : ''}
          onClick={() => setLevel('hard')}
        >
          Hard (8 bits)
        </button>
      </div>

      <div className="instruction">
        <p>🎯 Create the number: <span className="target-number">{targetNumber}</span></p>
        <p className="help-text">Click the bits below to turn them ON (1) or OFF (0)</p>
      </div>

      <div className="binary-explanation">
        <div className="bit-values">
          {[...Array(bitsToShow)].map((_, i) => (
            <div key={i} className="bit-value">
              {Math.pow(2, bitsToShow - 1 - i)}
            </div>
          ))}
        </div>
      </div>

      <div className="bits-container">
        {bits.slice(8 - bitsToShow).map((bit, index) => (
          <div
            key={index}
            className={`bit ${bit === 1 ? 'on' : 'off'}`}
            onClick={() => toggleBit(index + (8 - bitsToShow))}
          >
            <div className="bit-display">{bit}</div>
          </div>
        ))}
      </div>

      <div className="current-value">
        <p>Your number: <span className="user-number">{calculateDecimal()}</span></p>
      </div>

      <button className="check-button" onClick={checkAnswer}>
        Check Answer
      </button>

      {message && <div className={`message ${message.includes('Correct') ? 'success' : 'error'}`}>{message}</div>}

      <div className="learn-section">
        <h3>💡 How Binary Works:</h3>
        <p>Each position represents a power of 2:</p>
        <ul>
          <li>The rightmost bit is worth 1 (2⁰)</li>
          <li>The next bit is worth 2 (2¹)</li>
          <li>Then 4 (2²), 8 (2³), 16 (2⁴), and so on!</li>
          <li>Add up all the positions that are "ON" to get your number!</li>
        </ul>
      </div>
    </div>
  );
}

export default BinaryGame;
