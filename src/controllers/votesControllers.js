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

export default {
    toVote

}
