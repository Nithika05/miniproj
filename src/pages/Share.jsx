// src/pages/Share.js
// import React, { useEffect, useState } from 'react';
// import { getUserFiles, shareFile } from '../utils/ipfs';

// function Share({ user }) {
//   const [files, setFiles] = useState([]);
//   const [receiver, setReceiver] = useState('');
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     getUserFiles(user).then(setFiles);
//   }, [user]);

//   return (
//     <div className="panel">
//       <input 
//             type="text" 
//             placeholder="Receiver's Ethereum Address" 
//             style={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '8px',
//                 border: '1px solid #ccc',
//                 boxSizing: 'border-box'
//               }}
//             onChange={(e) => setReceiver(e.target.value)} 
//        />
//       <select onChange={(e) => setSelected(e.target.value)}>
//         {files.map((f, i) => (
//           <option key={i} value={f.cid}>{f.name}</option>
//         ))}
//       </select>
//       <div className="button-group">
//       <button onClick={() => shareFile(user, receiver, selected)}>Share</button>
//       </div>
//     </div>
//   );
// }

// export default Share;

import React, { useEffect, useState } from 'react';
import { getUserFiles, shareFile } from '../utils/ipfs';

function Share({ user }) {
  const [files, setFiles] = useState([]);
  const [receiver, setReceiver] = useState('');
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getUserFiles(user).then(setFiles);
  }, [user]);

  const handleShare = () => {
    if (!receiver || !selected) {
      setMessage('⚠️ Please enter receiver address and select a file.');
      return;
    }

    try {
      shareFile(user, receiver, selected);
      setMessage(`✅ File shared successfully to ${receiver}`);
    } catch (error) {
      setMessage('❌ Failed to share file.');
      console.error(error);
    }
  };

  return (
    <div className="panel">
      <input
        type="text"
        placeholder="Receiver's Ethereum Address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <select onChange={(e) => setSelected(e.target.value)} defaultValue="">
        <option value="" disabled>Select a file</option>
        {files.map((f, i) => (
          <option key={i} value={f.cid}>{f.name}</option>
        ))}
      </select>
      <div className="button-group">
        <button onClick={handleShare}>Share</button>
      </div>
      {message && <p style={{ textAlign: 'center', marginTop: '10px' }}>{message}</p>}
    </div>
  );
}

export default Share;
