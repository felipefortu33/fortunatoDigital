'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Clock, Zap, MessageSquare, Bot, Users, Globe, Settings, Target, TrendingUp, Shield, CheckCircle, Phone } from 'lucide-react'
import Carousel from '@/components/Carousel'

export default function Automacoes() {
  const services = [
    {
      id: 'whatsapp-automation',
      icon: MessageSquare,
      title: 'Automação de WhatsApp',
      description: 'API oficial do WhatsApp Business para atendimento profissional',
      features: [
        'Respostas instantâneas',
        'Multi-atendentes',
        'Mensagens em massa',
      ],
    },
    {
      id: 'chatbot-ia',
      icon: Bot,
      title: 'Chatbots com IA',
      description: 'Inteligência artificial que conversa como humano',
      features: [
        'Atendimento 24/7',
        'Aprende sozinho',
        'Resolve dúvidas',
      ],
    },
    {
      id: 'prospeccao',
      icon: Users,
      title: 'Prospecção Automática',
      description: 'Encontre e qualifique clientes no piloto automático',
      features: [
        'Lead scoring',
        'Follow-up automático',
        'CRM integrado',
      ],
    },
    {
      id: 'sites-landing',
      icon: Globe,
      title: 'Sites & Landing Pages',
      description: 'Páginas otimizadas para conversão com automações',
      features: [
        'Alta performance',
        'SEO incluído',
        'Integrado com CRM',
      ],
    },
    {
      id: 'fluxos-n8n',
      icon: Zap,
      title: 'Fluxos no n8n',
      description: 'Automações complexas conectando ferramentas',
      features: [
        '200+ integrações',
        'Workflows visuais',
        'Sem código',
      ],
    },
    {
      id: 'sistemas-personalizados',
      icon: Settings,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para seu negócio',
      features: [
        'Arquitetura sólida',
        'Escalável',
        'Suporte total',
      ],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Automatize tarefas repetitivas e foque no que importa',
    },
    {
      icon: Zap,
      title: 'Respostas Instantâneas',
      description: 'Clientes atendidos em segundos, qualquer hora do dia',
    },
    {
      icon: TrendingUp,
      title: 'Vendas Automatizadas',
      description: 'Converta leads em clientes sem intervenção manual',
    },
    {
      icon: MessageSquare,
      title: 'Atendimento 24/7',
      description: 'Seu negócio nunca dorme, atenda a qualquer momento',
    },
    {
      icon: Shield,
      title: 'Zero Erros',
      description: 'Processos padronizados executados com perfeição',
    },
    {
      icon: Target,
      title: 'Mais Conversões',
      description: 'Follow-up automático aumenta fechamentos em até 40%',
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Diagnóstico Gratuito',
      description: 'Analisamos seu negócio e identificamos oportunidades de automação',
    },
    {
      step: '02',
      title: 'Planejamento dos Fluxos',
      description: 'Mapeamos os processos e criamos o roteiro de automação',
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Criamos as automações com n8n, WhatsApp API e IA',
    },
    {
      step: '04',
      title: 'Integração',
      description: 'Conectamos com seu site, CRM e ferramentas atuais',
    },
    {
      step: '05',
      title: 'Testes Rigorosos',
      description: 'Validamos cada fluxo antes de liberar para produção',
    },
    {
      step: '06',
      title: 'Lançamento',
      description: 'Colocamos tudo no ar e treinamos sua equipe',
    },
    {
      step: '07',
      title: 'Suporte Contínuo',
      description: 'Monitoramento e ajustes para máxima performance',
    },
  ]

  const plans = [
    {
      name: 'Start',
      subtitle: 'Ideal para começar com automações',
      price: '149',
      features: [
        'Chatbot básico WhatsApp',
        'Respostas automáticas',
        '1 número WhatsApp',
        'Até 1.000 mensagens/mês',
        'Suporte por email',
        'Setup incluso',
      ],
      highlight: false,
    },
    {
      name: 'Pro',
      subtitle: 'Para negócios em crescimento',
      price: '299',
      features: [
        'Chatbot + IA avançada',
        'Prospecção automática',
        'Fluxos de vendas completos',
        'Até 5.000 mensagens/mês',
        'Integrações simples (3)',
        'Dashboard de métricas',
        'Suporte prioritário',
        'Setup + treinamento',
      ],
      highlight: true,
      badge: 'Mais Popular',
    },
    {
      name: 'Premium',
      subtitle: 'Solução enterprise completa',
      price: '497',
      features: [
        'IA avançada personalizada',
        'CRM + automações full',
        'Até 3 números WhatsApp',
        'Mensagens ilimitadas',
        'Integrações ilimitadas',
        'n8n workflows complexos',
        'API customizada',
        'Suporte 24/7',
        'Consultoria mensal inclusa',
      ],
      highlight: false,
    },
  ]

  const automationExamples = [
    {
      title: 'Captura Automática de Clientes',
      description: 'Cliente envia mensagem no WhatsApp → IA qualifica → Envia para vendedor certo → Registra no CRM',
    },
    {
      title: 'Respostas Inteligentes com IA',
      description: 'IA entende perguntas complexas → Responde baseado na base de conhecimento → Escala para humano se necessário',
    },
    {
      title: 'Recuperação de Carrinho',
      description: 'Cliente abandona compra → Dispara sequência de WhatsApp → Oferece desconto → Fecha venda automaticamente',
    },
    {
      title: 'Agendamentos Automáticos',
      description: 'Cliente solicita agendamento → IA verifica agenda → Confirma horário → Envia lembretes → Registra no CRM',
    },
    {
      title: 'Envio de Propostas',
      description: 'Lead qualificado → Gera proposta personalizada → Envia por WhatsApp/Email → Acompanha abertura → Follow-up automático',
    },
    {
      title: 'Acompanhamento de Vendas',
      description: 'Proposta enviada → Follow-up em 24h → Lembra em 3 dias → Oferece consultoria → Escala se sem resposta',
    },
  ]

  const testimonials = [
    {
      quote: 'Automatizamos todo o atendimento inicial. Agora capturamos leads 24/7 e nossa equipe foca apenas em fechar negócios. Aumentamos vendas em 60%!',
      author: 'Carlos Mendes',
      company: 'Imobiliária Prime',
    },
    {
      quote: 'O chatbot agenda consultas sozinho, confirma presença e até envia lembretes. Reduzimos faltas em 40% e liberamos a recepção para outras tarefas.',
      author: 'Juliana Costa',
      company: 'Clínica Saúde +',
    },
    {
      quote: 'A prospecção automática traz leads qualificados direto no nosso CRM. A equipe de vendas triplicou a produtividade. ROI em menos de 2 meses!',
      author: 'Roberto Silva',
      company: 'Tech Solutions',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <Image
            src="/img/capa-hero-auto.png"
            alt="Sistema de automação digital"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
              <Zap className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-semibold">Automações + Inteligência Artificial</span>
            </div>

            {/* Título principal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-5 leading-tight">
              Transforme Seu Negócio<br />
              com <span className="text-dark">Automações Inteligentes</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Economize tempo, aumente vendas e atenda clientes 24/7 com WhatsApp automatizado, chatbots com IA e fluxos personalizados
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato"
                className="bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
              >
                <Zap className="w-5 h-5" />
                <span>Quero Automatizar Meu Negócio</span>
              </Link>
              <Link
                href="/contato"
                className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Falar com Especialista</span>
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span>Diagnóstico gratuito</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span>Setup incluso</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span>Suporte completo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              O Que <span className="gradient-text">Fazemos</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Soluções completas de automação para transformar seu atendimento e vendas
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="card group">
                  <div className="p-3 bg-gradient-main rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-dark mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={4000}>
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.id} className="card mx-2">
                    <div className="p-3 bg-gradient-main rounded-lg inline-block mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-dark mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Por Que Automatizar */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Por Que <span className="gradient-text">Automatizar?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Vantagens reais que transformam seu negócio
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main rounded-2xl mb-4">
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

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={3500}>
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="bg-white p-8 rounded-2xl shadow-lg text-center mx-2"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main rounded-2xl mb-4">
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
            </Carousel>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Processo transparente do diagnóstico ao suporte contínuo
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main text-white text-xl font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-heading font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={3500}>
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center mx-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main text-white text-xl font-bold rounded-full mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Planos de Automação */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Planos de <span className="gradient-text">Automação</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Escolha o plano ideal para o tamanho do seu negócio
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.highlight
                    ? 'card border-4 border-primary shadow-2xl scale-105'
                    : 'card'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-main text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-3xl font-heading font-bold text-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.subtitle}</p>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-dark">R$</span>
                  <span className="text-5xl font-bold text-dark">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contato"
                  className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-main text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-dark hover:bg-gradient-main hover:text-white'
                  }`}
                >
                  Contratar Agora
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="lg:hidden mb-12">
            <Carousel autoplay autoplayDelay={5000}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl overflow-hidden mx-2 ${
                    plan.highlight
                      ? 'card border-4 border-primary shadow-2xl'
                      : 'card'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 right-0 bg-gradient-main text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="text-3xl font-heading font-bold text-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>

                  <div className="mb-6">
                    <span className="text-2xl font-bold text-dark">R$</span>
                    <span className="text-5xl font-bold text-dark">{plan.price}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contato"
                    className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-gradient-main text-white hover:shadow-xl hover:scale-105'
                        : 'bg-gray-100 text-dark hover:bg-gradient-main hover:text-white'
                    }`}
                  >
                    Contratar Agora
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <p className="text-sm text-gray-600">
              💡 Todos os planos incluem setup, treinamento e suporte. Sem taxas ocultas.
            </p>
          </div>
        </div>
      </section>

      {/* Exemplos de Automações */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Exemplos de <span className="gradient-text">Automações</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Veja como a automação funciona na prática
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationExamples.map((example) => (
              <div
                key={example.title}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-dark mb-3">
                  {example.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {example.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={4000}>
              {automationExamples.map((example) => (
                <div
                  key={example.title}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl mx-2"
                >
                  <h3 className="text-lg font-heading font-bold text-dark mb-3">
                    {example.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {example.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              O Que Dizem Nossos <span className="gradient-text">Clientes</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Resultados reais de quem automatizou com a gente
            </p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-dark">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel autoplay autoplayDelay={5000}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="bg-white p-8 rounded-2xl shadow-lg mx-2"
                >
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-dark">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-main relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Transforme Seu Negócio Agora com<br />
            <span className="text-dark">Automações Inteligentes</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Pare de perder vendas por falta de tempo. Deixe a tecnologia trabalhar para você 24 horas por dia, 7 dias por semana.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contato"
              className="bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Quero Automatizar Agora
            </Link>
            <Link
              href="/contato"
              className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
            >
              Diagnóstico Grátis
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5" />
              <span>Setup Incluso</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5" />
              <span>Suporte Total</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
