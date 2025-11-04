import { useState } from 'react';
import './ComputerWorks.css';

function ComputerWorks() {
  const [selectedComponent, setSelectedComponent] = useState('cpu');
  const [cpuStep, setCpuStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const components = {
    cpu: {
      name: 'CPU (Brain)',
      icon: '🧠',
      color: '#3498db',
      description: 'The Central Processing Unit is the brain of the computer. It performs calculations and executes instructions.'
    },
    memory: {
      name: 'RAM (Short-term Memory)',
      icon: '💾',
      color: '#e74c3c',
      description: 'Random Access Memory stores data temporarily while programs are running. It\'s fast but loses data when power is off.'
    },
    storage: {
      name: 'Hard Drive (Long-term Memory)',
      icon: '💿',
      color: '#27ae60',
      description: 'Stores all your files, programs, and the operating system permanently, even when the computer is off.'
    },
    motherboard: {
      name: 'Motherboard (Highway)',
      icon: '🛣️',
      color: '#f39c12',
      description: 'Connects all computer components together, allowing them to communicate with each other.'
    },
    gpu: {
      name: 'GPU (Graphics)',
      icon: '🎮',
      color: '#9b59b6',
      description: 'Graphics Processing Unit handles displaying images, videos, and games on your screen.'
    },
    power: {
      name: 'Power Supply (Heart)',
      icon: '⚡',
      color: '#e67e22',
      description: 'Provides electrical power to all components. Without it, nothing works!'
    }
  };

  const cpuSteps = [
    { step: 'Fetch', description: 'Get the next instruction from memory', icon: '📥' },
    { step: 'Decode', description: 'Figure out what the instruction means', icon: '🔍' },
    { step: 'Execute', description: 'Perform the actual operation', icon: '⚙️' },
    { step: 'Store', description: 'Save the result back to memory', icon: '💾' }
  ];

  const animateCPU = () => {
    setIsAnimating(true);
    setCpuStep(0);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < cpuSteps.length) {
        setCpuStep(currentStep);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
        setCpuStep(0);
      }
    }, 1500);
  };

  const speedComparison = [
    { name: 'CPU', operations: '3,000,000,000', unit: 'operations/sec', icon: '🧠', color: '#3498db' },
    { name: 'RAM Access', time: '0.00000010', unit: 'seconds', icon: '💾', color: '#e74c3c' },
    { name: 'SSD Read', time: '0.00010', unit: 'seconds', icon: '⚡', color: '#27ae60' },
    { name: 'HDD Read', time: '0.010', unit: 'seconds', icon: '💿', color: '#f39c12' }
  ];

  return (
    <div className="computer-works">
      <div className="works-header">
        <h2>💻 How Computers Work</h2>
        <p>Discover the amazing components that make computers function!</p>
      </div>

      {/* Computer Diagram */}
      <div className="works-section">
        <h3>🔧 Computer Components</h3>
        <p className="section-intro">
          Click on each component to learn what it does!
        </p>

        <div className="computer-diagram">
          {Object.keys(components).map(key => (
            <div
              key={key}
              className={`component-box ${selectedComponent === key ? 'selected' : ''}`}
              style={{ borderColor: components[key].color }}
              onClick={() => setSelectedComponent(key)}
            >
              <div className="component-icon">{components[key].icon}</div>
              <div className="component-name">{components[key].name}</div>
            </div>
          ))}
        </div>

        <div className="component-detail" style={{ borderLeftColor: components[selectedComponent].color }}>
          <div className="detail-header">
            <span className="detail-icon">{components[selectedComponent].icon}</span>
            <h4>{components[selectedComponent].name}</h4>
          </div>
          <p>{components[selectedComponent].description}</p>
        </div>
      </div>

      {/* CPU Cycle Animation */}
      <div className="works-section cpu-section">
        <h3>🧠 How the CPU Works: The Fetch-Decode-Execute Cycle</h3>
        <p className="section-intro">
          The CPU follows these steps billions of times per second!
        </p>

        <button
          className="animate-btn"
          onClick={animateCPU}
          disabled={isAnimating}
        >
          {isAnimating ? '⚡ Running...' : '▶️ Start CPU Cycle'}
        </button>

        <div className="cpu-cycle">
          {cpuSteps.map((step, index) => (
            <div
              key={index}
              className={`cpu-step ${index === cpuStep && isAnimating ? 'active' : ''} ${index < cpuStep && isAnimating ? 'completed' : ''}`}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{index + 1}</div>
              <div className="step-name">{step.step}</div>
              <div className="step-desc">{step.description}</div>
            </div>
          ))}
        </div>

        <div className="cpu-fact">
          <div className="fact-highlight">
            💡 <strong>Mind-Blowing Fact:</strong> Modern CPUs can complete this cycle over
            <span className="highlight-number"> 3 billion times per second!</span>
          </div>
        </div>
      </div>

      {/* Speed Comparison */}
      <div className="works-section speed-section">
        <h3>⚡ Speed Comparison</h3>
        <p className="section-intro">
          See how fast different computer components operate!
        </p>

        <div className="speed-grid">
          {speedComparison.map((item, index) => (
            <div key={index} className="speed-card" style={{ borderColor: item.color }}>
              <div className="speed-icon">{item.icon}</div>
              <div className="speed-name">{item.name}</div>
              <div className="speed-value" style={{ color: item.color }}>
                {item.operations || item.time}
              </div>
              <div className="speed-unit">{item.unit}</div>
            </div>
          ))}
        </div>

        <div className="speed-analogy">
          <h4>🏃 Real World Analogy</h4>
          <div className="analogy-grid">
            <div className="analogy-item">
              <div className="analogy-title">If CPU was 1 second:</div>
              <div className="analogy-fact">RAM would be <strong>30 seconds</strong></div>
            </div>
            <div className="analogy-item">
              <div className="analogy-title">If RAM was 1 second:</div>
              <div className="analogy-fact">SSD would be <strong>17 minutes</strong></div>
            </div>
            <div className="analogy-item">
              <div className="analogy-title">If SSD was 1 second:</div>
              <div className="analogy-fact">HDD would be <strong>2 minutes</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* Binary Logic */}
      <div className="works-section logic-section">
        <h3>💡 How Computers Think: Binary Logic</h3>
        <p className="section-intro">
          Computers use tiny switches (transistors) that can be ON (1) or OFF (0).
        </p>

        <div className="transistor-demo">
          <div className="demo-row">
            <div className="switch-visual off">
              <div className="switch-icon">⭕</div>
              <div className="switch-label">OFF = 0</div>
              <div className="switch-desc">No electricity flowing</div>
            </div>
            <div className="switch-visual on">
              <div className="switch-icon">⚡</div>
              <div className="switch-label">ON = 1</div>
              <div className="switch-desc">Electricity flowing</div>
            </div>
          </div>

          <div className="transistor-fact">
            <p>
              Modern CPUs contain <strong>billions of transistors</strong>!
              <br />
              By combining these simple ON/OFF switches, computers can do amazing things.
            </p>
          </div>
        </div>

        <div className="binary-examples">
          <h4>🔢 What 8 transistors can represent:</h4>
          <div className="binary-grid">
            <div className="binary-example">
              <div className="binary-bits">01000001</div>
              <div className="binary-meaning">= Letter 'A'</div>
            </div>
            <div className="binary-example">
              <div className="binary-bits">00101010</div>
              <div className="binary-meaning">= Number 42</div>
            </div>
            <div className="binary-example">
              <div className="binary-bits">11111111</div>
              <div className="binary-meaning">= Number 255</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Journey */}
      <div className="works-section journey-section">
        <h3>🚀 Journey of Data: Opening a Photo</h3>
        <p className="section-intro">
          Let's follow what happens when you double-click a photo!
        </p>

        <div className="journey-steps">
          <div className="journey-step">
            <div className="journey-number">1</div>
            <div className="journey-content">
              <div className="journey-icon">🖱️</div>
              <div className="journey-title">Click</div>
              <div className="journey-desc">
                Your mouse sends a signal to the CPU: "User wants to open this file!"
              </div>
            </div>
          </div>

          <div className="journey-arrow">↓</div>

          <div className="journey-step">
            <div className="journey-number">2</div>
            <div className="journey-content">
              <div className="journey-icon">💿</div>
              <div className="journey-title">Load from Storage</div>
              <div className="journey-desc">
                The hard drive finds the photo file (millions of 0s and 1s).
              </div>
            </div>
          </div>

          <div className="journey-arrow">↓</div>

          <div className="journey-step">
            <div className="journey-number">3</div>
            <div className="journey-content">
              <div className="journey-icon">💾</div>
              <div className="journey-title">Copy to RAM</div>
              <div className="journey-desc">
                The photo data is copied to RAM for faster access.
              </div>
            </div>
          </div>

          <div className="journey-arrow">↓</div>

          <div className="journey-step">
            <div className="journey-number">4</div>
            <div className="journey-content">
              <div className="journey-icon">🧠</div>
              <div className="journey-title">CPU Processing</div>
              <div className="journey-desc">
                CPU decodes the binary data and prepares it for display.
              </div>
            </div>
          </div>

          <div className="journey-arrow">↓</div>

          <div className="journey-step">
            <div className="journey-number">5</div>
            <div className="journey-content">
              <div className="journey-icon">🎮</div>
              <div className="journey-title">GPU Rendering</div>
              <div className="journey-desc">
                GPU converts the data into pixels with colors.
              </div>
            </div>
          </div>

          <div className="journey-arrow">↓</div>

          <div className="journey-step">
            <div className="journey-number">6</div>
            <div className="journey-content">
              <div className="journey-icon">🖥️</div>
              <div className="journey-title">Display</div>
              <div className="journey-desc">
                Your monitor shows the photo! All in less than a second!
              </div>
            </div>
          </div>
        </div>

        <div className="journey-time">
          ⚡ This entire process typically takes less than <strong>100 milliseconds</strong> (0.1 seconds)!
        </div>
      </div>

      {/* Fun Facts */}
      <div className="works-section facts-section">
        <h3>🤯 Mind-Blowing Computer Facts</h3>
        <div className="facts-grid">
          <div className="fact-box">
            <div className="fact-icon">🔬</div>
            <div className="fact-title">Tiny Transistors</div>
            <div className="fact-text">
              Modern transistors are so small, you could fit
              <strong> 10,000 of them</strong> across the width of a human hair!
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-icon">⚡</div>
            <div className="fact-title">Super Fast</div>
            <div className="fact-text">
              In one second, your CPU can do more calculations than a human
              could do in <strong>100 years</strong>!
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-icon">🌡️</div>
            <div className="fact-title">Hot Stuff</div>
            <div className="fact-text">
              A working CPU can reach <strong>100°C (212°F)</strong> - as hot as
              boiling water! That's why computers need fans.
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-icon">📊</div>
            <div className="fact-title">Moore's Law</div>
            <div className="fact-text">
              Computer power has roughly <strong>doubled every 2 years</strong>
              since the 1970s. Your phone is more powerful than supercomputers from the 1980s!
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-icon">🎨</div>
            <div className="fact-title">Pixel Power</div>
            <div className="fact-text">
              A modern GPU can render <strong>billions of pixels per second</strong>,
              creating smooth 3D graphics and videos.
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-icon">🧮</div>
            <div className="fact-title">Binary Everything</div>
            <div className="fact-text">
              Everything you see on a computer - photos, videos, music, text -
              is ultimately just <strong>billions of 0s and 1s</strong>!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerWorks;
