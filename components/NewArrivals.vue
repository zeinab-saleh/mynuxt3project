<template>
  <div class="new-arrivals-container my-5">
    <!-- عنوان القسم مع ترجمة -->
    <h2 class="text-center fw-bold mb-4 animated-title">
      {{ $t("newArrivals") }}
    </h2>

    <!-- كاردات المنتجات -->
    <div class="d-flex justify-content-center flex-wrap gap-4 px-3">
      <router-link 
        v-for="product in newProducts" 
        :key="product.id" 
        :to="`/product/${product.id}`" 
        class="card animated-card text-decoration-none text-dark"
        style="width: 250px;"
      >
        <img 
          :src="product.image" 
          :alt="product.title" 
          class="card-img-top product-img"
        />
        <div class="card-body text-center">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-price fw-bold">{{ product.price }} $</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const newProducts = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    // نأخذ آخر 4 منتجات مضافة
    newProducts.value = res.data.slice(-4).reverse();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
});
</script>

<style scoped>
.new-arrivals-container {
  padding: 2rem 0;
}

/* عنوان مع أنيميشن */
.animated-title {
  transform: translateY(-20px);
  opacity: 0;
  animation: fadeInDown 1s forwards;
}

@keyframes fadeInDown {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* كاردات مع أنيميشن */
.animated-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animated-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

/* الصور بدون قص */
.product-img {
  height: 200px;
  object-fit: contain;
  background-color: #fff;
  padding: 10px;
}
</style>
