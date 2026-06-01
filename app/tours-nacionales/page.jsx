"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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

function obtenerPrecioNumero(precio) {
  const numero = precio.replace(/[^0-9]/g, "");
  return numero ? Number(numero) : 999999;
}

export default function ToursNacionalesPage() {
  const [vista, setVista] = useState("grid");
  const [orden, setOrden] = useState("nombre-az");

  const toursOrdenados = [...toursNacionales].sort((a, b) => {
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
        <div className="toursHeaderContent">
          <div className="toursHeaderText">
            <span>Tours nacionales</span>

            <h1>Descubre Ecuador con Kala Travel</h1>

            <p>
              Explora destinos increíbles dentro del país con paquetes diseñados
              para vivir experiencias únicas.
            </p>

            <div className="heroActions">
              <a
                href="https://wa.me/593978778672?text=Hola%20Kala%20Travel,%20quiero%20informaci%C3%B3n%20sobre%20tours%20nacionales"
                target="_blank"
                rel="noopener noreferrer"
                className="heroWhatsappBtn"
              >
                <FaWhatsapp className="heroWhatsappIcon" />
                Cotizar por WhatsApp
              </a>

              <a href="#paquetes" className="heroSecondaryBtn">
                Ver paquetes
              </a>
            </div>
          </div>

          <div className="heroInfoCard">
            <strong>Desde $39</strong>
            <p>Paquetes nacionales disponibles</p>

            <ul>
              <li>Atención personalizada</li>
              <li>Asesoría por WhatsApp</li>
              <li>Destinos dentro de Ecuador</li>
              <li>Opciones para familias y grupos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="toursLayout" id="paquetes">
        <aside className="toursSidebar">
          <h3>Categorías</h3>

          <ul>
            <li>Tours nacionales</li>
            <li>Tours internacionales</li>
            <li>Visas</li>
            <li>Plan acumulactivo</li>
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