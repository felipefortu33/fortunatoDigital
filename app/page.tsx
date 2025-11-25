'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap, Code2, Headphones, CheckCircle2, Sparkles } from 'lucide-react'
import Carousel from '@/components/Carousel'

export default function Home() {
  const services = [
    {
      title: 'Landing Pages',
      price: 'R$ 400 - R$ 800',
      description: 'Páginas otimizadas para conversão com design moderno e responsivo.',
      icon: Sparkles,
      features: ['Design responsivo', 'Formulário de contato', 'SEO básico', '3-5 dias'],
      link: '/servicos',
    },
    {
      title: 'Sites Institucionais',
      price: 'R$ 800 - R$ 1.500',
      description: 'Site completo para sua empresa com múltiplas páginas e funcionalidades.',
      icon: Code2,
      features: ['5-8 páginas', 'Blog integrado', 'SEO avançado', '7-10 dias'],
      link: '/servicos',
    },
    {
      title: 'Tráfego Pago',
      price: 'Sob consulta',
      description: 'Gestão profissional de campanhas no Google Ads e Meta Ads.',
      icon: Zap,
      features: ['Google Ads', 'Meta Ads', 'Análise de ROI', 'Relatórios mensais'],
      link: '/servicos#trafego-pago',
    },
    {
      title: 'Sistemas Personalizados',
      price: 'Sob consulta',
      description: 'Soluções sob medida com backend completo e integrações avançadas.',
      icon: Code2,
      features: ['Frontend + Backend', 'APIs e integrações', 'Dashboards', 'Sob medida'],
      link: '/servicos',
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Entregas Rápidas',
      description: 'Projetos entregues no prazo combinado, com qualidade garantida.',
    },
    {
      icon: Code2,
      title: 'Código Limpo',
      description: 'Código organizado, documentado e seguindo as melhores práticas.',
    },
    {
      icon: Sparkles,
      title: 'Design Moderno',
      description: 'Interfaces atuais, intuitivas e totalmente responsivas.',
    },
    {
      icon: Headphones,
      title: 'Suporte Pós-Entrega',
      description: '30 dias de suporte gratuito após a conclusão do projeto.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src="/img/capa-hero-home.png"
            alt="Sistema de automação digital"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center animate-fade-in-up">
            {/* Badge */}
            

            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-tight">
              Transformando Ideias<br />
              em <span className="text-dark">Código</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Desenvolvimento Web Profissional para Empresas que Querem Crescer Online
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contato"
                className="bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
              >
                Ver Portfólio
              </Link>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs md:text-sm text-white/80">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs md:text-sm text-white/80">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">7+</div>
                <div className="text-xs md:text-sm text-white/80">Tecnologias</div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Seção de Serviços em Destaque */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Soluções completas de desenvolvimento web para empresas de todos os tamanhos
            </p>
          </div>

          {/* Grid de serviços - Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-main rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 font-medium">A partir de</div>
                      <div className="text-lg font-bold text-dark">{service.price}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-dark mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-secondary transition-colors duration-300 group/link"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Carrossel de serviços - Mobile */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={4000}>
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="card group mx-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-main rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 font-medium">A partir de</div>
                        <div className="text-lg font-bold text-dark">{service.price}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-dark mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-secondary transition-colors duration-300 group/link"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Seção Por Que Escolher */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Por Que Escolher a <span className="gradient-text">Fortunato Digital</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprometidos com a excelência em cada projeto que desenvolvemos
            </p>
          </div>

          {/* Grid de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main rounded-2xl mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-main relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Vamos Conversar Sobre<br />Seu Projeto?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato e receba um orçamento personalizado sem compromisso
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center space-x-2 bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Solicitar Orçamento Grátis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </>
  )
}
