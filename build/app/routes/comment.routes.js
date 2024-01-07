import express from 'express';
import { findAll, findByPk, create, remove } from '../controllers/comment.controller';
const router = express.Router();
router.get('/comment', findAll);
router.get('/comment/:id', findByPk);
router.post('/comment', create);
router.delete('/comment/:id', remove);
const setupCommentRoutes = (app) => {
    app.use('/api', router);
};
export default setupCommentRoutes;
