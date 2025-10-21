'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle2, Phone, Instagram } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'landing-page',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Não informado',
          projectType: formData.projectType,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      console.log('Email enviado com sucesso:', result.text)

      // Sucesso
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'landing-page',
        message: '',
      })

      // Reset status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'fortunatodigital535@gmail.com',
      link: 'mailto:fortunatodigital535@gmail.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+55 (41) 96899-706',
      link: 'https://wa.me/554196899706',
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São José dos Pinhais - PR, Brasil',
      link: null,
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@fortunatodigital',
      link: 'https://instagram.com/fortunatodigital',
    },
  ]

  const workingHours = [
    { day: 'Segunda a Sexta', hours: '9h às 18h' },
    { day: 'Sábado', hours: '9h às 13h' },
    { day: 'Domingo', hours: 'Fechado' },
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
            Entre em <span className="text-dark">Contato</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Vamos conversar sobre seu projeto e transformar suas ideias em realidade
          </p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coluna 1: Formulário */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
                Solicite um Orçamento
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas para
                discutir seu projeto e enviar um orçamento personalizado.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="(41) 99999-9999"
                  />
                </div>

                {/* Tipo de Projeto */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-dark mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 bg-white"
                  >
                    <option value="landing-page">Landing Page</option>
                    <option value="site-institucional">Site Institucional</option>
                    <option value="sistema-personalizado">Sistema Personalizado</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto, objetivos e qualquer detalhe que considere importante..."
                  />
                </div>

                {/* Botão de Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-main text-white font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>

                {/* Status de Envio */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center space-x-3 animate-fade-in-up">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-800">Mensagem enviada com sucesso!</div>
                      <div className="text-sm text-green-600">
                        Entraremos em contato em breve.
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 animate-fade-in-up">
                    Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.
                  </div>
                )}
              </form>
            </div>

            {/* Coluna 2: Informações de Contato */}
            <div className="space-y-8">
              {/* Informações de Contato */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    const content = (
                      <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-gradient-main rounded-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-dark mb-1">{info.title}</div>
                          <div className="text-gray-600">{info.content}</div>
                        </div>
                      </div>
                    )

                    return info.link ? (
                      <a
                        key={info.title}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.title}>{content}</div>
                    )
                  })}
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-main rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark">
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-semibold text-dark">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-dark">Resposta rápida:</strong> Mensagens enviadas
                    fora do horário comercial serão respondidas no próximo dia útil.
                  </p>
                </div>
              </div>

              {/* CTA WhatsApp */}
              <div className="card bg-gradient-main text-white">
                <h3 className="text-xl font-heading font-bold mb-3">
                  Precisa de uma resposta rápida?
                </h3>
                <p className="mb-6 text-white/90">
                  Fale conosco diretamente pelo WhatsApp e receba atendimento imediato
                </p>
                <a
                  href="https://wa.me/554196899706?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-dark font-semibold px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark text-center mb-12">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-heading font-bold text-dark mb-2">
                Qual o prazo médio de entrega?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Landing Pages: 3-5 dias úteis. Sites Institucionais: 7-10 dias úteis.
                Sistemas Personalizados variam conforme a complexidade.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-heading font-bold text-dark mb-2">
                Como funciona o pagamento?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                50% no início do projeto para iniciar o desenvolvimento e 50% na entrega,
                após sua aprovação. Aceitamos PIX, transferência e cartão.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-heading font-bold text-dark mb-2">
                Vocês oferecem suporte após a entrega?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sim! Todos os projetos incluem 30 dias de suporte gratuito para ajustes,
                dúvidas e pequenas alterações.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
