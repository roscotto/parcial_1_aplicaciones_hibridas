import express from 'express';
import votesControllers from '../controllers/votesControllers.js';
import { validateToVoteCreate, validateJudgeAlreadyExist, validateGameAlreadyExist, validateGameVotedOnce } from '../middlewares/votesMiddleware.js';

const route = express.Router();

// // endpoint para pedir todos los proyectos
// route.get('/:id/votes', votesControllers.toVote);

// endpoint para pedir todos los votos de un juego
route.get('/:id/votes', votesControllers.allVotes);

// endpoint para emitir un voto nuevo (id del juego)
route.post('/:id/to-vote', [validateToVoteCreate] , [validateJudgeAlreadyExist] , [validateGameAlreadyExist], [validateGameVotedOnce] , votesControllers.toVote);


export default route