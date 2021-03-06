import {Testimonial} from "../models/Testimoniales.js";
const guardarTestimonial = async (req, res)=>{
    console.log(req.body);
    //validar fromulario
    const errores = [];
    const {nombre, correo, mensaje} = req.body;
    if(nombre.trim() === ""){
        errores.push({mensaje:"El Nombre esta vacio"});
    }
    if(correo.trim() === ""){
        errores.push({mensaje: "El Correo esta vacio"});
    }
    if(mensaje.trim() === ""){
        errores.push({mensaje:"El mensaje esta vacio"});
    }
    
    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll();
        //Mostrar la pagina con errores
        res.render('testimoniales', {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else{
        //Almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect("/testimoniales");
        } catch (error) {
            console.log(error);
        }
    }
}

export {guardarTestimonial} 