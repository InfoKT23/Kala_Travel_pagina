import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <Image 
  src="/images/logo_blanco.png"
  alt="Kala Travel"
  width={160}
  height={60}
/>
      <p>Viajes, visas, vuelos y seguros de viaje.</p>
      <p>© 2026 Kala Travel.</p>
    </footer>
  );
}