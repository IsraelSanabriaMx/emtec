import express from 'express';

import { getFavoriteMovies } from '../services/favorites';

let router = express.Router();

router.get('/Favorites', async (req, res) => {
  let favorites;
  await getFavoriteMovies()
    .then((response) => {
      favorites = response;
    })
    .catch((error) => {
      console.log(error);
      favorites = error;
    });
  return res.json(favorites);
});

export default router;
