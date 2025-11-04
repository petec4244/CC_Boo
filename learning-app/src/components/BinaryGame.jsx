import { useState, useEffect } from 'react';
import './BinaryGame.css';

function BinaryGame() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [bits, setBits] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('easy'); // easy, medium, hard
  const [history, setHistory] = useState([]); // Track last 5 conversions
  const [showTutorial, setShowTutorial] = useState(true);
  const [highScores, setHighScores] = useState([]);
  const [showNameEntry, setShowNameEntry] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    generateNewNumber();
    loadHighScores();
  }, [level]);

  const loadHighScores = () => {
    const saved = localStorage.getItem('binaryGameHighScores');
    if (saved) {
      setHighScores(JSON.parse(saved));
    }
  };

  const saveHighScore = (name, finalScore) => {
    const newScore = {
      name: name || 'Anonymous',
      score: finalScore,
      level: level,
      date: new Date().toLocaleDateString()
    };

    const updated = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Keep top 10

    setHighScores(updated);
    localStorage.setItem('binaryGameHighScores', JSON.stringify(updated));
  };

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
    const binaryString = bits.slice(8 - bitsToShow).map(b => b).join('');

    // Add to history
    const newEntry = {
      decimal: userAnswer,
      binary: binaryString,
      target: targetNumber,
      correct: userAnswer === targetNumber,
      timestamp: Date.now()
    };

    setHistory(prev => [newEntry, ...prev].slice(0, 5)); // Keep only last 5

    if (userAnswer === targetNumber) {
      setMessage('🎉 Correct! Great job!');
      const newScore = score + 1;
      setScore(newScore);

      // Check if this is a high score after every 5 correct answers
      if (newScore > 0 && newScore % 5 === 0) {
        const lowestHighScore = highScores.length === 10 ? highScores[9].score : 0;
        if (highScores.length < 10 || newScore > lowestHighScore) {
          setShowNameEntry(true);
        }
      }

      setTimeout(() => {
        generateNewNumber();
      }, 1500);
    } else {
      setMessage(`❌ Not quite! You made ${userAnswer}. Try again!`);
    }
  };

  const handleSaveScore = () => {
    if (playerName.trim()) {
      saveHighScore(playerName.trim(), score);
      setShowNameEntry(false);
      setPlayerName('');
      setShowLeaderboard(true);
    }
  };

  const handleSkipScore = () => {
    setShowNameEntry(false);
    setPlayerName('');
  };

  const bitsToShow = level === 'easy' ? 4 : level === 'medium' ? 6 : 8;

  return (
    <div className="binary-game">
      <div className="game-header">
        <h2>🎮 Binary Number Game</h2>
        <div className="header-right">
          <div className="score">Score: {score}</div>
          <button
            className="leaderboard-btn"
            onClick={() => setShowLeaderboard(!showLeaderboard)}
          >
            🏆 Leaderboard
          </button>
        </div>
      </div>

      {showLeaderboard && (
        <div className="leaderboard-modal">
          <div className="leaderboard-content">
            <button className="close-modal" onClick={() => setShowLeaderboard(false)}>×</button>
            <h3>🏆 Top 10 High Scores</h3>
            {highScores.length === 0 ? (
              <p className="no-scores">No high scores yet. Be the first!</p>
            ) : (
              <div className="scores-list">
                {highScores.map((entry, index) => (
                  <div key={index} className={`score-entry rank-${index + 1}`}>
                    <span className="rank">#{index + 1}</span>
                    <span className="player-name">{entry.name}</span>
                    <span className="player-score">{entry.score}</span>
                    <span className="player-level">{entry.level}</span>
                    <span className="player-date">{entry.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showNameEntry && (
        <div className="name-entry-modal">
          <div className="name-entry-content">
            <h3>🎉 Great Score!</h3>
            <p>You scored {score} points! Enter your name for the leaderboard:</p>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your name"
              maxLength={20}
              className="name-input"
              onKeyPress={(e) => e.key === 'Enter' && handleSaveScore()}
            />
            <div className="name-entry-buttons">
              <button className="save-score-btn" onClick={handleSaveScore}>
                Save Score
              </button>
              <button className="skip-btn" onClick={handleSkipScore}>
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

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

      {showTutorial && (
        <div className="tutorial-section">
          <button className="close-tutorial" onClick={() => setShowTutorial(false)}>×</button>
          <h3>📚 What Are We Doing?</h3>
          <div className="tutorial-content">
            <p><strong>Your Mission:</strong> Build the target number using only 0s and 1s!</p>
            <div className="tutorial-steps">
              <div className="step">
                <span className="step-num">1️⃣</span>
                <p>Look at the <strong>target number</strong> shown in red</p>
              </div>
              <div className="step">
                <span className="step-num">2️⃣</span>
                <p>Each bit position has a <strong>value</strong> (shown above the bits)</p>
              </div>
              <div className="step">
                <span className="step-num">3️⃣</span>
                <p><strong>Click bits</strong> to turn them ON (1) or OFF (0)</p>
              </div>
              <div className="step">
                <span className="step-num">4️⃣</span>
                <p>When a bit is ON, its value gets <strong>added</strong> to your total</p>
              </div>
              <div className="step">
                <span className="step-num">5️⃣</span>
                <p>Match the target number and click <strong>Check Answer</strong>!</p>
              </div>
            </div>
            <div className="tutorial-example">
              <p><strong>Example:</strong> To make the number 5:</p>
              <p>Turn ON the bit worth 4 and the bit worth 1</p>
              <p>4 + 1 = 5 ✓</p>
            </div>
          </div>
        </div>
      )}

      <div className="instruction">
        <p>🎯 Create the number: <span className="target-number">{targetNumber}</span></p>
        <p className="help-text">Click the bits below to turn them ON (1) or OFF (0)</p>
        {!showTutorial && (
          <button className="show-help" onClick={() => setShowTutorial(true)}>
            ❓ Show Help
          </button>
        )}
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

      {history.length > 0 && (
        <div className="history-section">
          <h3>📜 Recent Conversions (Last 5)</h3>
          <p className="history-description">See how different numbers look in binary!</p>
          <div className="history-list">
            {history.map((entry, index) => (
              <div key={entry.timestamp} className={`history-entry ${entry.correct ? 'correct' : 'incorrect'}`}>
                <div className="history-number">
                  <span className="decimal-label">Decimal:</span>
                  <span className="decimal-value">{entry.decimal}</span>
                </div>
                <div className="history-equals">=</div>
                <div className="history-binary">
                  <span className="binary-label">Binary:</span>
                  <span className="binary-value">{entry.binary}</span>
                </div>
                {entry.correct && <span className="correct-badge">✓</span>}
                {!entry.correct && entry.decimal !== entry.target && (
                  <span className="target-hint">(Target was {entry.target})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

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
