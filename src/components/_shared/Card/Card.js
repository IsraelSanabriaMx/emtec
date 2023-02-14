import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ poster_path, title, vote_average, overview, genre_ids, genreList, id, isFromFavorites = false }) => {
  const poster = `https://image.tmdb.org/t/p/original${poster_path}`;

  const [cardState, setCardState] = useState(true);

  const toogleCard = () => {
    setCardState(!cardState);
  };

  const frontClass = {
    display: cardState ? 'block' : 'none'
  };

  const backClass = {
    display: !cardState ? 'block' : 'none'
  };

  const getGenresTxt = (genreIds) => {
    const genres = genreIds.map((id) => {
      const found = genreList.find(genre => genre.id === id);

      return found.name;
    });

    return genres.join(', ');
  };

  const addToFavorites = () => {
    // TODO
    // const data = {
    //   'media_type': 'movie',
    //   'media_id': id,
    //   'favorite': true
    // };

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // };

    // const apiKey = 'b8359a48e865c6dff15dbc8a38c60bd1'; // Check the email for the API key

    // const URL = `https://api.themoviedb.org/3/account/0/favorite?api_key=${apiKey}`;
    // fetch(URL, requestOptions)
    //   .then(response => response.json())
    //   .then(res => console.log(res));
    console.log('TODO: Add to favorites', id);
  };

  return (
    <div className='card-container'>
      <div onClick={() => toogleCard()}>
        <div id='front' style={frontClass}>
          <img src={poster} className='front-img' alt={title} />
          <div className='front-text'>
            <p>Title: {title}</p>
            <p>Raiting: {vote_average}</p>
          </div>
        </div>

        <div id='back' style={backClass}>
          <div className='back-cover'>
            <div className='back-image'>
              <img src={poster} className='back-img' alt={title} />
            </div>
            <div className='back-text'>
              <p>Title: {title}</p>
              <p>Raiting: {vote_average}</p>
              <p>Genre: {getGenresTxt(genre_ids)}</p>
            </div>
          </div>
          <div className='back-description'>
            <p><strong>Description:</strong><br />{overview}</p>
            <p><strong>Cast:</strong><br />Lorem Ipsum</p>
          </div>
        </div>
      </div>
      {!isFromFavorites &&
        <button onClick={() => addToFavorites()} className='btn'>
          Add to Favorites
        </button>
      }
    </div>
  )
};

Card.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genre_ids: PropTypes.array,
  genreList: PropTypes.array,
  id: PropTypes.number,
  isFromFavorites: PropTypes.bool,
};

export default Card;