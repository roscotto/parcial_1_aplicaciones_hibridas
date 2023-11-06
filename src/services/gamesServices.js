import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017'); // conectionstring

const db = client.db("AH_PARCIAL_1");
const GamesCollection = db.collection("Games");




/**
 * Se conecta a la base de datos y devuelve un array con todos los games
 * @returns {Promise<Array>}
 */
async function allGames() {
  await client.connect()
  return GamesCollection.find().toArray()
}



/**
 * Se conecta a la base de datos y devuelve un juegos por id
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function gameById(id) {
  await client.connect()
  return GamesCollection.findOne({_id: new ObjectId(id)})
}

/**
 * Se conecta a la base de datos y devuelve todos los juegos filtrados por género
 * @param {string} genre
 * @returns {Promise<Array>}
 */
async function gameByGenre(genre) {
  await client.connect()
  return GamesCollection.find({genre: genre}).toArray()
 
}


/**
 * Se conecta a la base de datos y devuelve todos los juegos filtrados por año de edición
 * @param {string} edition
 * @returns {Promise<Array>}
 */
async function gameByEdition(edition) {
  const editionYear = parseInt(edition)
  await client.connect()
  return GamesCollection.find({edition: editionYear}).toArray()
 
}

/**
 * Método que crea un juego
 * @param {*} req
 * @param {*} res
 */
async function addGame(gameData){
  await client.connect()
  return GamesCollection.insertOne(gameData)
}

/**
 * Se conecta a la base de datos y elimina un juego determinado 
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function deleteGame(id) {
  await client.connect()
  return GamesCollection.deleteOne({_id: new ObjectId(id)})
}


async function editGame(id, gameData) {
  await client.connect()
  return GamesCollection.updateOne({_id: new ObjectId(id)}, {$set: gameData})
}


async function gameExists(id) {
  await client.connect()
  return GamesCollection.findOne({_id: new ObjectId(id)})

}



export default {
  allGames,
  gameById,
  gameByGenre,
  //gameByJudge,
  addGame,
  deleteGame,
  editGame,
  gameExists,
  gameByEdition
}

