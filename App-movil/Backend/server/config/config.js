//PUERTO
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//conexion a la db 
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb+srv://admin:admin@cluster0-mgzzq.mongodb.net/renal';
} else {
    urlDB = 'mongodb+srv://admin:admin@cluster0-mgzzq.mongodb.net/renal'
}

process.env.URLDB = urlDB;
process.env.SEED = process.env.SEED || 'firma-super-secreta';

//TIEMPO EN EL QUE EXPIRA EL TOKEN
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';