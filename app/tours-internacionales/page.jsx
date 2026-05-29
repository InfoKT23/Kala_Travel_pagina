"use client";

import { useState } from "react";

const toursInternacionales = [
  {
    nombre: "Panamá Ciudad",
    tituloPrograma: "Panamá Low Cost 4 Días & 3 Noches",
    precio: "Consultar",
    descripcion:
      "Disfruta la ciudad de Panamá con hospedaje, compras, vida urbana, gastronomía y una experiencia moderna.",
    incluye: [
      "Boleto aéreo GYE – PTY – GYE vía COPA",
      "Traslado aeropuerto hotel aeropuerto (compartido)",
      "3 noches de alojamiento en el hotel seleccionado",
      "Desayunos diarios",
      "City Tour + Canal (sin entrada) + compras Albrook Mall",
      "Impuestos hoteleros y aéreos",
    ],
    cortesiasPersona: [
      "Zona Libre Colón (vuelos llegando de sábado a jueves)",
      "Multiplaza 2 vías",
      "Botella de agua",
    ],
    cortesiasHabitacion: [
      "Maleta de bodega (física en destino)",
      "Botella de ron",
      "Sim card sin saldo",
      "Bocina",
      "Gafas de sol",
      "Perfume",
      "Porta documentos",
      "Cuponeras de descuento",
    ],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Panamá Solo Playa",
    tituloPrograma: "Panamá Solo Playa",
    precio: "Consultar",
    descripcion:
      "Escápate a Panamá para disfrutar playa, descanso y una experiencia tropical inolvidable.",
    incluye: [],
    cortesiasPersona: [],
    cortesiasHabitacion: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Panamá + Full day (San Blas)",
    tituloPrograma: "Panamá + Full day (San Blas)",
    precio: "Consultar",
    descripcion:
      "Vive Panamá y complementa tu viaje con una experiencia full day en San Blas.",
    incluye: [],
    cortesiasPersona: [],
    cortesiasHabitacion: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Cartagena Mega Oferta",
    tituloPrograma: "Cartagena Mega Oferta",
    precio: "Consultar",
    descripcion:
      "Descubre Cartagena con una oferta especial para disfrutar playa, historia y cultura.",
    incluye: [],
    cortesiasPersona: [],
    cortesiasHabitacion: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Cartagena Deluxe",
    tituloPrograma: "Cartagena Deluxe",
    precio: "Consultar",
    descripcion:
      "Una experiencia premium en Cartagena con más comodidad y atención personalizada.",
    incluye: [],
    cortesiasPersona: [],
    cortesiasHabitacion: [],
    itinerario: [],
    imagenes: [],
  },
  {
    nombre: "Medellín City Pack",
    tituloPrograma: "Medellín City Pack",
    precio: "Consultar",
    descripcion:
      "Conoce Medellín con un paquete ideal para disfrutar ciudad, cultura y modernidad.",
    incluye: [],
    cortesiasPersona: [],
    cortesiasHabitacion: [],
    itinerario: [],
    imagenes: [],
  },
];

function obtenerPrecioNumero(precio) {
  const numero = precio.replace(/[^0-9]/g, "");
  return numero ? Number(numero) : 999999;
}

export default function ToursInternacionalesPage() {
  const [vista, setVista] = useState("grid");
  const [orden, setOrden] = useState("nombre-az");
  const [tourSeleccionado, setTourSeleccionado] = useState(null);

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
        <div className="toursHeaderContent">
          <div className="toursHeaderText">
            <span>Tours internacionales</span>

            <h1>Viaja por el mundo con Kala Travel</h1>

            <p>
              Explora destinos internacionales con paquetes diseñados para
              brindarte comodidad, asesoría personalizada y atención directa por
              WhatsApp.
            </p>

            <div className="heroActions">
              <a
                href="https://wa.me/593978778672?text=Hola%20Kala%20Travel,%20quiero%20informaci%C3%B3n%20sobre%20tours%20internacionales"
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
            <strong>Internacional</strong>
            <p>Paquetes con atención personalizada</p>

            <ul>
              <li>Asesoría directa por WhatsApp</li>
              <li>Opciones a Panamá, Cartagena y Medellín</li>
              <li>Paquetes para parejas, familias y grupos</li>
              <li>Atención antes y después del viaje</li>
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
              <span>Programa internacional</span>
              <h2>{tourSeleccionado.tituloPrograma || tourSeleccionado.nombre}</h2>
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
                <h3>El programa incluye:</h3>
                <ul className="tourIncludes">
                  {tourSeleccionado.incluye.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {tourSeleccionado.cortesiasPersona.length > 0 && (
              <div className="tourModalSection">
                <h3>Cortesías por persona:</h3>
                <ul className="tourIncludes">
                  {tourSeleccionado.cortesiasPersona.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {tourSeleccionado.cortesiasHabitacion.length > 0 && (
              <div className="tourModalSection">
                <h3>Cortesías por habitación:</h3>
                <ul className="tourIncludes">
                  {tourSeleccionado.cortesiasHabitacion.map((item, index) => (
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
              tourSeleccionado.cortesiasPersona.length === 0 &&
              tourSeleccionado.cortesiasHabitacion.length === 0 &&
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
                tourSeleccionado.tituloPrograma || tourSeleccionado.nombre
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