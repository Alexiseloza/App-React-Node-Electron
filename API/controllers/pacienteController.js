const Paciente = require('../models/Pacientes');

// crear un  nuevo cliente
exports.nuevoCliente =  async (req, res, next) => {
     
     // nuevo objeto paciente 
     const paciente = new Paciente(req.body);

     try {
         await paciente.save();
          res.json({ mensaje : 'El Cliente se agrego Correctamente!'});
     } catch (error) {
          console.log(error);
          next();
     }     
}
// obtener todos los pacientes
exports.obtenerPacientes = async ( req, res, next) => {

     try {
          const pacientes = await Paciente.find({});
          res.json(pacientes);
     } catch (error) {
          console.log(error);
          next();
     }
}
// obteber un solo paciente por ID
exports.obtenerPaciente = async ( req, res, next ) => {
     try {
         const paciente = await Paciente.findById(req.params.id);
         res.json(paciente);
     } catch (error) {
          console.log(error);
          next();
     }
}
// actualiza los datos de un paciente
exports.actualizarPaciente = async ( req, res, next ) => {
     try {
          const paciente = await Paciente.findByIdAndUpdate({_id : req.params.id}, 
               req.body ,{ new:true });
          res.json(paciente);

     } catch (error) {
          console.log(error);
          next();
     }
}

//eliminar un usuario
exports.eliminarPaciente = async (req, res, next ) => {
     try {
          await Paciente.findOneAndDelete({_id: req.params.id});
          res.json('Paciente Eliminado!');
          
     } catch (error) {
          console.log(error);
          next();
     }
}