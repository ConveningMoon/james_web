import express from 'express';
import { login, register } from './controllers/authController';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Construction Company API');
});

// In your backend's index.ts
app.get('/test', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});


app.post('/register', register);

app.post('/login', login);
