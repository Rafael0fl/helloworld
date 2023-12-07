import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from './routes/mianRouter.js';

const server = express();

// Middlewares
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

// Routes
server.use(mainRouter);

export default server;