# 🚀 Setup Rápido - Fortunato Digital

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Instalação e Execução

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:3000**

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📝 Configurações Obrigatórias

### ⚠️ IMPORTANTE: WhatsApp

Edite o arquivo: `components/WhatsAppButton.tsx`

**Linha 20:**
```typescript
const phoneNumber = '5541999999999' // ← SUBSTITUIR COM SEU NÚMERO
```

**Formato:** 55 + DDD + Número (sem espaços)
**Exemplo:** 5541987654321

---

### 📧 Formulário de Contato

O formulário em `app/contato/page.tsx` está com envio simulado.

**Para integrar serviço real de email:**

#### Opção 1: EmailJS (Mais Fácil)
1. Crie conta em https://emailjs.com
2. Configure template de email
3. Adicione as credenciais no código

#### Opção 2: API Route + Nodemailer
```typescript
// Criar: app/api/contact/route.ts
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  // Implementar lógica de envio
}
```

#### Opção 3: SendGrid
```bash
npm install @sendgrid/mail
```

---

## 🎨 Customização

### Cores

Editar: `tailwind.config.ts`

```typescript
colors: {
  primary: '#FFB3D9',    // Rosa
  secondary: '#00D4FF',   // Ciano
  dark: '#1a1a2e',       // Escuro
}
```

### Logo FD

Substitua o texto no componente `Header.tsx` por uma imagem:

```tsx
<Image src="/logo.png" alt="Fortunato Digital" width={150} height={50} />
```

---

## 📸 Adicionar Imagens dos Projetos

1. Adicione imagens na pasta `public/projects/`
2. Edite `app/portfolio/page.tsx`:

```typescript
{
  title: 'StoreS',
  imageUrl: '/projects/stores.png', // ← Adicionar
  // ...
}
```

---

## 🚀 Deploy no Vercel

### Método 1: GitHub (Recomendado)

1. Crie repositório no GitHub
2. Faça push do código:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/fortunato-digital.git
git push -u origin main
```
3. Acesse https://vercel.com
4. Clique em "Import Project"
5. Conecte seu repositório
6. Deploy automático! ✅

### Método 2: CLI

```bash
npm install -g vercel
vercel
```

---

## ✅ Checklist Pré-Deploy

- [ ] Atualizar número do WhatsApp
- [ ] Configurar formulário de contato
- [ ] Adicionar imagens dos projetos
- [ ] Testar responsividade mobile
- [ ] Verificar todos os links
- [ ] Adicionar Google Analytics (opcional)
- [ ] Testar formulário de contato
- [ ] Verificar SEO (meta tags)

---

## 📱 Testar Responsividade

### No navegador:
1. F12 (DevTools)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Testar em diferentes dispositivos

### Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🎯 Próximos Passos

1. **Analytics**: Adicionar Google Analytics
2. **SEO**: Criar sitemap.xml
3. **Blog**: Adicionar sistema de blog (opcional)
4. **Newsletter**: Integrar Mailchimp (opcional)
5. **Chat**: Adicionar Tawk.to ou Drift (opcional)

---

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de TypeScript
```bash
npm run build
# Verificar erros e corrigir
```

### Imagens não aparecem
- Verificar se estão em `public/`
- Usar caminho começando com `/`

---

## 📞 Suporte

Dúvidas? Entre em contato:
- Email: fortunatodigital535@gmail.com

---

**Desenvolvido com ❤️ por Fortunato Digital**
