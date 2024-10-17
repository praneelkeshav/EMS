import React, { useState } from 'react';

const MonthlyReport = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const dropZoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '10px',
    width: '400px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const buttonStyles = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  };

  const buttonHoverStyles = {
    backgroundColor: '#ddd',
  };

  return (
    <div style={containerStyles}>
      <div 
        style={dropZoneStyles}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <p><strong>Drag your Files Here or</strong></p>
        <input
          type="file"
          id="file-upload"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <label
          htmlFor="file-upload"
          style={buttonStyles}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ddd'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
        >
          <i className="fas fa-upload"></i> Upload File
        </label>
        {file && <p>Selected File: {file.name}</p>}
      </div>
    </div>
  );
};

export default MonthlyReport;
