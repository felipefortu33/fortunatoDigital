# Fortunato Digital - Site Oficial

Site profissional da **Fortunato Digital**, empresa especializada em desenvolvimento web.

## Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Lucide React** (ícones)

## Estrutura do Projeto

```
fortunato-digital/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── sobre/              # Página Sobre
│   ├── servicos/           # Página Serviços
│   ├── portfolio/          # Página Portfólio
│   └── contato/            # Página Contato
├── components/
│   ├── Header.tsx          # Cabeçalho de navegação
│   ├── Footer.tsx          # Rodapé
│   ├── WhatsAppButton.tsx  # Botão flutuante do WhatsApp
│   └── ProjectCard.tsx     # Card de projeto
├── public/                 # Arquivos estáticos
└── tailwind.config.ts      # Configuração do Tailwind
```

## Como Executar

### Instalação

```bash
# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Executar servidor de desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar build
npm start
```

## Configurações Necessárias

### 1. WhatsApp

Edite o arquivo `components/WhatsAppButton.tsx` e atualize:
- Linha 20: Substitua `5541999999999` pelo número real no formato internacional

### 2. Email de Contato

O formulário de contato na página `/contato` está configurado com envio simulado.
Para integrar com serviço de email real, edite `app/contato/page.tsx`:

**Opções de integração:**
- EmailJS
- SendGrid
- Nodemailer via API Route
- Backend próprio

### 3. Imagens

Adicione imagens dos projetos na pasta `public/`:
- Edite `app/portfolio/page.tsx` e adicione as URLs das imagens nos projetos

### 4. Google Analytics (Opcional)

Adicione o script do Google Analytics no arquivo `app/layout.tsx`

## Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático

```bash
# Ou usando CLI
npx vercel
```

### Outras Plataformas

- **Netlify**: Suporte nativo para Next.js
- **AWS Amplify**: Deploy completo
- **Digital Ocean App Platform**: Containers

## Customização

### Cores

Edite `tailwind.config.ts` para alterar as cores:
- `primary`: Rosa (#FFB3D9)
- `secondary`: Ciano (#00D4FF)

### Conteúdo

Todos os textos estão nos arquivos das páginas:
- Home: `app/page.tsx`
- Sobre: `app/sobre/page.tsx`
- Serviços: `app/servicos/page.tsx`
- Portfólio: `app/portfolio/page.tsx`
- Contato: `app/contato/page.tsx`

## Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre páginas
- ✅ Botão flutuante do WhatsApp
- ✅ Formulário de contato funcional
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Animações suaves
- ✅ Acessibilidade (WCAG)

## Performance

O site é otimizado para:
- Core Web Vitals
- Lazy loading de imagens
- Code splitting automático
- Fontes otimizadas

## Suporte

Para dúvidas ou suporte:
- Email: fortunatodigital535@gmail.com
- WhatsApp: [adicionar número]

## Licença

© 2025 Fortunato Digital. Todos os direitos reservados.

---

Desenvolvido com ❤️ por **Fortunato Digital**
