const express = require('express');
const router = express.Router();
const pacientesController = require('../controllers/pacienteController');

module.exports = function() {
     // agrega  nuevos pacientes
     router.post('/pacientes', pacientesController.nuevoCliente  )

     // obtener los pacientes de la DB
     router.get('/pacientes', pacientesController.obtenerPacientes );

     // obtener un usuario por ID
     router.get('/pacientes/:id', pacientesController.obtenerPaciente );
     // actualizar registro
     router.put('/pacientes/:id' , pacientesController.actualizarPaciente)
     // eliminar un regiustro
     router.delete('/pacientes/:id', pacientesController.eliminarPaciente)


     return router;
 }