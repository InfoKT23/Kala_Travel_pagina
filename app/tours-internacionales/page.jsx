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

export default function ToursInternacionalesPage() {
  const [vista, setVista] = useState("grid");

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
            {toursInternacionales.map((tour, index) => (
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