export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fortunatodigital.com',
    name: 'Fortunato Digital',
    image: 'https://fortunatodigital.com/img/logofd.PNG',
    logo: 'https://fortunatodigital.com/img/logofd.PNG',
    description: 'Desenvolvimento Web Profissional para Empresas que Querem Crescer Online. Sites, Landing Pages e Sistemas Web personalizados com React, Next.js, Java e Spring Boot.',
    url: 'https://fortunatodigital.com',
    telephone: '+5541968997006',
    email: 'fortunatodigital535@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São José dos Pinhais',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.5342,
      longitude: -49.2063,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: 'R$ 400 - R$ 1500',
    sameAs: [
      'https://instagram.com/fortunatodigital',
    ],
    founder: {
      '@type': 'Person',
      name: 'Felipe Fortunato',
    },
    areaServed: {
      '@type': 'City',
      name: 'São José dos Pinhais',
    },
    serviceType: [
      'Desenvolvimento de Sites',
      'Landing Pages',
      'Sistemas Web',
      'Desenvolvimento Web',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fortunato Digital',
    url: 'https://fortunatodigital.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://fortunatodigital.com/busca?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fortunato Digital',
    alternateName: 'Fortunato Digital - Desenvolvimento Web',
    url: 'https://fortunatodigital.com',
    logo: 'https://fortunatodigital.com/img/logofd.PNG',
    image: 'https://fortunatodigital.com/img/capa.png',
    description: 'Desenvolvimento Web Profissional com React, Next.js, Java e Spring Boot',
    email: 'fortunatodigital535@gmail.com',
    telephone: '+5541968997006',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São José dos Pinhais',
      addressRegion: 'PR',
      postalCode: '83000-000',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://instagram.com/fortunatodigital',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+5541968997006',
      contactType: 'Customer Service',
      availableLanguage: ['pt-BR'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
