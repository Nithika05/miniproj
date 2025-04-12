// src/pages/Upload.js
import React, { useState } from 'react';
import { uploadToIPFS } from '../utils/ipfs';

function Upload({ user }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (file) {
      const result = await uploadToIPFS(file, user);
      alert(`Uploaded: ${result.path}`);
    }
  };

  return (
    <div className="panel">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <div className="button-group">
      <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default Upload;
