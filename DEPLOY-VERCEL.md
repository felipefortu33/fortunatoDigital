# 🚀 Deploy no Vercel - Guia Completo

## ✅ Pré-requisitos

- [ ] Conta no GitHub
- [ ] Código commitado no Git
- [ ] Conta no Vercel (grátis)
- [ ] Variáveis de ambiente configuradas (.env.local)

---

## 📋 Método 1: Deploy via GitHub (Recomendado)

### 1️⃣ **Criar Repositório no GitHub**

```bash
# Inicializar Git (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "Site Fortunato Digital completo"

# Criar repositório no GitHub
# https://github.com/new

# Conectar com o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/fortunato-digital.git

# Enviar código
git branch -M main
git push -u origin main
```

### 2️⃣ **Deploy no Vercel**

1. Acesse: https://vercel.com
2. Clique em **"Add New Project"**
3. Clique em **"Import Git Repository"**
4. Selecione seu repositório: **fortunato-digital**
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** next build
   - **Output Directory:** .next

### 3️⃣ **Adicionar Variáveis de Ambiente**

Na página do projeto:
1. Vá em **"Settings"** → **"Environment Variables"**
2. Adicione cada variável:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_13g4hrb
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_meg2ccw
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=wiyE2rrZh8g2xZTW4
```

3. Clique em **"Save"**
4. Clique em **"Redeploy"** para aplicar

### 4️⃣ **Aguardar Deploy**

- ⏱️ Tempo: 2-3 minutos
- ✅ URL temporária gerada: `fortunato-digital.vercel.app`

---

## 📋 Método 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (responda as perguntas)
vercel

# Deploy para produção
vercel --prod
```

---

## 🌐 Configurar Domínio Próprio (Opcional)

### Se você tiver um domínio:

1. No Vercel, vá em **Settings** → **Domains**
2. Adicione: `fortunatodigital.com`
3. Configure DNS:
   - **Tipo A:** 76.76.21.21
   - **CNAME www:** cname.vercel-dns.com
4. Aguarde propagação (até 48h, geralmente 1-2h)

### Registrar domínio novo:

**Sugestões de registradores:**
- **Registro.br** (R$ 40/ano) - `.com.br`
- **Namecheap** ($8/ano) - `.com`
- **GoDaddy** ($12/ano) - `.com`

---

## ✅ Checklist Pós-Deploy

### Imediatamente:

- [ ] Site está no ar (teste a URL)
- [ ] Todas as páginas funcionam
- [ ] Formulário de contato funciona
- [ ] WhatsApp button funciona
- [ ] Imagens carregam
- [ ] Mobile está responsivo

### Nas primeiras 24h:

- [ ] Configurar Google Search Console
- [ ] Submeter sitemap.xml
- [ ] Criar Google My Business
- [ ] Configurar Google Analytics
- [ ] Testar em diferentes navegadores
- [ ] Testar performance no PageSpeed

### Na primeira semana:

- [ ] Monitorar Analytics
- [ ] Verificar Search Console
- [ ] Coletar primeiro feedback
- [ ] Ajustar conforme necessário

---

## 🔧 Variáveis de Ambiente Necessárias

Certifique-se de adicionar no Vercel:

```env
# EmailJS (Obrigatório para formulário)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=seu_public_key

# Google Analytics (Opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

⚠️ **IMPORTANTE:** Variáveis com `NEXT_PUBLIC_` são públicas (aparecem no cliente)

---

## 📊 Monitoramento

### Vercel Dashboard

Acesse: https://vercel.com/dashboard

**Métricas disponíveis:**
- Número de visitantes
- Tempo de carregamento
- Países de origem
- Páginas mais visitadas

### Google Analytics

Após configurar:
- Tráfego em tempo real
- Páginas mais populares
- Taxa de conversão
- Origem dos visitantes

---

## 🐛 Troubleshooting

### ❌ Build falha

**Erro comum:** TypeScript errors

**Solução:**
```bash
# Rodar build localmente
npm run build

