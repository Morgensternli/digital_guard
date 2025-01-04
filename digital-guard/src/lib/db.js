import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("ScreenStackDB");

//////////////////////////////////////////
// Digital Guard
//////////////////////////////////////////

// Get all VP
async function getVertrauenspersonen() {
  let vertrauensperson = [];
  try {
    const collection = db.collection("vertrauenspersonen");

    const query = {};
    vertrauensperson = await collection.find(query).toArray();
    console.log("found vertrauenspersonen: " + vertrauensperson.length)
    vertrauensperson.forEach((vertrauensperson) => {
      vertrauensperson._id = vertrauensperson._id.toString();
    });
    console.log("found vertrauenspersonen: " + vertrauensperson.length)

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return vertrauensperson;
}

// Get all Accounts
async function getAccounts() {
  let accounts = [];
  try {
    const collection = db.collection("accounts");

    const query = {};
    accounts = await collection.find(query).toArray();
    console.log("found account: " + accounts.length)
    accounts.forEach((account) => {
      account._id = account._id.toString();
    });
    for (const account of accounts){
      account.vertrauensperson = await getVertrauensperson(account.vertrauensperson)
    }
    console.log("found account: " + accounts.length)

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return accounts;
}

// Get account by id
async function getAccount(id) {
  let account = null;
  try {
    const collection = db.collection("accounts");
    const query = { _id: new ObjectId(id) };
    account = await collection.findOne(query);

    if (!account) {
      console.log("No account with id " + id);
      // TODO: errorhandling
    } else {
      account._id = account._id.toString();
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return account;
}

// Get VP by id
async function getVertrauensperson(id) {
  let vertrauensperson = null;
  try {
    const collection = db.collection("vertrauenspersonen");
    const query = { _id: new ObjectId(id) };
    vertrauensperson = await collection.findOne(query);

    if (!vertrauensperson) {
      console.log("No vertrauensperson with id " + id);
      // TODO: errorhandling
    } else {
      vertrauensperson._id = vertrauensperson._id.toString();
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return vertrauensperson;
}

// create a User
async function createUser(user) {
  try {
    const collection = db.collection("user");
    const result = await collection.insertOne(user);
    return result.insertedId.toString();
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// create a VP
async function createVertrauensperson(vertrauensperson) {
  try {
    const collection = db.collection("vertrauenspersonen");
    const result = await collection.insertOne(vertrauensperson);
    return result.insertedId.toString();
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// create a Account
async function createAccount(account) {
  try {
    const collection = db.collection("accounts");
    const result = await collection.insertOne(account);
    return result.insertedId.toString();
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}


// update Account
async function updateAccount(account) {
  try {
    let id = account._id;
    delete account._id;
    const collection = db.collection("accounts");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: account });

    if (result.matchedCount === 0) {
      console.log("No account with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Account with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete VP by id
async function deleteVertrauensperson(id) {
  try {
    const collection = db.collection("vertrauenspersonen");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("Keine vertrauensperson mit id " + id);
    } else {
      console.log("Vertrauensperson mit id " + id + " wurde erfolgreich gelöscht.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete Account by id
async function deleteAccount(id) {
  try {
    const collection = db.collection("accounts");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No account with id " + id);
    } else {
      console.log("Account with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

export default {
  updateAccount,
  deleteAccount,
  getAccounts,
  getAccount,
  createAccount,
  deleteVertrauensperson,
  getVertrauenspersonen,
  getVertrauensperson,
  createVertrauensperson,
  createUser,
};
