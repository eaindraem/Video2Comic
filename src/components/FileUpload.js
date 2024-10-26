import React from 'react';

function FileUpload({ setResult }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResult("Comic result will be displayed here!"); 
    }
  };

  return (
    <div className="file-upload">
      <label htmlFor="fileInput" className="upload-label">Upload Video:</label>
      <input
        id="fileInput"
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUpload;
