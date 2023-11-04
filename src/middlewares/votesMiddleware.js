import { toVoteCreateSchema } from "../schemas/votesSchema.js";

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


