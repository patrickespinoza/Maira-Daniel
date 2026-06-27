import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionWhatsapp from "./componentes-encabezado/confirmacion";
import Portada from "./componentes-encabezado/imagenfrase";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      {/* SECCIÓN CELEBRACIONES */}
      <div className="overflow-hidden">

        <Celebracion
          titulo="Recepción"
          dia="Viernes"
          fecha="17"
          mesAnio="Julio 2026"
          hora="20:00 hrs"
          lugar="XISA Salón de Eventos"
          direccion="Av. Pablo Livas 132, Acapulco, 67198 Guadalupe, N.L."
          ubicacion="https://maps.app.goo.gl/LW35Yr4zmqBwWLV27"
        />


      </div>

      {/* SECCIÓN VESTIMENTA */}
      <Vestimenta />

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>

      {/* CONFIRMACIÓN */}

      {/* IMAGEN FINAL */}
        <Portada />
      
      <ConfirmacionWhatsapp/>
    </div>
  );
}