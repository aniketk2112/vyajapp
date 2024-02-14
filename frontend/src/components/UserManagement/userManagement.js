// UserManagement.js

import React, { useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleCreateUser = async () => {
        try {
            const response = await axios.post('http://localhost:3001/create-user', {
                username: newUsername,
                password: newPassword,
            });

            // Assuming the API responds with a success message
            console.log(response.data.message);
        } catch (error) {
            console.error('User creation failed:', error.response.data.message);
        }
    };

    return (
        <div>
            <h2>User Management</h2>
            <div>
                <label>New Username:</label>
                <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter new username"
                />
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                />
                <button type="button" onClick={handleCreateUser}>
                    Create User
                </button>
            </div>
        </div>
    );
};

export default UserManagement;
