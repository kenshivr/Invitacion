
const FloralFrame = () => {
  return (
    <div className="relative w-[300px] h-[300px]">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 mask-image"
      >
        <source src="/PRE72133.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Marco decorativo */}
      <img
        alt="Marco floral"
        src="/decoracion.png"
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />
    </div>
  );
};
export default FloralFrame;
