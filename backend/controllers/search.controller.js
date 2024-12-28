export async function searchPerson(req, res) {
    // https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1
    const { query } = req.params;
  try{
    const response = await fetch(  `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)
  }catch(err){console.log(err)}
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