"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="topbar">
        <a
          href="https://wa.me/593978778672"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappTop"
        >
          <FaWhatsapp className="whatsappIcon" />
          +593 978 778 672
        </a>

        <span>info@kalatravel.tours</span>
        <span>Lunes - Viernes: 10:00 A.M. - 19:00 P.M.</span>
      </div>

      <nav className="navbar">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Kala Travel"
            width={180}
            height={80}
          />
        </Link>

        <button
          className="menuBtn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={open ? "navMenu active" : "navMenu"}>
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Inicio
            </Link>
          </li>

          <li>
            <Link href="/tours-nacionales" onClick={() => setOpen(false)}>
              Tours nacionales
            </Link>
          </li>

          <li>
            <Link href="/visas" onClick={() => setOpen(false)}>
              Visas
            </Link>
          </li>

          <li>
            <Link href="/salidas-confirmadas" onClick={() => setOpen(false)}>
              Salidas Confirmadas
            </Link>
          </li>

          <li>
            <Link href="/seguros-de-viaje" onClick={() => setOpen(false)}>
              Seguros de viaje
            </Link>
          </li>
        </ul>

        <button className="accountBtn">Mi cuenta</button>
      </nav>
    </header>
  );
}