"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setShow(true);
    setFade(false);

    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2600);

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname]);

  if (!show) return null;

  return (
    <div className={fade ? "pageLoader pageLoaderFade" : "pageLoader"}>
      <div className="loaderBox">
        <video
          className="loaderPlaneVideo"
          src="/videos/loader-avion.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <p className="loaderMessage">Preparando tu próxima aventura...</p>
      </div>
    </div>
  );
}