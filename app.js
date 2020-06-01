import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';

// routes
import listRoutes from './routes/api/lists';
import reminderRoutes from './routes/api/reminders';

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

app.use(bodyParser.json());

const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

mongoose
    .connect(db, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB OK'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/lists', listRoutes);
app.use('/api/reminders', reminderRoutes);

export default app;

