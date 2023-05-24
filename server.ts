import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './src/routes';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express()
const port = process.env.PORT || 5001;
const connectionString = process.env.MONGODB;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
route(app);
app.use(cors());

app.listen(port, async () => {
  await mongoose.connect(connectionString).then(() => {
    console.log('Database connected')
  });
  console.log(`Example app listening on port ${port}`)
})