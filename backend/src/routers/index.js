import express                from 'express';
import superHeroCardRouter from './superHeroCardRouter';

const router = express.Router();

router.use(superHeroCardRouter);

export default router;
