<template>
  <section class="favorite-section">
    <h1>Your Favorites</h1>
    <div v-if="favorites.length > 0" class="favorite-items">
      <div v-for="(item, index) in favorites" :key="item.id" class="favorite-item">
        <img :src="item.image" :alt="item.title" class="favorite-item-img"/>
        <div class="details">
          <h3>{{ item.title }}</h3>
          <p class="price">${{ item.price }}</p>
          <button class="remove-btn" @click="removeFromFavorites(index)">Remove from Favorites</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Your favorites list is empty.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const favorites = ref([]);

// استرجاع المنتجات المفضلة من localStorage عند تحميل الصفحة
onMounted(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.value = storedFavorites;
});

// دالة لإزالة المنتج من المفضلة
const removeFromFavorites = (index) => {
  favorites.value.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};
</script>

<style scoped>
.favorite-section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}
.favorite-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
}
.favorite-item {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 250px;
  text-align: center;
  margin-bottom: 20px;
}
.favorite-item-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.details h3 {
  margin: 10px 0;
  font-size: 1.2rem;
}
.price {
  font-weight: 700;
  color: #111;
}
.remove-btn {
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.remove-btn:hover {
  background: #c82333;
}
</style>