# Corrigir erros
# Commitar e fazer push
```

### ❌ Variáveis de ambiente não funcionam

**Solução:**
1. Verifique se começam com `NEXT_PUBLIC_`
2. Redeploy após adicionar variáveis
3. Limpe cache: Settings → Clear Cache

### ❌ Imagens não aparecem

**Solução:**
1. Verifique se estão em `public/`
2. Paths começam com `/` (ex: `/img/logo.png`)
3. Nomes de arquivo corretos (case-sensitive)

### ❌ Formulário não envia

**Solução:**
1. Verifique variáveis EmailJS
2. Teste EmailJS diretamente
3. Veja console do navegador (F12)

---

## 🚀 Deploy Automático

**Configuração automática:**
- ✅ Cada push no `main` → deploy automático
- ✅ Pull Requests → preview automático
- ✅ Rollback fácil se der problema

**Como fazer mudanças:**
```bash
# Fazer alterações no código
# ...

# Commitar
git add .
git commit -m "Descrição das mudanças"

# Push (deploy automático)
git push origin main

# Vercel faz deploy automaticamente!
```

---

## 📱 Verificar Deploy

### Testes Essenciais:

1. **Homepage:** https://fortunatodigital.com/
2. **Sobre:** https://fortunatodigital.com/sobre
3. **Serviços:** https://fortunatodigital.com/servicos
4. **Portfólio:** https://fortunatodigital.com/portfolio
5. **Contato:** https://fortunatodigital.com/contato

### Testar Funcionalidades:

- [ ] Menu mobile funciona
- [ ] Links internos funcionam
- [ ] Botão WhatsApp abre app
- [ ] Formulário envia email
- [ ] Imagens dos projetos aparecem
- [ ] Logo FD aparece
- [ ] Footer completo

### Testar Performance:

https://pagespeed.web.dev

**Score esperado:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 🎉 Após Deploy Bem-Sucedido

### 1. Compartilhe nas redes sociais
```
🚀 Meu novo site está no ar!

Fortunato Digital - Desenvolvimento Web Profissional

✨ Landing Pages
💼 Sites Institucionais
⚙️ Sistemas Personalizados

Acesse: fortunatodigital.com

#desenvolvimentoweb #webdesign #nextjs #react
```

### 2. Configure Google

**Search Console:**
- Adicione propriedade
- Envie sitemap.xml
- Solicite indexação

**Google My Business:**
- Crie perfil
- Adicione fotos
- Peça avaliações

### 3. Monitor por 7 dias

- Analytics diário
- Teste formulário
- Leia logs da Vercel
- Ajuste conforme feedback

---

## 📊 Planos Vercel

### ✅ Hobby (Grátis)
- Perfeito para começar
- 100GB bandwidth/mês
- Domínios ilimitados
- Deploy automático
- HTTPS grátis

### 💎 Pro ($20/mês)
- Para escalar
- 1TB bandwidth
- Mais analytics
- Suporte prioritário

**Recomendação:** Comece com **Hobby** (grátis)

---

## 🔒 Segurança

### Vercel já inclui:

- ✅ HTTPS automático
- ✅ DDoS protection
- ✅ CDN global
- ✅ Edge caching
- ✅ Backups automáticos

### Não precisa configurar:

- ❌ SSL certificate
- ❌ Firewall
- ❌ CDN
- ❌ Cache

**Tudo automático!** 🎉

---

## 📞 Suporte

**Vercel:**
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord
- Twitter: @vercel

**Site:**
- Status: https://vercel-status.com

---

## ✅ Deploy Concluído!

Após seguir este guia:

✅ Site no ar
✅ HTTPS ativado
✅ Deploy automático configurado
✅ Performance otimizada
✅ Pronto para produção

**URL final:** https://fortunatodigital.com

**Tempo total:** 10-15 minutos

🎊 **Parabéns! Site publicado!** 🎊
