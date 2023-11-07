import { addGameSchema } from "../schemas/gamesSchema.js"; 

/**
 * Método que valida los datos de entrada para crear un juego
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
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