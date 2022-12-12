let nombre;
function solicitarNombre() {
    nombre = prompt("¿Cual es tu nombre?");
}

solicitarNombre();


if ((nombre == "")) {
    alert("Por favor ingresa tu nombre para poder continuar")
    solicitarNombre();
}

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let libroUno = new Producto("Los Compas y el diamantito legendario", 4500);
let libroDos = new Producto("Los Compas escapan de la prisión", 4700);
let libroTres = new Producto("Los Compas y la cámara del tiempo", 5000);
let libroCuatro = new Producto("Los Compas y la Maldición de Mikecrack", 7000);

let arrayProductos = [libroUno, libroDos, libroTres, libroCuatro];

console.log(arrayProductos);

let carrito = [];

let eleccion = prompt("Hola " + nombre + ". ¿Desea comprar algun producto de nuestro catálogo?" + "\n" + "1) Los compas y el diamantito legendario" + "\n" + "2) Los compas escapan de la prisión" + "\n" + "3) Los Compas y la cámara del tiempo" + "\n" + "4) Los Compas y la Maldición de Mikecrack");
console.log("Hola " + nombre + ". ¿Desea comprar algun producto de nuestro catálogo? Escriba SI o NO" + "\n" + "1) Los compas y el diamantito legendario" + "\n" + "2) Los compas escapan de la prisión" + "\n" + "3) Los Compas y la cámara del tiempo" + "\n" + "4) Los Compas y la Maldición de Mikecrack")

while (eleccion.toUpperCase() != "si".toUpperCase() && eleccion.toUpperCase() != "no".toUpperCase()) {
    alert("Ingrese SI o NO")
    eleccion = prompt(". ¿Desea comprar algun producto de nuestro catálogo?" + "\n" + "1) Los compas y el diamantito legendario" + "\n" + "2) Los compas escapan de la prisión" + "\n" + "3) Los Compas y la cámara del tiempo" + "\n" + "4) Los Compas y la Maldición de Mikecrack")
}

if (eleccion.toUpperCase() === "si".toUpperCase()) {
    let allProducts = arrayProductos.map((arrayProductos) => arrayProductos.nombre + " " + " $ " + arrayProductos.precio + "\n");
    alert(allProducts.join(" - "))
} else if (eleccion.toUpperCase() == "no".toUpperCase()) {
    alert("Muchas gracias por visitarnos. Te esperamos pronto!");
}

while (eleccion.toUpperCase() != "no".toUpperCase()) {
    let producto = prompt("¿Que libro deseas llevar?" + "\n" + "1) Los compas y el diamantito legendario" + "\n" + "2) Los compas escapan de la prisión" + "\n" + "3) Los Compas y la cámara del tiempo" + "\n" + "4) Los Compas y la Maldición de Mikecrack");
    let precio = 0;
    if (producto == "1" || producto == "2" || producto == "3" || producto == "4") {
        switch (producto) {
            case "1":
                precio = libroUno.precio;
                break;
            case "2":
                precio = libroDos.precio;
                break;
            case "3":
                precio = libroTres.precio;
                break;
            case "4":
                precio = libroCuatro.precio;
            default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuántas unidades quiere llevar?"))

        carrito.push({ producto, unidades, precio })
    } else {
        alert("Producto no identificado")
    }

    eleccion = prompt("¿Desea seguir comprando?")

    while (eleccion.toUpperCase() == "no".toUpperCase()) {
        alert("Muchas gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`);
        })
        break;
    }
}

let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0);

console.log(carrito);

let totalConIva = total * 1.21;
alert("El total a pagar más el IVA es: " + totalConIva.toString());
console.log("Total + IVA: " + totalConIva);

let medioPago = prompt("Elija el medio de pago: " + "\n" + "1) Debito" + "\n" + "2) Credito")

switch (medioPago) {
    case "1":
        alert("Muchas gracias por su compra!")
        break
    case "2":
        let cantCuotas = prompt("¿En cuantas cuotas desea hacer el pago? Puede elegir entre 3, 6 u 12")
        let subTotal;
        let totalConCuotas;

        if (cantCuotas == 3) {
            console.log("La compra tiene un recargo del 5%");
            alert("La compra tiene un recargo del 5%")
            subTotal = totalConIva * 0.05;
            totalConCuotas = subTotal + totalConIva;
            console.log("El total de su compra es: " + totalConCuotas.toString());
            alert(("El total de su compra es: " + totalConCuotas.toString()));
        } else if (cantCuotas == 6) {
            console.log("La compra tiene un recargo del 15%");
            alert("La compra tiene un recargo del 15%")
            subTotal = totalConIva * 0.15;
            totalConCuotas = subTotal + totalConIva;
            console.log("El total de su compra es: " + totalConCuotas.toString());
            alert(("El total de su compra es: " + totalConCuotas.toString()));
        } else if (cantCuotas == 12) {
            console.log("La compra tiene un recargo del 25%");
            alert("La compra tiene un recargo del 25%")
            subTotal = totalConIva * 0.25;
            totalConCuotas = subTotal + totalConIva;
            console.log("El total de su compra es: " + totalConCuotas.toString());
            alert(("El total de su compra es: " + totalConCuotas.toString()));
        }
        break

    default:
        break;
}
