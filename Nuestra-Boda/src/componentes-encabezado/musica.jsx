import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Musica = () => {
  const audioRef = useRef(null);
  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [muted, setMuted] = useState(false);

  const activarMusica = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.muted = false;
        await audioRef.current.play();
        setReproduciendo(true);
        setMuted(false);
      }
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
    }

    setMostrarModal(false);
  };

  const continuarSinMusica = () => {
    setMostrarModal(false);
  };

  const toggleMusica = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src="/musica.mp3" loop preload="auto" />

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#1F241C]/70 backdrop-blur-sm flex items-center justify-center px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                relative
                max-w-md
                w-full
                bg-[#F7F4ED]
                border
                border-[#B89B5E]/50
                shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                px-7
                py-10
                text-center
                overflow-hidden
              "
            >
              <div className="absolute inset-3 border border-[#B89B5E]/25 pointer-events-none" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#5E6650]/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#B89B5E]/10 rounded-tr-full" />

              <div className="relative z-10">
                <p className="uppercase tracking-[0.35em] text-[#B89B5E] text-xs font-light">
                  Wedly
                </p>

                <h2 className="font-playfair text-4xl sm:text-5xl text-[#5E6650] mt-5 leading-tight">
                  Esta invitación
                  <br />
                  tiene música
                </h2>

                <div className="w-20 h-px bg-[#B89B5E] mx-auto my-7" />

                <p className="font-cursiveDancing text-2xl sm:text-3xl text-[#3F433A]/80 leading-relaxed">
                  Activa el sonido para disfrutar una experiencia más especial.
                </p>

                <div className="mt-9 flex flex-col gap-4">
                  <button
                    onClick={activarMusica}
                    className="
                      w-full
                      bg-[#5E6650]
                      hover:bg-[#B89B5E]
                      text-[#F7F4ED]
                      px-8
                      py-4
                      rounded-full
                      uppercase
                      tracking-[0.22em]
                      text-xs
                      shadow-[0_14px_35px_rgba(94,102,80,0.28)]
                      transition
                      duration-300
                      hover:scale-105
                    "
                  >
                    Activar música
                  </button>

                  <button
                    onClick={continuarSinMusica}
                    className="
                      w-full
                      text-[#5E6650]
                      border
                      border-[#5E6650]/35
                      hover:border-[#B89B5E]
                      hover:text-[#B89B5E]
                      px-8
                      py-4
                      rounded-full
                      uppercase
                      tracking-[0.22em]
                      text-xs
                      transition
                      duration-300
                    "
                  >
                    Continuar sin música
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {reproduciendo && (
        <button
          onClick={toggleMusica}
          className="
            fixed
            bottom-5
            right-5
            z-[9998]
            w-14
            h-14
            rounded-full
            bg-[#5E6650]
            border
            border-[#B89B5E]
            text-[#F7F4ED]
            shadow-[0_12px_35px_rgba(0,0,0,0.25)]
            flex
            items-center
            justify-center
            text-xl
            transition
            duration-300
            hover:bg-[#B89B5E]
            hover:scale-110
          "
          aria-label="Activar o silenciar música"
        >
          {muted ? "🔇" : "♫"}
        </button>
      )}
    </>
  );
};

export default Musica;