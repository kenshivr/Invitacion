import { useEffect, useRef, useCallback } from "react";

const FloralFrame = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const tryPlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      // Asegura condiciones de autoplay
      v.muted = true;
      v.playsInline = true as any; // TS: atributo booleano
      await v.play();
    } catch (err) {
      // Autoplay bloqueado: esperar interacción del usuario
      // (no muestres alerta, solo registra)
      // console.debug("Autoplay bloqueado, esperando interacción:", err);
    }
  }, []);

  useEffect(() => {
    // 1) Intento al montar
    tryPlay();

    // 2) Fallback: primer interacción del usuario
    const onUserGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
    };
    window.addEventListener("touchstart", onUserGesture, { once: true });
    window.addEventListener("click", onUserGesture, { once: true });

    return () => {
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
    };
  }, [tryPlay]);

  return (
    <div className="w-full flex justify-center items-center my-20 relative">
      <img
        alt="Marco floral"
        src={`/Invitacion/newDecoracion.webp`}
        className="absolute w-[400px] h-[400px] z-20 pointer-events-none"
      />

      <div
        className="relative w-[350px] h-[350px] z-10 overflow-hidden"
        style={{
          clipPath: `polygon(
            25% 5%, 75% 5%,
            100% 50%, 75% 95%,
            25% 95%, 0% 50%
          )`,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-[50%_10%]"
          // Reintento cuando esté listo
          onCanPlay={() => tryPlay()}
        >
          {/* Orden: primero webm, luego mp4 */}
          <source src="/Invitacion/video.webm" type="video/webm" />
          <source src="/Invitacion/video.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    </div>
  );
};

export default FloralFrame;
