//Bienvenido(a) a la Libreria de Matemáticas Perú
//Venta de libros de las áreas de Matemáticas nivel escolar.
alert("Bienvenido(a) a la librería @MatemáticasPerú, para salir presionar 0.");

//Inicializamos las variables que contendrán el precio de los libros.
const precio_1 = 34.00;
const precio_2 = 30.00;
const precio_3 = 32.00;
const precio_4 = 35.00;
const precio_5 = 40.00;

//Menú de elección de los libros para la compra:
alert("Elija el número del libro que desea comprar:");
let elegirLibro = Number(prompt(`
                                 LIBRO:                     PRECIO:
                                 1-Raz. Matematico:     S/${precio_1} 
                                 2-Aritmética:      S/${precio_2} 
                                 3-Álgebra:     S/${precio_3}
                                 4-Geometría:       S/${precio_4} 
                                 5-Trigonometría:       S/${precio_5}
                                 0-Para acabar y salir.`));

//Inicializamos las variables que almacenarán las cantidades totales de los libros a comprar, y la variable del monto total.
let cantidad_1 = 0;
let cantidad_2 = 0;
let cantidad_3 = 0;
let cantidad_4 = 0;
let cantidad_5 = 0;
let total = 0.00;

//Función que realiza la acumulación de los montos por cada libro elegido.
function acumulaTotal(precio, cantidad) {
    total += precio * cantidad;
    return total;
}

//Frente a la elección de cada libro se pregunta el número de ejemplares a compra.
while (elegirLibro != "0") {
    switch (elegirLibro) {
        case 1:
            let cant1 = Number(prompt("el libro elegido es Raz. Matemático, indique la cantidad: "));
            acumulaTotal(precio_1, cant1); //acumula el monto total a pagar
            cantidad_1 += cant1;           //acumula la cantidad total del libro 1
            break;
        case 2:
            let cant2 = Number(prompt("el libro elegido es Aritmética, indique la cantidad: "));
            acumulaTotal(precio_2, cant2);  //acumula el monto total a pagar
            cantidad_2 += cant2;            //acumula la cantidad total del libro 2
            break;
        case 3:
            let cant3 = Number(prompt("el libro elegido es Álgebra, indique la cantidad: "));
            acumulaTotal(precio_3, cant3); //acumula el monto total a pagar
            cantidad_3 += cant3;           //acumula la cantidad total del libro 3
            break;
        case 4:
            let cant4 = Number(prompt("el libro elegido es Geometría, indique la cantidad: "));
            acumulaTotal(precio_4, cant4); //acumula el monto total a pagar
            cantidad_4 += cant4;           //acumula la cantidad total del libro 4
        case 5:
            let cant5 = Number(prompt("el libro elegido es Trigonometría, indique la cantidad: "));
            acumulaTotal(precio_5, cant5); //acumula el monto total a pagar
            cantidad_5 += cant5;           //acumula la cantidad total del libro 5 
            break;
        default:
            alert('Ingrese una opción válida.');
            break;
    }
    //Se presenta el menú de elección nuevamente hasta que el usuario elija "0" y salga del menú.
    elegirLibro = Number(prompt(`
                                 LIBRO:                     PRECIO:
                                 1-Raz. Matematico:         S/${precio_1} 
                                 2-Aritmética:              S/${precio_2} 
                                 3-Álgebra:                 S/${precio_3}
                                 4-Geometría:               S/${precio_4} 
                                 5-Trigonometría:           S/${precio_5}
                                 0-Para acabar y salir.`));
}

// Se presenta el resumen de la compra, indicando el precio unitario y las cantidades elegidas
// Además se indica el monto total a pagar.
alert(`
       Resumen de la compra:        PRECIO:           CANT.:      
       >> Raz. Matemático:          S/${precio_1}     ${cantidad_1} 
       >> Aritmética:               S/${precio_2}     ${cantidad_2}
       >> Álgebra:                  S/${precio_3}     ${cantidad_3}
       >> Geometría:                S/${precio_4}     ${cantidad_4}
       >> Trigonometría:            S/${precio_5}     ${cantidad_5}

       El monto total de la compra es de S/ ${total}`);
