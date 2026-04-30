const destinations = [
  ["Cartagena", "$1.000"],
  ["Cancún", "$1.500"],
  ["Punta Cana", "$890"],
  ["Panamá", "$1.400"],
];

export default function Destinations() {
  return (
    <section className="section blue">
      <h2>El destino lo eliges tú; la experiencia la creamos nosotros</h2>

      <div className="grid">
        {destinations.map(([city, price]) => (
          <div className="travelCard" key={city}>
            <h3>{city}</h3>
            <strong>{price}</strong>
            <p>07/01 - 12/01 · Paquete turístico disponible.</p>
            <button>Ver detalles</button>
          </div>
        ))}
      </div>
    </section>
  );
}