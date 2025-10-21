# 📝 Guia de Edição de Conteúdo

Este guia mostra onde editar cada texto do site.

## 🏠 HOME (app/page.tsx)

### Hero Section (Topo)
- **Linha 72:** Badge "Desenvolvimento Web Profissional"
- **Linha 77-79:** Título principal "Transformando Ideias em Código"
- **Linha 83-85:** Subtítulo
- **Linhas 104-106:** Estatísticas (50+, 100%, 7+)

### Serviços em Destaque
- **Linhas 24-51:** Array `services` com 3 serviços
  - Landing Pages
  - Sites Institucionais
  - Sistemas Personalizados

### Por Que Escolher
- **Linhas 53-72:** Array `benefits` com 4 benefícios
  - Entregas Rápidas
  - Código Limpo
  - Design Moderno
  - Suporte Pós-Entrega

---

## 👤 SOBRE (app/sobre/page.tsx)

### Hero
- **Linha 97-99:** Título da página
- **Linha 100-103:** Subtítulo

### Quem Somos
- **Linhas 112-131:** Texto principal sobre a empresa
- **Linha 142-146:** Missão da empresa

### Diferenciais
- **Linhas 19-34:** Array `differentials` com 4 itens
  - Background em Infraestrutura
  - Visão Completa
  - Arquitetura Sólida
  - Metodologias Ágeis

### Stack Técnica
- **Linhas 36-62:** Array `techStack` com tecnologias
  - Frontend (React, Next.js, etc)
  - Backend (Java, Spring Boot, etc)
  - Banco de Dados
  - Ferramentas

### Valores
- **Linhas 64-78:** Array `values` com 3 valores

---

## 💼 SERVIÇOS (app/servicos/page.tsx)

### Planos de Serviço
- **Linhas 12-78:** Array `services` com 3 planos completos
  - Landing Page (R$ 500-800)
  - Site Institucional (R$ 1.000-1.500)
  - Sistema Personalizado (Sob consulta)

### Cada serviço contém:
- Título
- Preço
- Descrição
- Features (lista de recursos)
- Prazo de entrega

### Todos os Serviços Incluem
- **Linhas 80-107:** Array `includes` com 4 benefícios

### Processo de Trabalho
- **Linhas 109-135:** Array `process` com 5 etapas
  - Briefing
  - Proposta
  - Desenvolvimento
  - Revisão
  - Entrega

---

## 🎨 PORTFÓLIO (app/portfolio/page.tsx)

### Projetos
- **Linhas 13-52:** Array `projects` com 4 projetos
  - StoreS
  - Sistema de Login
  - ImageLite
  - Previsão do Tempo

### Cada projeto contém:
- Título
- Descrição
- Technologies (array)
- imageUrl (opcional)

### Categorias
- **Linhas 54-72:** Array `categories` com estatísticas

### Depoimentos
- **Linhas 74-96:** Array `testimonials` com 3 depoimentos

### Tecnologias
- **Linha 193-206:** Lista de tecnologias exibidas

---

## 📧 CONTATO (app/contato/page.tsx)

### Informações de Contato
- **Linhas 61-86:** Array `contactInfo` com 4 itens
  - Email
  - WhatsApp
  - Localização
  - Instagram

### Horário de Atendimento
- **Linhas 88-93:** Array `workingHours`

### FAQ
- **Linhas 291-316:** 3 perguntas frequentes

---

## 🎨 COMPONENTES

### Header (components/Header.tsx)
- **Linha 31:** Logo "FD"
- **Linha 36-37:** Nome e subtítulo do logo
- **Linhas 23-29:** Array `navLinks` com menu

### Footer (components/Footer.tsx)
- **Linhas 11-17:** Array `quickLinks`
- **Linhas 19-24:** Array `services`
- **Linha 125:** Copyright

### WhatsAppButton (components/WhatsAppButton.tsx)
- **Linha 20:** Número do WhatsApp (IMPORTANTE!)
- **Linha 21:** Mensagem pré-definida

---

## 🔧 CONFIGURAÇÕES GERAIS

### Meta Tags SEO (app/layout.tsx)
- **Linhas 22-24:** Title e Description principal
- **Linhas 25:** Keywords
- **Linhas 29-46:** Open Graph tags

### Cores (tailwind.config.ts)
- **Linha 13:** primary: '#FFB3D9'
- **Linha 14:** secondary: '#00D4FF'
- **Linha 15:** dark: '#1a1a2e'

---

## 📋 DICAS DE EDIÇÃO

### Alterando Textos
1. Abra o arquivo correspondente
2. Localize a linha usando Ctrl+G (número da linha)
3. Edite o texto
4. Salve e recarregue o navegador

### Alterando Preços
Busque por "R$" nos arquivos para encontrar todos os preços

### Alterando Links Sociais
- Footer: `components/Footer.tsx`
- Contato: `app/contato/page.tsx`
- WhatsApp: `components/WhatsAppButton.tsx`

### Alterando Cores
Edite `tailwind.config.ts` e todas as ocorrências serão atualizadas automaticamente

---

## ⚠️ IMPORTANTE

### Não esqueça de atualizar:
1. ✅ Número do WhatsApp
2. ✅ Email de contato
3. ✅ Links das redes sociais
4. ✅ Imagens dos projetos
5. ✅ Valores/preços dos serviços

---

**Dúvidas? Consulte o README.md ou SETUP.md**
