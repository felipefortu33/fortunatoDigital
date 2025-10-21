# 🏗️ Estrutura do Projeto Fortunato Digital

## 📁 Árvore de Arquivos

```
fortunatodigital/
│
├── 📄 package.json              # Dependências do projeto
├── 📄 next.config.js            # Configuração do Next.js
├── 📄 tsconfig.json             # Configuração do TypeScript
├── 📄 tailwind.config.ts        # Configuração do TailwindCSS
├── 📄 postcss.config.js         # Configuração do PostCSS
├── 📄 .eslintrc.json            # Configuração do ESLint
├── 📄 .gitignore                # Arquivos ignorados pelo Git
├── 📄 .env.example              # Exemplo de variáveis de ambiente
│
├── 📄 README.md                 # Documentação principal
├── 📄 SETUP.md                  # Guia de instalação rápida
├── 📄 CONTEUDO.md               # Guia de edição de conteúdo
├── 📄 ESTRUTURA.md              # Este arquivo
│
├── 📂 app/                      # Páginas do site (App Router)
│   ├── 📄 layout.tsx            # Layout principal (Header + Footer)
│   ├── 📄 globals.css           # Estilos globais
│   │
│   ├── 📄 page.tsx              # 🏠 HOME
│   │   ├── Hero Section
│   │   ├── Serviços em Destaque
│   │   ├── Por Que Escolher
│   │   └── CTA Final
│   │
│   ├── 📂 sobre/
│   │   └── 📄 page.tsx          # 👤 SOBRE
│   │       ├── Quem Somos
│   │       ├── Diferenciais
│   │       ├── Stack Técnica
│   │       └── Valores
│   │
│   ├── 📂 servicos/
│   │   └── 📄 page.tsx          # 💼 SERVIÇOS
│   │       ├── Planos (3)
│   │       ├── Todos Incluem
│   │       └── Processo de Trabalho
│   │
│   ├── 📂 portfolio/
│   │   └── 📄 page.tsx          # 🎨 PORTFÓLIO
│   │       ├── Estatísticas
│   │       ├── Projetos (4)
│   │       ├── Depoimentos
│   │       └── Tecnologias
│   │
│   └── 📂 contato/
│       └── 📄 page.tsx          # 📧 CONTATO
│           ├── Formulário
│           ├── Informações
│           ├── Horário
│           └── FAQ
│
├── 📂 components/               # Componentes reutilizáveis
│   ├── 📄 Header.tsx            # Cabeçalho de navegação
│   ├── 📄 Footer.tsx            # Rodapé
│   ├── 📄 WhatsAppButton.tsx    # Botão flutuante
│   └── 📄 ProjectCard.tsx       # Card de projeto
│
└── 📂 public/                   # Arquivos estáticos
    ├── favicon.ico
    └── (imagens dos projetos)

```

## 🎨 Páginas do Site

### 1️⃣ HOME (/)
- **Arquivo:** `app/page.tsx`
- **Seções:**
  - Hero com gradiente rosa→ciano
  - 3 serviços em destaque
  - 4 benefícios
  - CTA final
- **Componentes:** Header, Footer, WhatsAppButton

### 2️⃣ SOBRE (/sobre)
- **Arquivo:** `app/sobre/page.tsx`
- **Seções:**
  - Quem somos
  - 4 diferenciais
  - Stack técnica (4 categorias)
  - 3 valores
- **Destaque:** Missão da empresa

### 3️⃣ SERVIÇOS (/servicos)
- **Arquivo:** `app/servicos/page.tsx`
- **Seções:**
  - 3 planos de serviço (cards)
  - O que está incluído
  - Forma de pagamento
  - 5 etapas do processo
- **Preços:**
  - Landing Page: R$ 500-800
  - Site Institucional: R$ 1.000-1.500
  - Sistema: Sob consulta

### 4️⃣ PORTFÓLIO (/portfolio)
- **Arquivo:** `app/portfolio/page.tsx`
- **Seções:**
  - 3 categorias de projetos
  - 4 projetos em destaque
  - 3 depoimentos
  - Tecnologias usadas
- **Projetos:**
  - StoreS
  - Sistema de Login
  - ImageLite
  - Previsão do Tempo

