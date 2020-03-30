import logger from 'env-bunyan';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI);