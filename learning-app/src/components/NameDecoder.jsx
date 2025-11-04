import { useState, useEffect } from 'react';
import './NameDecoder.css';

function NameDecoder() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Load saved name from localStorage
    const stored = localStorage.getItem('learnerName');
    if (stored) {
      setSavedName(stored);
      setName(stored);
      setShowWelcome(false);
    }
  }, []);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem('learnerName', name.trim());
      setSavedName(name.trim());
      setShowWelcome(false);
    }
  };

  const handleClearName = () => {
    localStorage.removeItem('learnerName');
    setSavedName('');
    setName('');
    setShowWelcome(true);
  };

  const stringToBinary = (str) => {
    return str.split('').map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
    });
  };

  const stringToHex = (str) => {
    return str.split('').map(char => {
      return char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
    });
  };

  const stringToAscii = (str) => {
    return str.split('').map(char => {
      return char.charCodeAt(0);
    });
  };

  const getCharacterData = () => {
    if (!savedName) return [];

    return savedName.split('').map((char, index) => ({
      char,
      ascii: char.charCodeAt(0),
      binary: char.charCodeAt(0).toString(2).padStart(8, '0'),
      hex: char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
    }));
  };

  if (showWelcome || !savedName) {
    return (
      <div className="name-decoder">
        <div className="welcome-box">
          <h2>👋 Welcome to Your Learning Journey!</h2>
          <p className="welcome-text">
            Let's personalize your experience! Enter your name to see how computers
            store it using binary, hexadecimal, and ASCII codes.
          </p>

          <div className="name-input-section">
            <label htmlFor="name-input">What's your name?</label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              maxLength="20"
              onKeyPress={(e) => e.key === 'Enter' && handleSaveName()}
            />
            <button onClick={handleSaveName} disabled={!name.trim()}>
              Start Learning! 🚀
            </button>
          </div>

          <div className="privacy-note">
            <p>
              🔒 Your name is stored only on <strong>your device</strong> using localStorage.
              No sign-up required, no data sent anywhere!
            </p>
          </div>
        </div>
      </div>
    );
  }

  const characterData = getCharacterData();

  return (
    <div className="name-decoder">
      <div className="decoder-header">
        <div className="header-content">
          <h2>🎯 Your Name in Computer Code!</h2>
          <p>Hi <span className="highlight-name">{savedName}</span>! Here's how computers see your name:</p>
        </div>
        <button onClick={handleClearName} className="change-name-btn">
          Change Name
        </button>
      </div>

      <div className="decoder-grid">
        {/* Character by Character Breakdown */}
        <div className="decoder-section character-cards">
          <h3>📝 Character by Character</h3>
          <div className="character-grid">
            {characterData.map((data, index) => (
              <div key={index} className="character-card">
                <div className="char-display">{data.char}</div>
                <div className="char-info">
                  <div className="info-row">
                    <span className="info-label">ASCII:</span>
                    <span className="info-value ascii">{data.ascii}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Binary:</span>
                    <span className="info-value binary">{data.binary}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Hex:</span>
                    <span className="info-value hex">0x{data.hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Name Representations */}
        <div className="decoder-section full-representations">
          <h3>🔤 Your Complete Name</h3>

          <div className="representation-card">
            <div className="rep-header">
              <span className="rep-icon">1️⃣</span>
              <h4>In Binary (Base 2)</h4>
            </div>
            <div className="rep-content binary-content">
              {stringToBinary(savedName).map((binary, index) => (
                <div key={index} className="binary-byte">
                  <span className="byte-char">{savedName[index]}</span>
                  <span className="byte-value">{binary}</span>
                </div>
              ))}
            </div>
            <p className="rep-explanation">
              Each character = 8 bits (1 byte). Total: <strong>{savedName.length * 8} bits</strong> = <strong>{savedName.length} bytes</strong>
            </p>
          </div>

          <div className="representation-card">
            <div className="rep-header">
              <span className="rep-icon">🔢</span>
              <h4>In Decimal (ASCII Codes)</h4>
            </div>
            <div className="rep-content ascii-content">
              {stringToAscii(savedName).map((ascii, index) => (
                <div key={index} className="ascii-item">
                  <span className="ascii-char">{savedName[index]}</span>
                  <span className="ascii-arrow">→</span>
                  <span className="ascii-number">{ascii}</span>
                </div>
              ))}
            </div>
            <p className="rep-explanation">
              ASCII assigns a number (0-127) to each character
            </p>
          </div>

          <div className="representation-card">
            <div className="rep-header">
              <span className="rep-icon">🎨</span>
              <h4>In Hexadecimal (Base 16)</h4>
            </div>
            <div className="rep-content hex-content">
              {stringToHex(savedName).map((hex, index) => (
                <div key={index} className="hex-item">
                  <span className="hex-char">{savedName[index]}</span>
                  <span className="hex-value">0x{hex}</span>
                </div>
              ))}
            </div>
            <p className="rep-explanation">
              Hex is shorter than binary! Each character = 2 hex digits
            </p>
          </div>
        </div>
      </div>

      <div className="fun-facts-name">
        <h3>🤓 Fun Facts About Your Name in Data:</h3>
        <div className="facts-grid">
          <div className="fact-box">
            <div className="fact-number">{savedName.length}</div>
            <div className="fact-label">Characters</div>
          </div>
          <div className="fact-box">
            <div className="fact-number">{savedName.length}</div>
            <div className="fact-label">Bytes</div>
          </div>
          <div className="fact-box">
            <div className="fact-number">{savedName.length * 8}</div>
            <div className="fact-label">Bits</div>
          </div>
          <div className="fact-box">
            <div className="fact-number">{savedName.length * 2}</div>
            <div className="fact-label">Hex Digits</div>
          </div>
        </div>
        <div className="comparison-text">
          <p>💡 Your name takes up <strong>{savedName.length} bytes</strong> of computer memory!</p>
          <p>📱 That's {(savedName.length / 1024 / 1024 / 1024).toExponential(2)} GB (basically nothing!) -
             you could fit your name <strong>{Math.floor(1024*1024*1024/savedName.length).toLocaleString()}</strong> times in just 1 GB!</p>
        </div>
      </div>

      <div className="decoder-explainer">
        <h3>📚 What Does This Mean?</h3>
        <div className="explainer-grid">
          <div className="explainer-card">
            <h4>ASCII (American Standard Code for Information Interchange)</h4>
            <p>A standard that assigns a number to each character. For example:</p>
            <ul>
              <li>'A' = 65</li>
              <li>'a' = 97 (lowercase is different!)</li>
              <li>' ' (space) = 32</li>
            </ul>
          </div>
          <div className="explainer-card">
            <h4>Why Three Different Ways?</h4>
            <p><strong>Binary:</strong> How computers actually store everything internally<br/>
            <strong>Decimal (ASCII):</strong> Easy for humans to understand<br/>
            <strong>Hexadecimal:</strong> Compact way programmers write binary</p>
          </div>
          <div className="explainer-card">
            <h4>Memory Storage</h4>
            <p>Each character in your name takes exactly <strong>1 byte (8 bits)</strong> of memory.
            The computer stores these bytes in a sequence, one after another!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameDecoder;
