<template>
  <div class="full-image-container">
    <img
      :src="imagePath"
      :alt="alt"
      class="full-image animated-img"
      loading="lazy"
    />
    <div class="content-overlay">
      <!-- أي محتوى فوق الصورة -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  imagePath: {
    type: String,
    default: "/Images/Untitled-1.jpg",
  },
  alt: {
    type: String,
    default: "Image",
  },
});
</script>

<style scoped>
.full-image-container {
  position: relative;
  width: 100%;
  height: 100%; /* يأخذ كامل ارتفاع الحاوية الأم */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* الصورة تغطي كامل الحاوية وتتكيف مع الشاشات */
.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* يغطي الحاوية بالكامل مع الحفاظ على النسب */
  transform: translateY(20px) scale(0.95);
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.full-image-container:hover .full-image {
  transform: scale(1.05) translateY(0);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
}

/* محتوى فوق الصورة */
.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 1rem;
  /* خلفية نصف شفافة اختيارية */
  /* background: rgba(0,0,0,0.3); */
}

/* Keyframes للظهور */
@keyframes fadeInUp {
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* ريسبونسيف إضافي لضمان تناسق المحتوى */
@media (max-width: 768px) {
  .content-overlay {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}
</style>
