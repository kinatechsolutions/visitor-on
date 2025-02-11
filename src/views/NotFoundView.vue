<template>
  <div class="min-h-screen flex items-center justify-center bg-primary text-white">
    <div class="text-center">
      <h1 class="text-9xl font-bold mb-4">404</h1>
      <p class="text-2xl mb-8">Oops! Page Not Found!</p>
      <ExclamationCircleIcon class="mx-auto h-20 w-20 text-secondary mb-8" />
      <p class="text-lg mb-4">Looks like you've ventured off the map.</p>
      <router-link
        :to="{ name: 'home' }"
        class="bg-secondary text-white px-4 py-2 rounded hover:bg-tertiary transition-colors duration-300"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';
</script>
