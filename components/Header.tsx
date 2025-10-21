'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Detectar scroll para adicionar sombra ao header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contato', label: 'Contato' },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 hover:scale-110 transition-transform duration-300">
              <Image
                src="/img/logofd.PNG"
                alt="Fortunato Digital"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-dark">Fortunato Digital</div>
              <div className="text-xs text-gray-600">Desenvolvimento Web</div>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-main" />
                )}
              </Link>
            ))}
            <Link
              href="/contato"
              className="btn-primary"
            >
              Orçamento Grátis
            </Link>
          </div>

          {/* Botão Hamburger Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-gradient-main text-white'
                    : 'text-dark hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="btn-primary text-center"
            >
              Orçamento Grátis
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
