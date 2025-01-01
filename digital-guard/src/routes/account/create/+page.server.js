import db from "$lib/db.js";

export async function load() {
  const vertrauenspersonen = await db.getVertrauenspersonen();
  console.log(vertrauenspersonen); // Debugging
  return {
    vertrauenspersonen,
  };
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let account = {
      benennung: data.get("titel"),
      accountname: data.get("accountname"),
      passwort: data.get("passwort"),
      webseite: data.get("webseite"),
      favorite: false,
    };
    await db.createAccount(account);
    return { success: true };
  },
};
