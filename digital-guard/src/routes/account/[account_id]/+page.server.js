import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    account: await db.getAccount(params.account_id), // den param braucht es für einen bestimmtes objekt mit id
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteAccount(data.get("id"));
    redirect(303, "/account");
  },
};
