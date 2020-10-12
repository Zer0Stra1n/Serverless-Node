import express from 'express';
import cors from 'cors';
import evenContext from 'aws-serverless-express/middleware';
import mediaRoutes from './media/routes';

const app = express();

//Set up basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(evenContext);

// Which routes to use
app.use('/media', mediaRoutes);

export default app;