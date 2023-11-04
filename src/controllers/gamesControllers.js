import gamesServices from '../services/gamesServices.js'
import { ObjectId } from 'mongodb';


/**
 * Método que devuelve todos los games
 * @param {*} req 
 * @param {*} res 
 */
function allGames(req, res) {
    gamesServices.allGames()
        .then(function (games) {
            return res.status(200).json(games);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });
}

/**
 * Método que devuelve un game por id
 * @param {*} req 
 * @param {*} res 
 */
function gameById(req, res) {
    gamesServices.gameById(req.params.id)
        .then(function (game) {
            return res.status(200).json(game);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });

}

/**
 * Método que devuelve todos los games filtrados por género
 * @param {*} req 
 * @param {*} res
 */
function gameByGenre(req, res) {
    gamesServices.gameByGenre(req.params.genre)
      .then(function (game) {
        return res.status(200).json(game);
      })
      .catch(function (error) {
        return res.status(500).json({
          message: error.message
        });
      });
}

// /**
//  * Método que devuelve todos los games filtrados por tecnologia	
//  * @param {*} req 
//  * @param {*} res 
//  */
// function gameByJudge(req, res) {
//     gamesServices.gameByJudge(req.params.judge)
//       .then(function (game) {
//         return res.status(200).json(game);
//       })
//       .catch(function (error) {
//         return res.status(500).json({
//           message: error.message
//         });
//       });
// }


/**
 * Método que crea un game
 * @param {*} req 
 * @param {*} res 
 */
function addGame(req, res) {
    const datosgame = {
        "_id": new ObjectId(),
        "name": req.body.name,
        "genre": req.body.genre,
        "members": req.body.members,
        "edition": req.body.edition
    } 
    gamesServices.addGame({...datosgame})
        .then(function (game) {
            return res.status(200).json(game);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });
}

/**
 * Método que elimina un game
 * @param {*} req 
 * @param {*} res 
 */
function deleteGame(req, res) {
    gamesServices.deleteGame(req.params.id)
      .then(function (game) {
        return res.status(200).json(game);
      })
      .catch(function (error) {
        return res.status(500).json({
          message: error.message
        });
      });
}


function editGame(req, res) {
   gamesServices.editGame(req.params.id, req.body)
    .then (function (game) {
      return res.status(200).json(game);
    })
    .catch(function (error) {
      return res.status(500).json({
        message: error.message
      });
    });
}


export default {
    allGames,
    gameById,
    gameByGenre,
    // gameByJudge,
    addGame,
    deleteGame,
    editGame
   
}