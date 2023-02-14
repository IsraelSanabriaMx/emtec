import express from 'express';

import test from './test';
import favorites from './favorites';
import movies from './movies';
import genres from './genres';

let router = express.Router();

router.use('/test', test);
router.use('/movies', favorites);
router.use('/movies', movies);
router.use('/genres', genres);

export default router;
