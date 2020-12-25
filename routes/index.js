import express from "express";
const router = express.Router();
import {
    paginaInicio, 
    paginaNosotros, 
    paginaContacto, 
    paginaViajes,
    paginaDetalleViaje, 
    paginaTestimoniales
} from "../controllers/paginasController.js";

import {guardarTestimonial} from "../controllers/testimonialController.js";
//request es lo que se le envia al servifor
//response es la respuesta que se recibe.
//res.send es una funcion para mostrar en el navegador la respuesta plana
//res.json muestra en el navegador la respues con formato json
//res.render se usa para mostrar una vista.
router.get('/', paginaInicio); 

router.get('/nosotros', paginaNosotros);

router.get('/contacto', paginaContacto);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales); 

router.post('/testimoniales', guardarTestimonial);

export default router;