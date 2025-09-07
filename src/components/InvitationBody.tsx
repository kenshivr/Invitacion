import { FaWhatsapp } from "react-icons/fa";

const InvitationBody = () => {
  return (
    <div className="w-full text-center mb-8 font-nunito">
      {/* Fecha */}
      <div className="flex items-center justify-center mb-6">
        <div className="text-right pr-2 w-2/6">
          <div className="h-px bg-[#813322] w-full mb-1 ml-auto" />
          <p className="text-[#813322] font-bold text-lg text-center">SÁBADO</p>
          <div className="h-px bg-[#813322] w-full mt-1 ml-auto" />
        </div>

        <div className="px-4">
          <p className="text-[#813322] text-6xl font-semibold font-cormorant">27</p>
        </div>

        <div className="text-left pl-2 w-2/6">
          <div className="h-px bg-[#813322] w-full mb-1" />
          <p className="text-[#813322] font-bold text-lg text-center">SEPTIEMBRE</p>
          <div className="h-px bg-[#813322] w-full mt-1" />
        </div>
      </div>

      {/* Detalles de la invitación */}
      <div className="text-[#700515] mt-8 mb-8 px-4">
        <p className="mb-2">Dios ha llenado nuestros corazones con su inmenso amor. Nos gustaría contar con tu presencia y tu apoyo al comenzar esta gran aventura juntos.</p>
        <p className="mb-2">La misa se llevará a cabo a la 4:40 p.m. en la Iglesia de Santa Mónica.</p>
        <p className="mb-2">La recepción será a las 6:00 p.m</p>
      </div>

      {/* Confirmación */}
      <div className="mb-8 px-4 text-xl font-cormorant">
        <a
          href="https://wa.me/525564140598?text=Gracias%20por%20invitarme,%20confirmo%20que%20asistir%C3%A9%20a%20la%20boda."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#700515] italic underline flex justify-center gap-3 items-center"
        >
          Confirmar Asistencia al: (55) 6414 0598
          <FaWhatsapp className="text-[#700515] mt-1" />
        </a>
      </div>

      {/* Ubicación */}
      <div className="flex flex-wrap justify-around w-full my-14 gap-18">
        <LocationBlock
          href="https://maps.app.goo.gl/z5E9W1u4yyeZg62d9"
          imgSrc="/Invitacion/iglesia.webp"
          label="Ubicación de la Iglesia"
        />
        <LocationBlock
          href="https://maps.app.goo.gl/sHAUE5bEbyV7MSKh6"
          imgSrc="/Invitacion/salon.webp"
          label="Ubicación del Salón"
        />
      </div>

      {/* Lista de regalos */}
      <div className="text-[#700515] font-semibold w-full flex flex-col items-center justify-center mb-6">
        <a
          href="https://www.amazon.com.mx/wedding/registry/2SRPFB9E6ZK1O"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-4"
        >
          <img alt="Regalo" src="/Invitacion/regalo.webp" className="h-22" />
          <span>Lista de Regalos</span>
          {/* <span>Evento: 51752985</span> */}
        </a>
      </div>
    </div>
  );
};

const LocationBlock = ({ href, imgSrc, label }: { href: string; imgSrc: string; label: string }) => (
  <div className="text-[#700515] font-semibold w-64 md:w-1/3 h-22 md:h-36 flex flex-col items-center justify-center">
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
      <img alt={label} src={imgSrc} className="h-22" />
      <span>{label}</span>
    </a>
  </div>
);

export default InvitationBody;
