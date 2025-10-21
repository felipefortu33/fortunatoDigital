import Link from 'next/link'
import { CheckCircle2, Clock, Zap, Code2, Sparkles, ArrowRight, Shield, Headphones } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços - Fortunato Digital',
  description: 'Landing Pages a partir de R$ 500, Sites Institucionais a partir de R$ 1.000 e Sistemas Personalizados. Desenvolvimento web profissional com tecnologias modernas.',
}

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
