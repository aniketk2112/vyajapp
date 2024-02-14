// App.js

import React, { useState } from 'react';
import Login from './components/Login/login';
import Main from './components/Main/main';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a successful login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate a logout
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Main />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
