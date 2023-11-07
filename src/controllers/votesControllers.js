import { array } from 'yup';
import votesServices from '../services/votesServices.js'
import gamesController from '../controllers/gamesControllers.js'
import gamesServices from '../services/gamesServices.js'
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
          const total_score = voteData.jugabilidad_score + voteData.arte_score + voteData.sonido_score + voteData.afinidad_score;
                    
          gamesController.editGameScore(voteData.game_id, total_score)
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
 * Método que devuelve todos los votos filtrados por juego
 * @param {*} req 
 * @param {*} res
 */
function votesByGame(req, res) {
    votesServices.votesByGame(req.params.id)
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
 * Devuelve los promedios de los votos de un juego discriminado por cada categoría
 * @param {*} req
 * @param {*} res
 */
function votesAverageByGame(req, res) {
    votesServices.votesByGame(req.params.id)
      .then(function (votes) {
        const jugabilidad = votes.map((vote) => vote.jugabilidad_score)
        const arte = votes.map((vote) => vote.arte_score)
        const sonido = votes.map((vote) => vote.sonido_score)
        const afinidad = votes.map((vote) => vote.afinidad_score)

        const jugabilidadAverage = jugabilidad.reduce((a, b) => a + b, 0) / jugabilidad.length
        const arteAverage = arte.reduce((a, b) => a + b, 0) / arte.length
        const sonidoAverage = sonido.reduce((a, b) => a + b, 0) / sonido.length
        const afinidadAverage = afinidad.reduce((a, b) => a + b, 0) / afinidad.length

        
        gamesServices.gameById(req.params.id)
        .then(function (game) {
          const gameCompleteData = {
            "game_name": game.name,
            "genre": game.genre,
            "members": game.members,
            "edition": game.edition,
          }
          
          const response = {
            "game_id": req.params.id,
            "game_name": gameCompleteData.game_name,
            "genre": gameCompleteData.genre,
            "members": gameCompleteData.members,
            "edition": gameCompleteData.edition,
            "jugabilidad_average": jugabilidadAverage,
            "arte_average": arteAverage,
            "sonido_average": sonidoAverage,
            "afinidad_average": afinidadAverage
        }

        res.status(200).json(response);

        })
        .catch(function (error) {
          res.status(500).json({
            message: error.message
          });
        });
                
        
      })
      .catch(function (error) {
        res.status(500).json({
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
    votesMade,
    votesByGame,
    votesAverageByGame
}
