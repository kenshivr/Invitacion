import React from 'react'
const HexagonalFrame = () => {
  return (
    <div className="relative mb-4">
      {/* Hexagonal frame with gold borders */}
      <div className="relative w-48 h-48 mx-auto">
        {/* Outer gold hexagon */}
        <div
          className="absolute inset-0 bg-transparent border-4 border-amber-600/80 rotate-90"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            transform: 'rotate(90deg)',
          }}
        ></div>
        {/* Inner gold hexagon */}
        <div
          className="absolute inset-1 bg-transparent border-2 border-amber-500/80 rotate-90"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            transform: 'rotate(90deg)',
          }}
        ></div>
        {/* Image container */}
        <div
          className="absolute inset-2 overflow-hidden"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            transform: 'rotate(90deg)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1529636798458-92914bcb2b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
            alt="Alinne y Carlos"
            className="w-full h-full object-cover transform -rotate-90"
          />
        </div>
      </div>
    </div>
  )
}
export default HexagonalFrame
