<template>
  <section class="favorites-section">
    <h2>{{ $t('favorites') }}</h2>
    <div v-if="favorites.length > 0" class="favorites-grid">
      <div v-for="(product, index) in favorites" :key="product.id" class="product-card">
        <NuxtLink :to="`/product/${product.id}`" class="card-link">
          <img :src="product.image" :alt="product.title" class="product-image" />
          <div class="card-details">
            <h3>{{ product.title }}</h3>
            <p class="price">${{ product.price }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <p v-else>{{ $t('noFavorites') }}</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const favorites = ref([]);

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem('favorites')) || [];
});
</script>

<style scoped>
.favorites-section {
  padding: 50px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.favorites-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  width: 300px; /* نفس عرض الكارد في صفحة المنتج */
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 300px; /* نفس الارتفاع كما في صفحة المنتج */
  object-fit: contain; /* لضمان أن الصورة لا تتشوه */
}

.card-details {
  text-align: center;
  padding: 15px 0;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card-details h3 {
  font-size: 1rem;
  font-weight: 200;
  color: #3f3c3c; /* نفس اللون المستخدم في العنوان في صفحة المنتج */
  margin-bottom: 10px;
}

.price {
  font-size: 1.25rem;
  font-weight: 600; /* زيادة وزن الخط ليكون مثل صفحة المنتج */
  color: #111; /* نفس اللون المستخدم في صفحة المنتج */
}

.favorites-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #111; /* لون موحد مع باقي النصوص */
}
</style>
