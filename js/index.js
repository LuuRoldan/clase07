// const nombre = "Leia";

for (var i = 0; i < 5; i++) {
  // console.log("Hola " + nombre);
}

// console.log(nombre);

// -------------------------------------

function sumar_v1(n1, n2) {
  return n1 + n2;
}

const sumar_v2 = (n1, n2) => n1 + n2;
// console.log(sumar_v2(10, 9));

const usuarios = ["Leia", "Luke", "Han"];
// usuarios.forEach((usuario) => console.log(usuario));

// -------------------------------------

const saludar = (nombre = "Terrícola") => {
  return `Hola ${nombre}`;
};

// console.log(saludar("Fede"));
// console.log(saludar());

// -------------------------------------

const princesa = {
  nombre: "Leia",
  apellido: "Organa"
};

// const nombrePrincesa = princesa.nombre;
const { nombre: nombrePrincesa, apellido } = princesa;

console.log(nombrePrincesa);

// const saludarPrincesa = "Hola " + nombrePrincesa;
// console.log(saludarPrincesa);

// -------------------------------------

const frutas = ["Naranja", "Frutilla", "Manzana"];

// const fruta1 = frutas[0];
// const fruta2 = frutas[1];
// const fruta3 = frutas[2];

const [, , fruta2] = frutas;

// console.log(fruta2);

// -------------------------------------

const nuevasFrutas = ["Cereza", "Pera", "Palta"];

// nuevasFrutas.forEach(function (fruta, index, array) {
//   array.push("pepe");
//   console.log(`${fruta} ocupa la posición ${index}`);
//   console.log(array);
// });

console.log(nuevasFrutas);

for (const fruta of nuevasFrutas) {
  // console.log(fruta);
}

// -------------------------------------

const auto = {
  patente: "ABD 123",
  color: "Azul",
  puertas: 4
};

// console.log(auto[patente]);

for (let key in auto) {
  console.log(`${key}: ${auto[key]}`);
}

// -------------------------------------

const usuario1 = {
  nombre: "Han",
  apellido: "Solo"
};

const capitan = {
  nave: "Halcón Milenario",
  ...usuario1
};

console.log(capitan);

const listaDePelis = ["Kill Bill", "Pulp Fuction"];
const listaDePelis2 = ["Mi Vecino Totoro", "El Viaje de Chihiro"];
const listaFinalDePelis = [...listaDePelis2, ...listaDePelis];

console.log(listaFinalDePelis);
