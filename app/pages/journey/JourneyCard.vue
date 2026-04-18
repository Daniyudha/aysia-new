<script setup>
defineProps({
  data: Object,
  offset: Boolean,
});
</script>

<template>
  <a
    class="card"
    :class="{ offset }"
    :href="`/journey/${data.journeyId}`"
  >
    <div class="card-inner">
      <div class="image-wrapper">
        <img :src="data.image" :alt="data.title">
      </div>

      <div class="card-spacer" />

      <div class="content">
        <h3>{{ data.title }}</h3>
        <p v-if="data.tag">{{ data.tag }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
/* CARD */
.card {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background: #f5f2e9;
  border: 1px solid #c8bda8;
  padding: 36px 24px;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
}

/* OFFSET */
.card.offset {
  transform: translateY(80px);
}

@media (max-width: 767px) {
  .card.offset {
    transform: translateY(0);
  }
}

/* IMAGE WRAPPER */
.image-wrapper {
  width: 100%;
  overflow: hidden; /* PENTING: potong zoom */
}

/* IMAGE */
.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

/* HOVER ZOOM (IMAGE ONLY) */
.card:hover .image-wrapper img {
  transform: scale(1.08);
}

/* SPACER */
.card-spacer {
  flex-grow: 1;
}

/* CONTENT */
.content {
  padding-top: 16px;
}

.content h3 {
  font-family: "Fraunces", serif;
  font-size: 24px;
  font-weight: 550;
  margin-bottom: 6px;
  color: #564614;
}

.content p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #564614;
}

.tag {
  display: inline-block;
  background: #c8bda8;
  color: #564614;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  margin-bottom: 8px;
}
</style>
