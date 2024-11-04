import express from 'express';
import cors from 'cors';
import AppRouter from './router/AppRouter.js';

const app = express();

// Disable CORS
app.use(cors());
app.use(express.json());

app.use('/', AppRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});