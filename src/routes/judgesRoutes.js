import express from 'express';
//import judgesControllers from '../controllers/judgesControllers.js';
import votesControllers from '../controllers/votesControllers.js';


const route = express.Router();


// endpoint para pedir los votos de un juez
route.get('/judges/:id/votes', votesControllers.votesByJudge);


export default route
