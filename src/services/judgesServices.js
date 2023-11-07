import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017'); // conectionstring

const db = client.db("AH_PARCIAL_1");
const JudgesCollection = db.collection("Judges");


/**
 * Se conecta a la base de datos y devuelve un judge por id
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function judgeById(id) {
    await client.connect()
    return JudgesCollection.findOne({_id: new ObjectId(id)})
  }
  

/**
 * Método que valida que el juez exista en la BD
 * @param {*} id 
 * @returns 
 */
async function judgeExists(id) {
    await client.connect()
    return JudgesCollection.findOne({_id: new ObjectId(id)})

}


export default {
    judgeById,
    judgeExists,
};