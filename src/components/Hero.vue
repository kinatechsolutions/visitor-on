<template>
  <section
    class="relative h-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/ticket-background.jpg')"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-80"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Side: Text Content -->
        <div class="md:w-1/2 text-white text-center md:text-left">
          <!-- Horizontal Line and Introduction in the Same Line -->
          <div class="flex items-center justify-center md:justify-start mb-4">
            <!-- Horizontal Line -->
            <div class="w-16 border-t-2 border-blue-500 mr-4"></div>
            <!-- Introduction -->
            <p class="text-lg font-semibold">Introduction</p>
          </div>

          <!-- Tagline -->
          <h1 class="text-7xl font-bold mb-6">Your Tagline Goes Here</h1>

          <!-- Description -->
          <p class="text-xl mb-8">
            A brief description of your product or service. Explain why it's amazing and how it can
            help users.
          </p>

          <!-- Call to Action Button -->
          <button
            class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all"
          >
            Get Started
          </button>
        </div>

        <!-- Right Side: Image -->
        <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <!--          <img src="/hero-image.svg" alt="Hero Image" class="w-full h-auto rounded-lg shadow-2xl" />-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
  /* Add custom styles if needed */
</style>
