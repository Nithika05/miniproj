// src/pages/Download.js
// import React, { useEffect, useState } from 'react';
// import { getUserFiles, downloadFromIPFS } from '../utils/ipfs';

// function Download({ user }) {
//   const [files, setFiles] = useState([]);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     getUserFiles(user).then(setFiles);
//   }, [user]);

//   return (
//     <div className="panel">
//       <select onChange={(e) => setSelected(e.target.value)}>
//         {files.map((f, i) => (
//           <option key={i} value={f.cid}>{f.name}</option>
//         ))}
//       </select>
//       <div className="button-group">
//             <button onClick={() => downloadFromIPFS(selected)}>Download</button>
//       </div>
//     </div>
//   );
// }

// export default Download;

import React, { useEffect, useState } from 'react';
import { getUserFiles, downloadFromIPFS } from '../utils/ipfs';

function Download({ user }) {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getUserFiles(user).then(setFiles);
  }, [user]);

  const handleDownload = () => {
    if (selected) {
      downloadFromIPFS(selected);
      setMessage('✅ File downloaded');
    } else {
      setMessage('⚠️ Please select a file to download.');
    }
  };

  return (
    <div className="panel">
      <select onChange={(e) => setSelected(e.target.value)} defaultValue="">
        <option value="" disabled>Select a file</option>
        {files.map((f, i) => (
          <option key={i} value={f.cid}>{f.name}</option>
        ))}
      </select>
      <div className="button-group">
        <button onClick={handleDownload}>Download</button>
      </div>
      {message && <p style={{ textAlign: 'center', marginTop: '10px' }}>{message}</p>}
    </div>
  );
}

export default Download;
