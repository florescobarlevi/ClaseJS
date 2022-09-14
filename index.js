
console.log("hola este es un msj")

let nombre = "Flor" /*nombre de tipo string*/
let edad = 26 /*edad tipo entero */
let ViveEnAmerica = true /* q vive en ameridca tipo booleano*/


console.log(nombre, "tiene", edad, "años")
console.log("vive en america?", ViveEnAmerica)
console.log("hola")

/*los console.log sirven para ver donde hay un error,
por ej, si tu codigo es larguisimo podes hacer un console y ver hasta donde funciona
lo que tienen java es q aunq tengas un error, el programa omite eso y seguira ejecutando lo demas
 

/Necesitamos diseñar un sistema que decida si una persona puede entrar o no a un club.
Utilizando la estructura if-else y las interacciones crear un script que le pregunté al usuario 
qué edad tiene y que devuelva un alert cuyo mensaje depende de su edad:
● Si tiene menos de 16: no puede ingresar
● Si tiene entre 16 y 18: puede ingresar al club pero no puede pasar al bar.
● Si tiene 18 o más: puede ingresar al club y al bar. */

let edad2 = prompt("Ingrese un valor")
let persona = "Jose"

if (edad2 < 16)
    {
        alert(persona + " No puede ingresar")
    }
    else if (edad2 >= 16 && edad2 < 18)
    {
        alert(persona + " Puede ingresar al club pero no puede pasar al bar")
    }
    else
    {
        alert(persona + " Puede ingresar al club y al bar")
    }

    /*En un script, declarar un arreglo con mis tres películas favoritas en orden, y luego hacer las 
    siguientes acciones:
    ● Agregar una película al final del arreglo
    ● Loguear en consola el largo del arreglo
    ● Utilizando un for loop, loguear en consola la siguiente frase para cada película:
    ○ *Nombre de película* está *ranking* en mi lista de películas favoritas.
    ○ Ej: “El padrino está 1° en mi lista de películas favoritas”*/

    let peliculaFav = ["Harry Potter", "El señor de los anillos", "Shreck"]
    peliculaFav.push("Troya")
    console.log("Tus arreglo contiene " + peliculaFav.length + " elementos")

    for(let i=0; i < peliculaFav.length; i++){
        console.log(peliculaFav[i] + " está en top" + (i+1) + " en mi lista de peliculas favoritas")
    }