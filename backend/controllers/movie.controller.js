import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res){
    try{
const data = await fetchFromTMDB()
    }catch(error){

    }
}