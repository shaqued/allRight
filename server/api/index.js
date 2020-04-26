import songs from './songs'

export default (app) => {
    app.use('/song', songs);
}