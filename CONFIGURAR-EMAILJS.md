# 📧 Configurar EmailJS - Guia Completo

## ✅ Formulário Já Está Pronto!

O código já está implementado. Você só precisa **configurar suas credenciais** do EmailJS.

---

## 🚀 Passo a Passo (5 minutos)

### 1️⃣ **Criar Conta no EmailJS**

1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"**
3. Use seu email: **fortunatodigital535@gmail.com**
4. Confirme o email que receberá

---

### 2️⃣ **Adicionar Serviço de Email (Gmail)**

1. No dashboard, clique em **"Add New Service"**
2. Escolha **"Gmail"**
3. Clique em **"Connect Account"**
4. Faça login com: **fortunatodigital535@gmail.com**
5. Autorize o acesso
6. ✅ **Copie o Service ID** (exemplo: `service_abc123`)

---

### 3️⃣ **Criar Template de Email**

1. No dashboard, clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Cole este template:

**Subject (Assunto):**
```
Novo Contato - Site Fortunato Digital
```

**Content (Conteúdo):**
```
Olá Felipe!

Você recebeu um novo contato através do site Fortunato Digital:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DADOS DO CLIENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome: {{name}}
📧 Email: {{email}}
📱 Telefone: {{phone}}
💼 Tipo de Projeto: {{projectType}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MENSAGEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 Responda o cliente em até 24 horas!

---
Enviado automaticamente via formulário do site
fortunatodigital.com
```

4. ✅ **Copie o Template ID** (exemplo: `template_xyz456`)
5. Clique em **"Save"**

---

### 4️⃣ **Pegar Public Key**

1. No menu lateral, clique em **"Account"**
2. Vá em **"General"**
3. Encontre **"Public Key"**
4. ✅ **Copie a Public Key** (exemplo: `user_def789`)

---

### 5️⃣ **Adicionar Credenciais no Projeto**

1. Abra o arquivo: `.env.local`
2. Cole suas credenciais:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_def789
```

3. **Substitua** pelos IDs reais que você copiou!
4. Salve o arquivo

---

### 6️⃣ **Testar**

1. Reinicie o servidor:
```bash
# Pare o servidor (Ctrl+C)
npm run dev
```

2. Acesse: http://localhost:3000/contato
3. Preencha o formulário
4. Clique em **"Enviar Mensagem"**
5. ✅ Verifique seu email: **fortunatodigital535@gmail.com**

---

## 🎯 Resultado

Quando alguém preencher o formulário:

✅ Email enviado para: **fortunatodigital535@gmail.com**
✅ Mensagem de sucesso no site
✅ Formulário limpo automaticamente
✅ Cliente recebe confirmação visual

---

## 📋 Template de Variáveis

No template do EmailJS, use estas variáveis:

- `{{name}}` - Nome do cliente
- `{{email}}` - Email do cliente
- `{{phone}}` - Telefone (ou "Não informado")
- `{{projectType}}` - Tipo de projeto
- `{{message}}` - Mensagem completa

---

## 🔧 Troubleshooting

### ❌ "Erro ao enviar mensagem"

**Problema:** Credenciais incorretas

**Solução:**
1. Verifique se copiou os IDs corretos
2. Confira se o arquivo `.env.local` está na raiz do projeto
3. Reinicie o servidor (`npm run dev`)

---

### ❌ Email não chega

**Problema:** Template não configurado

**Solução:**
1. Verifique se o template está **ativo** no EmailJS
2. Confira se as variáveis `{{name}}`, `{{email}}`, etc estão corretas
3. Teste o template no dashboard do EmailJS

---

### ❌ Formulário não envia

**Problema:** Variáveis de ambiente não carregadas

**Solução:**
1. Arquivo deve se chamar **`.env.local`** (não `.env`)
2. Reinicie completamente o servidor
3. Verifique no console do navegador (F12) se há erros

---

## 💰 Planos EmailJS

### ✅ **Grátis (Recomendado para começar)**
- 200 emails/mês
- Perfeito para o início
- Sem cartão de crédito

### 💎 **Pago (Se crescer muito)**
- Personal: $15/mês (5.000 emails)
- Professional: $30/mês (15.000 emails)

---

## 🎁 Dicas Extras

### 📧 **Resposta Automática ao Cliente**

Você pode criar um segundo template para enviar confirmação automática pro cliente:

1. Crie novo template: "Confirmação de Contato"
2. Envie dois emails:
   - Um pra você (notificação)
   - Um pro cliente (confirmação)

### 📊 **Acompanhar Emails**

No dashboard do EmailJS você pode ver:
- Quantos emails foram enviados
- Taxa de sucesso/falha
- Histórico completo

---

## ✅ Checklist Final

Antes de colocar no ar, verifique:

- [ ] Conta criada no EmailJS
- [ ] Gmail conectado
- [ ] Template criado e testado
- [ ] Service ID copiado
- [ ] Template ID copiado
- [ ] Public Key copiada
- [ ] Arquivo `.env.local` preenchido
- [ ] Servidor reiniciado
- [ ] Formulário testado
- [ ] Email recebido com sucesso

---

## 🆘 Suporte

**EmailJS Docs:** https://www.emailjs.com/docs/
**Video Tutorial:** https://www.youtube.com/watch?v=dgcYOm8n8ME

---

**Pronto! Seu formulário vai funcionar perfeitamente! 🎉**
