//PUERTO
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//conexion a la db 
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/renal';
} else {
    urlDB = 'mongodb+srv://root:wOUTQwdjhIxcbASZ@cluster0-y1g0q.mongodb.net/cafeteria'
}

process.env.URLDB = urlDB;