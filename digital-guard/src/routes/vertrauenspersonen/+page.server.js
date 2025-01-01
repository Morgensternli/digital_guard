import db from '$lib/db.js';


export const actions = {
    create: async ({request}) => {
      const data = await request.formData();
      let vertrauensperson = {
        vorname: data.get('vorname'),
        nachname: data.get('nachname'),
        beziehung: data.get('beziehung'),
        email: data.get('email'),
      };
      vertrauensperson = await db.createVertrauensperson(vertrauensperson);
        return vertrauensperson;
    }
  }