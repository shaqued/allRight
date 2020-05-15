import {join} from 'path';
import apiRouter from '../../api/index';
import createError from 'http-errors';

export default app => {
  app.use('/api', apiRouter);

  // All undefined api routes should return a 404
  app.route('/:url(api|auth)/*')
    .get((req, res, next) => {
      next(createError(404));
    });

  app.route('/*')
    .get((req, res) => res.sendFile(join(__dirname, '..', '..', '..', 'client', 'index.html')));
};
