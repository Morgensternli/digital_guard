import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData(); // wird gebraucht zum die gebundenen daten hier zu übertragen
    let user = {
    vorname: data.get("vorname"),
    nachname: data.get("nachname"),
    email: data.get("email"),
    password: data.get("password"),
    };
    await db.createUser(user);
    return { success: true };
  },
};
