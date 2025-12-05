<template>
  <div class="login-container">
    <h2>تسجيل الدخول</h2>

    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <input v-model="email" type="email" placeholder="البريد الإلكتروني" required />
      </div>

      <div class="input-group">
        <input v-model="password" type="password" placeholder="كلمة المرور" required />
      </div>

      <button type="submit">تسجيل الدخول</button>

      <p>
        ليس لديك حساب؟ 
        <NuxtLink to="/signup">إنشاء حساب جديد</NuxtLink>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

// التعامل مع تسجيل الدخول
const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email.value && u.password === password.value);

  if (!user) {
    alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    return;
  }

  // تسجيل الدخول
  localStorage.setItem('isMember', 'true');

  // تطبيق الخصم 15% على السلة
  applyDiscount();

  // التوجّه مباشرة إلى السلة بعد تسجيل الدخول باستخدام replace
  router.replace('/cart');
};

// تطبيق الخصم 15% على السلة
const applyDiscount = () => {
  if (typeof window !== 'undefined') {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const discount = 0.15;

    const updatedCart = cart.map(item => ({
      ...item,
      price: item.price - (item.price * discount)
    }));

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.input-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #f4a261;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #e76f51;
}

p {
  text-align: center;
  margin-top: 15px;
}

NuxtLink {
  color: #f4a261;
  text-decoration: none;
}

NuxtLink:hover {
  text-decoration: underline;
}
</style>
