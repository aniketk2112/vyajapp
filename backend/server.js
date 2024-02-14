// server.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const users = [
    {
        id: 1,
        username: 'demo',
        password: 'demo', // Hashed password for 'demo'
    },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    else {
        if (password == user.password) {
            res.json({ message: 'Login successful' });
        }
    }

    // Compare the provided password with the hashed password
    // bcrypt.compare(password, user.password, (err, result) => {
    //     if (err || !result) {
    //         return res.status(401).json({ message: 'Invalid username or password' });
    //     }

    //     res.json({ message: 'Login successful' });
    // });
});


app.post('/create-user', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        if (users.find((user) => user.username === username)) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = {
            id: users.length + 1,
            username,
            password: hashedPassword,
        };

        users.push(newUser);

        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.log('User creation failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
