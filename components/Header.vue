<template>
  <header class="bg-blue-600 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
          <NuxtLink to="/" class="hover:text-blue-200 transition duration-200">
          {{ logoText }}
          </NuxtLink>
      </div>
      
      <!-- Navigation Links -->
      <ul class="flex space-x-6">
        <li>
            <NuxtLink 
              to="/" 
              class="hover:text-blue-200 transition duration-200 pb-1"
              active-class="border-b-2 border-white"
            >
              Início
            </NuxtLink>
        </li>
        <li>
            <NuxtLink 
              to="/contato" 
              class="hover:text-blue-200 transition duration-200 pb-1"
              active-class="border-b-2 border-white"
            >
              Contato
            </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Definindo as props do componente
defineProps({
  logoText: {
    type: String,
    required: true,
    default: 'Logo'
  }
})
</script>
