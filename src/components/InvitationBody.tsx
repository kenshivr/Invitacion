const InvitationBody = () => {
  return (
    <div className="w-full text-center mb-8">
      {/* Date section */}
      <div className="flex items-center justify-center mb-6">
        <div className="text-right pr-2 w-2/6">
          <div className="h-px bg-amber-700 w-full mb-1 ml-auto"></div>
          <p
            className="text-red-800 font-bold text-lg text-center"
            style={{
              fontFamily: "Nunito, sans-serif",
            }}
          >
            SÁBADO
          </p>
          <div className="h-px bg-amber-700 w-full mt-1 ml-auto"></div>
        </div>

        <div className="px-4">
          <p
            className="text-amber-700 text-6xl"
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 600,
            }}
          >
            27
          </p>
        </div>

        <div className="text-left pl-2 w-2/6">
          <div className="h-px bg-amber-700 w-full mb-1"></div>
          <p
            className="text-red-800 font-bold text-lg text-center"
            style={{
              fontFamily: "Nunito, sans-serif",
            }}
          >
            SEPTIEMBRE
          </p>
          <div className="h-px bg-amber-700 w-full mt-1"></div>
        </div>
      </div>

      {/* Invitation details */}
      <div
        className="text-red-800 mt-8 mb-8 px-4"
        style={{
          fontFamily: "Nunito, sans-serif",
        }}
      >
        <p className="mb-2">
          Con el honor de su presencia, los invitamos a celebrar nuestra unión.
        </p>
        <p className="mb-2">
          La misa se llevará a cabo a la 1:00 p.m. en la Iglesia de Santa
          Mónica.
        </p>
        <p className="mb-2">La recepción será a las 4:00 p.m</p>
      </div>
      {/* Contact info */}
      <div className="mb-8 px-4">
        <p
          className="text-red-800 text-lg italic underline"
          style={{
            fontFamily: "Cormorant, serif",
          }}
        >
          Confirmar Asistencia al: (55) 6414 0598
        </p>
      </div>
      {/* Location info */}
      <div className="flex justify-around w-full mb-6 mt-14">
        <div className="text-red-900 font-semibold w-1/3 h-22 md:h-36 justify-end flex">
          <img
            alt="Iglesia"
            src="/Invitacion/iglesia.png"
            className=""
          />
        </div>
        <div className="w-1/3 h-22" />
        <div className="text-red-900 font-semibold w-1/3 h-22 md:h-36 justify-start flex">
          <img
            alt="Salon"
            src="/Invitacion/salon.png"
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default InvitationBody;
