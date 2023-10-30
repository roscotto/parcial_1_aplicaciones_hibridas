import { array } from 'yup';
import proyectosServices from '../services/proyectosServices.js'
import { ObjectId } from 'mongodb';


/**
 * Método que devuelve todos los proyectos
 * @param {*} req 
 * @param {*} res 
 */
function todosLosProyectos(req, res) {
    proyectosServices.todosLosProyectos()
        .then(function (proyectos) {
            return res.status(200).json(proyectos);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });
}

/**
 * Método que devuelve un proyecto por id
 * @param {*} req 
 * @param {*} res 
 */
function proyectoPorId(req, res) {
    proyectosServices.proyectoPorId(req.params.id)
        .then(function (proyecto) {
            return res.status(200).json(proyecto);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });

}

/**
 * Método que devuelve todos los proyectos filtrados por seccion
 * @param {*} req 
 * @param {*} res
 */
function proyectoPorSeccion(req, res) {
    proyectosServices.proyectoPorSeccion(req.params.seccion)
      .then(function (proyecto) {
        return res.status(200).json(proyecto);
      })
      .catch(function (error) {
        return res.status(500).json({
          message: error.message
        });
      });
}

/**
 * Método que devuelve todos los proyectos filtrados por tecnologia	
 * @param {*} req 
 * @param {*} res 
 */
function proyectoPorTecnologia(req, res) {
    proyectosServices.proyectoPorTecnologia(req.params.tecnologia)
      .then(function (proyecto) {
        return res.status(200).json(proyecto);
      })
      .catch(function (error) {
        return res.status(500).json({
          message: error.message
        });
      });
}


/**
 * Método que crea un proyecto
 * @param {*} req 
 * @param {*} res 
 */
function crearProyecto(req, res) {
    const datosProyecto = {
        "_id": new ObjectId(),
        "section": req.body.section,
        "name": req.body.name,
        "description": req.body.description,
        "technologies": req.body.technologies,
        "link": req.body.link,
        "img": req.body.img
    } 
    proyectosServices.crearProyecto({...datosProyecto})
        .then(function (proyecto) {
            return res.status(200).json(proyecto);
        })
        .catch(function (error) {
            return res.status(500).json({
                message: error.message
            });
        });
}

/**
 * Método que elimina un proyecto
 * @param {*} req 
 * @param {*} res 
 */
function eliminarProyecto(req, res) {
    proyectosServices.eliminarProyecto(req.params.id)
      .then(function (proyecto) {
        return res.status(200).json(proyecto);
      })
      .catch(function (error) {
        return res.status(500).json({
          message: error.message
        });
      });
}


function editarProyecto(req, res) {
   proyectosServices.editarProyecto(req.params.id, req.body)
    .then (function (proyecto) {
      return res.status(200).json(proyecto);
    })
    .catch(function (error) {
      return res.status(500).json({
        message: error.message
      });
    });
}


export default {
    todosLosProyectos,
    proyectoPorId,
    proyectoPorSeccion,
    proyectoPorTecnologia,
    crearProyecto,
    eliminarProyecto,
    editarProyecto
   
}