import { invalidateAll } from '$app/navigation';
import db from '$lib/db.js';
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    vertrauenspersonen: await db.getVertrauenspersonen(), // den param braucht es für einen bestimmtes objekt mit id
  };
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let vertrauensperson = {
      vorname: data.get('vorname'),
      nachname: data.get('nachname'),
      beziehung: data.get('beziehung'),
      email: data.get('email'),
    };
    vertrauensperson = await db.createVertrauensperson(vertrauensperson);
    redirect(303, "/vertrauenspersonen");
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteVertrauensperson(data.get("id"));
    redirect(303, "/vertrauenspersonen");
  },
}