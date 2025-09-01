import FloralFrame from './FloralFrame'
import InvitationHeader from './InvitationHeader'
import InvitationBody from './InvitationBody'
import InvitationFooter from './InvitationFooter'

const WeddingInvitation = () => {
  return (
    <div
      className="w-screen h-full relative shadow-lg"
      style={{
        backgroundImage: "url('/Invitacion/fondo.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Cormorant:wght@400;500;600&family=Nunito:wght@300;400;600&display=swap');
        `}
      </style>
      <div className="relative z-10 flex flex-col items-center">
        <FloralFrame />
        <InvitationHeader />
        <InvitationBody />
        <InvitationFooter />
      </div>
    </div>
  )
}
export default WeddingInvitation
