import { useState } from 'react';
import './MemoryVisualizer.css';

function MemoryVisualizer() {
  const [variables, setVariables] = useState([
    { name: 'age', value: 12, type: 'int', address: '0x1000', size: 4 },
    { name: 'score', value: 95, type: 'int', address: '0x1004', size: 4 },
    { name: 'initial', value: 'A', type: 'char', address: '0x1008', size: 1 },
  ]);

  const [newVar, setNewVar] = useState({ name: '', value: '', type: 'int' });

  const getTypeSize = (type) => {
    switch(type) {
      case 'char': return 1;
      case 'int': return 4;
      case 'float': return 4;
      case 'double': return 8;
      default: return 4;
    }
  };

  const getNextAddress = () => {
    if (variables.length === 0) return 0x1000;
    const lastVar = variables[variables.length - 1];
    const lastAddress = parseInt(lastVar.address, 16);
    return lastAddress + lastVar.size;
  };

  const addVariable = () => {
    if (!newVar.name || !newVar.value) return;

    const size = getTypeSize(newVar.type);
    const address = getNextAddress();

    setVariables([
      ...variables,
      {
        name: newVar.name,
        value: newVar.value,
        type: newVar.type,
        address: `0x${address.toString(16).toUpperCase()}`,
        size: size
      }
    ]);

    setNewVar({ name: '', value: '', type: 'int' });
  };

  const removeVariable = (index) => {
    setVariables(variables.filter((_, i) => i !== index));
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'char': return '#e74c3c';
      case 'int': return '#3498db';
      case 'float': return '#f39c12';
      case 'double': return '#9b59b6';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="memory-visualizer">
      <h2>🧠 Memory Visualizer</h2>
      <p className="subtitle">See how computers store data in memory!</p>

      <div className="controls">
        <h3>Add a Variable:</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Variable name"
            value={newVar.name}
            onChange={(e) => setNewVar({ ...newVar, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Value"
            value={newVar.value}
            onChange={(e) => setNewVar({ ...newVar, value: e.target.value })}
          />
          <select
            value={newVar.type}
            onChange={(e) => setNewVar({ ...newVar, type: e.target.value })}
          >
            <option value="char">char (1 byte)</option>
            <option value="int">int (4 bytes)</option>
            <option value="float">float (4 bytes)</option>
            <option value="double">double (8 bytes)</option>
          </select>
          <button onClick={addVariable}>Add Variable</button>
        </div>
      </div>

      <div className="memory-display">
        <h3>Computer Memory</h3>
        <div className="memory-legend">
          <div><span className="legend-box char"></span> char (1 byte)</div>
          <div><span className="legend-box int"></span> int (4 bytes)</div>
          <div><span className="legend-box float"></span> float (4 bytes)</div>
          <div><span className="legend-box double"></span> double (8 bytes)</div>
        </div>

        <div className="memory-blocks">
          {variables.map((variable, index) => (
            <div
              key={index}
              className="memory-block"
              style={{
                backgroundColor: getTypeColor(variable.type),
                width: `${variable.size * 60}px`
              }}
            >
              <button
                className="delete-btn"
                onClick={() => removeVariable(index)}
                title="Remove variable"
              >
                ×
              </button>
              <div className="var-name">{variable.name}</div>
              <div className="var-value">{variable.value}</div>
              <div className="var-type">{variable.type}</div>
              <div className="var-address">{variable.address}</div>
              <div className="var-size">{variable.size} byte{variable.size > 1 ? 's' : ''}</div>
            </div>
          ))}
        </div>

        {variables.length === 0 && (
          <div className="empty-memory">
            <p>Memory is empty! Add some variables to see how they're stored.</p>
          </div>
        )}
      </div>

      <div className="learn-section">
        <h3>💡 How Memory Works:</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>📍 Memory Address</h4>
            <p>Every piece of data has a unique address in memory, like a house address! Addresses are written in hexadecimal (starting with 0x).</p>
          </div>
          <div className="info-card">
            <h4>📏 Data Types & Size</h4>
            <p>Different types of data take up different amounts of space:</p>
            <ul>
              <li><strong>char:</strong> 1 byte (holds a single character)</li>
              <li><strong>int:</strong> 4 bytes (holds whole numbers)</li>
              <li><strong>float:</strong> 4 bytes (holds decimal numbers)</li>
              <li><strong>double:</strong> 8 bytes (holds larger decimal numbers)</li>
            </ul>
          </div>
          <div className="info-card">
            <h4>🔢 What's a Byte?</h4>
            <p>A byte is 8 bits. Remember from the Binary Game? 8 bits can make numbers from 0 to 255!</p>
          </div>
          <div className="info-card">
            <h4>📦 Variables</h4>
            <p>When you create a variable in a program, the computer finds empty space in memory and stores your data there. The variable name helps you remember the address!</p>
          </div>
        </div>

        <div className="code-example">
          <h4>💻 In Real Code:</h4>
          <pre>{`// When you write this in C:
int age = 12;
char initial = 'A';
double pi = 3.14159;

// The computer:
// 1. Finds empty memory space
// 2. Stores each value
// 3. Remembers the address
// 4. Links the name to the address!`}</pre>
        </div>
      </div>
    </div>
  );
}

export default MemoryVisualizer;
