// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import './styles.css';
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [storedUser, setStoredUser] = useState(() => JSON.parse(localStorage.getItem('registeredUser')));

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/Login"
          element={<Login setUser={setUser} storedUser={storedUser} />}
        />
        <Route
          path="/Signup"
          element={<Signup setStoredUser={setStoredUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;




// src/App.js
// import React from 'react';
// import './styles.css';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="app-container">
//       <header className="header">Decentralized Cloud</header>
//       <Home />
//     </div>
//   );
// }

// export default App;
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Upload from './pages/Upload';
// import Download from './pages/Download';
// import Share from './pages/Share'; // Optional, if you have this
// import './styles.css';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/upload" element={<Upload />} />
//           <Route path="/download" element={<Download />} />
//           <Route path="/share" element={<Share />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

