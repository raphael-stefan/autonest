# 🚗 AutoNest Mobile Oil Change - Website

Um site ultra profissional e moderno para o serviço de troca de óleo mobile **AutoNest**, construído com **HTML5, CSS3 e JavaScript vanilla** com animações incríveis!

## ✨ Características

### 🎨 Design Profissional
- **Dark Mode Premium**: Design moderno em tom escuro com destaques em ouro (#ffc107)
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições e animações CSS3 profissionais

### 🎭 Animações Avançadas
- ✅ Fade In Up - Elementos aparecem com suavidade
- ✅ Slide In - Conteúdo desliza na tela
- ✅ Hover Effects - Efeitos interativos nos cards
- ✅ Parallax - Zoom paralax na imagem hero
- ✅ Stagger Animation - Animação em cascata dos elementos
- ✅ Scroll Reveal - Revela elementos ao fazer scroll
- ✅ Particle Effect - Efeitos de partículas no mouse (opcional)
- ✅ Floating Animation - Flutuação suave de elementos

### 🛠️ Seções do Site

1. **Navbar Fixa** - Navegação elegante com menu mobile
2. **Hero Section** - Apresentação impactante com chamada à ação
3. **Serviços** - 6 serviços detalhados com cards animados
4. **Sobre Nós** - Seção com diferenciais da marca
5. **Estatísticas** - Números que impressionam
6. **Agendamento** - Integrado com Calendly
7. **Footer** - Completo com links e contato

### 📱 Funcionalidades JavaScript
- Menu mobile com animação hamburger
- Scroll automático suave
- Scroll spy para links da nav
- Scroll to top button
- Lazy loading de imagens
- Contador animado de números
- Validação de email
- Acessibilidade melhorada

### 🔗 Integração Calendly
O site já está configurado com Calendly para agendamentos. Basta:
1. Criar sua conta em [calendly.com](https://calendly.com)
2. Configurar seus horários disponíveis
3. Substituir `https://calendly.com/raphael-autonestmobile` pela sua URL

## 📂 Estrutura de Arquivos

```
auto-nest-site/
├── index.html        # Estrutura HTML
├── styles.css        # Estilos e animações CSS
├── script.js         # Interatividades e animações JS
├── assets/           # Imagens e midia
│   ├── logo.jpeg
│   ├── hero-placeholder.png
│   ├── about-placeholder.png
│   └── service-placeholder.png
└── README.md         # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site Localmente
```bash
# Usando Live Server (VS Code)
# Instale a extensão "Live Server" e clique em "Go Live"

# Ou use Python
python -m http.server 8000

# Ou use Node.js com http-server
npx http-server
```

### 2. Customizar Informações

**Logo e Imagens:**
- Substitua as imagens em `assets/`
- Mantenha os nomes ou atualize as referências no HTML

**Textos e Preços:**
- Abra `index.html`
- Procure pelos textos e atualize conforme necessário

**Cores:**
- Cor Primária: `#ffc107` (Ouro)
- Cor Secundária: `#ffb300` (Ouro Escuro)
- Fundo: `#0a0a0a` (Preto)
- Você pode mudar no CSS

**Calendly:**
- Substitua a URL no arquivo `index.html` linha do Calendly

**Contato:**
- Atualize o telefone, email e endereço no footer

## 🎨 Cores e Temas

### Paleta Principal
- **Primário**: `#ffc107` (Ouro Vibrante)
- **Secundário**: `#ffb300` (Ouro Escuro)
- **Fundo Escuro**: `#0a0a0a`
- **Fundo Cards**: `#111` e `#1a1a1a`
- **Texto**: `#fff`, `#aaa`, `#ccc`

### Como Mudar as Cores
1. Abra `styles.css`
2. Use Ctrl+F (ou Cmd+F) para encontrar `#ffc107`
3. Substitua por sua cor preferida

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 769px a 1200px
- **Mobile**: até 768px
- **Mobile Pequeno**: até 480px

## ⚙️ Customizações Avançadas

### Ativar Efeito de Partículas
Abra `script.js` e procure por:
```javascript
// createParticles(); // Uncomment to enable particle effects
```
Remova o comentário para ativar.

### Adicionar Mais Serviços
Copie um card de serviço no HTML e customize:
```html
<div class="service-card">
  <div class="service-card-inner">
    <!-- ... conteúdo ... -->
  </div>
</div>
```

### Mudar Animação de Duração
No CSS, procure por `animation: fadeInUp 0.8s ease-out;`
Mude o `0.8s` para uma duração diferente (em segundos).

## 🔍 SEO Básico

O site inclui:
- Meta tags descritivas
- Títulos e headings semânticos
- Alt text em imagens
- URLs estruturadas

Para melhorar SEO:
1. Atualize as meta tags em `index.html`
2. Adicione schema.json estruturado
3. Otimize as imagens comprimindo-as
4. Use CDN para servir os assets

## 📊 Performance

### Otimizações Já Implementadas
- CSS minificado
- JavaScript vanilla (sem dependências)
- Lazy loading de imagens
- Animações CSS (mais rápidas que JS)
- Scroll debouncing

### Como Melhorar Ainda Mais
1. Comprimir imagens com TinyPNG
2. Usar WebP para imagens
3. Minificar CSS e JS em produção
4. Usar um CDN para servir arquivos
5. Adicionar Service Worker para PWA

## 🛡️ Segurança

- Sem dependências externas perigosas
- Validação de entrada de formulários
- Headers de segurança recomendados

## 🚀 Deploy

### Opções de Hospedagem

**1. GitHub Pages (Gratuito)**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
# Ative GitHub Pages nas configurações
```

**2. Netlify (Gratuito)**
- Arraste a pasta no site netlify.com
- Ou conecte seu repositório GitHub

**3. Vercel (Gratuito)**
- Similar ao Netlify
- Excelente performance

**4. AWS S3 + CloudFront**
- Para mais tráfego
- Mais controle

## 📞 Contato e Suporte

Para dúvidas sobre customização:
- Email: contato@autonest.com
- WhatsApp: +55 (11) 9999-9999
- Instagram: @autonestmobile

## 📄 Licença

Este website é propriedade da AutoNest Mobile Oil Change. Todos os direitos reservados.

## ✅ Checklist Antes de Ir ao Ar

- [ ] Atualizar logo e imagens
- [ ] Verificar todos os preços
- [ ] Atualizar Calendly
- [ ] Atualizar informações de contato
- [ ] Testar em diferentes dispositivos
- [ ] Verificar links funcionando
- [ ] Testar animações
- [ ] Fazer teste de performance
- [ ] Configurar Google Analytics
- [ ] SSL certificate ativo

## 🎉 Pronto para o Sucesso!

Seu site está 100% profissional e pronto para impressionar seus clientes! 

Divirta-se com as animações e não hesite em customizar ainda mais! 🚗✨

---

**Feito com ❤️ para AutoNest Mobile Oil Change**
