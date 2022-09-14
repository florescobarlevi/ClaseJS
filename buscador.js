const resultado = document.querySelector('#resultado');


const formulario = document.querySelector('#formulario');

//QuerySelector selecciona elemento sin especificar de que tipo
// en la funcion flecha (filtrar) ponemos todo la info q ingresa el usuario y capturarlos en una variable q se llama texto


const filtrar = () => {
    
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for( let producto of productos ){
        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1 ){
            resultado.innerHTML += `
            <div class="card" style="width: 18rem;" id="resultado">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                    <h5 class="card-title">Destino: ${producto.destino}</h5>
                    <p class="card-text">Valor: ${producto.valor}</p>
                </div>
            </div>

            `
        }
    }
//index of es para retornar el primer indice q se puede encontrar en el array , OSEA si el index of detecta q un texto es menor a uno (o -1 en este caso) arroja error 
    if( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}

//addEventListener esscuhcamos los elementos de la funcion 
// key up es soltar una tecla, o sea cuando da click 

formulario.addEventListener('keyup', filtrar)
// esto de arriba es para que cuando uno ingrese un dato en la navbar (catalogo) se active la funcion filtrar 
filtrar();
