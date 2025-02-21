<template>
  <div class="min-h-screen w-full">
    <NavBar />

    <Hero />

    <!-- Features Section -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold">Our Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div class="p-6 bg-white shadow-lg rounded-lg">
            <LightBulbIcon name="light-bulb" class="h-10 w-10 text-indigo-600 mx-auto" />
            <h3 class="mt-4 font-semibold">Feature One</h3>
            <p class="mt-2 text-gray-600">Description of feature one.</p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-lg">
            <ChartBarIcon name="chart-bar" class="h-10 w-10 text-indigo-600 mx-auto" />
            <h3 class="mt-4 font-semibold">Feature Two</h3>
            <p class="mt-2 text-gray-600">Description of feature two.</p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-lg">
            <GlobeAltIcon name="globe" class="h-10 w-10 text-indigo-600 mx-auto" />
            <h3 class="mt-4 font-semibold">Feature Three</h3>
            <p class="mt-2 text-gray-600">Description of feature three.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold">About Us</h2>
        <p class="mt-4 text-gray-600">We provide top-notch solutions to help businesses grow.</p>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold">What Our Clients Say</h2>
        <p class="mt-4 text-gray-600 italic">
          "This platform changed the way we work! Highly recommended!"
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-indigo-600 text-white text-center">
      <h2 class="text-3xl font-bold">Get in Touch</h2>
      <p class="mt-4">Have questions? Contact us today!</p>
      <button
        class="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
      >
        Contact Us
      </button>
    </section>
  </div>
</template>

<script setup>
  import { LightBulbIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/vue/24/outline';
  import StickyNavbar from '../components/NavBar.vue';
  import NavBar from '../components/NavBar.vue';
  import Hero from '../components/Hero.vue';
</script>
