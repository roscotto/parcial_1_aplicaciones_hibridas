import { toVoteCreateSchema } from "../schemas/votesSchema";

const validateToVoteCreate = (req, res, next) => {
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

export default {
    validateToVoteCreate
}

