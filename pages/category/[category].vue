<template>
  <section class="category-section">
    <h2 class="category-title">{{ displayCategory.toUpperCase() }}</h2>
    <div class="products-grid">
      <div
        v-for="(product, index) in filteredProducts"
        :key="product.id"
        class="card"
        :style="{ animationDelay: index * 0.1 + 's' }"
      >
        <NuxtLink :to="`/product/${product.id}`" class="card-link">
          <img :src="product.image" :alt="product.title" />
          <div class="card-details">
            <h3>{{ product.title }}</h3>
            <p class="price">${{ product.price }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category; // الرابط من URL مثل "menClothing" أو "womenClothing"

// تعديل الـ categoryMap ليتوافق مع الـ API
const categoryMap = {
  'menClothing': "men's clothing",  // تعديل هنا
  'womenClothing': "women's clothing",  // تعديل هنا
  'jewelery': 'jewelery',
  'electronics': 'electronics',
};

const formattedCategory = computed(() => {
  const categoryInAPI = categoryMap[category] || category;
  console.log("Formatted Category:", categoryInAPI);  // Debugging formatted category
  return categoryInAPI;
});

const displayCategory = computed(() => category.replace('-', ' '));

const products = ref([]);
const filteredProducts = ref([]);

onMounted(async () => {
  try {
    const { data } = await useFetch('https://fakestoreapi.com/products');
    console.log("All Products:", data.value);  // Debugging all products

    products.value = data.value;

    // تصفية المنتجات بناءً على الفئة المحددة في الرابط
    filteredProducts.value = products.value.filter((p) => {
      const categoryFromAPI = p.category.trim().toLowerCase();  // تأكد من إزالة المسافات وتحويل الحروف لصغيرة
      const categoryToCompare = formattedCategory.value.trim().toLowerCase();
      console.log("Comparing:", categoryFromAPI, "==", categoryToCompare);  // Debugging comparison

      return categoryFromAPI === categoryToCompare;
    });

    console.log("Filtered Products:", filteredProducts.value);  // Debugging filtered products

    // في حال لم تجد أي منتجات
    if (filteredProducts.value.length === 0) {
      console.log("No products found for category:", formattedCategory.value);
    }

  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<style scoped>
.category-section {
  padding: 50px 20px;
  text-align: center;
}

.category-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #acc0bf;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 40px;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeScale 0.6s forwards;
}

.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
  text-align: center;
  padding: 10px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.6s forwards;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.35);
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  transition: transform 0.3s;
}

.card:hover img {
  transform: scale(1.1);
}

.card-details h3 {
  font-size: 0.9rem;
  margin: 5px 0;
  color: #111;
}

.card-details .price {
  font-weight: 700;
  color: #111;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
