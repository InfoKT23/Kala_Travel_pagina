import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className="topbar">
        <span>+593 98 140 7480</span>
        <span>info@kalatravel.tours</span>
        <span>Lun - Vie: 09:00 - 16:00</span>
      </div>

      <nav className="navbar">
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="Kala Travel"
            width={160}
            height={60}
          />
        </div>
        <ul>
          <li>Inicio</li>
          <li>Tours</li>
          <li>Visas</li>
          <li>Salidas Confirmadas</li>
          <li>Seguros de viaje</li>
        </ul>
        <button>Mi cuenta</button>
      </nav>
    </header>
  );
}