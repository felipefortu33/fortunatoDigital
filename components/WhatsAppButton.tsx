'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar o botão após um pequeno scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    handleScroll() // Verificar posição inicial
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Número do WhatsApp - Formato: 55 + DDD + Número (sem espaços ou caracteres especiais)
  const phoneNumber = '554196899706' // WhatsApp da Fortunato Digital
  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative group">
        {/* Botão principal */}
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />

          {/* Pulso de animação */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-dark text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            Fale conosco!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark" />
          </div>
        </div>

        {/* Badge de notificação (opcional) */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton
