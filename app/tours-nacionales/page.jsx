"use client";

import { useState } from "react";

const toursNacionales = [
  {
    nombre: "Joyas del pácifico",
    precio: "Desde $45",
    descripcion: "Playas, diversión, relax y paisajes costeros.",
  },
  {
    nombre: "Cuenca Majestuoso",
    precio: "Desde $39",
    descripcion: "Historia, cultura, gastronomía y arquitectura colonial.",
  },
  {
    nombre: "Aventura andina - Quilotoa",
    precio: "Desde $44",
    descripcion: "Montañas, lagunas, Kayak y pasiajes.",
  },
  {
    nombre: "Quito y Mitad del Mundo",
    precio: "Desde $135",
    descripcion: "Centro histórico, cultura y experiencia en la línea ecuatorial.",
  },
  {
    nombre: "Mindo Natural",
    precio: "Desde $110",
    descripcion: "Bosque nublado, mariposas, chocolate y aventura.",
  },
  {
    nombre: "Galápagos",
    precio: "Consultar",
    descripcion: "Islas encantadas, fauna única y experiencias inolvidables.",
  },
];

export default function ToursNacionalesPage() {
  const [vista, setVista] = useState("grid");

  return (
    <main className="toursPage">
      <section className="toursHeader">
        <span>Tours nacionales</span>
        <h1>Descubre Ecuador con Kala Travel</h1>
        <p>
          Explora destinos increíbles dentro del país con paquetes diseñados
          para vivir experiencias únicas.
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
              <h2>Paquetes disponibles</h2>
              <p>Mostrando 1-6 de 6 tours</p>
            </div>

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
          </div>

          <div className={vista === "grid" ? "toursGrid" : "toursList"}>
            {toursNacionales.map((tour, index) => (
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
                    href={`https://wa.me/593978778672?text=Hola%20Kala%20Travel,%20quiero%20informaci%C3%B3n%20sobre%20el%20tour%20${encodeURIComponent(
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