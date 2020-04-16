const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    strRol: {
        type: String,
    },
    strNombre: {
        type: String,
        required: [true, 'Por favor ingresar el nombre del usuario']
    },
    strApellidoPat: {
        type: String,
        required: [true, 'Por favor ingresar el apellido']
    },
    strApellidoMat: {
        type: String,
        required: [true, 'Por favor ingresar el apellido']
    },
    strCorreoElectronico: {
        type: String,
        required: [true, 'Insertar su correo electronico']
    },
    strCiudad: {
        type: String,
        required: [true, 'Por favor ingresar tu ciudad']
    },
    dateFechaNacimiento: {
        type: Date,
        require: [true, 'Ingresar la fecha de nacimiento']
    },
    numTelefono: {
        type: Number,
        required: [true, 'Agregue su numero de telefono']
    },
    strContrasenia: {
        type: String,
        required: [true, 'Por favor ingresar la contraseña']
    },
    blnEstado: {
        type: Boolean,
        default: true
    }
});

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

module.exports = mongoose.model('Usuario', usuarioSchema);