<template>
  <NuxtLink to="/cart" class="cart-icon">
    🛒
    <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
  </NuxtLink>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cartCount = ref(0);

// تحديث العد عند كل تغيير في السلة
const updateCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount.value = cart.length;

  // التحقق من حالة العضوية وتطبيق الخصم إذا كان العضو مسجلًا
  applyDiscountIfMember(cart);
};

// تطبيق خصم 15% إذا كان المستخدم عضوًا
const applyDiscountIfMember = (cart) => {
  const isMember = localStorage.getItem('isMember'); // تحقق إذا كان المستخدم عضوًا

  if (isMember === 'true') {
    // إذا كان المستخدم عضوًا، يتم تطبيق الخصم على العناصر في السلة
    const discount = 0.15;  // 15%
    const updatedCart = cart.map(item => ({
      ...item,
      price: item.price - (item.price * discount) // خصم 15% من السعر
    }));
    
    // تحديث السلة بعد تطبيق الخصم
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
};

onMounted(() => {
  updateCount();
  window.addEventListener('storage', updateCount);
});
</script>

<style scoped>
.cart-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: #000;
  text-decoration: none;
}

.cart-count {
  background: #dc3545;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>
