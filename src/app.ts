import express from 'express';
import { config } from 'dotenv';

// Environment variables
config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/health', (req, res) => {
    res.json('UP');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});