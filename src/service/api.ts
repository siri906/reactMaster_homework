import axios from "axios";

const BASE_PATH = "https://movies-api.nomadcoders.workers.dev";

export const getMovies = async (path: string) => {
  return await axios.get(`${BASE_PATH}/${path}`).then((resultData) => resultData.data);
};

export const getMovieDetail = async (movieId: number) => {
  return await axios.get(`${BASE_PATH}/movie?id=${movieId}`).then((resultData) => resultData.data);
};
