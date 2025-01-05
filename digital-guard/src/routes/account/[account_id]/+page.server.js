import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    account: await db.getAccount(params.account_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteAccount(data.get("id"));
    redirect(303, "/account");
  },
  update: async ({ request }) => {
    const data = await request.formData();
    let account = {
      _id: data.get("id"),
      benennung: data.get("titel"),
      accountname: data.get("accountname"),
      passwort: data.get("passwort"),
      webseite: data.get("webseite"),
    };
    await db.updateAccount(account);
    return { success: true };
  },
}
