import express from 'express';
//import judgesControllers from '../controllers/judgesControllers.js';
import votesControllers from '../controllers/votesControllers.js';


const route = express.Router();

// // endpoint para pedir todos los jueces
// route.get('/judges', judgesControllers.allJudges);


// endpoint para pedir los votos de un juez
route.get('/judges/:id/votes', votesControllers.votesByJudge);



// // endpoint para pedir todos los votos que realizó un juez
// route.get('/judges/:id/votes', judgesControllers.votesByJudge);

// // endpoint para emitir un nuevo voto
// route.post('/judges/to-vote', judgesControllers.toVote);

export default route
