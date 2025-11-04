import { useState } from 'react';
import './HexExplorer.css';

function HexExplorer() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(150);

  const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const decimalToHex = (decimal) => {
    const hex = decimal.toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
  };

  const getColorHex = () => {
    return `#${decimalToHex(red)}${decimalToHex(green)}${decimalToHex(blue)}`;
  };

  const ColorSlider = ({ label, value, onChange, color }) => (
    <div className="color-slider">
      <label>{label}</label>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className={`slider ${color}`}
        />
        <div className="value-display">
          <span className="decimal">{value}</span>
          <span className="hex">0x{decimalToHex(value)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="hex-explorer">
      <h2>🎨 Hexadecimal Color Explorer</h2>
      <p className="subtitle">Learn hexadecimal by mixing colors!</p>

      <div className="color-preview" style={{ backgroundColor: getColorHex() }}>
        <div className="hex-code">{getColorHex()}</div>
      </div>

      <div className="sliders">
        <ColorSlider label="🔴 Red" value={red} onChange={setRed} color="red" />
        <ColorSlider label="🟢 Green" value={green} onChange={setGreen} color="green" />
        <ColorSlider label="🔵 Blue" value={blue} onChange={setBlue} color="blue" />
      </div>

      <div className="preset-colors">
        <h3>Try these preset colors:</h3>
        <div className="preset-buttons">
          <button onClick={() => { setRed(255); setGreen(0); setBlue(0); }}>
            Red (#FF0000)
          </button>
          <button onClick={() => { setRed(0); setGreen(255); setBlue(0); }}>
            Green (#00FF00)
          </button>
          <button onClick={() => { setRed(0); setGreen(0); setBlue(255); }}>
            Blue (#0000FF)
          </button>
          <button onClick={() => { setRed(255); setGreen(255); setBlue(0); }}>
            Yellow (#FFFF00)
          </button>
          <button onClick={() => { setRed(255); setGreen(0); setBlue(255); }}>
            Magenta (#FF00FF)
          </button>
          <button onClick={() => { setRed(0); setGreen(255); setBlue(255); }}>
            Cyan (#00FFFF)
          </button>
        </div>
      </div>

      <div className="learn-section">
        <h3>💡 Understanding Hexadecimal:</h3>
        <div className="hex-chart">
          <div className="chart-header">
            <strong>Hexadecimal (Base 16)</strong>
          </div>
          <div className="hex-grid">
            {hexDigits.map((hex, i) => (
              <div key={i} className="hex-item">
                <div className="hex-digit">{hex}</div>
                <div className="decimal-digit">{i}</div>
              </div>
            ))}
          </div>
        </div>
        <ul className="hex-facts">
          <li>Hexadecimal uses 16 digits: 0-9 and A-F</li>
          <li>A = 10, B = 11, C = 12, D = 13, E = 14, F = 15</li>
          <li>Colors use 6 hex digits: 2 for Red, 2 for Green, 2 for Blue</li>
          <li>00 means none of that color, FF (255) means maximum!</li>
          <li>Computers love hex because it's compact - FF is shorter than 255!</li>
        </ul>

        <div className="conversion-example">
          <h4>🔢 How to Convert:</h4>
          <p><strong>Example: Convert 175 to hex</strong></p>
          <div className="steps">
            <div>1. Divide 175 by 16 = 10 remainder 15</div>
            <div>2. 10 in hex = A, 15 in hex = F</div>
            <div>3. Answer: <strong>AF</strong> in hexadecimal!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HexExplorer;
