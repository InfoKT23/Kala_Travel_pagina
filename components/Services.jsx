const services = [
  ["Tours", "Experiencias auténticas para descubrir nuevos destinos."],
  ["Visas", "Te asesoramos para gestionar tu visa sin complicaciones."],
  ["Salidas Confirmadas", "Viajes organizados con fechas disponibles."],
  ["Seguros de Viaje", "Coberturas para viajar con tranquilidad."],
];

export default function Services() {
  return (
    <section className="section">
      <h2>Tu próxima aventura comienza con un clic</h2>
      <p className="intro">
        Diseñamos experiencias de viaje personalizadas, cuidando cada detalle
      </p>

      <div className="grid">
        {services.map(([title, text]) => (
          <div className="card" key={title}>
            <div className="imagePlaceholder"></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <button>Más información</button>
          </div>
        ))}
      </div>
    </section>
  );
}