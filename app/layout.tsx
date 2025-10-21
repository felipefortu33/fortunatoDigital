import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LocalBusinessSchema, WebsiteSchema, OrganizationSchema } from './schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Fortunato Digital - Desenvolvimento Web Profissional',
    template: '%s | Fortunato Digital',
  },
  description: 'Desenvolvimento Web Profissional para Empresas que Querem Crescer Online. Sites, Landing Pages e Sistemas Web personalizados com React, Next.js, Java e Spring Boot em São José dos Pinhais - PR.',
  keywords: [
    'desenvolvimento web',
    'desenvolvimento web são josé dos pinhais',
    'landing pages',
    'sites institucionais',
    'sistemas web',
    'react',
    'next.js',
    'java',
    'spring boot',
    'são josé dos pinhais',
    'curitiba',
    'paraná',
    'criar site',
    'desenvolvimento de sites',
    'programação web',
    'desenvolvedor web',
    'agência digital',
    'fortunato digital',
  ],
  authors: [{ name: 'Felipe Fortunato', url: 'https://fortunatodigital.com' }],
  creator: 'Fortunato Digital',
  publisher: 'Fortunato Digital',
  category: 'Technology',
  classification: 'Business',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fortunatodigital.com',
    title: 'Fortunato Digital - Desenvolvimento Web Profissional',
    description: 'Transformando Ideias em Código. Desenvolvimento Web Profissional com tecnologias modernas.',
    siteName: 'Fortunato Digital',
    images: [
      {
        url: '/img/capa.png',
        width: 1200,
        height: 630,
        alt: 'Fortunato Digital - Desenvolvimento Web Profissional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortunato Digital - Desenvolvimento Web Profissional',
    description: 'Transformando Ideias em Código. Sites, Landing Pages e Sistemas Web.',
    images: ['/img/capa.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/img/logofd.PNG" />
        <link rel="apple-touch-icon" href="/img/logofd.PNG" />
        <link rel="canonical" href="https://fortunatodigital.com" />
        <meta name="theme-color" content="#FFB3D9" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="São José dos Pinhais" />
        <meta name="geo.position" content="-25.5342;-49.2063" />
        <meta name="ICBM" content="-25.5342, -49.2063" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EKYD9CL66E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EKYD9CL66E');
            `,
          }}
        />

        <LocalBusinessSchema />
        <WebsiteSchema />
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        {/* Header de navegação */}
        <Header />

        {/* Conteúdo principal */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Botão flutuante do WhatsApp */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
