// import fetch from "node-fetch"
import axios from 'axios'
const BASE_URL = "https://yts.mx/api/v2/"
const API_URL = "https://yts.mx/api/v2/list_movies.json?"
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
    
// export const getMovies =(limit, rating) =>{
//     let REQUEST_URL = API_URL;
//     if(limit >0){
//         REQUEST_URL += `limit=${limit}`
//     }
//     if(rating >0){
//         REQUEST_URL += `&minimum_rating=${rating}`
//     }
//     return fetch(`${REQUEST_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies)
// }
export const getMovies = async (limit, rating) => {
    const {
      data: {
        data: { movies }
      }
    } = await axios(LIST_MOVIES_URL, {
      params: {
        limit,
        minimum_rating: rating
      }
    });
    return movies;
  };
export const getMovie = async id => {
    const {
      data: {
        data: { movie }
      }
    } = await axios(MOVIE_DETAILS_URL, {
      params: {
        movie_id: id
      }
    });
    return movie;
  };
export const getById = id =>{
    const filteredPeople = movies.filter(movie =>  movie.id ===id)
    return filteredPeople[0]
}

export const deleteMovie =(id) =>{
    const cleandMovie = movies.filter(movie => movie.id !== id);
    if(movies.length > cleandMovie.length){
        movies = cleandMovie;
        return true
    }else{
       return false
    }
}
export const addMovie =(name, score)=>{
    const newMovie={
        id:movies.length + 1,
        name, 
        score
    }
    movies.push(newMovie)
    return newMovie
}