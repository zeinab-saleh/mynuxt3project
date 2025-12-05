<template>
  <section class="cart-section">
    <h1>Your Cart</h1>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="(item, index) in cart" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.title" />
        <div class="details">
          <h3>{{ item.title }}</h3>
          <p class="price">${{ item.price }}</p>
          <div class="quantity-control">
            <button @click="decreaseQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </div>
          <button class="remove-btn" @click="removeItem(index)">Remove</button>
        </div>
      </div>
      <div class="cart-summary">
        <h2>Total: ${{ totalPrice }}</h2>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const cart = ref([]);
const router = useRouter();

// التعامل مع زر الرجوع في المتصفح
const handlePopState = () => {
  router.replace('/'); // عند الضغط على رجوع → الصفحة الرئيسية
};

onMounted(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.value = storedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));

  window.addEventListener('popstate', handlePopState);
});

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState);
});

// تحديث localStorage
const updateCartStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

const increaseQuantity = (index) => {
  cart.value[index].quantity++;
  updateCartStorage();
};

const decreaseQuantity = (index) => {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity--;
    updateCartStorage();
  }
};

const removeItem = (index) => {
  cart.value.splice(index, 1);
  updateCartStorage();
};

const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
);
</script>

<style scoped>
.cart-section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cart-item {
  display: flex;
  gap: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.cart-item img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}
.details h3 {
  margin: 0 0 10px 0;
}
.price {
  font-weight: 700;
  margin-bottom: 10px;
}
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.quantity-control button {
  width: 30px;
  height: 30px;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.remove-btn {
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.cart-summary {
  text-align: right;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
