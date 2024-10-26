import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResultDisplay from './components/ResultDisplay';
import './styles.css';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <header>
        <h1>BRUIN AI</h1>
        <h2>Video2Comic</h2>
      </header>
      <section className="upload-section">
        <FileUpload setResult={setResult} />
      </section>
      <section className="result-section">
        <ResultDisplay result={result} />
      </section>
    </div>
  );
}

export default App;
