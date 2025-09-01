import WeddingInvitation from './components/WeddingInvitation'

export function App() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      {/* Audio en bucle al cargar la app */}
      <audio autoPlay loop>
        <source src="/Invitacion/cancion.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      <WeddingInvitation />
    </div>
  )
}