import { addGameSchema } from "../schemas/gamesSchema.js"; 

export const validateAddGame = (req, res, next) => {
    addGameSchema.validate(req.body, { abortEarly: false, stripUnknown: true }) 
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