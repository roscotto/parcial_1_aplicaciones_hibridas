import { array } from 'yup';
import votesServices from '../services/votesServices.js'
import { ObjectId } from 'mongodb';


/**
 * Método que crea un nuevo voto
 * @param {*} req 
 * @param {*} res 
 */
function toVote(req, res) {
    const voteData = {
        "_id": new ObjectId(),
        "judge_id": req.body.judge_id,
        "game_id": req.body.game_id,
        "judge_name": req.body.judge_name, 
        "game_name": req.body.game_name,
        "jugabilidad_score": req.body.jugabilidad_score,
        "arte_score": req.body.arte_score,
        "sonido_score": req.body.sonido_score,
        "afinidad_score": req.body.afinidad_score
    } 
    votesServices.toVote({...voteData})
        .then(function (vote) {
            return res.status(200).json(vote);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });
}


/**
 * Método que devuelve todos los votos de un juego
 * @param {*} req 
 * @param {*} res 
 */
function allVotes(req, res) {
    votesServices.allVotes()
        .then(function (votes) {
            return res.status(200).json(votes);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });
}



/**
 * Método que devuelve todos los votos filtrados por juez
 * @param {*} req 
 * @param {*} res 
 */
function votesByJudge(req, res) {
    votesServices.votesByJudge(req.params.id)
      .then(function (vote) {
        const response = vote.map((vote) => {
            return {
                "game_name": vote.game_name,
                "jugabilidad_score": vote.jugabilidad_score,
                "arte_score": vote.arte_score,
                "sonido_score": vote.sonido_score,
                "afinidad_score": vote.afinidad_score
            }
        })

        return res.status(200).json(response);
      })
      .catch(function (error) {
        return res.status(500).json({
          message: error.message
        });
      });
}


/**
 * Método que devuelve todos los votos filtrados por juez
 * para luego chequear si el juez ya votó
 */
async function votesMade(id) {
    return await votesServices.votesByJudge(id)
}



export default {
    toVote,
    votesByJudge,
    allVotes,
    votesMade
}
