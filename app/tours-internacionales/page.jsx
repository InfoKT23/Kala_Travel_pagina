"use client";

import { useState } from "react";

const toursInternacionales = [
  {
    nombre: "Panamá Ciudad",
    precio: "Consultar",
    descripcion:
      "Disfruta la ciudad de Panamá con hospedaje, compras, vida urbana, gastronomía y una experiencia moderna.",
  },
  {
    nombre: "Panamá Solo Playa",
    precio: "Consultar",
    descripcion:
      "Paquete ideal para descansar frente al mar, disfrutar del sol, la playa y momentos de relajación.",
  },
  {
    nombre: "Panamá + Full Day San Blas",
    precio: "Consultar",
    descripcion:
      "Combina la ciudad de Panamá con una experiencia inolvidable en las islas de San Blas.",
  },
  {
    nombre: "Cartagena Mega Oferta",
    precio: "Consultar",
    descripcion:
      "Vive Cartagena con una opción económica para disfrutar playa, historia, cultura y diversión.",
  },
  {
    nombre: "Cartagena Deluxe",
    precio: "Consultar",
    descripcion:
      "Una experiencia superior en Cartagena con mayor comodidad, mejores servicios y estilo.",
  },
  {
    nombre: "Medellín City Pack",
    precio: "Consultar",
    descripcion:
      "Descubre Medellín con city tour, cultura, paisajes urbanos, gastronomía y experiencias únicas.",
  },
];

function obtenerPrecioNumero(precio) {
  const numero = precio.replace(/[^0-9]/g, "");
  return numero ? Number(numero) : 999999;
}

export default function ToursInternacionalesPage() {
  const [vista, setVista] = useState("grid");
  const [orden, setOrden] = useState("nombre-az");

  const toursOrdenados = [...toursInternacionales].sort((a, b) => {
    if (orden === "nombre-az") {
      return a.nombre.localeCompare(b.nombre);
    }

    if (orden === "nombre-za") {
      return b.nombre.localeCompare(a.nombre);
    }

    if (orden === "precio-bajo") {
      return obtenerPrecioNumero(a.precio) - obtenerPrecioNumero(b.precio);
    }

    if (orden === "precio-alto") {
      return obtenerPrecioNumero(b.precio) - obtenerPrecioNumero(a.precio);
    }

    return 0;
  });

  return (
    <main className="toursPage">
      <section className="toursHeader">
        <span>Tours internacionales</span>
        <h1>Explora destinos internacionales con Kala Travel</h1>
        <p>
          Vive experiencias inolvidables fuera del país con paquetes diseñados
          para viajar cómodo, seguro y con asesoría personalizada.
        </p>
      </section>

      <section className="toursLayout">
        <aside className="toursSidebar">
          <h3>Categorías</h3>

          <ul>
            <li>Tours nacionales</li>
            <li>Tours internacionales</li>
            <li>Visas</li>
            <li>Salidas confirmadas</li>
            <li>Seguros de viaje</li>
            <li>Asesoría personalizada</li>
          </ul>
        </aside>

        <div className="toursContent">
          <div className="toursTop">
            <div>
              <h2>Paquetes internacionales</h2>
              <p>Mostrando 1-6 de 6 tours</p>
            </div>

            <div className="toursControls">
              <div className="viewButtons">
                <button
                  className={vista === "grid" ? "viewBtn active" : "viewBtn"}
                  onClick={() => setVista("grid")}
                >
                  ▦ Grid
                </button>

                <button
                  className={vista === "list" ? "viewBtn active" : "viewBtn"}
                  onClick={() => setVista("list")}
                >
                  ☰ Lista
                </button>
              </div>

              <select
                className="sortSelect"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
              >
                <option value="vendidos">Los más vendidos</option>
                <option value="relevancia">Relevancia</option>
                <option value="nombre-az">Nombre, A a Z</option>
                <option value="nombre-za">Nombre, Z a A</option>
                <option value="precio-bajo">
                  Precio: de más bajo a más alto
                </option>
                <option value="precio-alto">
                  Precio: de más alto a más bajo
                </option>
              </select>
            </div>
          </div>

          <div className={vista === "grid" ? "toursGrid" : "toursList"}>
            {toursOrdenados.map((tour, index) => (
              <article
                className={vista === "grid" ? "tourCard" : "tourCardList"}
                key={index}
              >
                <div className="tourImage">
                  <span>{tour.nombre}</span>
                </div>

                <div className="tourInfo">
                  <h3>{tour.nombre}</h3>
                  <p>{tour.descripcion}</p>
                  <strong>{tour.precio}</strong>

                  <a
                    href={`https://wa.me/593978778672?text=Hola%20Kala%20Travel,%20quiero%20informaci%C3%B3n%20sobre%20el%20paquete%20${encodeURIComponent(
                      tour.nombre
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tourBtn"
                  >
                    Cotizar por WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}