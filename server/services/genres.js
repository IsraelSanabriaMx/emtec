import https from 'https';

const imdbHost = 'https://api.themoviedb.org';
const genreMovieList = '/3/genre/movie/list';
const apiKey = 'b8359a48e865c6dff15dbc8a38c60bd1'; // Check the email for the API key

const getApiUrl = ({ path, queryParamString }) =>
  `${imdbHost}${path}?api_key=${apiKey}${
    queryParamString ? '&' + queryParamString : ''
  }`;

const makeRequest = (url) =>
  new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      response.setEncoding('utf-8');

      var data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        // console.log(data);
        var responseObject = JSON.parse(data);
        resolve(responseObject);
      });
    });
    request.on('error', (error) => {
      reject(error);
    });
  });

export const getGenresList = () =>
  makeRequest(getApiUrl({ path: genreMovieList }));
