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
      title: data.get("name"),
      year: data.get("year"),
      length: data.get("length"),
    };
    await db.createAccount(account);
    return { success: true };
  },
};
