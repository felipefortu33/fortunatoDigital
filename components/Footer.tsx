'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/automacoes', label: 'Automações' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/contato', label: 'Contato' },
  ]

  const services = [
    { name: 'Landing Pages', price: 'R$ 400-800' },
    { name: 'Sites Institucionais', price: 'R$ 800-1.500' },
    { name: 'Sistemas Personalizados', price: 'Sob consulta' },
  ]

  return (
    <footer className="bg-dark text-white">
      {/* Seção principal do footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative w-16 h-16 hover:scale-110 transition-transform duration-300">
                <Image
                  src="/img/logofd.PNG"
                  alt="Fortunato Digital"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <h3 className="text-xl font-semibold">Fortunato Digital</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvimento Web Profissional para Empresas que Querem Crescer Online.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com/fortunatodigital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-gradient-main transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:fortunatodigital535@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-gradient-main transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-main mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="text-gray-400 text-sm">
                  <div className="font-medium text-white">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.price}</div>
                </li>
              ))}
            </ul>
            <Link
              href="/servicos"
              className="inline-block mt-4 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300"
            >
              Ver todos os serviços →
            </Link>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div className="font-medium text-white">Localização</div>
                  São José dos Pinhais - PR<br />
                  Brasil
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div className="font-medium text-white">Email</div>
                  <a
                    href="mailto:fortunatodigital535@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    fortunatodigital535@gmail.com
                  </a>
                </div>
              </li>
              <li className="text-gray-400 text-sm">
                <div className="font-medium text-white mb-1">Horário</div>
                <div>Seg-Sex: 9h às 18h</div>
                <div>Sábado: 9h às 13h</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior do footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Fortunato Digital. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>por Fortunato Digital</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
