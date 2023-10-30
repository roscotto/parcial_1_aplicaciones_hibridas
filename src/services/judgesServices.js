import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017'); // conectionstring

const db = client.db("AH_PARCIAL_1");
const JudgesCollection = db.collection("Judges");


export default {};