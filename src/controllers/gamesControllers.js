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
  //console.log("entro al controller")  
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
 * Método que devuelve todos los juegos filtrados por género
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

/**
 * Método que devuelve todos los juegos filtrados por año de edición
 * @param {*} req 
 * @param {*} res
 */
function gameByEditionOrderedByScore(req, res) {
  gamesServices.gameByEditionAndGenre(req.params.edition, {"genre": req.query.genre})
    .then(function (game) {
      const gamesOrderByScore = game.sort((a, b) => b.total_score - a.total_score)

      res.status(200).json(gamesOrderByScore);
    })
    .catch(function (error) {
      res.status(500).json({
        message: error.message
      });
    });
}


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
        "edition": req.body.edition,
        "total_score": 0,
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


async function editGameScore(id, total_score) {
  const game = await gamesServices.gameById(id)
  const newData = {
    "total_score": game.total_score + total_score
  }
  gamesServices.editGameScore(id, newData)  
}


/**
 * Se conecta a la base de datos y chequea si existe un juego por id
 * @param {string} id
 * @returns {Promise<Object>}
 */
async function gameExists(id) {
  const game = await gamesServices.gameExists(id)
  return game
}


export default {
    allGames,
    gameById,
    gameByGenre,
    addGame,
    deleteGame,
    editGame,
    gameExists,
    gameByEditionOrderedByScore,
    editGameScore
   
}