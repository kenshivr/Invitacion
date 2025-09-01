const InvitationHeader = () => {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <h2
        className="text-amber-700 text-3xl md:text-4xl lg:text-6xl"
        style={{
          fontFamily: 'Parisienne, cursive',
        }}
      >
        Nos Casamos
      </h2>
      <h1
        className="text-red-800 text-5xl md:text-6xl lg:text-9xl mt-6 mb-14"
        style={{
          fontFamily: 'Parisienne, cursive',
        }}
      >
        Alinne y Carlos
      </h1>
      <p
        className="w-full text-lg md:text-2xl lg:text-4xl"
        style={{
          fontFamily: 'Cormorant, serif',
        }}
      >
        Este día muy especial estaremos junto a nuestros seres queridos.
      </p>
    </div>
  )
}
export default InvitationHeader
