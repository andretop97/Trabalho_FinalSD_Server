import express from 'express';
import { router } from './routes';
import { connection } from './database/MongoDB/Connection';
import cors from 'cors';
const app = express();
app.use(cors());

connection();

app.use(express.json());
app.use(router);

export { app };
