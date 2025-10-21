import ProjectCard from '@/components/ProjectCard'
import { Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfólio - Fortunato Digital',
  description: 'Conheça nossos projetos de desenvolvimento web: sistemas de gerenciamento, plataformas de imagens, aplicações com autenticação e integrações com APIs.',
}

export default function Portfolio() {
  const projects = [
    {
      title: 'StoreS - Sistema de Gerenciamento de Lojas',
      description:
        'Sistema completo para gerenciamento de lojas com controle de estoque, vendas, produtos, autenticação JWT e Spring Security. CRUD completo com arquitetura em camadas seguindo princípios SOLID.',
      technologies: ['Spring Boot', 'Next.js', 'MySQL', 'JWT', 'Spring Security', 'REST API'],
      imageUrl: '/img/stores.png',
    },
    {
      title: 'Sistema de Login e Listagem de Usuários',
      description:
        'Aplicação web com sistema de autenticação seguro, listagem dinâmica de usuários e gestão completa de sessões. Backend robusto com validações e frontend responsivo.',
      technologies: ['React.js', 'Node.js', 'Express', 'REST API', 'MongoDB', 'JWT'],
      imageUrl: '/img/cadastorDeUsuario.png',
    },
    {
      title: 'ImageLite - Banco de Imagens',
      description:
        'Plataforma para gerenciamento de imagens com upload múltiplo, armazenamento seguro, galeria responsiva e sistema de busca e filtros avançados.',
      technologies: ['Spring Boot', 'Next.js', 'PostgreSQL', 'AWS S3', 'TypeScript'],
      imageUrl: '/img/imageLite.png',
    },
    {
      title: 'Previsão do Tempo',
      description:
        'Aplicação que consulta dados meteorológicos em tempo real de qualquer cidade através de integração com API externa. Interface moderna e intuitiva com visualização de dados detalhados.',
      technologies: ['React.js', 'API Integration', 'JavaScript', 'Axios', 'Weather API'],
      imageUrl: '/img/previsao.png',
    },
  ]

  const categories = [
    {
      icon: TrendingUp,
      title: 'Sistemas de Gestão',
      count: '15+',
      description: 'CRMs, ERPs e dashboards administrativos',
    },
    {
      icon: Lightbulb,
      title: 'Sites e Landing Pages',
      count: '30+',
      description: 'Sites institucionais e páginas de conversão',
    },
    {
      icon: ArrowRight,
      title: 'Integrações',
      count: '20+',
      description: 'APIs, sistemas externos e automações',
    },
  ]

  const testimonials = [
    {
      name: 'João Silva',
      company: 'Tech Solutions',
      text: 'O sistema desenvolvido superou nossas expectativas. Entrega rápida, código limpo e suporte excepcional.',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      company: 'Marketing Digital',
      text: 'Landing page perfeita! Aumentamos nossa conversão em 40% no primeiro mês. Recomendo muito!',
      rating: 5,
    },
    {
      name: 'Carlos Oliveira',
      company: 'E-commerce Brasil',
      text: 'Profissionalismo do início ao fim. O site ficou lindo e está funcionando perfeitamente.',
      rating: 5,
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
            Nosso <span className="text-dark">Portfólio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos com tecnologias modernas e design profissional
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="card text-center group hover:bg-gradient-main hover:text-white transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-main group-hover:bg-white rounded-2xl mb-4 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-dark group-hover:text-white mb-2 transition-colors duration-300">
                    {category.count}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark group-hover:text-white mb-2 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 text-sm transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Projetos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Alguns dos sistemas e aplicações que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              O Que Dizem Nossos <span className="gradient-text">Clientes</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Feedback real de quem confiou em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card">
                {/* Estrelas */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Autor */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-heading font-bold text-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias Utilizadas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Tecnologias <span className="gradient-text">Utilizadas</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Stack moderno e comprovado para criar soluções robustas e escaláveis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'TailwindCSS',
              'Java',
              'Spring Boot',
              'Node.js',
              'MySQL',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'Git',
            ].map((tech) => (
              <div
                key={tech}
                className="card text-center group hover:bg-gradient-main hover:text-white transition-all duration-300"
              >
                <div className="text-lg font-semibold text-dark group-hover:text-white transition-colors duration-300">
                  {tech}
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
            Vamos Criar Seu Próximo<br />Projeto Juntos?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato e transforme sua ideia em realidade com tecnologia de ponta
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center space-x-2 bg-white text-dark font-semibold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </>
  )
}
