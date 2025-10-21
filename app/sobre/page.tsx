import { Target, Award, Users, TrendingUp, Code2, Database, Server, Blocks } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre - Fortunato Digital',
  description: 'Conheça a Fortunato Digital. Especialistas em desenvolvimento web profissional com experiência em React, Next.js, Java, Spring Boot e tecnologias modernas.',
}

export default function Sobre() {
  const differentials = [
    {
      icon: Award,
      title: 'Background em Infraestrutura de TI',
      description: 'Experiência sólida em infraestrutura permite criar soluções escaláveis e bem arquitetadas desde o início.',
    },
    {
      icon: Blocks,
      title: 'Visão Completa do Ecossistema',
      description: 'Compreensão profunda de toda a stack tecnológica, do frontend ao backend, banco de dados e deploy.',
    },
    {
      icon: Code2,
      title: 'Arquitetura de Software Sólida',
      description: 'Aplicação de princípios SOLID, design patterns e melhores práticas em todos os projetos.',
    },
    {
      icon: TrendingUp,
      title: 'Metodologias Ágeis',
      description: 'Desenvolvimento iterativo com entregas rápidas, feedback constante e adaptação às necessidades.',
    },
  ]

  const techStack = {
    frontend: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Code2 },
      { name: 'TypeScript', icon: Code2 },
      { name: 'TailwindCSS', icon: Code2 },
    ],
    backend: [
      { name: 'Java', icon: Server },
      { name: 'Spring Boot', icon: Server },
      { name: 'Node.js', icon: Server },
      { name: 'PHP', icon: Server },
    ],
    database: [
      { name: 'MySQL', icon: Database },
      { name: 'PostgreSQL', icon: Database },
    ],
    tools: [
      { name: 'Git', icon: Blocks },
      { name: 'Docker', icon: Blocks },
      { name: 'APIs REST', icon: Blocks },
    ],
  }

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada linha de código é escrita pensando nos objetivos do seu negócio.',
    },
    {
      icon: Users,
      title: 'Comunicação Clara',
      description: 'Transparência total durante todo o processo de desenvolvimento.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Comprometimento com a excelência técnica e satisfação do cliente.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-main overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Sobre a <span className="text-dark">Fortunato Digital</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Especialistas em desenvolvimento web profissional, transformando ideias em soluções digitais de alto impacto
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna de texto */}
            <div>
              <h2 className="section-title mb-6">
                Quem <span className="gradient-text">Somos</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-dark">Fortunato Digital</strong> é especializada em desenvolvimento web profissional,
                  oferecendo soluções completas e personalizadas para empresas que desejam ter uma presença digital marcante.
                </p>
                <p>
                  Com experiência em tecnologias modernas como <strong className="text-dark">React, Next.js, Java e Spring Boot</strong>,
                  criamos sites, landing pages e sistemas web que não apenas impressionam visualmente, mas geram resultados reais
                  para nossos clientes.
                </p>
                <p>
                  Nosso diferencial está na combinação de <strong className="text-dark">conhecimento técnico profundo</strong> com
                  uma visão estratégica de negócios, garantindo que cada projeto seja desenvolvido com foco em performance,
                  escalabilidade e experiência do usuário.
                </p>
              </div>
            </div>

            {/* Coluna de destaque */}
            <div className="space-y-6">
              <div className="card bg-gradient-main text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <Target className="w-8 h-8 flex-shrink-0" />
                  <h3 className="text-2xl font-heading font-bold">Nossa Missão</h3>
                </div>
                <p className="leading-relaxed">
                  Transformar a presença digital de empresas através de tecnologia de ponta e design excepcional,
                  criando soluções que impulsionam o crescimento e o sucesso dos nossos clientes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projetos Concluídos</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Nossos <span className="gradient-text">Diferenciais</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              O que nos torna únicos no mercado de desenvolvimento web
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-main rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stack Técnica */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Nossa <span className="gradient-text">Stack Técnica</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Tecnologias modernas e comprovadas para criar soluções de alta qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-heading font-bold text-dark">Frontend</h3>
              </div>
              <ul className="space-y-3">
                {techStack.frontend.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <li key={tech.name} className="flex items-center space-x-3 text-gray-600">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{tech.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Backend */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Server className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-heading font-bold text-dark">Backend</h3>
              </div>
              <ul className="space-y-3">
                {techStack.backend.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <li key={tech.name} className="flex items-center space-x-3 text-gray-600">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{tech.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Banco de Dados */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Database className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-heading font-bold text-dark">Banco de Dados</h3>
              </div>
              <ul className="space-y-3">
                {techStack.database.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <li key={tech.name} className="flex items-center space-x-3 text-gray-600">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{tech.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Ferramentas */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Blocks className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-heading font-bold text-dark">Ferramentas</h3>
              </div>
              <ul className="space-y-3">
                {techStack.tools.map((tech) => {
                  const Icon = tech.icon
                  return (
                    <li key={tech.name} className="flex items-center space-x-3 text-gray-600">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{tech.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Princípios que guiam cada projeto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-main relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Pronto Para Iniciar Seu Projeto?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos conversar sobre como podemos ajudar seu negócio a crescer online
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center space-x-2 bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>Fale Conosco</span>
          </Link>
        </div>
      </section>
    </>
  )
}
