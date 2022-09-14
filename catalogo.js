const productos = [
    {
        nombre: 'Mesa',
        destino: 'Comedor',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500,
    },
    {
        nombre: 'Sofa',
        destino: 'Living',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500,
    },
    {
        nombre: 'Horno',
        destino: 'Cocina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500,
    },
    {
        nombre: 'Auriculares',
        destino: 'Multiuso',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500,
    },
    {
        nombre: 'Televisor',
        destino: 'Living',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500,
    },
    {
        nombre: 'Escritorio',
        destino: 'Oficina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Lavarropas',
        destino: 'Lavadero',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 600
    },
    {
        nombre: 'Lampara',
        destino: 'Living',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Termo',
        destino: 'Cocina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Estufa',
        destino: 'Multiuso',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Rollo de cocina',
        destino: 'Cocina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Celular',
        destino: 'Bolsillo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Billetera',
        destino: 'Bolsillo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Reloj',
        destino: 'Brazo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Pulsera',
        destino: 'Brazo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Brazalette',
        destino: 'Brazo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Puerta',
        destino: 'Multiuso',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Computadoras Escritorio',
        destino: 'Multilugar',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Computadoras Portátiles',
        destino: 'Multilugar',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Bicicletas',
        destino: 'Garage',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Lapicera',
        destino: 'Multilugar',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Anteojos',
        destino: 'Escritorio',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Pantalones',
        destino: 'Armario',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
]

// Hacemos contacto mediante el metodo de js getElementById -(tmb puede ser getelementbyclass u otras)

const producto = document.getElementById("resultado");



// Declaramos un arrow function o tmb se dice funcion flecha
const catalogo = () => {

//aca PRODUCTO es el nombre del array, puede ser cualquir palabra
    
    for( let producto of productos ){
        producto.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src=${producto.imagen} alt="imgLorem">
            <div class="card-body">
                <h5 class="card-title">Nombre:${producto.nombre}</h5>
                <h5 class="card-title">Destino:${producto.destino}</h5>
                <p class="card-text">Valor:${producto.valor}</p>
            </div> 
        </div>
        `
        //cuando pones el $ es para escapar al html y volver a una funcion de js que es la q esta en corchetes
    }
}

// las comillas invertidas se llaman backtics o template string, o string literal, dentro de estas mismas podemos poner introducin de manera dinamica codigo HTML dentro de JS = ALT96 o ALTGR CORCHETE CERRADO


console.log(productos)