import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017'); // conectionstring

const db = client.db("AH_PARCIAL_1");
const VotesCollection = db.collection("Votes");


/**
 * Método que crea un nuevo voto
 * @param {*} req
 * @param {*} res
 */
async function toVote(voteData){
    await client.connect()
    return VotesCollection.insertOne(voteData)
  }


export default {
    toVote
};




