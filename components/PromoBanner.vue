<template>
  <section class="promo-banner position-relative text-dark">
    <img :src="imageSrc" class="img-fluid bg-image" alt="Promo Banner">

    <div class="promo-content position-absolute text-start">
      <!-- العنوان والنصوص -->
      <h1 class="fw-bold promo-title animate__animated animate__fadeInDown">{{ $t('sale') }}</h1>
      <p class="promo-text animate__animated animate__fadeInUp">
        {{ $t('accessLimitedSelection') }} <br>{{ $t('discountText') }}
      </p>

      <!-- الأيقونة مع النص تحت بعض -->
      <div class="d-flex flex-column align-items-start animate__animated animate__fadeInUp animate__delay-1s">
        <div class="shop-icon-btn position-relative mb-3">
          <img :src="iconSrc" class="shop-icon" alt="Icon" />
          <span class="shop-text position-absolute top-50 start-50 translate-middle">{{ $t('shopNow') }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- فاصل خمس شخطات صغيرة بعد القسم -->
  <div class="divider">
    <span class="line"></span><span class="line"></span><span class="line"></span><span class="line"></span><span class="line"></span>
  </div>
</template>

<script setup>
const imageSrc = '../images/Header.jpg';
const iconSrc = '../icons/Bottun.png';
</script>

<style scoped>
/* Banner Section */
.promo-banner {
  position: relative;
  overflow: hidden;
  height: 450px;
}

/* الصورة */
.bg-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Overlay النصوص على اليسار */
.promo-content {
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  white-space: normal;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50%;
}

/* النصوص */
.promo-title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: 1.1;
  margin: 0;
}

.promo-text {
  font-size: clamp(0.85rem, 2.5vw, 1.1rem);
  line-height: 1.5;
  margin: 0;
}

/* أيقونة */
.shop-icon-btn {
  cursor: pointer;
  position: relative;
  width: clamp(80px, 20vw, 350px); /* يبدأ بعرض 350px */
  height: clamp(80px, 10vw, 100px);
  transition: all 0.3s ease;
}

.shop-icon-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.shop-icon {
  width: 100%;
  height: 100%;
  display: block;
}

.shop-text {
  color: #fff;
  font-weight: bold;
  font-size: clamp(0.75rem, 1.5vw, 1.1rem);
  pointer-events: none;
  text-align: center;
  width: 100%;
}

/* فاصل خمس شخطات صغيرة تحت القسم */
.divider {
  margin-top: 2rem; /* المسافة بين القسم والفاصل */
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 3rem; /* المسافة بين الفاصل والمحتوى اللي تحت */
}

.line {
  display: inline-block;
  width: 30px;
  height: 2px;
  background-color: #000;
  border-radius: 1px;
}

/* Responsive: عند الشاشات ≤ 814px */
@media (max-width: 814px) {
  .bg-image {
    display: none; /* تختفي الصورة */
  }

  .promo-content {
    left: 50%; /* النص والأيقونة في الوسط */
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  }

  .promo-title {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
  }

  .promo-text {
    font-size: clamp(1rem, 5vw, 1.2rem);
  }

  .shop-icon-btn {
    width: clamp(80px, 25vw, 200px); /* تصغر تدريجيًا */
    height: clamp(80px, 15vw, 120px);
  }

  .shop-text {
    font-size: clamp(0.9rem, 3vw, 1rem);
  }
}
</style>

<script>
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
  document.head.appendChild(link);
}
</script>
