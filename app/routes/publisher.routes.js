import express from 'express';
import { findAll, findByPk, create, update, remove } from '../controllers/publisher.controller';
const router = express.Router();
router.get('/publisher', findAll);
router.get('/publisher/:id', findByPk);
router.post('/publisher', create);
router.put('/publisher/:id', update);
router.delete('/publisher/:id', remove);
const setupPublisherRoutes = (app) => {
    app.use('/api', router);
};
export default setupPublisherRoutes;
