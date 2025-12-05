<template>
  <section class="product-details-section">
    <div v-if="product" class="product-card">
      <img :src="product.image" :alt="product.title" class="product-image"/>
      <div class="details">
        <h2>{{ product.title }}</h2>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>

        <!-- أيقونة المفضلة (القلب) -->
        <i 
          :class="isFavorite ? 'fa fa-heart heart-filled' : 'fa fa-heart-o heart-empty'" 
          @click="toggleFavorite" 
          class="heart-icon"
          aria-hidden="true"
        ></i>

        <button class="add-to-cart" @click="addToCart(product)">
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
const product = ref(null);

// استرجاع تفاصيل المنتج من API
onMounted(async () => {
  const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`);
  if (data && data.value) {
    product.value = data.value;
    checkIfFavorite(); // نتحقق من حالة المفضلة فور تحميل المنتج
  } else {
    console.error('Failed to load product data');
  }
});

// حالة المفضلة
const isFavorite = ref(false);

// التحقق إذا كان المنتج في المفضلة
const checkIfFavorite = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  isFavorite.value = storedFavorites.some(p => p.id === product.value.id);
};

// دالة لتبديل حالة المفضلة
const toggleFavorite = () => {
  let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const productIndex = storedFavorites.findIndex(p => p.id === product.value.id);

  if (productIndex !== -1) {
    // إذا كان المنتج مضافًا مسبقًا، أزله من المفضلة
    storedFavorites.splice(productIndex, 1);
    isFavorite.value = false; // تحديث الواجهة مباشرة
  } else {
    // إذا كان المنتج غير مضاف، أضفه إلى المفضلة
    storedFavorites.push(product.value);
    isFavorite.value = true; // تحديث الواجهة مباشرة
  }

  // تحديث الـ localStorage
  localStorage.setItem('favorites', JSON.stringify(storedFavorites));
};

// إضافة المنتج إلى السلة
const addToCart = (prod) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === prod.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    prod.quantity = 1;
    cart.push(prod);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${prod.title} added to cart!`);
};
</script>

<style scoped>
.product-details-section {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
}
.product-card {
  display: flex;
  gap: 30px;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  margin-bottom: 20px;
}
.product-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.details h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.details .price {
  font-weight: 700;
  color: #111;
  margin-bottom: 10px;
}
.details .description {
  margin-bottom: 20px;
}
.add-to-cart {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.add-to-cart:hover {
  background: #0056b3;
}

/* إضافة تنسيق لآيقونة القلب */
.heart-icon {
  font-size: 30px;
  cursor: pointer;
  margin-right: 20px;
}

.heart-filled {
  color: #e91e63; /* اللون الغامق للقلب عند إضافته للمفضلة */
}

.heart-empty {
  color: #ccc; /* اللون الفاتح للقلب الفارغ */
}

.heart-icon:hover {
  color: #ff4081; /* تغيير اللون عند التمرير */
}
</style>
