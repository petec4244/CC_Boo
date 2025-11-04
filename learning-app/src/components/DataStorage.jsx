import { useState } from 'react';
import './DataStorage.css';

function DataStorage() {
  const [bytes, setBytes] = useState(1000000);

  const units = {
    bits: { name: 'Bits', multiplier: 8, symbol: 'b' },
    bytes: { name: 'Bytes', multiplier: 1, symbol: 'B' },
    kilobytes: { name: 'Kilobytes', multiplier: 1/1024, symbol: 'KB' },
    megabytes: { name: 'Megabytes', multiplier: 1/(1024*1024), symbol: 'MB' },
    gigabytes: { name: 'Gigabytes', multiplier: 1/(1024*1024*1024), symbol: 'GB' },
    terabytes: { name: 'Terabytes', multiplier: 1/(1024*1024*1024*1024), symbol: 'TB' }
  };

  const convertBytes = (bytes, toUnit) => {
    return (bytes * units[toUnit].multiplier).toFixed(2);
  };

  const examples = [
    { name: 'Single Character', bytes: 1, icon: '📝', description: 'One letter like "A"' },
    { name: 'Text Message', bytes: 160, icon: '💬', description: 'A short SMS' },
    { name: 'Email (text only)', bytes: 5000, icon: '📧', description: 'Simple email' },
    { name: 'High-res Photo', bytes: 3000000, icon: '📸', description: 'Smartphone photo' },
    { name: 'MP3 Song (3 min)', bytes: 3000000, icon: '🎵', description: 'Music file' },
    { name: 'HD Movie (2 hours)', bytes: 4000000000, icon: '🎬', description: 'Full HD video' },
    { name: 'Video Game', bytes: 50000000000, icon: '🎮', description: 'Modern AAA game' }
  ];

  const storageDevices = [
    { name: 'Floppy Disk', capacity: 1.44 * 1024 * 1024, year: '1980s', icon: '💾' },
    { name: 'CD-ROM', capacity: 700 * 1024 * 1024, year: '1990s', icon: '💿' },
    { name: 'DVD', capacity: 4.7 * 1024 * 1024 * 1024, year: '2000s', icon: '📀' },
    { name: 'USB Flash Drive', capacity: 32 * 1024 * 1024 * 1024, year: '2000s', icon: '💽' },
    { name: 'Blu-ray', capacity: 50 * 1024 * 1024 * 1024, year: '2000s', icon: '📀' },
    { name: 'SSD (1TB)', capacity: 1024 * 1024 * 1024 * 1024, year: '2020s', icon: '💻' }
  ];

  return (
    <div className="data-storage">
      <h2>💾 Data Storage & File Sizes</h2>
      <p className="subtitle">Learn how computers measure and store information!</p>

      <div className="intro-box">
        <h3>🔑 Key Concepts</h3>
        <div className="concepts-grid">
          <div className="concept-card">
            <div className="concept-icon">⚛️</div>
            <h4>Bit</h4>
            <p>The smallest unit! Just a 0 or 1</p>
          </div>
          <div className="concept-card">
            <div className="concept-icon">📦</div>
            <h4>Byte</h4>
            <p>8 bits = 1 byte. Can store one character!</p>
          </div>
          <div className="concept-card">
            <div className="concept-icon">📚</div>
            <h4>Kilobyte (KB)</h4>
            <p>1,024 bytes. A small text file</p>
          </div>
          <div className="concept-card">
            <div className="concept-icon">🖼️</div>
            <h4>Megabyte (MB)</h4>
            <p>1,024 KB. A photo or song</p>
          </div>
          <div className="concept-card">
            <div className="concept-icon">🎬</div>
            <h4>Gigabyte (GB)</h4>
            <p>1,024 MB. Movies and games</p>
          </div>
          <div className="concept-card">
            <div className="concept-icon">💿</div>
            <h4>Terabyte (TB)</h4>
            <p>1,024 GB. Huge storage!</p>
          </div>
        </div>
      </div>

      <div className="converter-section">
        <h3>🔄 Size Converter</h3>
        <p>Try converting different file sizes!</p>
        <div className="converter-input">
          <input
            type="number"
            value={bytes}
            onChange={(e) => setBytes(Number(e.target.value) || 0)}
            placeholder="Enter number of bytes"
          />
          <span>bytes</span>
        </div>
        <div className="conversion-results">
          {Object.entries(units).map(([key, unit]) => (
            <div key={key} className="conversion-result">
              <span className="result-label">{unit.name}:</span>
              <span className="result-value">{convertBytes(bytes, key)} {unit.symbol}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="examples-section">
        <h3>📊 Real-World Examples</h3>
        <p>How big are common files?</p>
        <div className="examples-grid">
          {examples.map((example, index) => (
            <div
              key={index}
              className="example-card"
              onClick={() => setBytes(example.bytes)}
            >
              <div className="example-icon">{example.icon}</div>
              <h4>{example.name}</h4>
              <div className="example-size">
                {example.bytes < 1024 ? `${example.bytes} B` :
                 example.bytes < 1024*1024 ? `${(example.bytes/1024).toFixed(1)} KB` :
                 example.bytes < 1024*1024*1024 ? `${(example.bytes/1024/1024).toFixed(1)} MB` :
                 `${(example.bytes/1024/1024/1024).toFixed(1)} GB`}
              </div>
              <p className="example-desc">{example.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="storage-timeline">
        <h3>⏳ Storage Through Time</h3>
        <p>See how storage has evolved!</p>
        <div className="timeline">
          {storageDevices.map((device, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{device.icon}</div>
              <div className="timeline-content">
                <h4>{device.name}</h4>
                <div className="timeline-year">{device.year}</div>
                <div className="timeline-capacity">
                  {device.capacity < 1024*1024*1024 ?
                    `${(device.capacity/1024/1024).toFixed(0)} MB` :
                    `${(device.capacity/1024/1024/1024).toFixed(0)} GB`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="comparison-section">
        <h3>🔍 Size Comparisons</h3>
        <div className="comparison-grid">
          <div className="comparison-card">
            <h4>How many text messages fit in 1 MB?</h4>
            <div className="comparison-calc">
              <div className="calc-step">1 MB = 1,048,576 bytes</div>
              <div className="calc-step">1 text message ≈ 160 bytes</div>
              <div className="calc-result">≈ 6,554 text messages!</div>
            </div>
          </div>
          <div className="comparison-card">
            <h4>How many songs fit on a 32 GB USB drive?</h4>
            <div className="comparison-calc">
              <div className="calc-step">32 GB = 32,768 MB</div>
              <div className="calc-step">1 song ≈ 3 MB</div>
              <div className="calc-result">≈ 10,922 songs!</div>
            </div>
          </div>
          <div className="comparison-card">
            <h4>How many HD movies fit on 1 TB?</h4>
            <div className="comparison-calc">
              <div className="calc-step">1 TB = 1,024 GB</div>
              <div className="calc-step">1 HD movie ≈ 4 GB</div>
              <div className="calc-result">≈ 256 movies!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts-storage">
        <h3>🤯 Mind-Blowing Facts</h3>
        <div className="facts-list">
          <div className="fact-item">
            <span className="fact-icon">🧠</span>
            <p>The human brain can store about <strong>2.5 petabytes</strong> (2,500 terabytes) of information!</p>
          </div>
          <div className="fact-item">
            <span className="fact-icon">📱</span>
            <p>A modern smartphone has more storage than all of NASA had in 1969 when they sent humans to the moon!</p>
          </div>
          <div className="fact-item">
            <span className="fact-icon">🌍</span>
            <p>All the data on the internet is estimated to be around <strong>120 zettabytes</strong> (120 trillion gigabytes)!</p>
          </div>
          <div className="fact-item">
            <span className="fact-icon">💿</span>
            <p>A single Blu-ray disc can hold 50 GB - that's 35,000 floppy disks worth of data!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataStorage;
