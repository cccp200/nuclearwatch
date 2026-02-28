const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('.'));

// Redirect root to your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'drone-mission-planner.html'));
});

// Serve your main app
app.get('/drone-mission-planner.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'drone-mission-planner.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`NuclearWatch running on port ${port}`);
});
