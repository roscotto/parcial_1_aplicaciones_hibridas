import { toVoteCreateSchema } from "../schemas/votesSchema.js";
import judgesControllers from "../controllers/judgesControllers.js";
import gamesControllers from "../controllers/gamesControllers.js";
import votesControllers from "../controllers/votesControllers.js";


export const validateToVoteCreate = (req, res, next) => {
    toVoteCreateSchema.validate(req.body, { abortEarly: false, stripUnknown: true }) 
        .then(async function (value) {
            req.body = value;
            next(); 
        })
        .catch(function (error) {
            return res.status(400).json({
                message: error.message
            });
    })
}


/**
 * Método que valida que el juez exista en la BD
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export async function validateJudgeAlreadyExist(req, res, next) {
    try {
        
        const judge = await judgesControllers.judgeExists(req.body.judge_id);
        
        if (judge) {
            next();
        } else {
            res.status(400).json({
                message: "El juez no existe en la BD"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
    });

    }
}


/**
 * Método que valida que el juego exista en la BD
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export async function validateGameAlreadyExist(req, res, next) {
    try {
        const game = await gamesControllers.gameExists(req.body.game_id);
        
        if (game) {
            next();
        } else {
            res.status(400).json({
                message: "El juego no existe en la BD"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
    });

    }
}


/**
 * Método que valida que el juez no haya votado por el juego previamente
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export async function validateGameVotedOnce(req, res, next) {
    try {
        const votesMade = await votesControllers.votesMade(req.body.judge_id)
        const gameAlreadyVoted = votesMade.find(vote => vote.game_id == req.body.game_id)

        if(!gameAlreadyVoted) {
            next();
        } else {
            res.status(400).json({
                message: "El juez ya votó por este juego"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
    });

    }
}
