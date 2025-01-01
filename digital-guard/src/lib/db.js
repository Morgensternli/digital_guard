import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("ScreenStackDB"); // select database

//////////////////////////////////////////
// Movies
//////////////////////////////////////////

// Get all Vertrauenspersonen
async function getVertrauenspersonen() {
  let vertrauensperson = [];
  try {
    const collection = db.collection("vertrauenspersonen");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    vertrauensperson = await collection.find(query).toArray();
    console.log("found vertrauenspersonen: " + vertrauensperson.length)
    vertrauensperson.forEach((vertrauensperson) => {
      vertrauensperson._id = vertrauensperson._id.toString(); // convert ObjectId to String
    });
    console.log("found vertrauenspersonen: " + vertrauensperson.length)

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return vertrauensperson;
}

// Get account by id
async function getAccount(id) {
  let account = null;
  try {
    const collection = db.collection("accounts");
    const query = { _id: new ObjectId(id) }; // filter by id
    accounts = await collection.findOne(query);

    if (!accounts) {
      console.log("No accounts with id " + id);
      // TODO: errorhandling
    } else {
      accounts._id = accounts._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return accounts;
}


// create movie
// Example movie object:
/* 
{ 
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten"
} 
*/
async function createUser(user) {
  try {
    const collection = db.collection("user");
    const result = await collection.insertOne(user);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

async function createVertrauensperson(vertrauensperson) {
  try {
    const collection = db.collection("vertrauenspersonen");
    const result = await collection.insertOne(vertrauensperson);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update movie
// Example movie object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten",
  actors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  poster: "/images/Altura.png",
  watchlist: false
} 
*/
// returns: id of the updated movie or null, if movie could not be updated
async function updateMovie(movie) {
  try {
    let id = movie._id;
    delete movie._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: movie });

    if (result.matchedCount === 0) {
      console.log("No movie with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Movie with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete vertrauensperson by id
// returns: id of the deleted vertrauensperson or null, if vertrauensperson could not be deleted
async function deleteVertrauensperson(id) {
  try {
    const collection = db.collection("vertrauenspersonen");
    const query = { _id: new ObjectId(id) }; // filter by id
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

// delete account by id
// returns: id of the deleted accounts or null, if accounts could not be deleted
async function deleteAccount(id) {
  try {
    const collection = db.collection("accounts");
    const query = { _id: new ObjectId(id) }; // filter by id
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

// export all functions so that they can be used in other files
export default {
  deleteVertrauensperson,
  deleteAccount,
  getAccount,
  getVertrauenspersonen,
  createVertrauensperson,
  createUser,
};
