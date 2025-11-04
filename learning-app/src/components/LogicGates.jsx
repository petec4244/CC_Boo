import { useState } from 'react';
import './LogicGates.css';

function LogicGates() {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [selectedGate, setSelectedGate] = useState('AND');

  const gates = {
    AND: {
      name: 'AND Gate',
      symbol: '&',
      icon: '🔗',
      color: '#3498db',
      description: 'Output is TRUE only if BOTH inputs are TRUE',
      truthTable: [
        { a: false, b: false, result: false },
        { a: false, b: true, result: false },
        { a: true, b: false, result: false },
        { a: true, b: true, result: true }
      ],
      calculate: (a, b) => a && b,
      realWorld: 'Like needing BOTH a key AND a password to unlock something'
    },
    OR: {
      name: 'OR Gate',
      symbol: '|',
      icon: '🔀',
      color: '#e74c3c',
      description: 'Output is TRUE if AT LEAST ONE input is TRUE',
      truthTable: [
        { a: false, b: false, result: false },
        { a: false, b: true, result: true },
        { a: true, b: false, result: true },
        { a: true, b: true, result: true }
      ],
      calculate: (a, b) => a || b,
      realWorld: 'Like a door that opens with EITHER a keycard OR a code'
    },
    NOT: {
      name: 'NOT Gate',
      symbol: '!',
      icon: '🔄',
      color: '#f39c12',
      description: 'Output is the OPPOSITE of the input',
      truthTable: [
        { a: false, result: true },
        { a: true, result: false }
      ],
      calculate: (a) => !a,
      realWorld: 'Like a light switch - OFF becomes ON, ON becomes OFF',
      singleInput: true
    },
    NAND: {
      name: 'NAND Gate',
      symbol: '⊼',
      icon: '🚫',
      color: '#9b59b6',
      description: 'Output is FALSE only if BOTH inputs are TRUE (opposite of AND)',
      truthTable: [
        { a: false, b: false, result: true },
        { a: false, b: true, result: true },
        { a: true, b: false, result: true },
        { a: true, b: true, result: false }
      ],
      calculate: (a, b) => !(a && b),
      realWorld: 'Like an alarm that goes OFF unless BOTH conditions are met'
    },
    NOR: {
      name: 'NOR Gate',
      symbol: '⊽',
      icon: '⛔',
      color: '#27ae60',
      description: 'Output is TRUE only if BOTH inputs are FALSE (opposite of OR)',
      truthTable: [
        { a: false, b: false, result: true },
        { a: false, b: true, result: false },
        { a: true, b: false, result: false },
        { a: true, b: true, result: false }
      ],
      calculate: (a, b) => !(a || b),
      realWorld: 'Like a system that only works when NOTHING is active'
    },
    XOR: {
      name: 'XOR Gate',
      symbol: '⊕',
      icon: '↔️',
      color: '#e67e22',
      description: 'Output is TRUE if inputs are DIFFERENT',
      truthTable: [
        { a: false, b: false, result: false },
        { a: false, b: true, result: true },
        { a: true, b: false, result: true },
        { a: true, b: true, result: false }
      ],
      calculate: (a, b) => a !== b,
      realWorld: 'Like a toggle - works when ONE switch is ON, but not both'
    }
  };

  const currentGate = gates[selectedGate];
  const output = currentGate.singleInput
    ? currentGate.calculate(inputA)
    : currentGate.calculate(inputA, inputB);

  const boolToString = (val) => val ? '1' : '0';
  const boolToText = (val) => val ? 'TRUE' : 'FALSE';

  return (
    <div className="logic-gates">
      <div className="gates-header">
        <h2>⚡ Boolean Logic Gates</h2>
        <p>Learn the building blocks of computer logic!</p>
      </div>

      {/* Gate Selector */}
      <div className="gates-section">
        <h3>🎯 Choose a Logic Gate</h3>
        <div className="gate-selector">
          {Object.keys(gates).map(key => (
            <button
              key={key}
              className={`gate-btn ${selectedGate === key ? 'active' : ''}`}
              style={{
                borderColor: gates[key].color,
                background: selectedGate === key ? gates[key].color : 'white',
                color: selectedGate === key ? 'white' : gates[key].color
              }}
              onClick={() => setSelectedGate(key)}
            >
              <span className="gate-icon">{gates[key].icon}</span>
              <span className="gate-name">{gates[key].name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Gate Simulator */}
      <div className="gates-section">
        <h3>🔧 Interactive Gate Simulator</h3>
        <div className="gate-info-box" style={{ borderLeftColor: currentGate.color }}>
          <div className="info-header">
            <span className="info-icon">{currentGate.icon}</span>
            <h4>{currentGate.name}</h4>
          </div>
          <p className="gate-description">{currentGate.description}</p>
          <p className="gate-realworld">
            <strong>Real World Example:</strong> {currentGate.realWorld}
          </p>
        </div>

        <div className="simulator-box">
          <div className="simulator-inputs">
            <div className="input-group">
              <label>Input A:</label>
              <button
                className={`input-toggle ${inputA ? 'on' : 'off'}`}
                onClick={() => setInputA(!inputA)}
              >
                <span className="toggle-icon">{inputA ? '⚡' : '⭕'}</span>
                <span className="toggle-value">{boolToString(inputA)}</span>
                <span className="toggle-label">{boolToText(inputA)}</span>
              </button>
            </div>

            {!currentGate.singleInput && (
              <div className="input-group">
                <label>Input B:</label>
                <button
                  className={`input-toggle ${inputB ? 'on' : 'off'}`}
                  onClick={() => setInputB(!inputB)}
                >
                  <span className="toggle-icon">{inputB ? '⚡' : '⭕'}</span>
                  <span className="toggle-value">{boolToString(inputB)}</span>
                  <span className="toggle-label">{boolToText(inputB)}</span>
                </button>
              </div>
            )}
          </div>

          <div className="gate-visual" style={{ borderColor: currentGate.color }}>
            <div className="gate-symbol" style={{ color: currentGate.color }}>
              {currentGate.icon}
            </div>
            <div className="gate-label">{selectedGate}</div>
          </div>

          <div className="simulator-output">
            <div className="output-group">
              <label>Output:</label>
              <div className={`output-display ${output ? 'on' : 'off'}`}>
                <span className="output-icon">{output ? '✅' : '❌'}</span>
                <span className="output-value">{boolToString(output)}</span>
                <span className="output-label">{boolToText(output)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Truth Table */}
      <div className="gates-section">
        <h3>📊 Truth Table for {currentGate.name}</h3>
        <p className="section-intro">
          All possible input combinations and their outputs:
        </p>
        <div className="truth-table">
          <div className="truth-header">
            <div>Input A</div>
            {!currentGate.singleInput && <div>Input B</div>}
            <div>Output</div>
          </div>
          {currentGate.truthTable.map((row, index) => (
            <div
              key={index}
              className={`truth-row ${
                (currentGate.singleInput && row.a === inputA) ||
                (!currentGate.singleInput && row.a === inputA && row.b === inputB)
                  ? 'current' : ''
              }`}
            >
              <div className={row.a ? 'on' : 'off'}>{boolToString(row.a)}</div>
              {!currentGate.singleInput && (
                <div className={row.b ? 'on' : 'off'}>{boolToString(row.b)}</div>
              )}
              <div className={row.result ? 'on' : 'off'}>{boolToString(row.result)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Combined Gates Example */}
      <div className="gates-section">
        <h3>🔗 Combining Gates: Real Circuit Example</h3>
        <p className="section-intro">
          Logic gates can be combined to create more complex circuits!
        </p>

        <div className="circuit-example">
          <h4>Alarm System Circuit</h4>
          <p className="circuit-desc">
            An alarm that triggers when the door is open OR the window is open,
            AND the system is armed:
          </p>

          <div className="circuit-diagram">
            <div className="circuit-step">
              <div className="circuit-label">Door Sensor</div>
              <div className="circuit-box">Input A</div>
            </div>
            <div className="circuit-arrow">→</div>
            <div className="circuit-step">
              <div className="circuit-label">OR Gate</div>
              <div className="circuit-box" style={{ borderColor: gates.OR.color }}>
                {gates.OR.icon}
              </div>
            </div>
            <div className="circuit-arrow">→</div>
            <div className="circuit-step">
              <div className="circuit-label">AND Gate</div>
              <div className="circuit-box" style={{ borderColor: gates.AND.color }}>
                {gates.AND.icon}
              </div>
            </div>
            <div className="circuit-arrow">→</div>
            <div className="circuit-step">
              <div className="circuit-label">Alarm</div>
              <div className="circuit-box">Output</div>
            </div>
          </div>

          <div className="circuit-note">
            This is how computers make complex decisions using simple gates!
          </div>
        </div>
      </div>

      {/* Practical Applications */}
      <div className="gates-section applications-section">
        <h3>🌟 Where Logic Gates Are Used</h3>
        <div className="applications-grid">
          <div className="app-card">
            <div className="app-icon">🖥️</div>
            <h4>Computer CPUs</h4>
            <p>
              Modern CPUs contain billions of logic gates working together to
              process instructions and perform calculations.
            </p>
          </div>

          <div className="app-card">
            <div className="app-icon">🎮</div>
            <h4>Video Games</h4>
            <p>
              Game controllers use logic gates to detect button combinations
              and trigger special moves or actions.
            </p>
          </div>

          <div className="app-card">
            <div className="app-icon">🚦</div>
            <h4>Traffic Lights</h4>
            <p>
              Traffic control systems use logic gates to determine when lights
              should change based on sensor inputs.
            </p>
          </div>

          <div className="app-card">
            <div className="app-icon">🏠</div>
            <h4>Smart Homes</h4>
            <p>
              Home automation uses logic gates to control lights, thermostats,
              and security systems based on various conditions.
            </p>
          </div>

          <div className="app-card">
            <div className="app-icon">📱</div>
            <h4>Smartphones</h4>
            <p>
              Every app, every touch, every notification - all processed through
              billions of logic gates in the phone's processor.
            </p>
          </div>

          <div className="app-card">
            <div className="app-icon">🔐</div>
            <h4>Encryption</h4>
            <p>
              XOR gates are especially important in encryption, helping to
              keep your online data secure.
            </p>
          </div>
        </div>
      </div>

      {/* Fun Challenges */}
      <div className="gates-section challenges-section">
        <h3>🎯 Try These Challenges!</h3>
        <div className="challenges-grid">
          <div className="challenge-card">
            <div className="challenge-number">1</div>
            <div className="challenge-content">
              <h4>Find the Pattern</h4>
              <p>
                Try each gate with different inputs. Can you predict the
                output before clicking?
              </p>
            </div>
          </div>

          <div className="challenge-card">
            <div className="challenge-number">2</div>
            <div className="challenge-content">
              <h4>NAND is Universal</h4>
              <p>
                Did you know? You can build ANY logic gate using only NAND gates!
                Try to figure out how.
              </p>
            </div>
          </div>

          <div className="challenge-card">
            <div className="challenge-number">3</div>
            <div className="challenge-content">
              <h4>Design a Circuit</h4>
              <p>
                How would you design a circuit for a car that only starts when
                the key is in AND the seatbelt is fastened?
              </p>
            </div>
          </div>

          <div className="challenge-card">
            <div className="challenge-number">4</div>
            <div className="challenge-content">
              <h4>XOR Secret</h4>
              <p>
                XOR is used in encryption! If you XOR a message twice with the
                same key, you get the original message back.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="gates-section facts-section">
        <h3>🤯 Mind-Blowing Logic Facts</h3>
        <div className="facts-list">
          <div className="fact-item">
            <div className="fact-icon">💡</div>
            <div className="fact-text">
              Your computer performs <strong>trillions</strong> of logic gate operations
              every second - just to display this text!
            </div>
          </div>

          <div className="fact-item">
            <div className="fact-icon">🔬</div>
            <div className="fact-text">
              The first logic gates were made with mechanical relays and vacuum tubes.
              They were huge, hot, and unreliable!
            </div>
          </div>

          <div className="fact-item">
            <div className="fact-icon">🎓</div>
            <div className="fact-text">
              Boolean algebra was invented by George Boole in 1854, almost 100 years
              before the first computer!
            </div>
          </div>

          <div className="fact-item">
            <div className="fact-icon">🌐</div>
            <div className="fact-text">
              Every website, app, and video game is ultimately just a complex
              arrangement of these simple logic gates!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogicGates;
