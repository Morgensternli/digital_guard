import db from '$lib/db.js';


export const actions = {
    create: async ({request}) => {
      const data = await request.formData();
      let movie = {
        title: data.get('title'),
        year: data.get('year'),
        length: data.get('duration'),
      };
        movie = await db.createMovie(movie);
        return movie;
    }
  }