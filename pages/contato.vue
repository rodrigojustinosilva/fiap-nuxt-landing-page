<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Entre em Contato</h1>
    
    <!-- Mensagem de origem (se vier de alguma navegação com query parameter) -->
    <div v-if="origem" class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
      <p class="font-semibold">
        Você veio da seção: <strong>{{ origem }}</strong>
      </p>
    </div>
    
    <!-- Formulário de Contato -->
    <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <form class="space-y-6">
        <div>
          <label for="nome" class="block text-gray-700 font-semibold mb-2">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label for="email" class="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label for="mensagem" class="block text-gray-700 font-semibold mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows="5"
            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sua mensagem..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
    
    <!-- Link de volta para Home -->
    <div class="text-center mt-8">
      <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 font-semibold transition duration-200">
        ← Voltar para Início
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Capturando o query parameter 'origem' da URL
const route = useRoute()
const origem = route.query.origem

useHead({
  title: 'Contato',
  meta: [
    { name: 'description', content: 'Página de contato da landing page.' }
  ]
})
</script>