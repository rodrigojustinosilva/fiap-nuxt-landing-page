# Landing Page Estática com Nuxt 3 e Tailwind CSS

![Nuxt](https://img.shields.io/badge/Nuxt-3-00DC82?style=flat&logo=nuxtdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)

## 📋 Sobre o Projeto

Este projeto é uma **Landing Page estática** construída com **Nuxt 3** e **Tailwind CSS**. Migramos de uma SPA com Vite/Vue para um modelo estático gerado pelo Nuxt (SSG), mantendo os componentes e páginas equivalentes.

## 🎯 Principais recursos

- ✅ Nuxt 3 com roteamento baseado em arquivos (`pages/`)
- ✅ SEO por página via `useHead`
- ✅ Tailwind CSS integrado via módulo oficial
- ✅ Geração estática com `nuxt generate`

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** (geralmente já vem com o Node.js)
- Editor de código (recomendamos o **VS Code**)
- Conhecimentos básicos de HTML, CSS e JavaScript

Para verificar se você tem o Node.js instalado:

```bash
node --version
npm --version
```

## 🚀 Instalação e Execução (Nuxt)

### 1. Clone o repositório

```bash
git clone https://github.com/jaisonschmidt/fiap-nuxt-landing-page.git
cd fiap-nuxt-landing-page
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

Por padrão, Nuxt inicia em `http://localhost:3000`.

### 4. Outros comandos disponíveis

```bash
# Build para produção (SSR)
npm run build

# Preview do build
npm run preview

# Gerar site estático (SSG)
npm run generate
```

Após `generate`, os arquivos estáticos ficam em `.output/public`.

## 📁 Estrutura do Projeto (Nuxt)

```
fiap-nuxt-landing-page/
├── app.vue                 # Layout global (Header, Footer, NuxtPage)
├── pages/
│   ├── index.vue           # Página Home
│   └── contato.vue         # Página Contato
├── components/             # Componentes reutilizáveis
│   ├── Header.vue
│   ├── MainBanner.vue
│   ├── ContentSection.vue
│   └── Footer.vue
├── assets/css/tailwind.css # Estilos globais (Tailwind)
├── nuxt.config.ts          # Configuração do Nuxt
├── tailwind.config.js      # Configuração do Tailwind
├── postcss.config.js       # Configuração do PostCSS
└── package.json            # Dependências e scripts
```

### 📂 Diferença entre `components/` e `views/`

- **`components/`**: Componentes reutilizáveis que podem ser usados em múltiplas páginas (Header, Footer, Cards, etc.)
- **`views/`**: Componentes que representam páginas completas e são associados a rotas específicas

## 📚 Conceitos Fundamentais do Vue.js

### 1. O que é um Componente?

Componentes são blocos de construção reutilizáveis em Vue.js. Cada componente é um arquivo `.vue` que contém:

```vue
<template>
  <!-- HTML do componente -->
</template>

<script setup>
  // Lógica JavaScript do componente
</script>

<style scoped>
  /* Estilos CSS do componente */
</style>
```

### 2. Props (Propriedades)

Props permitem passar dados de um componente pai para um componente filho. No nosso projeto, o componente `Header.vue` recebe uma prop `logoText`:

**Definindo props no componente filho (Header.vue):**

```vue
<script setup>
defineProps({
  logoText: {
    type: String,
    required: true,
    default: 'Logo'
  }
})
</script>

<template>
  <div>{{ logoText }}</div>
</template>
```

**Passando props do componente pai (App.vue):**

```vue
<template>
  <Header logoText="FIAP Landing Page" />
</template>
```

### 3. Sistema de Reatividade

Vue.js automaticamente rastreia dependências e atualiza o DOM quando os dados mudam. No exemplo acima, se `logoText` mudar, o template será atualizado automaticamente.

### 4. Template Syntax

Vue.js usa uma sintaxe de template baseada em HTML:

- **Interpolação de texto**: `{{ variavel }}`
- **Binding de atributos**: `:href="url"` ou `v-bind:href="url"`
- **Diretivas condicionais**: `v-if`, `v-else`, `v-show`
- **Renderização de listas**: `v-for`
- **Eventos**: `@click="funcao"` ou `v-on:click="funcao"`

## 🛣️ Roteamento com Nuxt

### O que é o Vue Router?

Vue Router é a biblioteca oficial de roteamento para Vue.js. Ele permite criar SPAs (Single Page Applications) com múltiplas "páginas" sem recarregar o navegador.

### Configuração do Router

O arquivo `src/router/index.js` define as rotas da aplicação:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```

### Navegação com `<NuxtLink>`

Para criar links de navegação, usamos o componente `<router-link>` ao invés de `<a>`:

```vue
<NuxtLink to="/">Início</NuxtLink>
<NuxtLink to="/contato">Contato</NuxtLink>
```

**Vantagens:**
- Não recarrega a página
- Automaticamente adiciona classes CSS para links ativos
- Melhora a performance da aplicação

### Estilização de Links Ativos

O Vue Router permite estilizar links ativos automaticamente:

```vue
<router-link 
  to="/contato" 
  active-class="border-b-2 border-white"
>
  Contato
</router-link>
```

### `<NuxtPage>` - Onde as Páginas Aparecem

No componente `App.vue`, o `<router-view>` é onde as páginas são renderizadas:

```vue
<template>
  <Header />
  <NuxtPage />  <!-- As páginas aparecem aqui -->
  <Footer />
</template>
```

## 🔍 SEO com Nuxt

### Meta Tags Dinâmicas por Rota

O projeto implementa SEO dinâmico, atualizando o `title` e `meta description` de cada página automaticamente usando o Vue Router.

**Como funciona:**

1. **Meta tags na configuração de rotas** (`router/index.js`):

```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'FIAP Landing Page - Vue.js + Vite + Tailwind CSS',
      description: 'Aprenda Vue.js 3 criando uma landing page moderna...'
    }
  }
]
```

2. **Navigation Guard para atualizar as tags**:

```javascript
router.beforeEach((to, from, next) => {
  // Atualiza o título
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Atualiza a meta description
  if (to.meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', to.meta.description)
  }
  
  next()
})
```

### Benefícios para SEO

- ✅ **Títulos únicos** por página (importante para rankings)
- ✅ **Descrições específicas** que aparecem nos resultados do Google
- ✅ **Open Graph tags** para compartilhamento em redes sociais
- ✅ **Twitter Cards** para melhor apresentação no Twitter
- ✅ **Keywords** relevantes para indexação

### Meta Tags Implementadas

**No `index.html`:**
- `title` - Título padrão da página
- `description` - Descrição padrão
- `keywords` - Palavras-chave relevantes
- `author` - Autor do conteúdo
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags

**Por página com `useHead`:**
- Título e descrição definidos em cada page

## 🔄 Query Parameters

### Query Parameters

Uma forma simples de passar informações entre páginas é através de **query parameters** na URL.

**Navegando com query parameters:**

```vue
<NuxtLink :to="{ path: '/contato', query: { origem: 'banner' } }">
  Entre em Contato
