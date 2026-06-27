import React from "react";

export default function Portada() {
  return (
    <section className="w-full bg-[#F7F4ED]">
      <div
        className="
          w-full
          max-w-[1920px]
          mx-auto
          flex
          justify-center
          items-center
          overflow-hidden
        "
      >
        <img
          src="/frase2.jpg"
          alt="Portada"
          className="
            w-full
            h-auto
            object-contain
            select-none
            pointer-events-none
          "
          draggable={false}
        />
      </div>
    </section>
  );
}