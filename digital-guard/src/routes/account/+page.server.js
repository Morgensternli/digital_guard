import db from "$lib/db.js";

export async function load() {
  return {
    account: await db.getAccount()
  };
}

export const actions = {
  addToFavorite: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let account = { 
      _id: id,
      favorite: true
    } 
    await db.updateAccount(account);
  },
  removeFromFavorite: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let account = { 
      _id: id,
      favorite: false
    } 
    await db.updateAccount(account);
  }
}
