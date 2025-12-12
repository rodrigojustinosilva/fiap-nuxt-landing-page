# Tutorial Nuxt 3 - Guia Completo

## 📚 Índice

1. [Introdução ao Nuxt](#introdução-ao-nuxt)
2. [Nuxt vs Vite/SPA - Diferenças Fundamentais](#nuxt-vs-vitespa)
3. [Conceitos Principais](#conceitos-principais)
4. [Criando uma Aplicação Nuxt](#criando-uma-aplicação-nuxt)
5. [Estrutura de Pastas](#estrutura-de-pastas)
6. [Roteamento File-Based](#roteamento-file-based)
7. [SEO e Meta Tags](#seo-e-meta-tags)
8. [Geração Estática (SSG)](#geração-estática-ssg)
9. [Comparação Prática](#comparação-prática)
10. [Quando Usar Nuxt vs Vite/SPA](#quando-usar-nuxt-vs-vitespa)

---

## Introdução ao Nuxt

**Nuxt 3** é um framework full-stack baseado em Vue.js que oferece uma experiência de desenvolvimento otimizada com suporte nativo para:

- 🚀 **Server-Side Rendering (SSR)** - renderização no servidor
- 📄 **Static Site Generation (SSG)** - geração de sites estáticos
- ⚡ **Hybrid Rendering** - combinação de SSR e SSG
- 🎯 **SEO otimizado** - melhor indexação nos motores de busca
- 🔄 **Roteamento automático** - baseado na estrutura de arquivos
- 📦 **Auto-importação** - componentes e composables importados automaticamente

### O que Nuxt Resolve?

Nuxt adiciona uma camada de abstração sobre Vue.js para resolver problemas comuns em aplicações web:

1. **SEO**: SPAs tradicionais têm dificuldade com SEO porque o conteúdo é renderizado no cliente
2. **Performance**: Primeira renderização mais rápida com SSR/SSG
3. **Configuração**: Convenções sobre configuração reduzem boilerplate
4. **Estrutura**: Organização padronizada de projetos

---

## Nuxt vs Vite/SPA

### Modelo SPA (Single Page Application) com Vite

```
Navegador solicita → index.html vazio → JavaScript baixado → 
App renderizada no cliente → Conteúdo visível
```

**Características:**
- ✅ Transições suaves entre páginas
- ✅ Experiência de app nativo
- ❌ SEO limitado (requer pré-renderização adicional)
- ❌ Tempo de primeira renderização mais lento
- ❌ JavaScript obrigatório no cliente

**Estrutura típica Vite + Vue:**
```
projeto-vite/
├── index.html              # HTML principal
├── src/
│   ├── main.js            # Bootstrap manual
│   ├── App.vue            # Componente raiz
│   ├── router/            # Configuração manual de rotas
│   │   └── index.js
│   ├── views/             # Páginas (manualmente associadas)
│   └── components/        # Componentes
└── vite.config.js         # Configuração Vite
```

### Modelo Nuxt (SSR/SSG)

```
Navegador solicita → HTML completo renderizado → 
Conteúdo visível → JavaScript hidrata → App interativa
```

**Características:**
- ✅ SEO excelente (conteúdo no HTML)
- ✅ Primeira renderização rápida
- ✅ Funciona sem JavaScript (SSG)
- ✅ Roteamento automático
- ⚠️ Complexidade adicional no servidor (SSR)
- ⚠️ Build time maior (SSG)

**Estrutura Nuxt:**
```
projeto-nuxt/
├── app.vue                # Layout global
├── pages/                 # Rotas automáticas
│   ├── index.vue         # → /
│   └── about.vue         # → /about
├── components/            # Auto-importados
├── composables/           # Lógica reutilizável
├── assets/                # Assets processados
├── public/                # Assets estáticos
└── nuxt.config.ts         # Configuração central
```

---

## Conceitos Principais

### 1. Modos de Renderização

#### SSR (Server-Side Rendering)
- Cada requisição gera HTML no servidor
- Ideal para conteúdo dinâmico
- Requer servidor Node.js

#### SSG (Static Site Generation)
- HTML gerado no build time
- Servido como arquivos estáticos
- Ideal para conteúdo que muda pouco
- **Este projeto usa SSG!**

#### Hybrid
- Mistura SSR e SSG por rota
- Máxima flexibilidade

### 2. Auto-Import

```vue
<!-- Não precisa importar! -->
<template>
  <NuxtLink to="/">Home</NuxtLink>
  <MinhaComponente />
</template>

<script setup>
// Não precisa importar useRoute, useState, etc.
const route = useRoute()
const counter = useState('counter', () => 0)
</script>
```

### 3. File-Based Routing

A estrutura de arquivos em `pages/` define as rotas automaticamente:

```
pages/
├── index.vue              → /
├── about.vue              → /about
├── users/
│   ├── index.vue         → /users
│   ├── [id].vue          → /users/:id (dinâmico)
│   └── profile.vue       → /users/profile
└── blog/
    └── [slug].vue        → /blog/:slug
```

---

## Criando uma Aplicação Nuxt

### Opção 1: Novo Projeto do Zero

```bash
# Criar novo projeto
npx nuxi init meu-projeto

cd meu-projeto

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

### Opção 2: Adicionar Nuxt em Projeto Existente

```bash
# Adicionar Nuxt
npm install nuxt

# Atualizar package.json
npm pkg set scripts.dev="nuxt dev"
npm pkg set scripts.build="nuxt build"
npm pkg set scripts.generate="nuxt generate"

# Criar estrutura básica
mkdir pages components

# Criar app.vue
echo '<template><NuxtPage /></template>' > app.vue
```

---

## Estrutura de Pastas

### Pastas Especiais do Nuxt

| Pasta | Descrição |
|-------|-----------|
| `app.vue` | Layout global da aplicação |
| `pages/` | Rotas automáticas (file-based routing) |
| `components/` | Componentes auto-importados |
| `composables/` | Funções composables reutilizáveis |
| `layouts/` | Layouts alternativos |
| `middleware/` | Middlewares de rota |
| `plugins/` | Plugins Vue |
| `assets/` | Assets processados (Vite) |
| `public/` | Assets estáticos (servidos diretamente) |
| `server/` | API endpoints (full-stack!) |

### Exemplo Completo

```
meu-app-nuxt/
├── app.vue                    # Layout principal
├── nuxt.config.ts             # Configuração
├── pages/
│   ├── index.vue              # Página inicial
│   ├── contato.vue            # Página de contato
│   └── produtos/
│       ├── index.vue          # Lista de produtos
│       └── [id].vue           # Detalhe do produto
├── components/
│   ├── Header.vue             # Auto-importado
│   ├── Footer.vue
│   └── produtos/
│       └── Card.vue           # Auto-importado como ProdutosCard
├── composables/
│   └── useAuth.js             # Composable personalizado
├── layouts/
│   └── admin.vue              # Layout alternativo
├── middleware/
│   └── auth.ts                # Middleware de autenticação
└── server/
    └── api/
        └── hello.ts           # API endpoint /api/hello
```

---

## Roteamento File-Based

### Rotas Básicas

**Arquivo:** `pages/index.vue`
```vue
<template>
  <div>
    <h1>Página Inicial</h1>
    <NuxtLink to="/about">Sobre</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Página inicial' }
  ]
})
</script>
```

**Resultado:** Rota `/`

### Rotas Dinâmicas

**Arquivo:** `pages/users/[id].vue`
```vue
<template>
  <div>
    <h1>Usuário #{{ id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
</script>
```

**Resultado:** Rota `/users/:id` (ex: `/users/123`)

### Navegação

```vue
<template>
  <!-- Link simples -->
  <NuxtLink to="/about">Sobre</NuxtLink>
  
  <!-- Link com objeto -->
  <NuxtLink :to="{ path: '/users', query: { page: 2 } }">
    Usuários
  </NuxtLink>
  
  <!-- Link dinâmico -->
  <NuxtLink :to="`/products/${productId}`">
    Ver Produto
  </NuxtLink>
</template>

<script setup>
// Navegação programática
const router = useRouter()

function goToHome() {
  router.push('/')
}
</script>
```

---

## SEO e Meta Tags

### useHead Composable

```vue
<script setup>
useHead({
  title: 'Minha Página',
  meta: [
    { name: 'description', content: 'Descrição da página' },
    { name: 'keywords', content: 'vue, nuxt, seo' },
    // Open Graph (Facebook/LinkedIn)
    { property: 'og:title', content: 'Minha Página' },
    { property: 'og:description', content: 'Descrição para redes sociais' },
    { property: 'og:image', content: 'https://exemplo.com/image.jpg' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://exemplo.com/minha-pagina' }
  ]
})
</script>
```

### SEO Dinâmico

```vue
<script setup>
const route = useRoute()
const { data: produto } = await useFetch(`/api/produtos/${route.params.id}`)

useHead({
  title: produto.value.nome,
  meta: [
    { name: 'description', content: produto.value.descricao },
    { property: 'og:title', content: produto.value.nome },
    { property: 'og:image', content: produto.value.imagem }
  ]
})
</script>
```

### Meta Global (nuxt.config.ts)

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Meu Site',
      meta: [
        { name: 'description', content: 'Descrição padrão' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
```

---

## Geração Estática (SSG)

### Configuração para SSG

**nuxt.config.ts:**
```typescript
export default defineNuxtConfig({
  nitro: {
    preset: 'static' // Força modo estático
  }
})
```

### Gerar Site Estático

```bash
# Gerar arquivos estáticos
npm run generate

# Resultado em .output/public/
# .output/public/
#   ├── index.html
#   ├── about/
#   │   └── index.html
#   ├── _nuxt/           # Assets (JS, CSS)
#   └── ...
```

### Servir Localmente

```bash
# Preview do site estático
npm run preview

# Ou usar servidor HTTP simples
npx serve .output/public
```

### Deploy

Sites estáticos podem ser hospedados em:
- **Netlify**: `netlify deploy --dir=.output/public`
- **Vercel**: detecção automática
- **GitHub Pages**: copiar `.output/public`
- **AWS S3 / CloudFront**
- **Nginx / Apache**: servir pasta `.output/public`

---

## Comparação Prática

### Exemplo: Página de Produto

#### Vite + Vue (SPA)

**router/index.js:**
```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/Product.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/product/:id', component: Product }
  ]
})
```

**views/Product.vue:**
```vue
<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await fetch(`/api/products/${route.params.id}`)
  product.value = await res.json()
  
  // SEO: precisa manipular DOM manualmente
  document.title = product.value.name
})
</script>
```

**Resultado no navegador (view source):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Meu Site</title>
</head>
<body>
  <div id="app"></div>
  <script src="/src/main.js"></script>
</body>
</html>
<!-- Conteúdo real só aparece após JS executar -->
```

#### Nuxt 3 (SSG)

**pages/product/[id].vue:**
```vue
<template>
  <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: product } = await useFetch(`/api/products/${route.params.id}`)

useHead({
  title: product.value.name,
  meta: [
    { name: 'description', content: product.value.description }
  ]
})
</script>
```

**Resultado no navegador (view source):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Nome do Produto</title>
  <meta name="description" content="Descrição do produto">
</head>
<body>
  <div id="__nuxt">
    <div><h1>Nome do Produto</h1></div>
  </div>
  <script src="/_nuxt/entry.js"></script>
</body>
</html>
<!-- Conteúdo completo já no HTML! -->
```

---

## Quando Usar Nuxt vs Vite/SPA

### Use Vite + Vue (SPA) quando:

- ✅ App interna (dashboard, admin)
- ✅ SEO não é crítico
- ✅ Autenticação obrigatória
- ✅ Muita interatividade em tempo real
- ✅ Não precisa de suporte sem JavaScript
- ✅ Deploy simples (só arquivos estáticos básicos)

**Exemplos:** 
- Painéis administrativos
- Apps de produtividade
- Ferramentas internas
- Jogos web

### Use Nuxt quando:

- ✅ SEO é importante
- ✅ Performance de primeira carga é crítica
- ✅ Conteúdo precisa ser indexável
- ✅ Marketing/landing pages
- ✅ E-commerce
- ✅ Blog/CMS
- ✅ Precisa de server-side rendering
- ✅ Quer convenções e estrutura

**Exemplos:**
- Landing pages
- E-commerce
- Blogs
- Portais de notícias
- Sites corporativos
- Documentação

---

## Recursos Adicionais

### Documentação Oficial
- 📖 [Nuxt 3 Docs](https://nuxt.com)
- 📖 [Vue 3 Docs](https://vuejs.org)

### Módulos Úteis
- `@nuxtjs/tailwindcss` - Integração Tailwind
- `@nuxt/content` - CMS baseado em Markdown
- `@nuxt/image` - Otimização de imagens
- `@pinia/nuxt` - State management

### Comunidade
- [GitHub Discussions](https://github.com/nuxt/nuxt/discussions)
- [Discord](https://discord.com/invite/nuxt)

---

## Conclusão

Nuxt 3 transforma Vue.js em um framework full-stack poderoso, adicionando:

1. **Convenções inteligentes** que reduzem configuração
2. **SEO de primeira classe** com SSR/SSG
3. **Performance otimizada** desde o início
4. **Developer Experience** melhorado com auto-import e HMR

Para **landing pages e sites públicos**, Nuxt é superior ao Vite/SPA devido ao SEO e performance. Para **aplicações internas e dashboards**, o Vite/SPA pode ser mais simples e suficiente.

A escolha depende das necessidades do projeto! 🚀
