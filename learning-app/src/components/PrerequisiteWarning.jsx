import './PrerequisiteWarning.css';

function PrerequisiteWarning({ moduleName, missingPrereqs, onContinue, onGoBack }) {
  return (
    <div className="prereq-warning-overlay">
      <div className="prereq-warning-content">
        <div className="warning-icon">⚠️</div>
        <h2>Prerequisites Not Completed</h2>
        <p className="warning-message">
          <strong>{moduleName}</strong> works best after completing these modules first:
        </p>
        <ul className="missing-prereqs">
          {missingPrereqs.map((prereq, index) => (
            <li key={index}>
              <span className="prereq-bullet">❌</span>
              {prereq}
            </li>
          ))}
        </ul>
        <div className="warning-explanation">
          <p>
            These modules teach important concepts that will help you understand {moduleName} better.
            You can still continue, but we recommend completing the prerequisites first!
          </p>
        </div>
        <div className="warning-buttons">
          <button className="go-back-btn" onClick={onGoBack}>
            ← Go Back & Learn Prerequisites
          </button>
          <button className="continue-btn" onClick={onContinue}>
            Continue Anyway →
          </button>
        </div>
        <div className="tip">
          💡 <strong>Tip:</strong> Following the recommended path helps you learn step by step!
        </div>
      </div>
    </div>
  );
}

export default PrerequisiteWarning;
