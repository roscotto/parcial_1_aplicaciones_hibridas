import express from 'express';
import proyectosControllers from '../controllers/proyectosControllers.js';


const route = express.Router();

// endpoint para pedir todos los proyectos
route.get('/proyectos', proyectosControllers.todosLosProyectos);


// endpoint para pedir un proyecto por id
route.get('/proyectos/:id', proyectosControllers.proyectoPorId);


// endpoint para pedir proyectos filtrados por seccion
route.get('/proyectos/seccion/:seccion', proyectosControllers.proyectoPorSeccion);

// endpoint para pedir proyectos filtrando por tecnología
route.get('/proyectos/tecnologia/:tecnologia', proyectosControllers.proyectoPorTecnologia);

// endpoint para crear un proyecto
route.post('/proyectos', proyectosControllers.crearProyecto);

// endpoint para eliminar un proyecto
route.delete('/proyectos/:id', proyectosControllers.eliminarProyecto);

// endpoint para editar un proyecto
route.put('/proyectos/:id', proyectosControllers.editarProyecto);



export default route
