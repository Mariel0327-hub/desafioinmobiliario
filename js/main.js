
const propiedades_venta = [
  {
    nombre: "Casa en Las Condes",
    src: "img/casa1.jpg",
    descripcion: "Hermosa casa con amplio jardín",
    ubicacion: "Las Condes, Santiago",
    habitaciones: 4,
    costo: 150000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento en Ñuñoa",
    src: "img/depto1.jpg",
    descripcion: "Luminoso departamento con terraza",
    ubicacion: "Ñuñoa, Santiago",
    habitaciones: 3,
    costo: 120000000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Casa en Maipú",
    src: "img/casa2.jpg",
    descripcion: "Casa familiar con patio",
    ubicacion: "Maipú, Santiago",
    habitaciones: 5,
    costo: 98000000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Loft en Vitacura",
    src: "img/loft1.jpg",
    descripcion: "Loft moderno ideal para parejas",
    ubicacion: "Vitacura, Santiago",
    habitaciones: 2,
    costo: 160000000,
    smoke: true,
    pets: false
  }
];

const propiedades_alquiler = [
  {
    nombre: "Depto en Providencia",
    src: "img/depto2.jpg",
    descripcion: "Departamento moderno cerca del metro",
    ubicacion: "Providencia, Santiago",
    habitaciones: 2,
    costo: 550000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Casa en La Florida",
    src: "img/casa3.jpg",
    descripcion: "Casa amplia con piscina",
    ubicacion: "La Florida, Santiago",
    habitaciones: 4,
    costo: 700000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Depto en Santiago Centro",
    src: "img/depto3.jpg",
    descripcion: "Céntrico y con excelente conectividad",
    ubicacion: "Santiago Centro",
    habitaciones: 1,
    costo: 450000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Studio en Las Condes",
    src: "img/studio1.jpg",
    descripcion: "Perfecto para profesionales jóvenes",
    ubicacion: "Las Condes, Santiago",
    habitaciones: 1,
    costo: 600000,
    smoke: true,
    pets: true
  }
];


function renderPropiedades(array, containerId, limite = array.length) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  array.slice(0, limite).forEach(prop => {
    container.innerHTML += `
      <div class="propiedad">
        <img src="${prop.src}" alt="${prop.nombre}">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p>Ubicación: ${prop.ubicacion}</p>
        <p>Habitaciones: ${prop.habitaciones}</p>
        <p>Precio: $${prop.costo.toLocaleString()}</p>
        <p>${prop.smoke ? '🚬 Se permite fumar' : '🚭 No se permite fumar'}</p>
        <p>${prop.pets ? '🐶 Se permiten mascotas' : '❌ No se permiten mascotas'}</p>
      </div>
    `;
  });
}
