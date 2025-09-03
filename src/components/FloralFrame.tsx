const FloralFrame = () => {
  return (
    <div className="w-full flex justify-center items-center my-20 relative">
      {/* Marco decorativo encima y más grande */}
      <img
        alt="Marco floral"
        src={`/Invitacion/newDecoracion.webp`}
        className="absolute w-[400px] h-[400px] z-20 pointer-events-none"
      />

      {/* Contenedor hexagonal con el video */}
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
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src={`/Invitacion/video.webm`} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    </div>
  );
};

export default FloralFrame;
