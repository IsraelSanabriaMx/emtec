import React from 'react';

import PageTitle from '../../_shared/PageTitle/PageTitle';
import useFetchData from '../../hooks/useFetchData';
import Card from '../../_shared/Card/Card';
import './NowPlaying.css';

const NowPlaying = () => {
  const { response, error, loading } = useFetchData('/movies/nowPlaying');
  const genreList = useFetchData('/genres/List');

  if (error || genreList.error) {
    return <PageTitle>Error</PageTitle>;
  }

  if (loading || genreList.loading) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>

      <div className="main_container">
        {
          response.results.length > 0 && response.results.map((result, index) => (
            <Card key={index} {...result} genreList={genreList.response.genres} />
          ))
        }
      </div>
    </React.Fragment>
  );
};

export default NowPlaying;
