import { fetchFromTMDB } from "../services/tmdb.service.js";
import{User} from "../models/user.model.js";


export async function searchPerson(req, res) {
    const { query } = req.params;
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        if (response.results.length === 0) {
            res.status(404).send(null)
        }
        User
        res.status(200).jsonn({ success: true, content: response.results })
    } catch (err) { console.log("Error in searchPerson controller: ", err.message) ;
        res.status(500).send({ success: false, message: "Internal server error" });
    }
}

export async function searchMovie(req, res) {
    const query = req.params.query;
    const results = await searchMovieQuery(query);
    res.json(results);
}

export async function searchTv(req, res) {
    const query = req.params.query;
    const results = await searchTvQuery(query);
    res.json(results);
}