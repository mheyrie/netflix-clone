import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res){
    try{
const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
    }catch(error){

    }
}