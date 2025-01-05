import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";


export async function load() {
  const vertrauenspersonen = await db.getVertrauenspersonen();
  console.log(vertrauenspersonen);
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
      vertrauensperson: data.get("beziehung"),
      favorite: false,
    };
    await db.createAccount(account);
    redirect(303, "/account");
  },
};
