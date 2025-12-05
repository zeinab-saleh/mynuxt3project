<template>
  <section class="image-section position-relative text-dark">
    <!-- الصورة -->
    <img :src="imageSrc" class="img-fluid w-100" alt="Image">

    <!-- Overlay للنصوص و الأيقونة -->
    <div class="image-content position-absolute bottom-0 start-0 p-3 text-start">
      <div class="d-flex align-items-center">
        <!-- الأيقونة مع نص "See More" داخلها -->
        <div class="icon-wrapper d-flex align-items-center justify-content-center">
          <img :src="iconSrc" class="icon-size" alt="Icon" />
          <span class="see-more-text">{{ $t('seeMore') }}</span>  <!-- النص داخل الأيقونة -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// مسار الصورة والأيقونة
const imageSrc = '../images/jewelry.jpg';  // استبدل بالمسار الفعلي للصورة
const iconSrc = '../icons/Bottun White.png';    // استبدل بالمسار الفعلي للأيقونة
const i18n = useI18n();  // لاستخدام الترجمة
</script>

<style scoped>
/* صورة القسم */
.image-section {
  position: relative;
  overflow: hidden;
  height: 450px;
  background-color: #333;
}

/* الصورة */
.image-section img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* المحتوى الذي يحتوي النص والأيقونة */
.image-content {
  bottom: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5);  /* خلفية مظللة للنص */
  color: white;
  border-top-right-radius: 5px;
}

/* الأيقونة */
.icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-size {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
  margin-right: 10px; /* مسافة بين الأيقونة والنص */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* تأثير عند hover على الأيقونة */
.icon-size:hover {
  transform: translateY(-5px);
}

/* نص See More داخل الأيقونة */
.see-more-text {
  position: absolute;
  color: #000;  /* اللون الأسود */
  font-family: 'Dancing Script', cursive;  /* استخدام خط مزخرف */
  font-size: 1.2rem;  /* تكبير الخط */
  font-weight: 400;
  letter-spacing: 1px;
  text-align: left;  /* جعل النص محاذي لليسار */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  top: 50%;  /* محاذاة النص في منتصف الأيقونة */
  left: 10%;  /* تحريك النص قليلًا لليسار داخل الأيقونة */
  transform: translate(-10%, -50%);
  cursor: pointer;
  transition: color 0.3s ease;
  padding-left: 0;  /* إزالة padding-left */
}

/* تأثير عند hover على الأيقونة */
.see-more-text:hover {
  /* لن يتغير اللون بعد الآن */
  color: #000;
}

/* تأثير النص عند ظهوره */
.image-content {
  animation: slideUp 1s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .image-section {
    height: 400px;
  }

  .see-more-text {
    font-size: 1rem;
  }

  .icon-size {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 768px) {
  .image-section {
    height: 350px;
  }

  .see-more-text {
    font-size: 0.9rem;
  }

  .icon-size {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .image-section {
    height: 300px;
  }

  .see-more-text {
    font-size: 0.8rem;
  }

  .icon-size {
    width: 35px;
    height: 35px;
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
