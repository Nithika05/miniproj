// src/pages/Home.js
// import React, { useState } from 'react';
// import Upload from './Upload';
// import Download from './Download';
// import Share from './Share';

// function Home() {
//   const [ethAddress, setEthAddress] = useState('');
//   const [action, setAction] = useState('upload');

//   return (
//     <div className="home">
//       <input
//         type="text"
//         placeholder="Enter your Ethereum address"
//         style={{
//             width: '100%',
//             padding: '10px',
//             borderRadius: '8px',
//             border: '1px solid #ccc',
//             boxSizing: 'border-box'
//           }}
//         value={ethAddress}
//         onChange={(e) => setEthAddress(e.target.value)}
//         className="input"
//       />
//       <select className="dropdown" value={action} onChange={(e) => setAction(e.target.value)}>
//         <option value="upload">Upload</option>
//         <option value="download">Download</option>
//         <option value="share">Share</option>
//       </select>

//       <div className="action-area">
//         {action === 'upload' && <Upload user={ethAddress} />}
//         {action === 'download' && <Download user={ethAddress} />}
//         {action === 'share' && <Share user={ethAddress} />}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import Upload from './Upload';
import Download from './Download';
import Share from './Share';
import '../styles/Home.css'; // <- Make sure this is linked!

function Home() {
  const [ethAddress, setEthAddress] = useState('');
  const [action, setAction] = useState('upload');

  return (
    <div className="home-container">
      <div className="form-box">
        <input
          type="text"
          placeholder="Enter your Ethereum address"
          value={ethAddress}
          onChange={(e) => setEthAddress(e.target.value)}
        />

        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="upload">Upload</option>
          <option value="download">Download</option>
          <option value="share">Share</option>
        </select>

        <div className="action-area">
          {action === 'upload' && <Upload user={ethAddress} />}
          {action === 'download' && <Download user={ethAddress} />}
          {action === 'share' && <Share user={ethAddress} />}
        </div>
      </div>
    </div>
  );
}

export default Home;



// src/pages/Home.js
// import React from 'react';

// function Home({ user }) {
//   return (
//     <div className="home-container">
//       <h2>Welcome to the Decentralized Storage App</h2>
//       <p>Logged in as: {user.address}</p>
//     </div>
//   );
// }

// export default Home;
