import express from 'express';
import userRouter from './src/features/user/user.routes.js';
import { ApplicationError } from './src/error-handler/applicationError.js';

const server = express();
server.use(express.json());

server.use('/api', userRouter);

server.use((err, req, res, next) => {
    if(err instanceof ApplicationError) {
        res.status(err.code).send({message: err.message});
    }
    res.status(500).send('Something went wrong, please try later');
})

server.use((req, res) => {
    res.status(404).send('API not found. Please check our documentation for more information at localhost:3200/api-docs');
})
export default server;