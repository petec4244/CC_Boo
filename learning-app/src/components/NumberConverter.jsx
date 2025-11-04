import { useState } from 'react';
import './NumberConverter.css';

function NumberConverter() {
  const [decimal, setDecimal] = useState(42);
  const [activeInput, setActiveInput] = useState('decimal');

  const decimalToBinary = (num) => {
    if (num === 0) return '00000000';
    const binary = num.toString(2);
    return binary.padStart(8, '0');
  };

  const decimalToHex = (num) => {
    const hex = num.toString(16).toUpperCase();
    return hex.padStart(2, '0');
  };

  const handleDecimalChange = (value) => {
    const num = parseInt(value) || 0;
    if (num >= 0 && num <= 255) {
      setDecimal(num);
      setActiveInput('decimal');
    }
  };

  const handleBinaryChange = (value) => {
    const cleanBinary = value.replace(/[^01]/g, '').slice(0, 8);
    if (cleanBinary.length > 0) {
      const num = parseInt(cleanBinary, 2);
      setDecimal(num);
      setActiveInput('binary');
    }
  };

  const handleHexChange = (value) => {
    const cleanHex = value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 2);
    if (cleanHex.length > 0) {
      const num = parseInt(cleanHex, 16);
      setDecimal(num);
      setActiveInput('hex');
    }
  };

  const getBinaryBreakdown = () => {
    const binary = decimalToBinary(decimal);
    return binary.split('').map((bit, index) => ({
      bit,
      value: parseInt(bit) * Math.pow(2, 7 - index)
    }));
  };

  const getHexBreakdown = () => {
    const hex = decimalToHex(decimal);
    const firstDigit = hex[0];
    const secondDigit = hex[1];
    return {
      first: {
        digit: firstDigit,
        value: parseInt(firstDigit, 16) * 16
      },
      second: {
        digit: secondDigit,
        value: parseInt(secondDigit, 16)
      }
    };
  };

  return (
    <div className="number-converter">
      <h2>🔄 Number System Converter</h2>
      <p className="subtitle">See how Binary, Decimal, and Hexadecimal connect!</p>

      <div className="tutorial-box">
        <h3>💡 Understanding the Connection</h3>
        <p>The same number can be written in different ways:</p>
        <ul>
          <li><strong>Binary (Base 2):</strong> Uses only 0 and 1 - How computers actually work!</li>
          <li><strong>Decimal (Base 10):</strong> Uses 0-9 - How humans normally count!</li>
          <li><strong>Hexadecimal (Base 16):</strong> Uses 0-9 and A-F - A shortcut for programmers!</li>
        </ul>
        <p><strong>Why use Hex?</strong> It's much shorter! 4 binary digits = 1 hex digit</p>
      </div>

      <div className="converter-grid">
        <div className={`number-card decimal ${activeInput === 'decimal' ? 'active' : ''}`}>
          <div className="card-header">
            <span className="card-icon">🔢</span>
            <h3>Decimal</h3>
            <span className="base-label">Base 10</span>
          </div>
          <input
            type="number"
            min="0"
            max="255"
            value={decimal}
            onChange={(e) => handleDecimalChange(e.target.value)}
            className="number-input decimal-input"
          />
          <p className="card-description">This is how we normally count: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...</p>
        </div>

        <div className={`number-card binary ${activeInput === 'binary' ? 'active' : ''}`}>
          <div className="card-header">
            <span className="card-icon">💻</span>
            <h3>Binary</h3>
            <span className="base-label">Base 2</span>
          </div>
          <input
            type="text"
            value={decimalToBinary(decimal)}
            onChange={(e) => handleBinaryChange(e.target.value)}
            className="number-input binary-input"
            placeholder="00000000"
            maxLength="8"
          />
          <div className="breakdown">
            <p className="breakdown-title">Bit Values:</p>
            <div className="bit-breakdown">
              {getBinaryBreakdown().map((item, index) => (
                <div key={index} className={`bit-item ${item.bit === '1' ? 'on' : 'off'}`}>
                  <div className="bit-position">{Math.pow(2, 7 - index)}</div>
                  <div className="bit-value">{item.bit}</div>
                  {item.bit === '1' && <div className="contributes">+{item.value}</div>}
                </div>
              ))}
            </div>
            <p className="sum-explanation">
              {getBinaryBreakdown()
                .filter(b => b.bit === '1')
                .map(b => b.value)
                .join(' + ')} = {decimal}
            </p>
          </div>
        </div>

        <div className={`number-card hex ${activeInput === 'hex' ? 'active' : ''}`}>
          <div className="card-header">
            <span className="card-icon">🎨</span>
            <h3>Hexadecimal</h3>
            <span className="base-label">Base 16</span>
          </div>
          <div className="hex-input-container">
            <span className="hex-prefix">0x</span>
            <input
              type="text"
              value={decimalToHex(decimal)}
              onChange={(e) => handleHexChange(e.target.value)}
              className="number-input hex-input"
              placeholder="00"
              maxLength="2"
            />
          </div>
          <div className="breakdown">
            <p className="breakdown-title">Hex Breakdown:</p>
            <div className="hex-breakdown">
              <div className="hex-digit-item">
                <div className="hex-digit">{getHexBreakdown().first.digit}</div>
                <div className="hex-calculation">× 16 = {getHexBreakdown().first.value}</div>
              </div>
              <div className="plus-sign">+</div>
              <div className="hex-digit-item">
                <div className="hex-digit">{getHexBreakdown().second.digit}</div>
                <div className="hex-calculation">× 1 = {getHexBreakdown().second.value}</div>
              </div>
            </div>
            <p className="sum-explanation">
              {getHexBreakdown().first.value} + {getHexBreakdown().second.value} = {decimal}
            </p>
          </div>
          <div className="hex-chart-mini">
            <p className="chart-title">Hex Digits:</p>
            <div className="hex-digits-row">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="hex-chart-item">
                  <span className="hex-char">{i.toString(16).toUpperCase()}</span>
                  <span className="hex-dec">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="conversion-examples">
        <h3>🎯 Quick Examples - Try These!</h3>
        <div className="examples-grid">
          <button onClick={() => setDecimal(0)} className="example-btn">
            <span className="ex-dec">0</span>
            <span className="ex-bin">00000000</span>
            <span className="ex-hex">0x00</span>
          </button>
          <button onClick={() => setDecimal(15)} className="example-btn">
            <span className="ex-dec">15</span>
            <span className="ex-bin">00001111</span>
            <span className="ex-hex">0x0F</span>
          </button>
          <button onClick={() => setDecimal(42)} className="example-btn">
            <span className="ex-dec">42</span>
            <span className="ex-bin">00101010</span>
            <span className="ex-hex">0x2A</span>
          </button>
          <button onClick={() => setDecimal(128)} className="example-btn">
            <span className="ex-dec">128</span>
            <span className="ex-bin">10000000</span>
            <span className="ex-hex">0x80</span>
          </button>
          <button onClick={() => setDecimal(255)} className="example-btn">
            <span className="ex-dec">255</span>
            <span className="ex-bin">11111111</span>
            <span className="ex-hex">0xFF</span>
          </button>
        </div>
      </div>

      <div className="key-insights">
        <h3>🔑 Key Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon">⚡</div>
            <h4>Binary to Hex Shortcut</h4>
            <p>Split binary into groups of 4 bits. Each group = 1 hex digit!</p>
            <div className="insight-example">
              <code>1111 0101</code>
              <span>↓</span>
              <code>F 5</code>
              <span>=</span>
              <code>0xF5</code>
            </div>
          </div>
          <div className="insight-card">
            <div className="insight-icon">🎯</div>
            <h4>Why 8 Bits?</h4>
            <p>8 bits = 1 byte. A byte can store values 0-255, perfect for characters and colors!</p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">🌈</div>
            <h4>Colors Use Hex!</h4>
            <p>RGB colors like #FF6496 use 3 hex bytes: FF (red), 64 (green), 96 (blue)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberConverter;
