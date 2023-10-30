import expres from 'express';
import vistasProyectosControllers from '../controllers/vistasProyectosControllers.js';

const route = expres.Router();

route.get('/mobile', vistasProyectosControllers.traerInfoProyectos);
route.get('/landing', vistasProyectosControllers.traerInfoProyectos);
route.get('/webapp', vistasProyectosControllers.traerInfoProyectos);
route.get('/ecommerce', vistasProyectosControllers.traerInfoProyectos);
route.get('/games', vistasProyectosControllers.traerInfoProyectos);

export default route;