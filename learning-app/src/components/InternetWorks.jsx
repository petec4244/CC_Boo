import { useState, useEffect } from 'react';
import './InternetWorks.css';

function InternetWorks() {
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('journey');
  const [ipAddress, setIpAddress] = useState('192.168.1.100');

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);

    const steps = [0, 1, 2, 3, 4, 5];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps.length) {
        setAnimationStep(currentStep);
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 1500);
  };

  const renderJourney = () => (
    <div className="topic-content">
      <div className="intro-section">
        <h3>🌐 How Does Data Travel on the Internet?</h3>
        <p>When you visit a website, your data takes an amazing journey! Let's follow it step by step.</p>
        <button onClick={startAnimation} disabled={isAnimating} className="start-animation-btn">
          {isAnimating ? '🔄 Watching Journey...' : '▶️ Start Journey'}
        </button>
      </div>

      <div className="journey-visualization">
        <div className={`journey-step ${animationStep >= 1 ? 'active' : ''}`}>
          <div className="step-icon">💻</div>
          <div className="step-content">
            <h4>1. Your Computer</h4>
            <p>You type "www.google.com" and press Enter!</p>
            {animationStep >= 1 && <div className="packet">📦 Data Packet Created!</div>}
          </div>
        </div>

        {animationStep >= 1 && <div className="journey-arrow">↓</div>}

        <div className={`journey-step ${animationStep >= 2 ? 'active' : ''}`}>
          <div className="step-icon">📡</div>
          <div className="step-content">
            <h4>2. Your Router</h4>
            <p>Your home router sends the request to your Internet Service Provider (ISP)</p>
            {animationStep >= 2 && <div className="packet">📦 Passing through...</div>}
          </div>
        </div>

        {animationStep >= 2 && <div className="journey-arrow">↓</div>}

        <div className={`journey-step ${animationStep >= 3 ? 'active' : ''}`}>
          <div className="step-icon">🏢</div>
          <div className="step-content">
            <h4>3. DNS Server</h4>
            <p>DNS (Domain Name System) translates "www.google.com" into an IP address: 172.217.164.206</p>
            {animationStep >= 3 && <div className="packet">📦 Got the address!</div>}
          </div>
        </div>

        {animationStep >= 3 && <div className="journey-arrow">↓</div>}

        <div className={`journey-step ${animationStep >= 4 ? 'active' : ''}`}>
          <div className="step-icon">🌍</div>
          <div className="step-content">
            <h4>4. Through the Internet</h4>
            <p>Your request travels through many routers and cables (sometimes under the ocean!) to reach Google's server</p>
            {animationStep >= 4 && <div className="packet">📦 Traveling far!</div>}
          </div>
        </div>

        {animationStep >= 4 && <div className="journey-arrow">↓</div>}

        <div className={`journey-step ${animationStep >= 5 ? 'active' : ''}`}>
          <div className="step-icon">🖥️</div>
          <div className="step-content">
            <h4>5. Google's Server</h4>
            <p>Google's server receives your request and prepares the webpage</p>
            {animationStep >= 5 && <div className="packet">📦 Processing...</div>}
          </div>
        </div>

        {animationStep >= 5 && <div className="journey-arrow journey-arrow-return">↑</div>}

        <div className={`journey-step ${animationStep >= 6 ? 'active' : ''}`}>
          <div className="step-icon">🎉</div>
          <div className="step-content">
            <h4>6. Back to You!</h4>
            <p>The webpage travels back through the same path and appears on your screen!</p>
            {animationStep >= 6 && <div className="packet success">📦 Success! Page loaded!</div>}
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <h4>⚡ Amazing Facts:</h4>
        <ul>
          <li>This entire journey takes less than a second!</li>
          <li>Your data might travel thousands of miles</li>
          <li>Data is broken into tiny "packets" that travel separately and reassemble at the destination</li>
          <li>If one path is blocked, packets can take different routes!</li>
        </ul>
      </div>
    </div>
  );

  const renderIPAddress = () => (
    <div className="topic-content">
      <h3>📍 IP Addresses: Internet Addresses</h3>
      <p>Every device on the internet has a unique address called an IP address - just like your home has a street address!</p>

      <div className="ip-demo">
        <div className="ip-visual">
          <h4>Your Computer's IP Address:</h4>
          <div className="ip-address-display">{ipAddress}</div>
          <div className="ip-breakdown">
            {ipAddress.split('.').map((octet, index) => (
              <div key={index} className="ip-octet">
                <div className="octet-value">{octet}</div>
                <div className="octet-label">Part {index + 1}</div>
                <div className="octet-range">0-255</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ip-explanation">
          <h4>Understanding IP Addresses:</h4>
          <div className="explanation-grid">
            <div className="explanation-card">
              <div className="card-icon">🏠</div>
              <h5>Like a Street Address</h5>
              <p>Just like 123 Main Street tells the mailman where to deliver mail, an IP address tells routers where to send data!</p>
            </div>
            <div className="explanation-card">
              <div className="card-icon">🔢</div>
              <h5>Four Numbers</h5>
              <p>An IP address has 4 parts (called octets), each between 0 and 255. They're separated by dots.</p>
            </div>
            <div className="explanation-card">
              <div className="card-icon">🌐</div>
              <h5>Public vs Private</h5>
              <p><strong>Private:</strong> Used in your home (like 192.168.x.x)<br/><strong>Public:</strong> Your address on the internet!</p>
            </div>
            <div className="explanation-card">
              <div className="card-icon">🆕</div>
              <h5>IPv4 vs IPv6</h5>
              <p>We're running out of IPv4 addresses! IPv6 uses longer addresses with letters and numbers.</p>
            </div>
          </div>
        </div>

        <div className="ip-examples">
          <h4>Common IP Addresses:</h4>
          <div className="examples-list">
            <div className="ip-example">
              <code>127.0.0.1</code>
              <span>→ Your own computer (localhost)</span>
            </div>
            <div className="ip-example">
              <code>192.168.1.1</code>
              <span>→ Usually your home router</span>
            </div>
            <div className="ip-example">
              <code>8.8.8.8</code>
              <span>→ Google's DNS server</span>
            </div>
            <div className="ip-example">
              <code>172.217.164.206</code>
              <span>→ A Google server</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDNS = () => (
    <div className="topic-content">
      <h3>📖 DNS: The Internet's Phone Book</h3>
      <p>DNS (Domain Name System) translates website names into IP addresses. It's like a huge contact list for the internet!</p>

      <div className="dns-demo">
        <div className="dns-process">
          <div className="dns-input">
            <div className="input-label">What You Type:</div>
            <div className="website-name">www.example.com</div>
            <div className="friendly-label">Easy to remember! 😊</div>
          </div>

          <div className="dns-arrow">
            <div className="arrow-line"></div>
            <div className="arrow-label">DNS Magic! ✨</div>
            <div className="arrow-head">→</div>
          </div>

          <div className="dns-output">
            <div className="output-label">What Computers Use:</div>
            <div className="ip-result">93.184.216.34</div>
            <div className="computer-label">Actual address! 🖥️</div>
          </div>
        </div>

        <div className="dns-steps">
          <h4>How DNS Works:</h4>
          <div className="steps-list">
            <div className="dns-step">
              <span className="step-number">1</span>
              <div className="step-text">
                <strong>Check Cache:</strong> Your computer first checks if it already knows this website's IP address
              </div>
            </div>
            <div className="dns-step">
              <span className="step-number">2</span>
              <div className="step-text">
                <strong>Ask DNS Server:</strong> If not cached, it asks your ISP's DNS server
              </div>
            </div>
            <div className="dns-step">
              <span className="step-number">3</span>
              <div className="step-text">
                <strong>Get Answer:</strong> DNS server looks up the IP address and sends it back
              </div>
            </div>
            <div className="dns-step">
              <span className="step-number">4</span>
              <div className="step-text">
                <strong>Connect:</strong> Now your computer can connect to the correct server!
              </div>
            </div>
          </div>
        </div>

        <div className="dns-analogy">
          <h4>🏫 School Analogy:</h4>
          <div className="analogy-content">
            <p><strong>Without DNS:</strong> "I need to talk to the person at locker 2847"</p>
            <p><strong>With DNS:</strong> "I need to talk to Sarah!"</p>
            <p className="analogy-explanation">DNS is like knowing your friend's name instead of their locker number. Much easier to remember!</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClientServer = () => (
    <div className="topic-content">
      <h3>🤝 Client-Server: How Computers Talk</h3>
      <p>Most internet communication follows a client-server model. Let's see how it works!</p>

      <div className="client-server-demo">
        <div className="cs-diagram">
          <div className="client-box">
            <div className="box-icon">💻</div>
            <h4>Client (You)</h4>
            <p>Requests information</p>
            <div className="request-bubble">
              "Can I have the homepage?"
            </div>
          </div>

          <div className="cs-arrows">
            <div className="arrow-right">
              <span className="arrow-label">Request →</span>
            </div>
            <div className="arrow-left">
              <span className="arrow-label">← Response</span>
            </div>
          </div>

          <div className="server-box">
            <div className="box-icon">🖥️</div>
            <h4>Server</h4>
            <p>Provides information</p>
            <div className="response-bubble">
              "Here's the homepage!"
            </div>
          </div>
        </div>

        <div className="cs-examples">
          <h4>Real-World Examples:</h4>
          <div className="example-grid">
            <div className="cs-example">
              <div className="example-icon">🎮</div>
              <h5>Online Games</h5>
              <p><strong>Client:</strong> Your game console<br/><strong>Server:</strong> Game company's server</p>
            </div>
            <div className="cs-example">
              <div className="example-icon">📧</div>
              <h5>Email</h5>
              <p><strong>Client:</strong> Your email app<br/><strong>Server:</strong> Gmail/Outlook server</p>
            </div>
            <div className="cs-example">
              <div className="example-icon">🎬</div>
              <h5>Streaming</h5>
              <p><strong>Client:</strong> Your TV/phone<br/><strong>Server:</strong> Netflix/YouTube server</p>
            </div>
            <div className="cs-example">
              <div className="example-icon">💬</div>
              <h5>Chat Apps</h5>
              <p><strong>Client:</strong> Your chat app<br/><strong>Server:</strong> Messaging server</p>
            </div>
          </div>
        </div>

        <div className="cs-key-points">
          <h4>🔑 Key Points:</h4>
          <ul>
            <li><strong>Client:</strong> The device that asks for information (usually yours!)</li>
            <li><strong>Server:</strong> The device that provides information (powerful computers that never sleep!)</li>
            <li><strong>Request:</strong> When you ask for something ("Show me this video")</li>
            <li><strong>Response:</strong> When the server sends back what you asked for</li>
            <li>One server can handle thousands of clients at the same time!</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderConnections = () => (
    <div className="topic-content">
      <h3>📡 Types of Internet Connections</h3>
      <p>There are many ways to connect to the internet. Let's compare them!</p>

      <div className="connections-grid">
        <div className="connection-card wifi">
          <div className="connection-icon">📶</div>
          <h4>Wi-Fi</h4>
          <div className="connection-stats">
            <div className="stat">
              <span className="stat-label">Speed:</span>
              <span className="stat-value">Fast</span>
            </div>
            <div className="stat">
              <span className="stat-label">Range:</span>
              <span className="stat-value">~100 feet</span>
            </div>
          </div>
          <p><strong>How it works:</strong> Uses radio waves to connect wirelessly to your router</p>
          <div className="pros-cons">
            <div className="pros">
              <strong>👍 Pros:</strong>
              <ul>
                <li>No cables needed!</li>
                <li>Can move around freely</li>
                <li>Connect many devices</li>
              </ul>
            </div>
            <div className="cons">
              <strong>👎 Cons:</strong>
              <ul>
                <li>Slower than wired</li>
                <li>Walls block signal</li>
                <li>Can be less secure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="connection-card ethernet">
          <div className="connection-icon">🔌</div>
          <h4>Ethernet (Wired)</h4>
          <div className="connection-stats">
            <div className="stat">
              <span className="stat-label">Speed:</span>
              <span className="stat-value">Very Fast</span>
            </div>
            <div className="stat">
              <span className="stat-label">Range:</span>
              <span className="stat-value">Cable length</span>
            </div>
          </div>
          <p><strong>How it works:</strong> Physical cable connects your device directly to the router</p>
          <div className="pros-cons">
            <div className="pros">
              <strong>👍 Pros:</strong>
              <ul>
                <li>Fastest speed!</li>
                <li>Most reliable</li>
                <li>More secure</li>
              </ul>
            </div>
            <div className="cons">
              <strong>👎 Cons:</strong>
              <ul>
                <li>Need cables</li>
                <li>Can't move around</li>
                <li>Limited by cable length</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="connection-card cellular">
          <div className="connection-icon">📱</div>
          <h4>Cellular (4G/5G)</h4>
          <div className="connection-stats">
            <div className="stat">
              <span className="stat-label">Speed:</span>
              <span className="stat-value">Fast</span>
            </div>
            <div className="stat">
              <span className="stat-label">Range:</span>
              <span className="stat-value">Miles!</span>
            </div>
          </div>
          <p><strong>How it works:</strong> Uses cell towers to connect anywhere there's coverage</p>
          <div className="pros-cons">
            <div className="pros">
              <strong>👍 Pros:</strong>
              <ul>
                <li>Works anywhere with signal</li>
                <li>Great for phones</li>
                <li>5G is very fast</li>
              </ul>
            </div>
            <div className="cons">
              <strong>👎 Cons:</strong>
              <ul>
                <li>Uses data plan</li>
                <li>Can be expensive</li>
                <li>Coverage varies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="speed-comparison">
        <h4>⚡ Speed Comparison:</h4>
        <div className="speed-bars">
          <div className="speed-bar">
            <div className="bar-label">Dialup (Old!)</div>
            <div className="bar-visual" style={{width: '5%'}}></div>
            <div className="bar-speed">0.05 Mbps</div>
          </div>
          <div className="speed-bar">
            <div className="bar-label">DSL</div>
            <div className="bar-visual" style={{width: '20%'}}></div>
            <div className="bar-speed">10 Mbps</div>
          </div>
          <div className="speed-bar">
            <div className="bar-label">Cable</div>
            <div className="bar-visual" style={{width: '50%'}}></div>
            <div className="bar-speed">100 Mbps</div>
          </div>
          <div className="speed-bar">
            <div className="bar-label">Fiber Optic</div>
            <div className="bar-visual" style={{width: '100%'}}></div>
            <div className="bar-speed">1000 Mbps (1 Gbps)</div>
          </div>
        </div>
        <p className="speed-note">1000 Mbps = Can download a movie in seconds!</p>
      </div>
    </div>
  );

  return (
    <div className="internet-works">
      <h2>🌐 How the Internet Works</h2>
      <p className="subtitle">Discover the magic behind connecting the world!</p>

      <div className="topic-nav">
        <button
          className={selectedTopic === 'journey' ? 'active' : ''}
          onClick={() => setSelectedTopic('journey')}
        >
          📦 Data Journey
        </button>
        <button
          className={selectedTopic === 'ip' ? 'active' : ''}
          onClick={() => setSelectedTopic('ip')}
        >
          📍 IP Addresses
        </button>
        <button
          className={selectedTopic === 'dns' ? 'active' : ''}
          onClick={() => setSelectedTopic('dns')}
        >
          📖 DNS
        </button>
        <button
          className={selectedTopic === 'clientserver' ? 'active' : ''}
          onClick={() => setSelectedTopic('clientserver')}
        >
          🤝 Client-Server
        </button>
        <button
          className={selectedTopic === 'connections' ? 'active' : ''}
          onClick={() => setSelectedTopic('connections')}
        >
          📡 Connections
        </button>
      </div>

      <div className="topic-display">
        {selectedTopic === 'journey' && renderJourney()}
        {selectedTopic === 'ip' && renderIPAddress()}
        {selectedTopic === 'dns' && renderDNS()}
        {selectedTopic === 'clientserver' && renderClientServer()}
        {selectedTopic === 'connections' && renderConnections()}
      </div>
    </div>
  );
}

export default InternetWorks;
