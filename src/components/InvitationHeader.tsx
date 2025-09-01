const InvitationHeader = () => {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <h2
        className="text-[#9f7a3d] text-4xl lg:text-6xl"
        style={{
          fontFamily: 'Parisienne, cursive',
        }}
      >
        Nos Casamos
      </h2>
      <h1
        className="text-[#813322] text-6xl lg:text-9xl mt-6 mb-14"
        style={{
          fontFamily: 'Parisienne, cursive',
        }}
      >
        Alinne y Carlos
      </h1>
      <p
        className="w-3/4 text-2xl lg:text-4xl text-[#88662f]"
        // style={{
        //   fontFamily: 'Cormorant, serif',
        // }}
        style={{
          fontFamily: "Cormorant, serif",
          fontWeight: 600,
        }}
      >
        Este día muy especial estaremos junto a nuestros seres queridos.
      </p>
    </div>
  )
}
export default InvitationHeader
