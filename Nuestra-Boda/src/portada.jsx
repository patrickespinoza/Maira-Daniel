import React from "react";

export default function Portada() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#5E6650]">
      {/* Imagen mobile */}
      <img
        src="/portadamobi.png"
        alt="Portada de boda"
        className="
          block
          md:hidden
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          select-none
          pointer-events-none
        "
        draggable={false}
      />

      {/* Imagen desktop */}
      <img
        src="/portadadesk.png"
        alt="Portada de boda"
        className="
          hidden
          md:block
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          select-none
          pointer-events-none
        "
        draggable={false}
      />
    </section>
  );
}