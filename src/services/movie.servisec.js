import axios from 'axios';

const API_KEY = 'a138309b07f4565abd84a04ed7875785';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchPopular = async () => {
  const options = {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  };

  try {
    const { data } = await axios.get('/trending/movie/day', options);
    return data;
  } catch (error) {
    alert("Oops, something's wrong!");
  }
};

export const getMovieDetailsPage = async movieId => {
  const options = {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  };

  try {
    const { data } = await axios.get(`/movie/${movieId}`, options);
    return data;
  } catch (error) {
    alert("Oops, something's wrong!");
  }
};

export async function searchMovie(query) {
  const options = {
    params: {
      language: 'en-US',
      api_key: API_KEY,
      query,
      page: 1,
    },
  };

  try {
    const { data } = await axios.get(`/search/movie`, options);
    // console.log(data.results);

    return data.results;
  } catch (error) {}
}

export async function getMovieCast(movieId) {
  const options = {
    params: {
      language: 'en-US',
      api_key: API_KEY,
      page: 1,
    },
  };

  try {
    const {
      data: { cast },
    } = await axios.get(`movie/${movieId}/credits`, options);

    return cast;
  } catch (error) {}
}

export async function getMovieReviews(movieId) {
  const options = {
    params: {
      language: 'en-US',
      api_key: API_KEY,
      page: 1,
    },
  };

  try {
    const {
      data: { results },
    } = await axios.get(`movie/${movieId}/reviews`, options);

    return results;
  } catch (error) {}
}
