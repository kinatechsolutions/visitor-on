<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300  bg-white text-black',
      isSticky ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent bg-opacity-90',
    ]"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center k">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logo.png" alt="Logo" class="h-8 w-auto mr-2" />
        <span class="text-lg font-bold text-gray-800 dark:text-white">Your Brand</span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#features" class="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#pricing" class="text-gray-700 hover:text-blue-600">Pricing</a>
        <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
      </div>

      <!-- Call to Action Button -->
      <button
        class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
      >
        Get Started
      </button>
    </div>
  </nav>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const isSticky = ref(false);

  const handleScroll = () => {
    isSticky.value = window.scrollY > 50; // Change 50 to the scroll threshold you prefer
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style scoped>
  /* Add custom styles if needed */
</style>
