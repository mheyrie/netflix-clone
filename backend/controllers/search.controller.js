export async function searchPerson(req, res) {
  const query = req.params.query;
  const results = await searchPersonQuery(query);
  res.json(results);
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