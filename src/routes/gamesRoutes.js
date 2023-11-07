import express from 'express';
import gamesControllers from '../controllers/gamesControllers.js';
import votesRoutes from './votesRoutes.js';
import { validateAddGame } from '../middlewares/gamesMiddleware.js';
import votesControllers from '../controllers/votesControllers.js';


const route = express.Router();

// endpoint para pedir todos los juegos
route.get('/games', gamesControllers.allGames);


// endpoint para pedir un juego por id
route.get('/games/:id', gamesControllers.gameById);

// endpoint para pedir juegos filtrados por género
route.get('/games/genre/:genre', gamesControllers.gameByGenre);

// endpoint para pedir juegos filtrados por año de edición 
route.get('/games/edition/:edition', gamesControllers.gameByEditionOrderedByScore);

// endpoint para crear un juego
route.post('/games', gamesControllers.addGame);

// endpoint para eliminar un juego
route.delete('/games/:id', gamesControllers.deleteGame);

// endpoint para editar un juego
route.put('/games/:id', gamesControllers.editGame);

// endpoint para pedir todos los votos que recibió un juego
route.use('/games', votesRoutes);



export default route
