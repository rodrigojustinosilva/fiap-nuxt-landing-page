<template>
  <section class="banner-gradient text-white py-24">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-4">Bem-vindo à Nossa Landing Page</h1>
      <p class="text-xl mb-8">Crie experiências incríveis com Vue.js, Vite e Tailwind CSS</p>
        <NuxtLink 
          :to="{ path: '/contato', query: { origem: 'banner' } }"
          class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-200 inline-block"
        >
          Entre em Contato
        </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// Componente sem lógica adicional por enquanto
</script>

<style scoped>
.banner-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
