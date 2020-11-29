import { connectToDatabase } from "../lib/database";

module.exports = async (req, res) => {
  if (req.method === "GET") {
    // Get a database connection, cached or otherwise,
    // using the connection string environment variable as the argument
    const db = await connectToDatabase();
    // Select the "users" collection from the database
    const collection = await db.collection("projects");

    // Select the users collection from the database
    const projects = await collection.find({}).toArray();

    // Respond with a JSON string of all users in the collection
    res.status(200).json({ projects });
  }
};
