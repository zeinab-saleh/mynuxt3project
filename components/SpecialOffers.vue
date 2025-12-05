<template>
  <section class="special-offers-section">
    <h2 class="special-offers-title">SPECIAL OFFERS</h2>
    <div class="carousel-wrapper">
      <button class="arrow left" @click="scrollLeft">&lt;</button>
      <div v-if="products.length" class="carousel" ref="carousel">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="card-wrapper"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <!-- الكارد يصبح رابط كامل لتفاصيل المنتج -->
          <NuxtLink :to="`/product/${product.id}`" class="card-link">
            <div class="card">
              <img :src="product.image" :alt="product.title" />
              <div class="card-details">
                <h3>{{ product.title }}</h3>
                <p class="price">${{ product.price }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <p v-else>Loading products...</p>
      <button class="arrow right" @click="scrollRight">&gt;</button>
    </div>

    <!-- 🔥 الخط الفاصل اللي طلبتو هون -->
    <div class="divider"></div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);
const carousel = ref(null);

onMounted(async () => {
  try {
    const { data, error } = await useFetch('https://fakestoreapi.com/products');
    if (error.value) {
      console.error('Fetch error:', error.value);
    } else {
      products.value = data.value || [];
    }
  } catch (err) {
    console.error('Fetch failed:', err);
  }
});

const scrollAmount = 220;

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.special-offers-section {
  text-align: center;
  margin: 50px 0;
}

.special-offers-title {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #000, #444, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0;
}

.card-wrapper {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.5s forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-top: 5px;
}

.card-details {
  padding: 5px 5px;
  margin-top: 5px;
  color: #555;
}

.card-details h3 {
  font-size: 0.9rem;
  margin: 3px 0;
}

.card-details .price {
  font-size: 0.85rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 3px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

/* 🔥 الخط الفاصل اللي طلبتو */
.divider {
  width: 80%;
  height: 4px;
  background: #000;
  margin: 40px auto 0 auto;
  opacity: 0.25;
  border-radius: 5px;
}
</style>
