import judgesServices from '../services/judgesServices.js'
import { ObjectId } from 'mongodb';


/**
 * Se conecta a la base de datos y chequea si existe un juez por id
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function judgeExists(id) {
    const judge = await judgesServices.judgeExists(id)
    return judge
  }


export default {
    judgeExists,
}