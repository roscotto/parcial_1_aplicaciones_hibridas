import express from 'express';
import votesControllers from '../controllers/votesControllers.js';

const route = express.Router();

// endpoint para pedir todos los proyectos
route.post('/:id/votes', votesControllers.toVote);


export default route