// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                username,
                password,
            });

            // Assuming the API responds with a success message
            console.log(response.data.message);

            // Call the onLogin prop to notify the parent component about successful login
            onLogin();
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }

    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
