import { useState } from 'react';
import BinaryGame from './components/BinaryGame';
import HexExplorer from './components/HexExplorer';
import MemoryVisualizer from './components/MemoryVisualizer';
import CodeExamples from './components/CodeExamples';
import NumberConverter from './components/NumberConverter';
import InternetWorks from './components/InternetWorks';
import DataStorage from './components/DataStorage';
import './App.css';

function App() {
  const [currentLesson, setCurrentLesson] = useState('home');

  const renderLesson = () => {
    switch(currentLesson) {
      case 'binary':
        return <BinaryGame />;
      case 'hex':
        return <HexExplorer />;
      case 'converter':
        return <NumberConverter />;
      case 'memory':
        return <MemoryVisualizer />;
      case 'code':
        return <CodeExamples />;
      case 'internet':
        return <InternetWorks />;
      case 'storage':
        return <DataStorage />;
      case 'home':
      default:
        return <HomePage setCurrentLesson={setCurrentLesson} />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 onClick={() => setCurrentLesson('home')} style={{ cursor: 'pointer' }}>
          🚀 Computer Data & Memory Learning Lab
        </h1>
        <p className="tagline">Learn how computers store and use information!</p>
      </header>

      <nav className="navigation">
        <button
          className={currentLesson === 'home' ? 'active' : ''}
          onClick={() => setCurrentLesson('home')}
        >
          🏠 Home
        </button>
        <button
          className={currentLesson === 'binary' ? 'active' : ''}
          onClick={() => setCurrentLesson('binary')}
        >
          🎮 Binary Game
        </button>
        <button
          className={currentLesson === 'hex' ? 'active' : ''}
          onClick={() => setCurrentLesson('hex')}
        >
          🎨 Hex Colors
        </button>
        <button
          className={currentLesson === 'converter' ? 'active' : ''}
          onClick={() => setCurrentLesson('converter')}
        >
          🔄 Converter
        </button>
        <button
          className={currentLesson === 'memory' ? 'active' : ''}
          onClick={() => setCurrentLesson('memory')}
        >
          🧠 Memory
        </button>
        <button
          className={currentLesson === 'code' ? 'active' : ''}
          onClick={() => setCurrentLesson('code')}
        >
          💻 Code Examples
        </button>
        <button
          className={currentLesson === 'internet' ? 'active' : ''}
          onClick={() => setCurrentLesson('internet')}
        >
          🌐 Internet
        </button>
        <button
          className={currentLesson === 'storage' ? 'active' : ''}
          onClick={() => setCurrentLesson('storage')}
        >
          💾 Storage
        </button>
      </nav>

      <main className="content">
        {renderLesson()}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for learning programming concepts!</p>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentLesson }) {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <h2>👋 Welcome to Your Programming Adventure!</h2>
        <p className="intro">
          Computers are amazing machines that store and process information in special ways.
          This app will teach you the basics of how computers work with data and memory!
        </p>
      </div>

      <div className="lessons-grid">
        <div className="lesson-card binary" onClick={() => setCurrentLesson('binary')}>
          <div className="card-icon">🎮</div>
          <h3>Binary Number Game</h3>
          <p>Learn how computers count using only 0s and 1s! Play fun games to master binary numbers.</p>
          <div className="card-footer">Click to play!</div>
        </div>

        <div className="lesson-card hex" onClick={() => setCurrentLesson('hex')}>
          <div className="card-icon">🎨</div>
          <h3>Hexadecimal Colors</h3>
          <p>Discover hexadecimal numbers by mixing colors! See how websites and apps use hex codes.</p>
          <div className="card-footer">Click to explore!</div>
        </div>

        <div className="lesson-card converter" onClick={() => setCurrentLesson('converter')}>
          <div className="card-icon">🔄</div>
          <h3>Number Converter</h3>
          <p>See how Binary, Decimal, and Hex connect! Convert between number systems instantly.</p>
          <div className="card-footer">Click to convert!</div>
        </div>

        <div className="lesson-card memory" onClick={() => setCurrentLesson('memory')}>
          <div className="card-icon">🧠</div>
          <h3>Memory Visualizer</h3>
          <p>See how computers store data in memory! Learn about variables, addresses, and data types.</p>
          <div className="card-footer">Click to visualize!</div>
        </div>

        <div className="lesson-card code" onClick={() => setCurrentLesson('code')}>
          <div className="card-icon">💻</div>
          <h3>Real Code Examples</h3>
          <p>See real programming code in Python, C, and C++! Learn how professional programmers work with data.</p>
          <div className="card-footer">Click to code!</div>
        </div>

        <div className="lesson-card internet" onClick={() => setCurrentLesson('internet')}>
          <div className="card-icon">🌐</div>
          <h3>How Internet Works</h3>
          <p>Follow data's journey across the internet! Learn about IP addresses, DNS, and connections.</p>
          <div className="card-footer">Click to explore!</div>
        </div>

        <div className="lesson-card storage" onClick={() => setCurrentLesson('storage')}>
          <div className="card-icon">💾</div>
          <h3>Data Storage</h3>
          <p>Learn about bytes, kilobytes, and gigabytes! Compare file sizes and storage devices.</p>
          <div className="card-footer">Click to learn!</div>
        </div>
      </div>

      <div className="learning-path">
        <h3>🗺️ Recommended Learning Path:</h3>
        <div className="path-steps">
          <div className="path-step">
            <span className="step-number">1</span>
            <div className="step-content">
              <strong>Start with Binary Game</strong>
              <p>Learn the basics of how computers count</p>
            </div>
          </div>
          <div className="path-arrow">→</div>
          <div className="path-step">
            <span className="step-number">2</span>
            <div className="step-content">
              <strong>Try Hexadecimal Colors</strong>
              <p>Understand another number system</p>
            </div>
          </div>
          <div className="path-arrow">→</div>
          <div className="path-step">
            <span className="step-number">3</span>
            <div className="step-content">
              <strong>Explore Memory</strong>
              <p>See how data is stored</p>
            </div>
          </div>
          <div className="path-arrow">→</div>
          <div className="path-step">
            <span className="step-number">4</span>
            <div className="step-content">
              <strong>Read Real Code</strong>
              <p>See it all in action!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <h3>🤔 Fun Facts About Computer Data:</h3>
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-icon">💾</div>
            <p>A single character (like 'A') takes up 1 byte of memory - that's 8 bits!</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🎵</div>
            <p>A typical 3-minute MP3 song uses about 3 million bytes (3 MB) of storage!</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">🖼️</div>
            <p>Every pixel in a digital photo stores color using 3 numbers: Red, Green, and Blue!</p>
          </div>
          <div className="fact-card">
            <div className="fact-icon">⚡</div>
            <p>Modern computers can perform billions of calculations per second!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
