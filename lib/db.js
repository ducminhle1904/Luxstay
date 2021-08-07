import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://khongchobiet123:khongchobiet123@cluster0.gcrb9.mongodb.net/auth?retryWrites=true&w=majority"
  );
  return client;
}
