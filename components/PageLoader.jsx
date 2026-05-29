"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    setClosing(false);

    const closeAnimation = setTimeout(() => {
      setClosing(true);
    }, 1800);

    const removeLoader = setTimeout(() => {
      setShowLoader(false);
    }, 2300);

    return () => {
      clearTimeout(closeAnimation);
      clearTimeout(removeLoader);
    };
  }, [pathname]);

  if (!showLoader) return null;

  return (
    <div className={closing ? "pageLoader closing" : "pageLoader"}>
      <div className="loaderBox">
        <video
          key={pathname}
          className="loaderPlaneVideo"
          src="/videos/loader-avion.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        />

        <p className="loaderMessage">Preparando tu próxima aventura...</p>
      </div>
    </div>
  );
}