</router-link>
```

Isso gera a URL: `/contato?origem=banner`

**Acessando query parameters na página de destino:**

```vue
<script setup>
const route = useRoute() // composable do Nuxt

const route = useRoute()
const origem = route.query.origem  // 'banner'
</script>

<template>
  <div v-if="origem">
    Você veio da seção: {{ origem }}
  </div>
</template>
```

### Exemplo Prático no Projeto

No nosso projeto:

1. O usuário clica no botão "Entre em Contato" no `MainBanner.vue`
2. Ele é redirecionado para `/contato?origem=banner`
3. A página `Contato.vue` captura o parâmetro e exibe: "Você veio da seção: banner"

Isso é útil para rastrear de onde os usuários vieram e personalizar a experiência.

## 🎨 Tailwind CSS

Tailwind está integrado via módulo oficial `@nuxtjs/tailwindcss`. As classes são escaneadas em `app.vue`, `pages/`, `components/`.

Para ajustar o escopo, edite `tailwind.config.js`.

## 🛠️ Notas de Migração

- A pasta `tutorial/` foi removida conforme solicitado.
- Artefatos do Vite (como `index.html`, `vite.config.js`, `src/main.js`, `src/router/`) foram removidos.
- Componentes que usavam `<router-link>` foram atualizados para `<NuxtLink>`.
- As páginas foram movidas para `pages/` com SEO definido via `useHead`.

Tailwind CSS é um framework de utilitários que permite estilizar rapidamente sem escrever CSS customizado.

### Classes Utilitárias Comuns

```html
<!-- Padding e Margin -->
<div class="p-4">padding: 1rem (16px)</div>
<div class="px-4 py-2">padding horizontal e vertical</div>
<div class="mb-6">margin-bottom: 1.5rem</div>

