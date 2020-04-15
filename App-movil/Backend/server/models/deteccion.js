const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let deteccionSchema = new Schema({
    nom: {
        type: String
    },
    sex: {
        type: String
    },
    phone: {
        type: Number
    },
    mail: {
        type: String,

    },
    age: {
        type: Number,

    },
    bp: {
        type: Number,

    },
    sg: {
        type: Number,

    },
    al: {
        type: Number,

    },
    su: {
        type: Number,

    },
    rbc: {
        type: String,
        default: '?'
    },
    pc: {
        type: String,
        default: '?'
    },
    pcc: {
        type: String,
        default: '?'
    },
    ba: {
        type: String,
        default: '?'
    },
    bgr: {
        type: Number,

    },
    bu: {
        type: Number,

    },
    sc: {
        type: Number,

    },
    sod: {
        type: Number,

    },
    pot: {
        type: Number,

    },
    hemo: {
        type: Number,

    },
    pcv: {
        type: Number,

    },
    wc: {
        type: Number,

    },
    rc: {
        type: Number,

    },
    htn: {
        type: String,

    },
    dm: {
        type: String,

    },
    cad: {
        type: String,

    },
    appet: {
        type: String,
        default: '?'

    },
    pe: {
        type: String,

    },
    ane: {
        type: String,

    },
    class: {
        type: String,
            default: '?'
    }
});

deteccionSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser unico y diferente'
});


module.exports = mongoose.model('Deteccion', deteccionSchema);