import db from "$lib/db.js";

export async function load() {
  return {
    movies: await db.getMovies()
  };
}

export const actions = {
  addToWatchlist: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let movie = { 
      _id: id,
      watchlist: true
    } 
    await db.updateMovie(movie);
  },
  removeFromWatchlist: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let movie = { 
      _id: id,
      watchlist: false
    } 
    await db.updateMovie(movie);
  }
}
