const total = 0;

const MyCArt = [
  { nombre: "Vinilo", precio: 150 },
  { nombre: "Hoodie", precio: 120 },
  { nombre: "GiftCard", precio: 200 },
];

const cart = [];
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const Vinilo = new Producto("Vinilo", 350);
const Hoodie = new Producto("Hoodie", 20);
const GiftCard = new Producto("Giftcard", 50);

const Productos = [Vinilo, Hoodie, GiftCard];

const ShowCart = () => {
  let mensaje = `cart:`;
  cart.forEach((el, index) => {
    mensaje += `
                  ${index + 1}- ${el.nombre} $${el.precio}
              `;
  });
  alert(mensaje);
};

const ShowCatalogue = () => {
  let mensaje = "Items: PLease select what you want to buy:";

  Productos.forEach((el, index) => {
    mensaje += `
                ${index + 1}- ${el.nombre} $${el.precio}
            `;
  });

  opcion = parseInt(prompt(mensaje));

  if (opcion > 3) {
    alert("please enter a valid option");
  }
  cart.push(Productos[opcion - 1]);
};

const YourTotal = () => {
  let total = 0;
  cart.forEach((el) => {
    total += el.precio;
  });
  alert(" Your total is: " + total);
};

const questions = [
  { first: "Catalogue", second: "Catalogue" },
  { first: "cart ", second: "Cart" },
  { first: " your total ", second: "Your total " },
  { first: "exit", second: "Exit" },
];

const primeraPregunta =
  "Welcome! what are you looking for: " +
  "  " +
  questions.map((list, index) => {
    return ` ${index + 1}- ${list.first} `;
  });

const segundaPregunta =
  "What are you looking for?: " +
  "  " +
  questions.map((list, index) => {
    return ` ${index + 1}- ${list.second} `;
  });

let opcion = parseInt(prompt(primeraPregunta));

const hi = {
  1: ShowCatalogue,
  2: ShowCart,
  3: YourTotal,
};

while (opcion < 4) {
  hi[opcion]();
  opcion = parseInt(prompt(segundaPregunta));
}

if (opcion === 4) {
  alert("Good Bye");
}

if (opcion > 4) {
  alert("please enter a valid option");
}
