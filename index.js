import express from "express";
import db from "./config/db.js";
import router from "./routes/index.js";
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"}); 
const app = express();
//conectar a la base de datos
db.authenticate()
    .then(()=>{console.log("Base de datos conectada")})
    .catch(error=> { console.log(error)});

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

// Habilitar templates de pug
app.set('view engine', 'pug');
// Obtener año actual
app.use((req,res, next) => {
    const current_date = new Date();
    res.locals.actual_year = current_date.getFullYear();
    res.locals.nombre_sitio = "Agencia de viajes";
    return next();
});   

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Habilitar la carpeta de archivos publicos
app.use(express.static('public'));


//agregar router
app.use("/", router);
 

app.listen(port, host, ()=>{
    console.log(`El servidor esta funcionado ${port}`);
});