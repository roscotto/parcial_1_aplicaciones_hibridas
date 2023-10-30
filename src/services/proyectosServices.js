import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017'); // conectionstring

const db = client.db("AH20231CP1");
const ProjectsCollection = db.collection("Projects");



/**
 * Se conecta a la base de datos y devuelve un array con todos los proyectos
 * @returns {Promise<Array>}
 */
async function todosLosProyectos() {
  await client.connect()
  return ProjectsCollection.find().toArray()
}



/**
 * Se conecta a la base de datos y devuelve un proyecto por id
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function proyectoPorId(id) {
  await client.connect()
  return ProjectsCollection.findOne({_id: new ObjectId(id)})
}

/**
 * Se conecta a la base de datos y devuelve todos los proyectos filtrados por seccion
 * @param {string} seccion
 * @returns {Promise<Array>}
 */
async function proyectoPorSeccion(seccion) {
  await client.connect()
  return ProjectsCollection.find({section: seccion}).toArray()
 
}

/**
 * Se conecta a la base de datos y devuelve todos los proyectos filtrados por tecnolo
 * @param {string} tecnologia
 * @returns {Promise<Array>}
 */
async function proyectoPorTecnologia(tecnologia) {
  await client.connect()
  return ProjectsCollection.find({ technologies: { $in: [tecnologia] } }).toArray()
}


/**
 * Método que crea un proyecto
 * @param {*} req
 * @param {*} res
 */
async function crearProyecto(datosProyecto){
  await client.connect()
  return ProjectsCollection.insertOne(datosProyecto)
}

/**
 * Se conecta a la base de datos y elimina un proyecto determinado 
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function eliminarProyecto(id) {
  await client.connect()
  return ProjectsCollection.deleteOne({_id: new ObjectId(id)})
}


async function editarProyecto(id, datosProyecto) {
  await client.connect()
  return ProjectsCollection.updateOne({_id: new ObjectId(id)}, {$set: datosProyecto})
}



export default {
  todosLosProyectos,
  proyectoPorId,
  proyectoPorSeccion,
  proyectoPorTecnologia,
  crearProyecto,
  eliminarProyecto,
  editarProyecto
}

