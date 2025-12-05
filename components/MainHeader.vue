<template>
  <header class="w-100 bg-white shadow-sm p-2">

    <!-- نسخة الموبايل -->
    <div class="d-flex d-md-none flex-column w-100">
      <div class="d-flex justify-content-end align-items-center mb-2 w-100 mobile-nav">
        <a href="#" class="tiny-link">{{ $t('home') }}</a>
        <a href="#" class="tiny-link">{{ $t('about') }}</a>
        <a href="#" class="tiny-link">{{ $t('media') }}</a>
        <a href="#" class="tiny-link">{{ $t('contact') }}</a>
        <a href="#" class="tiny-link lang-link" @click.prevent="toggleLang">
          {{ i18n.locale.value === 'en' ? 'AR' : 'EN' }}
        </a>
      </div>

      <div class="d-flex justify-content-between align-items-center w-100 flex-wrap">
        <div class="d-flex align-items-center flex-nowrap mb-2 mb-sm-0">
          <img src="/icons/DEVELOPER TEST - Logo Black.png" class="logo-mobile me-2" alt="logo">
          <div class="d-flex flex-nowrap overflow-auto">
            <NuxtLink to="/category/electronics" class="btn custom-btn me-2">{{ $t('electronics') }}</NuxtLink>
            <NuxtLink to="/category/jewelery" class="btn custom-btn me-2">{{ $t('jewelery') }}</NuxtLink>
            <NuxtLink to="/category/menClothing" class="btn custom-btn me-2">{{ $t('menClothing') }}</NuxtLink>
            <NuxtLink to="/category/womenClothing" class="btn custom-btn">{{ $t('womenClothing') }}</NuxtLink>
          </div>
        </div>

        <div class="d-flex align-items-center flex-nowrap mb-2 mb-sm-0">
          <input type="text" class="form-control form-control-sm border-dark me-2"
                 style="width:70px;" :placeholder="$t('search')">
          <!-- تعديل الرابط هنا -->
          <NuxtLink to="/favorites">
            <img src="/icons/heart_11613265.png" class="rounded-circle shadow-sm me-2 icon-small">
          </NuxtLink>
          <!-- تعديل الرابط هنا -->
          <NuxtLink to="/login">
            <img src="/icons/login.png" class="rounded-circle shadow-sm me-2 icon-small">
          </NuxtLink>
          <NuxtLink to="/cart" class="position-relative">
            <img src="/icons/cart.png" class="rounded-circle shadow-sm icon-small">
            <span v-if="cartCount>0" class="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {{ cartCount }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- نسخة الديسكتوب -->
    <div class="d-none d-md-flex align-items-center justify-content-between flex-wrap">
      <a href="#" class="d-flex align-items-center me-3 flex-shrink-0">
        <img src="/icons/DEVELOPER TEST - Logo Black.png" class="logo-desktop" alt="logo">
      </a>

      <div class="d-flex align-items-center me-3 flex-shrink-0">
        <NuxtLink to="/category/electronics" class="btn custom-btn me-2">{{ $t('electronics') }}</NuxtLink>
        <NuxtLink to="/category/jewelery" class="btn custom-btn me-2">{{ $t('jewelery') }}</NuxtLink>
        <NuxtLink to="/category/menClothing" class="btn custom-btn me-2">{{ $t('menClothing') }}</NuxtLink>
        <NuxtLink to="/category/womenClothing" class="btn custom-btn me-2">{{ $t('womenClothing') }}</NuxtLink>
      </div>

      <div class="flex-grow-1"></div>

      <div class="d-flex align-items-center flex-shrink-0">
        <button class="btn btn-dark py-1 px-2 small me-3" @click.prevent="toggleLang">
          {{ i18n.locale.value === 'en' ? 'AR' : 'EN' }}
        </button>
        <NuxtLink to="/cart" class="position-relative">
          <img src="/icons/cart.png" class="rounded-circle shadow-sm icon-small">
          <span v-if="cartCount>0" class="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {{ cartCount }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const i18n = useI18n()
const cartCount = ref(0)

function toggleLang() {
  i18n.locale.value = i18n.locale.value === 'en' ? 'ar' : 'en'
}

const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cartCount.value = cart.length
}

onMounted(() => {
  updateCartCount()
  window.addEventListener('storage', updateCartCount)
})
</script>

<style scoped>
.logo-desktop { width: 100px; height: auto; }
.logo-mobile { width: 80px; height: auto; }

.mobile-nav { gap: 6px; }
.tiny-link { font-size: 0.7rem; padding: 0.2rem 0.3rem; text-decoration: none; color: black; white-space: nowrap; }
.lang-link { font-size: 0.65rem; padding: 0.2rem 0.25rem; color: black; text-decoration: none; }
.custom-btn { font-size: 0.85rem; padding: 0.25rem 0.5rem; border: none; background-color: transparent; color: black; white-space: nowrap; transition: 0.3s; }
.custom-btn:hover { background-color: rgba(0,0,0,0.1); }
.icon-small { width: 26px; height: 26px; }
</style>
