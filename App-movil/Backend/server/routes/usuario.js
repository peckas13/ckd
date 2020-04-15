const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const _ = require('underscore');
const app = express();
const bcrypt = require('bcrypt');


app.get('/obtener', (req, res) => {
    Usuario.find({ blnEstado: true })
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                usuarios
            });
        });
});
app.get('/obtener/:id', (req, res) => {
    let id = req.params.id;
    Usuario.find({ _id: id })
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                usuarios
            });
        });
});
app.post('/registrar', (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        strRol: body.strRol,
        strCorreoElectronico: body.strCorreoElectronico,
        strCiudad: body.strCiudad,
        numTelefono: body.numTelefono,
        strNombre: body.strNombre,
        strContrasenia: bcrypt.hashSync(body.strContrasenia, 10)
    });
    usuario.save((err, usrDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            usrDB
        });
    });
});
app.put('/actualizar/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['strRol', 'strCiudad', 'strNombre', 'strCorreoElectronico', 'numTelefono', 'strContrasenia', 'blnEstado']);

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, usrDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            usrDB
        });

    });
});
app.delete('/eliminar/:id', (req, res) => {
    let id = req.params.id;

    Usuario.findByIdAndUpdate(id, { blnEstado: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            resp
        });
    });
});

app.post('/login', (req, res) => {
    let body = req.body;

    Usuario.findOne({ strCorreoElectronico: body.strCorreoElectronico }, (err, usrDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!usrDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o contraseña incorrecta o el usuario no tiene permisos'
                }
            });
        }

        if (!bcrypt.compareSync(body.strContrasenia, admDB.strContrasenia)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario y/o contraseña incorrecta o el usuario no tiene permisos'
                }
            });
        }

        let token = jwt.sign({
            usuario: usrDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        return res.status(200).json({
            ok: true,
            usuario: usrDB,
            token
        });
    });
});

module.exports = app;