### 5️⃣ CONTATO (/contato)
- **Arquivo:** `app/contato/page.tsx`
- **Seções:**
  - Formulário completo (5 campos)
  - 4 formas de contato
  - Horário de atendimento
  - 3 perguntas frequentes
- **Formulário:** Nome, Email, Telefone, Tipo, Mensagem

## 🧩 Componentes Globais

### 📱 Header
- **Arquivo:** `components/Header.tsx`
- **Funcionalidades:**
  - Logo FD animado
  - Menu responsivo (5 links)
  - Botão "Orçamento Grátis"
  - Menu hamburger mobile
  - Scroll spy (destaca página ativa)

### 📧 Footer
- **Arquivo:** `components/Footer.tsx`
- **Seções:**
  - Logo e descrição
  - Links rápidos (5)
  - Serviços (3)
  - Contato completo
  - Redes sociais
  - Copyright

### 💬 WhatsAppButton
- **Arquivo:** `components/WhatsAppButton.tsx`
- **Funcionalidades:**
  - Botão verde flutuante
  - Ícone animado (pulso)
  - Tooltip no hover
  - Badge de notificação
  - Link direto pro WhatsApp

### 🎴 ProjectCard
- **Arquivo:** `components/ProjectCard.tsx`
- **Funcionalidades:**
  - Imagem com hover
  - Título e descrição
  - Tags de tecnologias
  - Links de demo/código
  - Animações suaves

## 🎨 Design System

### Cores
```css
Primary:   #FFB3D9 (Rosa)
Secondary: #00D4FF (Ciano)
Dark:      #1a1a2e (Escuro)
Light:     #ffffff (Branco)
Gray:      #f5f5f5 (Cinza claro)
```

### Gradiente Principal
```css
linear-gradient(135deg, #FFB3D9 0%, #00D4FF 100%)
```

### Tipografia
- **Headings:** Poppins (700)
- **Body:** Inter (400)
- **Fonte:** Google Fonts

### Espaçamentos
- **Seções:** py-16 md:py-24
- **Container:** max-w-7xl mx-auto
- **Cards:** shadow-lg rounded-xl

### Breakpoints
- **sm:** 640px (Mobile grande)
- **md:** 768px (Tablet)
- **lg:** 1024px (Desktop pequeno)
- **xl:** 1280px (Desktop grande)

## 🚀 Fluxo de Navegação

```
HOME (/)
├─→ SOBRE (/sobre)
├─→ SERVIÇOS (/servicos)
│   └─→ CONTATO (/contato)
├─→ PORTFÓLIO (/portfolio)
│   └─→ CONTATO (/contato)
└─→ CONTATO (/contato)
    └─→ WhatsApp (externo)
```

## 📊 Estatísticas do Site

- **Total de Páginas:** 5
- **Componentes:** 4
- **Seções totais:** ~20
- **Serviços:** 3
- **Projetos:** 4
- **Depoimentos:** 3
- **Tecnologias:** 12+

## ✨ Funcionalidades

- ✅ Design responsivo mobile-first
- ✅ Animações suaves (fade, hover, scale)
- ✅ Navegação com active state
- ✅ Menu hamburger mobile
- ✅ Formulário de contato funcional
- ✅ Botão flutuante WhatsApp
- ✅ SEO otimizado (meta tags)
- ✅ Performance otimizada
- ✅ Acessibilidade (ARIA labels)
- ✅ Lazy loading de imagens
- ✅ Code splitting automático

## 🔧 Tecnologias

- **Framework:** Next.js 14
- **Linguagem:** TypeScript
- **Estilo:** TailwindCSS
- **Ícones:** Lucide React
- **Fontes:** Google Fonts
- **Build:** SWC (super rápido)

## 📝 Próximos Passos Sugeridos

1. ✅ Instalar dependências
2. ✅ Configurar WhatsApp
3. ✅ Adicionar imagens
4. ✅ Testar responsividade
5. ✅ Deploy no Vercel
6. 📊 Adicionar Analytics
7. 📧 Configurar email real
8. 🎯 SEO avançado

---

**Estrutura criada por: Fortunato Digital**
**Data:** 2025
**Versão:** 1.0.0
