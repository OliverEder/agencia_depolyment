import {Viaje} from "../models/Viaje.js";
import {Testimonial} from "../models/Testimoniales.js";

const paginaInicio = async (req, res)=>{ 
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));

    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina:"inicio",
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
}
const paginaNosotros = (req, res)=>{ 
    const viajes = "viaje a Alemania";
    res.render('nosotros',{
        viajes, 
        pagina: "Nosotros"
    });
}

const paginaContacto = (req, res)=>{
    res.send("Contacto");
}

const paginaViajes = async (req, res)=>{ 
    //consultar base de datos
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina:"Viajes",
        viajes
    });
}

//muestra un viaje por su slug
 const paginaDetalleViaje = async(req, res) =>{
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({where:{slug: slug}});
        res.render('viaje', {
            pagina : "Informacion viaje",
            viaje
        });
    } catch (error) {
        
    }
 }

const paginaTestimoniales = async (req, res)=>{
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina:"Testimoniales",
            testimoniales
        });    
    } catch (error) {
        console.log(error);
    } 
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaContacto, 
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}