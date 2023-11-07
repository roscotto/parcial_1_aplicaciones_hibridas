import { toVoteCreateSchema } from "../schemas/votesSchema.js";
import judgesControllers from "../controllers/judgesControllers.js";
import gamesControllers from "../controllers/gamesControllers.js";
import votesControllers from "../controllers/votesControllers.js";

export const validateToVoteCreate = (req, res, next) => {
    console.log('validando voto');
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

export async function validateJudgeAlreadyExist(req, res, next) {
    try {
        console.log(req.body.judge_id)
        const judge = await judgesControllers.judgeExists(req.body.judge_id);
        
        if (judge) {
            //console.log("El juez ya existe")
            next();
        } else {
            //console.log("El juez no existe en la BD")
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


export async function validateGameAlreadyExist(req, res, next) {
    try {
        console.log(req.body.game_id)
        const game = await gamesControllers.gameExists(req.body.game_id);
        
        if (game) {
            //console.log("El juego ya existe")
            next();
        } else {
            //console.log("El juego no existe en la BD")
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

export async function validateGameVotedOnce(req, res, next) {
    try {
        const votesMade = await votesControllers.votesMade(req.body.judge_id)
        const gameAlreadyVoted = votesMade.find(vote => vote.game_id == req.body.game_id)

        if(!gameAlreadyVoted) {
            //console.log("El juez no votó el juego")
            next();
        } else {
            //console.log("El juez ya votó por este juego")
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
