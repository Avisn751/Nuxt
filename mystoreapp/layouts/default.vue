<template>
    <div>
        <GlobalLoader v-if="loading" />
        <div v-else>
        <Navbar />
        <slot />
        <Footer />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const loading = ref(true);
  
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  });
  </script>
  