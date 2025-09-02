import { useEffect, useRef } from 'react'
import WeddingInvitation from './components/WeddingInvitation'

export function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Silenciosamente falla si el navegador lo bloquea
        })
      }
    }

    document.addEventListener('click', playAudio, { once: true })

    return () => {
      document.removeEventListener('click', playAudio)
    }
  }, [])

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <audio ref={audioRef} loop>
        <source src="/Invitacion/cancion.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      <WeddingInvitation />
    </div>
  )
}
