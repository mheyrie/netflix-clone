import { fetchFromTMDB } from "../services/tmdb.service.js";
import { User } from "../models/user.model.js";

export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      res.status(404).send(null);
    }
    
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (err) {
    console.log("Error in searchPerson controller: ", err.message);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
}

export async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      res.status(404).send(null);
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (err) {
    console.log("Error in searchMovie controller: ", err.message);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
}

export async function searchTv(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      res.status(404).send(null);
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].name,
          searchType: "tv",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (err) {
    console.log("Error in searchTv controller: ", err.message);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
}

export async function getSearchHistory(req, res) {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (err) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
}

export async function removeItemFromHistory(req, res) {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: {
          id: parseInt(id),
        },
      },
    });
    res
      .status(200)
      .json({ success: true, message: "Item removed from history" });
  } catch (err) {
    console.log("Error in removeItemFromHistory controller: ", err.message);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
}
