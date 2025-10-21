'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-main relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Número 404 grande */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-heading font-bold text-white/20 leading-none">
            404
          </h1>
        </div>

        {/* Mensagem */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <Home className="w-5 h-5" />
            <span>Voltar para Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Links úteis */}
        <div className="mt-12">
          <p className="text-white/80 mb-4">Ou acesse uma destas páginas:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/sobre" className="text-white hover:text-dark transition-colors duration-300">
              Sobre
            </Link>
            <span className="text-white/50">•</span>
            <Link href="/servicos" className="text-white hover:text-dark transition-colors duration-300">
              Serviços
            </Link>
            <span className="text-white/50">•</span>
            <Link href="/portfolio" className="text-white hover:text-dark transition-colors duration-300">
              Portfólio
            </Link>
            <span className="text-white/50">•</span>
            <Link href="/contato" className="text-white hover:text-dark transition-colors duration-300">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
