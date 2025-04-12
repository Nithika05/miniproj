// src/pages/Download.js
import React, { useEffect, useState } from 'react';
import { getUserFiles, downloadFromIPFS } from '../utils/ipfs';

function Download({ user }) {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getUserFiles(user).then(setFiles);
  }, [user]);

  return (
    <div className="panel">
      <select onChange={(e) => setSelected(e.target.value)}>
        {files.map((f, i) => (
          <option key={i} value={f.cid}>{f.name}</option>
        ))}
      </select>
      <div className="button-group">
            <button onClick={() => downloadFromIPFS(selected)}>Download</button>
      </div>
    </div>
  );
}

export default Download;
