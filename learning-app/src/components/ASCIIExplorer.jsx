import { useState } from 'react';
import './ASCIIExplorer.css';

function ASCIIExplorer() {
  const [selectedChar, setSelectedChar] = useState('A');
  const [customInput, setCustomInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ASCII categories
  const categories = {
    all: { name: 'All Printable', range: [32, 126] },
    numbers: { name: 'Numbers (0-9)', range: [48, 57] },
    uppercase: { name: 'Uppercase (A-Z)', range: [65, 90] },
    lowercase: { name: 'Lowercase (a-z)', range: [97, 122] },
    special: { name: 'Special Characters', range: [32, 126], filter: (code) =>
      (code >= 32 && code <= 47) || (code >= 58 && code <= 64) ||
      (code >= 91 && code <= 96) || (code >= 123 && code <= 126)
    }
  };

  const getASCIITable = () => {
    const category = categories[selectedCategory];
    const chars = [];

    for (let i = category.range[0]; i <= category.range[1]; i++) {
      if (category.filter && !category.filter(i)) continue;
      chars.push({
        char: String.fromCharCode(i),
        decimal: i,
        hex: i.toString(16).toUpperCase().padStart(2, '0'),
        binary: i.toString(2).padStart(8, '0')
      });
    }

    return chars;
  };

  const getCharInfo = (char) => {
    const code = char.charCodeAt(0);
    return {
      char: char,
      decimal: code,
      hex: code.toString(16).toUpperCase().padStart(2, '0'),
      binary: code.toString(2).padStart(8, '0'),
      octal: code.toString(8).padStart(3, '0')
    };
  };

  const selectedInfo = getCharInfo(selectedChar);
  const customInfo = customInput ? getCharInfo(customInput[customInput.length - 1]) : null;

  const getCharCategory = (code) => {
    if (code >= 48 && code <= 57) return 'Number';
    if (code >= 65 && code <= 90) return 'Uppercase Letter';
    if (code >= 97 && code <= 122) return 'Lowercase Letter';
    if (code === 32) return 'Space';
    return 'Special Character';
  };

  const specialChars = [
    { char: ' ', name: 'Space', code: 32 },
    { char: '!', name: 'Exclamation', code: 33 },
    { char: '@', name: 'At Sign', code: 64 },
    { char: '#', name: 'Hash', code: 35 },
    { char: '$', name: 'Dollar', code: 36 },
    { char: '%', name: 'Percent', code: 37 },
    { char: '&', name: 'Ampersand', code: 38 },
    { char: '*', name: 'Asterisk', code: 42 },
    { char: '+', name: 'Plus', code: 43 },
    { char: '=', name: 'Equals', code: 61 },
    { char: '?', name: 'Question', code: 63 },
  ];

  return (
    <div className="ascii-explorer">
      <div className="explorer-header">
        <h2>🔤 ASCII Character Explorer</h2>
        <p>Explore how text is stored in computers using ASCII codes!</p>
      </div>

      {/* Interactive Character Input */}
      <div className="explorer-section">
        <h3>Try It Yourself</h3>
        <div className="input-area">
          <label>Type any character:</label>
          <input
            type="text"
            value={customInput}
            onChange={(e) => {
              setCustomInput(e.target.value);
              if (e.target.value) {
                setSelectedChar(e.target.value[e.target.value.length - 1]);
              }
            }}
            placeholder="Type here..."
            className="char-input"
          />
        </div>

        {customInfo && (
          <div className="custom-info-display">
            <div className="char-preview">
              <div className="big-char">{customInfo.char === ' ' ? '␣' : customInfo.char}</div>
              <div className="char-name">
                {customInfo.char === ' ' ? 'SPACE' : `"${customInfo.char}"`}
              </div>
              <div className="char-category">{getCharCategory(customInfo.decimal)}</div>
            </div>

            <div className="info-grid">
              <div className="info-item decimal-item">
                <div className="info-label">Decimal (Base-10)</div>
                <div className="info-value-large">{customInfo.decimal}</div>
                <div className="info-desc">How we normally count</div>
              </div>

              <div className="info-item binary-item">
                <div className="info-label">Binary (Base-2)</div>
                <div className="info-value-large binary">{customInfo.binary}</div>
                <div className="info-desc">How computers store it</div>
              </div>

              <div className="info-item hex-item">
                <div className="info-label">Hexadecimal (Base-16)</div>
                <div className="info-value-large hex">0x{customInfo.hex}</div>
                <div className="info-desc">Programmer shorthand</div>
              </div>

              <div className="info-item octal-item">
                <div className="info-label">Octal (Base-8)</div>
                <div className="info-value-large octal">{customInfo.octal}</div>
                <div className="info-desc">Used in some systems</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Reference Characters */}
      <div className="explorer-section">
        <h3>⚡ Quick Reference</h3>
        <div className="quick-chars">
          {specialChars.map(item => (
            <div
              key={item.code}
              className="quick-char-card"
              onClick={() => {
                setSelectedChar(item.char);
                setCustomInput(item.char);
              }}
            >
              <div className="qc-char">{item.char === ' ' ? '␣' : item.char}</div>
              <div className="qc-name">{item.name}</div>
              <div className="qc-code">{item.code}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ASCII Table with Categories */}
      <div className="explorer-section">
        <h3>📋 ASCII Table</h3>

        <div className="category-selector">
          {Object.keys(categories).map(key => (
            <button
              key={key}
              className={selectedCategory === key ? 'active' : ''}
              onClick={() => setSelectedCategory(key)}
            >
              {categories[key].name}
            </button>
          ))}
        </div>

        <div className="ascii-table">
          <div className="table-header">
            <div>Character</div>
            <div>Decimal</div>
            <div>Hex</div>
            <div>Binary</div>
          </div>
          {getASCIITable().map(item => (
            <div
              key={item.decimal}
              className={`table-row ${selectedChar === item.char ? 'selected' : ''}`}
              onClick={() => {
                setSelectedChar(item.char);
                setCustomInput(item.char);
              }}
            >
              <div className="table-char">{item.char === ' ' ? '␣' : item.char}</div>
              <div className="table-decimal">{item.decimal}</div>
              <div className="table-hex">0x{item.hex}</div>
              <div className="table-binary">{item.binary}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Section */}
      <div className="explorer-section info-section">
        <h3>💡 What is ASCII?</h3>
        <div className="info-cards">
          <div className="info-card">
            <h4>🔢 ASCII Basics</h4>
            <p>
              <strong>ASCII</strong> stands for "American Standard Code for Information Interchange."
              It's a way to represent text characters as numbers so computers can store and process them.
            </p>
            <ul>
              <li>Each character gets a unique number (0-127)</li>
              <li>Total of 128 standard characters</li>
              <li>Includes letters, numbers, punctuation, and control codes</li>
              <li>Created in 1963 and still used today!</li>
            </ul>
          </div>

          <div className="info-card">
            <h4>🎯 Key ASCII Ranges</h4>
            <div className="ascii-ranges">
              <div className="range-item">
                <strong>0-31:</strong> Control characters (like Enter, Tab)
              </div>
              <div className="range-item">
                <strong>32:</strong> Space character
              </div>
              <div className="range-item">
                <strong>33-47:</strong> Punctuation and symbols
              </div>
              <div className="range-item">
                <strong>48-57:</strong> Numbers (0-9)
              </div>
              <div className="range-item">
                <strong>65-90:</strong> Uppercase letters (A-Z)
              </div>
              <div className="range-item">
                <strong>97-122:</strong> Lowercase letters (a-z)
              </div>
              <div className="range-item">
                <strong>123-126:</strong> More symbols
              </div>
            </div>
          </div>

          <div className="info-card">
            <h4>🌟 Fun ASCII Facts</h4>
            <ul>
              <li>The difference between uppercase and lowercase letters is exactly 32!</li>
              <li>'A' is 65, 'a' is 97 (97 - 65 = 32)</li>
              <li>Numbers '0'-'9' don't start at 0 - '0' is actually 48!</li>
              <li>The '@' symbol is code 64 (that's why it's popular in computing!)</li>
              <li>Modern computers use Unicode, which includes ASCII plus 100,000+ more characters</li>
            </ul>
          </div>

          <div className="info-card">
            <h4>🎮 Try These Challenges</h4>
            <ul>
              <li>Find your initials in the ASCII table</li>
              <li>Calculate the difference between 'A' and 'a'</li>
              <li>What pattern do you see in the binary for letters?</li>
              <li>Type your name and watch the codes change!</li>
              <li>Can you find all the special characters on your keyboard?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="explorer-section comparison-section">
        <h3>🔍 Letter Comparison</h3>
        <div className="comparison-display">
          <div className="compare-pair">
            <div className="compare-item">
              <div className="compare-char">A</div>
              <div className="compare-code">65</div>
            </div>
            <div className="compare-arrow">vs</div>
            <div className="compare-item">
              <div className="compare-char">a</div>
              <div className="compare-code">97</div>
            </div>
          </div>
          <div className="compare-note">
            Difference: <strong>32</strong> (This works for ALL letters!)
          </div>
        </div>

        <div className="comparison-display">
          <div className="compare-pair">
            <div className="compare-item">
              <div className="compare-char">0</div>
              <div className="compare-code">48</div>
            </div>
            <div className="compare-arrow">vs</div>
            <div className="compare-item">
              <div className="compare-char">9</div>
              <div className="compare-code">57</div>
            </div>
          </div>
          <div className="compare-note">
            Number characters are sequential: 0=48, 1=49, 2=50... 9=57
          </div>
        </div>
      </div>
    </div>
  );
}

export default ASCIIExplorer;
