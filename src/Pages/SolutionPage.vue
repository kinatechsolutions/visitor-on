<template>
  <div class="min-h-screen w-full">
    <NavBar />

    <template v-if="route.params.page">
      <component :is="page" />
    </template>

    <div v-else> Some Content Here</div>
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue';
  import VisitorManagement from '../components/solutions/VisitorManagement.vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const page = computed(() => {
    switch (route.params.page) {
      case 'visitor-management':
        return VisitorManagement;
      default:
        return `<template> <div> ${route.params.pag} </div> </template>`;
    }
  });
</script>

<style scoped></style>
