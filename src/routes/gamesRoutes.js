import express from 'express';
import gamesControllers from '../controllers/gamesControllers.js';
import votesRoutes from './votesRoutes.js';
import { validateAddGame } from '../middlewares/gamesMiddleware.js';


const route = express.Router();

// endpoint para pedir todos los games
route.get('/games', gamesControllers.allGames);


// endpoint para pedir un proyecto por id
route.get('/games/:id', gamesControllers.gameById);


// endpoint para pedir games filtrados por genre
route.get('/games/genre/:genre', gamesControllers.gameByGenre);

// endpoint para pedir games filtrando por judge
//route.get('/games/judge/:judge', gamesControllers.gameByJudge);

// endpoint para crear un game
route.post('/games',[ validateAddGame ] , gamesControllers.addGame);

// endpoint para eliminar un game
route.delete('/games/:id', gamesControllers.deleteGame);

// endpoint para editar un game
route.put('/games/:id', gamesControllers.editGame);

// endpoint para pedir todos los votos que recibió un juego
route.use('/games', votesRoutes);



export default route