<!-- Cores -->
<div class="bg-blue-600 text-white">Fundo azul, texto branco</div>

<!-- Tipografia -->
<h1 class="text-4xl font-bold">Título grande e negrito</h1>

<!-- Flexbox -->
<div class="flex justify-between items-center">Layout flex</div>

<!-- Responsividade -->
<div class="flex flex-col md:flex-row">Coluna no mobile, linha no desktop</div>

<!-- Hover e Transições -->
<button class="hover:bg-blue-700 transition duration-200">Botão</button>
```

### Customização com CSS Scoped

Quando precisamos de estilos customizados, usamos `<style scoped>`:

```vue
<style scoped>
.banner-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

O `scoped` garante que esses estilos só se apliquem ao componente atual.

## 🧩 Componentes do Projeto

### Header.vue

- **Props**: `logoText` (String) - Texto do logo
- **Funcionalidade**: Navegação entre páginas com links ativos destacados

### MainBanner.vue

- **Funcionalidade**: Banner principal com call-to-action
- **Navegação**: Botão que leva para `/contato?origem=banner`
- **Estilo**: Gradiente CSS customizado

### ContentSection.vue

- **Funcionalidade**: Seção de conteúdo com título e texto
- **Conteúdo**: Lorem ipsum para demonstração

### Footer.vue

- **Funcionalidade**: Rodapé com copyright e links sociais

### Home.vue (View)

- **Funcionalidade**: Página inicial que compõe `MainBanner` + `ContentSection`

### Contato.vue (View)

- **Funcionalidade**: Página de contato com formulário
- **Recursos**: Captura query parameter `origem` e exibe mensagem personalizada

## 🔍 Como o Projeto Funciona

### Fluxo de Execução

1. **`index.html`** carrega o `<div id="app"></div>` e o script `main.js`
2. **`main.js`** cria a aplicação Vue, registra o router e monta o app em `#app`
3. **`App.vue`** é o componente raiz que contém `Header`, `<router-view>` e `Footer`
4. **Vue Router** renderiza a view correspondente à URL dentro do `<router-view>`
5. Componentes importam outros componentes conforme necessário

### Fluxo de Dados

```
App.vue
  ├── Header.vue (recebe logoText via props)
  ├── <router-view>
  │     ├── Home.vue
  │     │     ├── MainBanner.vue (navega para /contato?origem=banner)
  │     │     └── ContentSection.vue
  │     └── Contato.vue (recebe query.origem do router)
  └── Footer.vue
```

## 🎓 Próximos Passos

Após dominar este tutorial, você pode:

1. **Adicionar mais páginas** (Sobre, Serviços, Blog, etc.)
2. **Implementar v-model** para formulários reativos
3. **Adicionar validação de formulários**
4. **Criar componentes mais complexos** (cards, modais, carrosséis)
5. **Integrar com APIs** usando `fetch` ou `axios`
6. **Adicionar gerenciamento de estado** com Pinia
7. **Implementar autenticação** e rotas protegidas
8. **Explorar Composition API** mais a fundo
9. **Adicionar testes** com Vitest
10. **Implementar lazy loading** de rotas
11. **Melhorar SEO** com sitemap.xml e robots.txt
12. **Adicionar Google Analytics** para métricas

## 📖 Recursos Adicionais

### Documentação Oficial

- [Vue.js 3](https://vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Comunidade Brasileira

- [Vue.js Brasil no Discord](https://discord.gg/vuejsbrasil)
- [Vue.js Brasil no GitHub](https://github.com/vuejs-br)

### Cursos e Tutoriais

- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)
- [Documentação Vue.js em Português](https://pt.vuejs.org/)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é um material educacional da FIAP e está disponível para fins de aprendizado.

---

**Desenvolvido com ❤️ para estudantes da FIAP**
