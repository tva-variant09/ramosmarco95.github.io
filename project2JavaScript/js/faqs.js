"use strict";
// marco ramos

const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor_preguntas');
let categoriaActiva = null;

categorias.forEach( (categoria) => {
    categoria.addEventListener('click', (e) => {
        categorias.forEach((elemento) => {
         elemento.classList.remove('activa');
        });

       e.currentTarget.classList.toggle('activa');
       categoriaActiva = categoria.dataset.categoria;
       

    //    activamos el contenedor de preguntas //
    contenedorPreguntas.forEach((contenedor) => {
        if (contenedor.dataset.categoria === categoriaActiva) {
            contenedor.classList.add('activo');
        }
        else {
            contenedor.classList.remove('activo');
        }
    });
    });
});

// bloque de preguntas//

const preguntas = document.querySelectorAll('.preguntas .contenedor_pregunta');

preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;

        if (!respuesta.style.maxHeight) {
            respuesta.style.maxHeight = alturaRealRespuesta + 'px';
        }
        else {
            respuesta.style.maxHeight = null;
        }

        preguntas.forEach((elemento) => {
            if (pregunta !== elemento) {
                elemento.classList.remove('activa');
                elemento.querySelector('.respuesta').style.maxHeight = null;
            }
           
        })
    })
})