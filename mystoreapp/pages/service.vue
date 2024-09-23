<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div v-if="foodItems.length === 0" class="loading-wrapper">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading...</p>
    </div>
    <div v-else>
      <div class="container">
        <div v-for="item in foodItems" :key="item.unique_product_id" class="luxury-card">
          <img :src="item.image" :alt="item.name" class="luxury-card-img">
          <div class="luxury-card-content">
            <h3 class="luxury-card-title">{{ item.name }}</h3>
            <p class="luxury-card-text">{{ item.description }}</p>
            <p class="luxury-card-price">Price: £{{ item.price }}</p>
            <a href="#" class="luxury-card-btn">Taste the Magic – Dive In!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const foodItems = ref([]);

const fetchFoodItems = async () => {
  try {
    const response = await axios.get(`${apiBase}/food-items`);
    foodItems.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
fetchFoodItems();
</script>

<style scoped src="/assets/css/service.css"></style>
