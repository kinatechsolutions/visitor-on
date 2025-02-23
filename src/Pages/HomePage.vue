<template>
  <div class="min-h-screen w-full">
    <NavBar />

    <Hero />

    <Trustees />

    <Features />

    <Stats />

    <Content />

    <Pricing />

    <Blog />

    <Cta />

    <Contact />

    <Newsletter />
  </div>
</template>

<script setup>
  import { LightBulbIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/vue/24/outline';
  import StickyNavbar from '../components/NavBar.vue';
  import NavBar from '../components/NavBar.vue';
  import Hero from '../components/Hero.vue';
  import Features from '../components/Features.vue';
  import Stats from '../components/Stats.vue';
  import Feature from '../components/Feature.vue';
  import Pricing from '../components/pricing.vue';
  import Blog from '../components/Blog.vue';
  import Cta from '../components/Cta.vue';
  import Newsletter from '../components/Newsletter.vue';
  import Contact from '../components/Contact.vue';
  import Content from '../components/Content.vue';
  import Trustees from '../components/Trustees.vue';
</script>
