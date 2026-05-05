"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="topbar">
        <span>+593978778672</span>
        <span>info@kalatravel.tours</span>
        <span>Lunes - Viernes: 10:00 A.M. - 19:00 P.M.</span>
      </div>

      <nav className="navbar">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Kala Travel"
            width={180}
            height={80}
          />
        </Link>

        <button className="menuBtn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={open ? "navMenu active" : "navMenu"}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/tours">Tours Nacionales</Link></li>
          <li><Link href="/visas">Visas</Link></li>
          <li><Link href="/salidas">Salidas Confirmadas</Link></li>
          <li><Link href="/seguros">Seguros de viaje</Link></li>
        </ul>

        <button className="accountBtn">Mi cuenta</button>
      </nav>
    </header>
  );
}