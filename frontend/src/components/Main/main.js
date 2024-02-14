// Main.js

import React, { useState } from 'react';
import UserManagement from '../UserManagement/userManagement';

const Main = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'dashboard':
                return <p>Dashboard Content Goes Here</p>;
            case 'userManagement':
                return <UserManagement />;
            // Add more cases for additional options
            default:
                return <p>Select an option from the sidebar</p>;
        }
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
                    <div style={{ cursor: 'pointer' }} onClick={() => handleOptionClick('dashboard')}>
                        Dashboard
                    </div>
                    <div style={{ cursor: 'pointer' }} onClick={() => handleOptionClick('userManagement')}>
                        User Management
                    </div>
                    {/* Add more sidebar options as needed */}
                </div>

                {/* Content Area */}
                <div style={{ flex: 1, marginLeft: '20px' }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Main;
