import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import cookieParser from "cookie-parser";
import config from './config';
import fileUpload from 'express-fileupload';

// routes
import userRoute from './routes/user.router';
import mediaLoginRoute from './routes/mediaLogin.router';

const app = express();
app.use(fileUpload());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

// connect to mongoDB
const connectMongoDB = async () => {
  let databaseUrl = await config.DATABASE_URL;
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('connect successfuly to mongoDB!');
  } catch (error) {
    console.error('connect MongoDB has error: ' + error);
  }
};

connectMongoDB();

// route
app.use('/api', userRoute);
app.use('/api', mediaLoginRoute);

export default app;
