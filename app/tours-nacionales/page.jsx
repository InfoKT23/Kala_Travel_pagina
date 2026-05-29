"use client";

import { useState } from "react";

const toursNacionales = [
  {
    nombre: "Joyas del pácifico",
    precio: "Desde $45",
    descripcion: "Playas, diversión, relax y paisajes costeros.",
    incluye: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Cuenca Majestuoso",
    precio: "Desde $39",
    descripcion: "Historia, cultura, gastronomía y arquitectura colonial.",
    incluye: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Aventura andina - Quilotoa",
    precio: "Desde $44",
    descripcion: "Quilotoa + Laguna de Yambo con salida desde Guayaquil.",
    incluye: [
      "Transporte turístico ida y vuelta",
      "Box lunch",
      "Almuerzo incluido",
      "Visita a la Laguna del Quilotoa",
      "Caminata al cráter opcional",
      "Tiempo libre para fotos y recorrido",
      "Visita a la Laguna de Yambo",
      "Tiempo libre para fotografías",
      "Parada técnica durante el retorno",
      "Guía de viaje",
    ],
    itinerario: [
      "01:30 – Reunión del grupo para embarque",
      "02:00 – Salida desde Guayaquil, Gasolinera Shell frente al aeropuerto",
      "08:30 – Llegada a la Laguna del Quilotoa",
      "Caminata hacia el cráter opcional",
      "Actividades opcionales: kayak o cabalgata",
      "Tiempo libre para fotos y recorrido",
      "12:30 – Almuerzo",
      "14:00 – Salida hacia la Laguna de Yambo",
      "16:00 – Visita a la Laguna de Yambo",
      "Tiempo libre para fotografías",
      "17:30 – Retorno a Guayaquil",
      "20:30 – Parada técnica para baños o snacks",
      "23:30 – Llegada aproximada a Guayaquil",
    ],
    imagenes: [],
  },
  {
    nombre: "Quito y Mitad del Mundo",
    precio: "Desde $135",
    descripcion: "Centro histórico, cultura y experiencia en la línea ecuatorial.",
    incluye: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Mindo Natural",
    precio: "Desde $110",
    descripcion: "Bosque nublado, mariposas, chocolate y aventura.",
    incluye: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Galápagos",
    precio: "Consultar",
    descripcion: "Islas encantadas, fauna única y experiencias inolvidables.",
    incluye: [],
    itinerario: [],
    imagenes: [],
  },
];

function obtenerPrecioNumero(precio) {
  const numero = precio.replace(/[^0-9]/g, "");
  return numero ? Number(numero) : 999999;
}

export default function ToursNacionalesPage() {
  const [vista, setVista] = useState("grid");
  const [orden, setOrden] = useState("nombre-az");
  const [tourSeleccionado, setTourSeleccionado] = useState(null);

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
              Viaja por los destinos más increíbles del país con paquetes
              accesibles, asesoría personalizada y atención directa por
              WhatsApp.
            </p>

            <div className="heroActions">
              <a
                href="https://wa.me/593978778672?text=Hola%20Kala%20Travel,%20quiero%20informaci%C3%B3n%20sobre%20tours%20nacionales"
                target="_blank"
                rel="noopener noreferrer"
                className="heroPrimaryBtn"
              >
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
                className={
                  vista === "grid"
                    ? "tourCard tourClickable"
                    : "tourCardList tourClickable"
                }
                key={index}
                onClick={() => setTourSeleccionado(tour)}
              >
                <div className="tourImage">
                  <span>{tour.nombre}</span>
                </div>

                <div className="tourInfo">
                  <h3>{tour.nombre}</h3>
                  <p>{tour.descripcion}</p>
                  <strong>{tour.precio}</strong>

                  <button
                    className="tourBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTourSeleccionado(tour);
                    }}
                  >
                    Ver detalles
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {tourSeleccionado && (
        <div
          className="tourModalOverlay"
          onClick={() => setTourSeleccionado(null)}
        >
          <div className="tourModal" onClick={(e) => e.stopPropagation()}>
            <button
              className="tourModalClose"
              onClick={() => setTourSeleccionado(null)}
            >
              ×
            </button>

            <div className="tourModalHeader">
              <span>Programa turístico</span>
              <h2>{tourSeleccionado.nombre}</h2>
              <strong>{tourSeleccionado.precio}</strong>
              <p>{tourSeleccionado.descripcion}</p>
            </div>

            {tourSeleccionado.imagenes.length > 0 ? (
              <div className="tourGallery">
                {tourSeleccionado.imagenes.map((imagen, index) => (
                  <img src={imagen} alt={tourSeleccionado.nombre} key={index} />
                ))}
              </div>
            ) : (
              <div className="tourGalleryPlaceholder">
                <p>Aquí puedes agregar fotos del programa</p>
              </div>
            )}

            {tourSeleccionado.incluye.length > 0 && (
              <div className="tourModalSection">
                <h3>El tour incluye:</h3>

                <ul className="tourIncludes">
                  {tourSeleccionado.incluye.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {tourSeleccionado.itinerario.length > 0 && (
              <div className="tourModalSection">
                <h3>Itinerario:</h3>

                <div className="tourItinerary">
                  {tourSeleccionado.itinerario.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            )}

            {tourSeleccionado.incluye.length === 0 &&
              tourSeleccionado.itinerario.length === 0 && (
                <div className="tourModalSection">
                  <p>
                    Pronto agregaremos más información detallada de este
                    programa. Puedes consultar disponibilidad por WhatsApp.
                  </p>
                </div>
              )}

            <a
              href={`https://wa.me/593978778672?text=Hola%20Kala%20Travel,%20quiero%20informaci%C3%B3n%20sobre%20el%20tour%20${encodeURIComponent(
                tourSeleccionado.nombre
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modalWhatsappBtn"
            >
              Cotizar este tour por WhatsApp
            </a>
          </div>
        </div>
      )}
    </main>
  );
}