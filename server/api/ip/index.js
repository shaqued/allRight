// eslint-disable-next-line import/named
import {getById, getAll, update, destroy, create, validate, suggestedIps, getOwnerIps, addComment} from './ip.controller';
import {AsyncRouter} from 'express-async-router';
import objectId from 'express-param-objectid';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '/uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', getAll);
router.get('/:id', getById);
router.get('/ownerIps/:id', getOwnerIps);
router.post('/', upload.single('image'), validate('create'), create);
router.get('/:id/suggestedIps', suggestedIps);
router.put('/:id', validate('update'), upload.single('image'), update);
router.put('/:id/addComment', validate('addComment'), addComment);
router.delete('/:id', destroy);

export default router;
