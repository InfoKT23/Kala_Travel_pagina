const visas = [
  "Visa USA",
  "Visa Canadá",
  "Visa Schengen",
  "Visa España Estudios",
];

export default function Visas() {
  return (
    <section className="section">
      <h2>Tu puerta abierta al mundo</h2>
      <p className="intro">
        Te ayudamos con asesoría para visas y requisitos de viaje.
      </p>

      <div className="grid">
        {visas.map((visa) => (
          <div className="card" key={visa}>
            <h3>{visa}</h3>
            <strong>$50,00</strong>
            <p>Asesoría personalizada para tu proceso.</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}