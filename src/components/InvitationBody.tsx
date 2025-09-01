import { FaWhatsapp } from "react-icons/fa";

const InvitationBody = () => {
  return (
    <div className="w-full text-center mb-8">
      {/* Date section */}
      <div className="flex items-center justify-center mb-6">
        <div className="text-right pr-2 w-2/6">
          <div className="h-px bg-[#813322] w-full mb-1 ml-auto"></div>
          <p
            className="text-[#813322] font-bold text-lg text-center"
            style={{
              fontFamily: "Nunito, sans-serif",
            }}
          >
            SÁBADO
          </p>
          <div className="h-px bg-[#813322] w-full mt-1 ml-auto"></div>
        </div>

        <div className="px-4">
          <p
            className="text-[#813322] text-6xl"
            style={{
              fontFamily: "Cormorant, serif",
              fontWeight: 600,
            }}
          >
            27
          </p>
        </div>

        <div className="text-left pl-2 w-2/6">
          <div className="h-px bg-[#813322] w-full mb-1"></div>
          <p
            className="text-[#813322] font-bold text-lg text-center"
            style={{
              fontFamily: "Nunito, sans-serif",
            }}
          >
            SEPTIEMBRE
          </p>
          <div className="h-px bg-[#813322] w-full mt-1"></div>
        </div>
      </div>

      {/* Invitation details */}
      <div
        className="text-[#700515] mt-8 mb-8 px-4"
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
      <div className="mb-8 px-4 text-xl">
        <a
          href="https://wa.me/525564140598?text=Gracias%20por%20invitarme,%20confirmo%20que%20asistir%C3%A9%20a%20la%20boda."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#700515] italic underline flex justify-center gap-3 items-center"
          style={{
            fontFamily: "Cormorant, serif",
          }}
        >
          Confirmar Asistencia al: (55) 6414 0598
          <FaWhatsapp className="text-[#700515] mt-1" />
        </a>
      </div>

      {/* Location info */}
      <div className="flex justify-around w-full mb-6 mt-14">
        <div className="text-[#700515] font-semibold w-1/3 h-22 md:h-36 flex flex-col items-center justify-center gap-4">
          <a
            href="https://maps.app.goo.gl/z5E9W1u4yyeZg62d9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4"
          >
            <img alt="Iglesia" src="/Invitacion/iglesia.png" className="h-22" />
            <span>Ubicacion de la Iglesia</span>
          </a>
        </div>

        <div className="w-1/3 h-22" />

        <div className="text-[#700515] font-semibold w-1/3 h-22 md:h-36 flex flex-col items-center justify-center">
          <a
            href="https://www.google.com/maps/place/Jard%C3%ADn+de+Eventos+El+Ed%C3%A9n/@19.3660804,-98.9581725,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1e3c8669dd36b:0xec614b3cb4afe42c!8m2!3d19.3660804!4d-98.9581725!16s%2Fg%2F11j36prdcm?hl=es-419&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4"
          >
            <img alt="Salon" src="/Invitacion/salon.png" className="h-22" />
            <span>Ubicacion del Salon</span>
          </a>
        </div>
      </div>

      <div
        className="text-[#700515] font-semibold w-full flex flex-col items-center justify-center mb-6"
      >
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51752985"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-4"
        >
          <img alt="Regalo" src="/Invitacion/regalo.png" className="h-22" />
          <span>Lista de Regalos</span>
          <span>Evento: 51752985</span>
        </a>
      </div>

    </div>
  );
};
export default InvitationBody;
