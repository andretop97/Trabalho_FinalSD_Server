import express from 'express';
import { router } from './routes';
import { connection } from './database/MongoDB/Connection';
import cors from 'cors';

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));

connection();

app.use(express.json());
app.use(router);

export { app };
