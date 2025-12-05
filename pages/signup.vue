<template>
  <div class="signup-container">
    <h2>إنشاء حساب</h2>

    <form @submit.prevent="handleSignup">
      <div class="input-group">
        <input v-model="email" type="email" placeholder="البريد الإلكتروني" required />
      </div>

      <div class="input-group">
        <input v-model="password" type="password" placeholder="كلمة المرور" required />
      </div>

      <div class="input-group">
        <input v-model="confirmPassword" type="password" placeholder="تأكيد كلمة المرور" required />
      </div>

      <button type="submit">إنشاء حساب</button>

      <!-- رابط تسجيل الدخول للمستخدمين الجدد -->
      <div class="login-link-container">
        <p>لديك حساب بالفعل؟</p>
        <button 
          type="button"
          @click="goToLogin" 
          class="link-button">
          تسجيل الدخول
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleSignup = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.some(user => user.email === email.value)) {
    alert('الحساب موجود بالفعل');
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert('كلمات المرور غير متطابقة');
    return;
  }

  users.push({ email: email.value, password: password.value });
  localStorage.setItem('users', JSON.stringify(users));

  router.push('/login'); // بعد إنشاء الحساب → التوجّه لصفحة login
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.signup-container {
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
  background-color: #e0d3cf;
}

.login-link-container {
  margin-top: 20px;
  text-align: center;
}

.link-button {
  background: none;
  border: none;
  color: #f4a261;
  font-weight: bold;
  cursor: pointer;
}

.link-button:hover {
  text-decoration: underline;
}
</style>
