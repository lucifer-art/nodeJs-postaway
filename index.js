import express from 'express';
import userRouter from './src/features/user/user.routes.js';

const server = express();
server.use(express.json());

server.use('/api', userRouter);
export default server;