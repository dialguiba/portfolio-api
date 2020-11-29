const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
let cachedDb = null;

export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    })
      .then((client) => {
        let db = client.db("portfolio");
        console.log("New Database connection");
        cachedDb = db;
        return cachedDb;
      })
      .catch((error) => {
        console.log("Mongo Connection error");
        console.log(error);
      });
  }
};
