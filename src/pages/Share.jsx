// src/pages/Share.js
import React, { useEffect, useState } from 'react';
import { getUserFiles, shareFile } from '../utils/ipfs';

function Share({ user }) {
  const [files, setFiles] = useState([]);
  const [receiver, setReceiver] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getUserFiles(user).then(setFiles);
  }, [user]);

  return (
    <div className="panel">
      <input 
            type="text" 
            placeholder="Receiver's Ethereum Address" 
            style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
            onChange={(e) => setReceiver(e.target.value)} 
       />
      <select onChange={(e) => setSelected(e.target.value)}>
        {files.map((f, i) => (
          <option key={i} value={f.cid}>{f.name}</option>
        ))}
      </select>
      <div className="button-group">
      <button onClick={() => shareFile(user, receiver, selected)}>Share</button>
      </div>
    </div>
  );
}

export default Share;
