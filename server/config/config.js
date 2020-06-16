//------------------
// Puerto
//------------------

process.env.PORT = process.env.PORT || 3000;
//------------------
// Entorno
//------------------
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//------------------
// Base de datos
//------------------
let urlDB;
if(process.env.NODE_ENV ==='dev'){
    urlDB='mongodb://localhost:27017/test';
}
else{
    urlDB='mongodb+srv://Rafael:4yZx2FUo6OsK6OUK@cluster0-pixfd.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

}
process.env.URLDB = urlDB;