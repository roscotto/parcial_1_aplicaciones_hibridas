import express from 'express';
import gamesControllers from '../controllers/gamesControllers.js';


const route = express.Router();

// endpoint para pedir todos los proyectos
route.get('/proyectos', gamesControllers.allGames);


// endpoint para pedir un proyecto por id
route.get('/proyectos/:id', gamesControllers.gameById);


// endpoint para pedir proyectos filtrados por seccion
route.get('/proyectos/seccion/:seccion', gamesControllers.gameByGenre);

// endpoint para pedir proyectos filtrando por tecnología
route.get('/proyectos/tecnologia/:tecnologia', gamesControllers.gameByJudge);

// endpoint para crear un proyecto
route.post('/proyectos', gamesControllers.addGame);

// endpoint para eliminar un proyecto
route.delete('/proyectos/:id', gamesControllers.deleteGame);

// endpoint para editar un proyecto
route.put('/proyectos/:id', gamesControllers.editGame);



export default route
