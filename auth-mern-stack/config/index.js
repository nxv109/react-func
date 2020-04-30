import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  SECRET: process.env.SECRET,
};
