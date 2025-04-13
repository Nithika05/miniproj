// src/pages/Upload.js
// import React, { useState } from 'react';
// import { uploadToIPFS } from '../utils/ipfs';

// function Upload({ user }) {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     if (file) {
//       const result = await uploadToIPFS(file, user);
//       alert(`Uploaded: ${result.path}`);
//     }
//   };

//   return (
//     <div className="panel">
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <div className="button-group">
//       <button onClick={handleUpload}>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default Upload;

// 
// src/pages/Upload.js

import React, { useState } from 'react';

function Upload({ user }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage(''); // Clear old messages
  };

  const handleUpload = () => {
    if (!file) {
      setMessage('❌ No file selected');
      return;
    }

    // Simulate a successful upload
    setTimeout(() => {
      setMessage('✅ Upload successful');
    }, 1000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input type="file" onChange={handleFileChange} />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default Upload;
