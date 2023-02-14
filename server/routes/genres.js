import express from 'express';

import { getGenresList } from '../services/genres';

let router = express.Router();

router.get('/List', async (req, res) => {
  let genres;
  await getGenresList()
    .then((response) => {
      genres = response;
    })
    .catch((error) => {
      console.log(error);
      genres = error;
    });
  return res.json(genres);
});

export default router;
