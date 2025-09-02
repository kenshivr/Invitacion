import FloralFrame from './FloralFrame';
import InvitationHeader from './InvitationHeader';
import InvitationBody from './InvitationBody';
import InvitationFooter from './InvitationFooter';

const WeddingInvitation = () => {
  return (
    <div
      className="w-screen h-full relative shadow-lg bg-[url('/Invitacion/fondo.webp')] bg-cover bg-center bg-no-repeat font-nunito"
    >
      <div className="relative z-10 flex flex-col items-center">
        <FloralFrame />
        <InvitationHeader />
        <InvitationBody />
        <InvitationFooter />
      </div>
    </div>
  );
};

export default WeddingInvitation;
