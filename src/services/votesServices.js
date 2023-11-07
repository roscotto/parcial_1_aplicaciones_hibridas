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


/**
 * Se conecta a la base de datos y devuelve un array con todos los juegos
 * @param {*} req
 * @returns {Promise<Array>}
 */
async function allVotes(game_id) {
    await client.connect()
    return VotesCollection.find({game_id: game_id}).toArray()
  }



/**
 * Método que devuelve los votos de un juez
 * @param {*} req 
 * @returns {Promise<Array>}
 */
async function votesByJudge(judge_id){
    await client.connect()
    const votes = await VotesCollection.find({ judge_id: judge_id }).toArray()
    return votes
}


/**
 * Método que devuelve los votos de un juego
 * @param {*} req
 * @returns {Promise<Array>}
 */
async function votesByGame(game_id){
  await client.connect()
  const votes = await VotesCollection.find({game_id: game_id }).toArray()
  return votes
}


export default {
    toVote,
    votesByJudge,
    allVotes,
    votesByGame
};




