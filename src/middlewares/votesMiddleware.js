import { toVoteCreateSchema } from "../schemas/votesSchema.js";
import judgesControllers from "../controllers/judgesControllers.js";

export const validateToVoteCreate = (req, res, next) => {
    console.log(req.body);
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
            console.log("El juez ya existe")
            next();
        } else {
            console.log("El juez no existe en la BD")
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


