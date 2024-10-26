import React from 'react';

function ResultDisplay({ result }) {
  return (
    <div className="result-display">
      {result ? <p>{result}</p> : <p>Upload a video to see your comic result here.</p>}
    </div>
  );
}

export default ResultDisplay;
