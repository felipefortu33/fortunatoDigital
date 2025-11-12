'use client'

import Link from 'next/link'
import { CheckCircle2, Clock, Zap, Code2, Sparkles, ArrowRight, Shield, Headphones, TrendingUp, Target, BarChart3, DollarSign } from 'lucide-react'
import Carousel from '@/components/Carousel'

export default function Servicos() {
  const services = [
    {
      id: 'landing-page',
      icon: Sparkles,
      title: 'Landing Page',
      price: 'R$ 400 - R$ 800',
      period: 'Pagamento único',
      description: '1 página otimizada para conversão, ideal para campanhas, lançamentos de produtos ou captação de leads.',
      features: [
        '1 página completa e otimizada',
        'Design responsivo (mobile/tablet/desktop)',
        'Formulário de contato funcional',
        'Otimização SEO básica',
        'Integração com Google Analytics',
        'Até 2 rodadas de ajustes',
        'Hospedagem grátis (primeiro ano)',
        'Suporte de 30 dias',
      ],
      deliveryTime: '3-5 dias úteis',
      highlight: false,
    },
    {
      id: 'site-institucional',
      icon: Code2,
      title: 'Site Institucional',
      price: 'R$ 800 - R$ 1.500',
      period: 'Pagamento único',
      description: 'Site completo e profissional para sua empresa, com múltiplas páginas e funcionalidades avançadas.',
      features: [
        '5-8 páginas completas',
        'Home, Sobre, Serviços, Portfólio, Blog, Contato',
        'Design moderno e profissional',
        'Blog integrado (CMS)',
        'Otimização SEO avançada',
        'Formulário de contato avançado',
        'Integração com redes sociais',
        'Google Analytics + Search Console',
        'Até 2 rodadas de ajustes',
        'Hospedagem grátis (primeiro ano)',
        'Suporte de 30 dias',
      ],
      deliveryTime: '7-10 dias úteis',
      highlight: true,
    },
    {
      id: 'trafego-pago',
      icon: TrendingUp,
      title: 'Tráfego Pago',
      price: 'Sob consulta',
      period: 'Investimento + gestão mensal',
      description: 'Gestão profissional de campanhas de anúncios no Google Ads e Meta Ads (Facebook/Instagram) para aumentar suas vendas e gerar leads qualificados.',
      features: [
        'Gestão Google Ads (Pesquisa e Display)',
        'Gestão Meta Ads (Facebook e Instagram)',
        'Criação de campanhas estratégicas',
        'Otimização de conversões',
        'Segmentação de público-alvo',
        'Testes A/B de anúncios',
        'Relatórios mensais detalhados',
        'Análise de ROI e métricas',
        'Ajustes contínuos de performance',
        'Suporte via WhatsApp',
      ],
      deliveryTime: 'Início em 2-3 dias úteis',
      highlight: false,
    },
    {
      id: 'sistema-personalizado',
      icon: Zap,
      title: 'Sistema Personalizado',
      price: 'Sob consulta',
      period: 'Orçamento personalizado',
      description: 'Solução sob medida com frontend e backend completos, ideal para sistemas de gestão, dashboards e aplicações complexas.',
      features: [
        'Solução 100% personalizada',
        'Frontend + Backend completo',
        'APIs e integrações',
        'Dashboards administrativos',
        'Sistema de autenticação',
        'Banco de dados otimizado',
        'Testes automatizados',
        'Documentação técnica completa',
        'Treinamento de uso',
        'Suporte estendido',
        'Manutenção e atualizações',
      ],
      deliveryTime: 'Conforme complexidade',
      highlight: false,
    },
  ]

  const includes = [
    {
      icon: CheckCircle2,
      title: 'Design Responsivo',
      description: 'Perfeito em qualquer dispositivo: desktop, tablet ou smartphone',
    },
    {
      icon: Code2,
      title: 'Código Limpo',
      description: 'Código organizado, documentado e seguindo as melhores práticas',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'HTTPS, proteção contra spam e segurança em formulários',
    },
    {
      icon: Headphones,
      title: 'Suporte Incluso',
      description: '30 dias de suporte gratuito após a entrega do projeto',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Briefing',
      description: 'Conversamos sobre suas necessidades, objetivos e expectativas do projeto.',
    },
    {
      step: '02',
      title: 'Proposta',
      description: 'Enviamos orçamento detalhado com escopo, prazo e valor do investimento.',
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Criamos seu projeto com updates regulares e total transparência.',
    },
    {
      step: '04',
      title: 'Revisão',
      description: 'Você avalia, solicita ajustes e aprovamos juntos a versão final.',
    },
    {
      step: '05',
      title: 'Entrega',
      description: 'Publicamos seu projeto e fornecemos suporte durante 30 dias.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-main overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Nossos <span className="text-dark">Serviços</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de desenvolvimento web com qualidade profissional e preços justos
          </p>
        </div>
      </section>

      {/* Planos de Serviços */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop - Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className={`relative rounded-2xl overflow-hidden ${
                    service.highlight
                      ? 'card border-4 border-primary shadow-2xl scale-105'
                      : 'card'
                  }`}
                >
                  {/* Badge de destaque */}
                  {service.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-main text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                      MAIS POPULAR
                    </div>
                  )}

                  {/* Ícone e título */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-main rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-dark">
                      {service.title}
                    </h3>
                  </div>

                  {/* Preço */}
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-dark mb-1">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.period}</div>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Prazo de entrega */}
                  <div className="flex items-center space-x-2 mb-6 p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Prazo de entrega</div>
                      <div className="text-sm font-semibold text-dark">{service.deliveryTime}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contato"
                    className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                      service.highlight
                        ? 'bg-gradient-main text-white hover:shadow-xl hover:scale-105'
                        : 'bg-gray-100 text-dark hover:bg-gradient-main hover:text-white'
                    }`}
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Mobile - Carrossel */}
          <div className="lg:hidden">
            <Carousel autoplay autoplayDelay={5000}>
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className={`relative rounded-2xl overflow-hidden mx-2 ${
                      service.highlight
                        ? 'card border-4 border-primary shadow-2xl'
                        : 'card'
                    }`}
                  >
                    {/* Badge de destaque */}
                    {service.highlight && (
                      <div className="absolute top-0 right-0 bg-gradient-main text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                        MAIS POPULAR
                      </div>
                    )}

                    {/* Ícone e título */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-gradient-main rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-dark">
                        {service.title}
                      </h3>
                    </div>

                    {/* Preço */}
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-dark mb-1">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.period}</div>
                    </div>

                    {/* Descrição */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Prazo de entrega */}
                    <div className="flex items-center space-x-2 mb-6 p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Prazo de entrega</div>
                        <div className="text-sm font-semibold text-dark">{service.deliveryTime}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/contato"
                      className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                        service.highlight
                          ? 'bg-gradient-main text-white hover:shadow-xl hover:scale-105'
                          : 'bg-gray-100 text-dark hover:bg-gradient-main hover:text-white'
                      }`}
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Todos os serviços incluem */}
      <section id="trafego-pago-detalhes" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Por Que Investir em <span className="gradient-text">Tráfego Pago?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Resultados rápidos e mensuráveis para o crescimento do seu negócio online
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                Alcance Seu Público
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Segmentação precisa para atingir exatamente quem tem interesse no seu produto ou serviço.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                Resultados Rápidos
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ao contrário do SEO orgânico, o tráfego pago gera resultados imediatos após o início das campanhas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                Métricas Detalhadas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acompanhe em tempo real clicks, conversões, custo por lead e retorno sobre investimento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                Controle Total
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Defina seu orçamento diário e mensal, ajustando conforme os resultados e objetivos do negócio.
              </p>
            </div>
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden mb-16">
            <Carousel autoplay autoplayDelay={4000}>
              <div className="bg-white p-6 rounded-2xl shadow-lg mx-2">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  Alcance Seu Público
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Segmentação precisa para atingir exatamente quem tem interesse no seu produto ou serviço.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg mx-2">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  Resultados Rápidos
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ao contrário do SEO orgânico, o tráfego pago gera resultados imediatos após o início das campanhas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg mx-2">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  Métricas Detalhadas
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Acompanhe em tempo real clicks, conversões, custo por lead e retorno sobre investimento.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg mx-2">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-main rounded-xl mb-4">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  Controle Total
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Defina seu orçamento diário e mensal, ajustando conforme os resultados e objetivos do negócio.
                </p>
              </div>
            </Carousel>
          </div>

          {/* Informações sobre tráfego pago */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">
                  Como Funciona Nossa Gestão
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Análise e Planejamento</h4>
                      <p className="text-sm text-gray-600">
                        Estudamos seu negócio, público-alvo e concorrência para criar estratégias eficazes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Criação das Campanhas</h4>
                      <p className="text-sm text-gray-600">
                        Desenvolvemos anúncios atrativos e campanhas segmentadas no Google e Meta Ads.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Otimização Contínua</h4>
                      <p className="text-sm text-gray-600">
                        Monitoramos diariamente e ajustamos as campanhas para maximizar resultados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Relatórios Mensais</h4>
                      <p className="text-sm text-gray-600">
                        Você recebe relatórios completos com todas as métricas e análise de performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">
                  Plataformas que Gerenciamos
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-dark mb-3 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Google Ads</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Rede de Pesquisa (apareça no Google)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Rede de Display (banners em sites)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>YouTube Ads (anúncios em vídeo)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Google Shopping (e-commerce)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-dark mb-3 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Meta Ads (Facebook & Instagram)</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Anúncios no Feed do Facebook</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Stories do Instagram</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Reels e vídeos</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Remarketing para visitantes do site</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-main rounded-xl text-white">
                  <p className="text-sm font-semibold mb-2">💡 Dica Importante</p>
                  <p className="text-sm">
                    O investimento em mídia (budget) é pago diretamente para as plataformas (Google/Meta). 
                    Nossa taxa de gestão é cobrada separadamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contato"
                className="inline-flex items-center space-x-2 bg-gradient-main text-white font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <span>Solicitar Proposta de Tráfego Pago</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Todos os serviços incluem */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Todos os Serviços <span className="gradient-text">Incluem</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Garantias e benefícios que você recebe em todos os nossos projetos
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includes.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={4000}>
              {includes.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="text-center mx-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </Carousel>
          </div>

          {/* Info adicional */}
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-dark mb-4">
                  Forma de Pagamento
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-dark">50% no início</strong> do projeto para iniciarmos o desenvolvimento
                  e <strong className="text-dark">50% na entrega</strong> após sua aprovação final.
                  Aceitamos PIX, transferência bancária e cartão de crédito.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-dark mb-4">
                  Garantia e Suporte
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-dark">30 dias de suporte gratuito</strong> após a entrega para ajustes,
                  dúvidas e pequenas alterações. Após esse período, oferecemos planos de manutenção personalizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Como <span className="gradient-text">Trabalhamos</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Processo transparente e organizado do primeiro contato até a entrega final
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Linha conectora */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-main -z-10" />
                )}

                <div className="text-center">
                  {/* Número do passo */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main text-white text-2xl font-bold rounded-full mb-4">
                    {item.step}
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={4000}>
              {process.map((item) => (
                <div key={item.step} className="text-center mx-2">
                  {/* Número do passo */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main text-white text-2xl font-bold rounded-full mb-4">
                    {item.step}
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-main relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Pronto Para Começar?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento gratuito e sem compromisso para seu projeto
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
