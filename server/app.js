import 'dotenv-extended/config';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import createApp from './config/express/index.js';
import seed from './config/mongoose';
import mongoose from 'mongoose';
import logger from 'env-bunyan';

export const app = createApp();

const mongoStarted = seed();

export let server;

const expressStarted = new Promise(resolve => {
  server = app.listen(process.env.PORT, () => {
    logger.info('Express listening on port %s', process.env.PORT);
    resolve();
  });
});

export const started = Promise.all([
  expressStarted
]);

export const close = () => {
  server.close();
  mongoose.connection.close();
};