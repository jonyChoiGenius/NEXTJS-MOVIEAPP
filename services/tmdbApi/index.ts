import axios from "axios";

const tmdb_api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY
const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: tmdb_api_key,
      language: "ko-KR",
    },
  });

  export const getRecommenations = (movie_id:number) => tmdbApi.get(`/movie/${movie_id}/recommendations`)
  export const getMovieDetail = (movieId:number) => tmdbApi.get(`/movie/${movieId}`)
  export const getSearchData = (serchValue)=>{tmdbApi.get(
    `/search/movie?include_adult=false&query=${serchValue}`
  )}

  export const requests = {
    fetchNowPlaying: "movie/now_playing",
    fetchTrending: "/trending/movie/week",
    fetchTopRated: "/movie/top_rated",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchDocumentaries: "/discover/movie?with_genres=99",
  };
  
  export default tmdbApi;