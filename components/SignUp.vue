<template>
  <div class="member-banner d-flex flex-column flex-md-row align-items-center justify-content-center">
    <!-- النص الأساسي -->
    <h2 class="main-text fw-bold text-center flex-grow-1">
      {{ $t("becomeMember") }}
    </h2>

    <div class="spacer"></div>

    <!-- أيقونة + النص فوقها -->
    <div @click="redirectToSignup" class="icon-wrapper">
      <img :src="iconPath" alt="icon" class="icon" />
      <span class="icon-text">{{ $t("signupFree") }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();  // نحتاج إلى استخدام التوجيه

const iconPath = "../icons/Bottun.png"; // مسار الأيقونة تبعك

// توجيه المستخدم إلى صفحة التسجيل
const redirectToSignup = () => {
  router.push('/signup'); // يتم التوجيه إلى صفحة التسجيل
};
</script>

<style scoped>
.member-banner {
  background-color: #eedf12;
  border-radius: 22px;
  padding: 50px 25px; /* زدنا شوية padding لتناسب الأيقونة الأكبر */
  min-height: 250px;   /* زدنا الطول */
  animation: fadeInUp 1s ease forwards;
  display: flex;
  overflow: hidden;
}

.main-text {
  color: #000;
  font-size: 2.6rem;
  line-height: 1.3;
  animation: titlePop 1.2s ease forwards, glow 2s infinite alternate ease-in-out;
}

.icon-wrapper {
  position: relative;
  display: inline-block;
  animation: fadeInRight 1s ease, float 3s infinite ease-in-out;
  cursor: pointer; /* لإظهار أن الأيقونة قابلة للنقر */
}

.icon {
  width: 220px;   /* كبرنا الأيقونة */
  height: auto;
}

.icon-text {
  position: absolute;
  left: 40%;        
  top: 50%;        
  transform: translate(-50%, -50%); 
  color: #ece8e8;
  font-weight: bold;
  font-size: 1.3rem; /* زدنا الخط شوي لتناسب الأيقونة الأكبر */
  pointer-events: none;
}

.spacer {
  width: 50px;
}

/* ===== Animations ===== */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes titlePop {
  0% { opacity: 0; transform: scale(0.6); }
  60% { opacity: 1; transform: scale(1.15); }
  100% { transform: scale(1); }
}

@keyframes glow {
  from { text-shadow: 0 0 5px rgba(0,0,0,0.2); }
  to   { text-shadow: 0 0 18px rgba(255, 225, 0, 0.9); }
}

@keyframes float {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}
</style>
