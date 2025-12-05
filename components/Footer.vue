<template>
  <footer class="footer bg-dark text-white py-5 w-100">
    <div class="container-fluid px-4"> <!-- px-4 يضيف padding يمين ويسار -->
      <div class="d-flex flex-wrap align-items-start justify-content-between">

        <!-- اللوغو -->
        <div class="d-flex align-items-center">
          <img :src="logo" alt="Logo" class="img-fluid" style="max-width: 120px;" />
        </div>

        <!-- المجموعة الأولى روابط -->
        <ul class="list-unstyled mb-0">
          <li><a href="#" class="text-white">{{ $t('home') }}</a></li>
          <li><a href="#" class="text-white">{{ $t('about') }}</a></li>
          <li><a href="#" class="text-white">{{ $t('mediaCenter') }}</a></li>
          <li><a href="#" class="text-white">{{ $t('contact') }}</a></li>
        </ul>

        <!-- المجموعة الثانية روابط -->
        <ul class="list-unstyled mb-0">
          <li><NuxtLink to="/category/electronics" class="text-white">{{ $t('electronics') }}</NuxtLink></li>
          <li><NuxtLink to="/category/jewelery" class="text-white">{{ $t('jewelery') }}</NuxtLink></li>
          <li><NuxtLink to="/category/menClothing" class="text-white">{{ $t('menClothing') }}</NuxtLink></li>
          <li><NuxtLink to="/category/womenClothing" class="text-white">{{ $t('womenClothing') }}</NuxtLink></li>
        </ul>

        <!-- المجموعة الثالثة: contact -->
        <div class="d-flex flex-column">
          <h5 class="fw-bold">{{ $t('contactUs') }}</h5>
          <p class="mb-1">+971 00 000 000</p>
          <p class="mb-1">+971 0 000 0000</p>
          <p>info@sample.com</p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
const logo = ref('../icons/DEVELOPER TEST - Logo.png');
</script>
