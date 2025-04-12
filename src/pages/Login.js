// import React from 'react';
// import '../styles/Login.css';

// function Login() {
//   return (
//     <div className="login-container">
//   <form className="login-form">
//     <h1>Login</h1>
//     <input type="text" placeholder="Ethereum Address" />
//     <input type="password" placeholder="Password" />
//     <button type="submit">Login</button>
//   </form>
//  </div>

//   );
// }

// export default Login;

// src/pages/Login.js
// import React, { useState } from 'react';
// import '../styles/Login.css';

// function Login({ setUser, storedUser }) {
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (
//       storedUser &&
//       address === storedUser.address &&
//       password === storedUser.password
//     ) {
//       setUser({ address });
//     } else {
//       setMessage('Login unsuccessful. Invalid credentials.');
//     }
//   };

//   return (
//     <div className="main">
//     {/* <div className="login-container"> */}
//       <form className="login-form" onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <input
//           type="text"
//           placeholder="Ethereum Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         {message && <p style={{ color: 'red' }}>{message}</p>}
//       </form>
//     {/* </div> */}
//     </div>
//   );
// }

// export default Login;

// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login({ setUser, storedUser }) {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      storedUser &&
      address === storedUser.address &&
      password === storedUser.password
    ) {
      setUser({ address });
      navigate('/'); // ✅ redirect to home page
    } else {
      setMessage('Login unsuccessful. Invalid credentials.');
    }
  };

  return (
    <div className="main">
     {/* <div className="login-container"> */}
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Ethereum Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </form>
    {/* </div> */}
    </div>
  );
}

export default Login;
