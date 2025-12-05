<template>
  <div class="page-container">
    <!-- الهيدر -->
    <MainHeader />

    <!-- البانرات والعروض -->
    <PromoBanner />
    <Promo2Banner />
    <SpecialOffers />
    <AnimatedImage />
    <NewArrivals />
    <SignUp />

    <!-- محتوى الصفحة -->
    <main class="mt-4">
      <NuxtPage />
    </main>

    <!-- الفوتر -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// استيراد كل الكومبوننتات المستخدمة
import MainHeader from '~/components/MainHeader.vue'
import PromoBanner from '~/components/PromoBanner.vue'
import Promo2Banner from '~/components/Promo2Banner.vue'
import SpecialOffers from '~/components/SpecialOffers.vue'
import AnimatedImage from '~/components/AnimatedImage.vue'
import NewArrivals from '~/components/NewArrivals.vue'
import SignUp from '~/components/SignUp.vue'
import Footer from '~/components/Footer.vue' // <--- تأكد من المسار والاسم
</script>

<style>
/* padding من جميع الجهات للصفحة */
.page-container {
  padding: 10px; /* تقدر تزوده حسب المسافة المطلوبة */
  box-sizing: border-box;
}
</style>
