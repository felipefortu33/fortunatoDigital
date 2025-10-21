# 🎨 Identidade Visual - Fortunato Digital

## 🌈 Paleta de Cores

### Cores Primárias

```
🩷 ROSA (Primary)
HEX: #FFB3D9
RGB: rgb(255, 179, 217)
HSL: hsl(332, 100%, 85%)
Uso: Botões, destaques, hover states
```

```
💠 CIANO (Secondary)
HEX: #00D4FF
RGB: rgb(0, 212, 255)
HSL: hsl(190, 100%, 50%)
Uso: Links, ícones, acentos
```

```
⚫ DARK (Textos)
HEX: #1a1a2e
RGB: rgb(26, 26, 46)
HSL: hsl(240, 28%, 14%)
Uso: Textos principais, títulos, footer
```

### Cores Secundárias

```
⚪ WHITE (Fundo)
HEX: #ffffff
RGB: rgb(255, 255, 255)
Uso: Fundos principais, cards, botões
```

```
🔘 GRAY LIGHT (Seções alternadas)
HEX: #f5f5f5
RGB: rgb(245, 245, 245)
Uso: Fundos de seções alternadas
```

```
🔘 GRAY (Textos secundários)
HEX: #6b7280
RGB: rgb(107, 114, 128)
Uso: Textos descritivos, legendas
```

## 🎭 Gradientes

### Gradiente Principal (Diagonal)
```css
background: linear-gradient(135deg, #FFB3D9 0%, #00D4FF 100%);
```

**Onde usar:**
- Hero sections
- Botões principais
- Cards em destaque
- Elementos decorativos

### Gradiente Overlay (Vertical)
```css
background: linear-gradient(to top, rgba(26, 26, 46, 0.8), transparent);
```

**Onde usar:**
- Sobre imagens
- Efeitos de hover
- Overlays de cards

## 🖼️ Uso das Cores nas Páginas

### 🏠 HOME
- **Hero:** Gradiente rosa→ciano
- **Serviços:** Cards brancos com sombra
- **Benefícios:** Fundo cinza claro
- **CTA Final:** Gradiente rosa→ciano

### 👤 SOBRE
- **Hero:** Gradiente rosa→ciano
- **Conteúdo:** Fundo branco/cinza alternado
- **Cards Stack:** Branco com ícones gradiente

### 💼 SERVIÇOS
- **Hero:** Gradiente rosa→ciano
- **Planos:** Cards brancos (destaque com borda rosa)
- **Processo:** Números com gradiente

### 🎨 PORTFÓLIO
- **Hero:** Gradiente rosa→ciano
- **Projetos:** Cards brancos
- **Depoimentos:** Estrelas amarelas

### 📧 CONTATO
- **Hero:** Gradiente rosa→ciano
- **Formulário:** Campos com borda cinza
- **Hover:** Borda rosa

## 🔘 Estados Interativos

### Botões

```css
/* Normal */
background: linear-gradient(135deg, #FFB3D9, #00D4FF);
color: white;

/* Hover */
transform: scale(1.05);
box-shadow: 0 20px 50px rgba(255, 179, 217, 0.4);

/* Active */
transform: scale(0.98);
```

### Links

```css
/* Normal */
color: #1a1a2e;

/* Hover */
color: #FFB3D9;

/* Active */
color: #00D4FF;
border-bottom: 2px solid;
```

### Cards

```css
/* Normal */
background: white;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

/* Hover */
transform: translateY(-8px);
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
```

## 📱 WhatsApp

```
🟢 VERDE WhatsApp
HEX: #25D366
RGB: rgb(37, 211, 102)
Uso: Botão flutuante do WhatsApp
```

## 🎯 Onde Editar as Cores

### Arquivo Principal: `tailwind.config.ts`

```typescript
colors: {
  primary: '#FFB3D9',    // 🩷 Rosa
  secondary: '#00D4FF',   // 💠 Ciano
  dark: '#1a1a2e',       // ⚫ Escuro
}
```

### Classes Tailwind Personalizadas

```css
/* globals.css */
.gradient-text {
  background: linear-gradient(135deg, #FFB3D9, #00D4FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient-main {
  background: linear-gradient(135deg, #FFB3D9, #00D4FF);
}

.btn-primary {
  background: linear-gradient(135deg, #FFB3D9, #00D4FF);
  color: white;
}
```

## 🖌️ Combinações Recomendadas

### Para Textos
- **Título:** Dark (#1a1a2e) sobre Branco
- **Corpo:** Gray (#6b7280) sobre Branco
- **Links:** Primary (#FFB3D9) sobre Branco

### Para Fundos
- **Seção 1:** Branco (#ffffff)
- **Seção 2:** Gray Light (#f5f5f5)
- **Hero:** Gradiente rosa→ciano
- **Footer:** Dark (#1a1a2e)

### Para Botões
- **Primário:** Gradiente rosa→ciano + texto branco
- **Secundário:** Branco + borda rosa + texto rosa
- **Outline:** Transparente + borda rosa + texto rosa

## 🎨 Variações de Cor (se precisar)

### Rosa (Primary)
```
Mais claro:  #FFD9EC
Normal:      #FFB3D9
Mais escuro: #FF8DC7
Hover:       #FF9EC9
```

### Ciano (Secondary)
```
Mais claro:  #66E5FF
Normal:      #00D4FF
Mais escuro: #00BFED
Hover:       #00BCE6
```

## 🌐 Acessibilidade (Contraste)

### Aprovado WCAG AA
✅ Dark (#1a1a2e) sobre Branco - Contraste: 15.5:1
✅ Gray (#6b7280) sobre Branco - Contraste: 4.7:1
✅ Branco sobre Dark - Contraste: 15.5:1

### Atenção
⚠️ Rosa (#FFB3D9) sobre Branco - Contraste: 2.4:1 (use apenas em elementos grandes)
⚠️ Ciano (#00D4FF) sobre Branco - Contraste: 3.2:1 (use apenas em elementos grandes)

**Recomendação:** Para textos, sempre use Dark ou Gray sobre Branco.

## 🎯 Logo "FD"

```css
.logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  background: linear-gradient(135deg, #FFB3D9, #00D4FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
```

## 📊 Proporções de Uso

```
🩷 Rosa (Primary):    30%
💠 Ciano (Secondary): 20%
⚫ Dark:              25%
⚪ Branco:            20%
🔘 Cinzas:            5%
```

## 🎨 Inspiração da Paleta

Esta paleta foi criada para transmitir:
- **Rosa:** Criatividade, modernidade, inovação
- **Ciano:** Tecnologia, profissionalismo, confiança
- **Dark:** Elegância, seriedade, qualidade
- **Gradiente:** Transição, progresso, evolução

---

## 🔧 Como Mudar a Identidade Visual

### 1. Escolha novas cores
Use ferramentas como:
- [Coolors.co](https://coolors.co)
- [Adobe Color](https://color.adobe.com)

### 2. Teste o contraste
Use: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 3. Edite o arquivo
`tailwind.config.ts` → Seção `colors`

### 4. Limpe o cache
```bash
rm -rf .next
npm run dev
```

---

**Paleta desenvolvida por: Fortunato Digital**
**Baseada em:** Psicologia das cores + Design moderno
**Versão:** 1.0.0
