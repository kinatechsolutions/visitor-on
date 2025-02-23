<template>
  <div class="min-h-screen w-full">
    <NavBar />

    <router-view />
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue';
</script>

<style scoped></style>
