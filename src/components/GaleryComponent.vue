<template>
  <div class="image-slider">
    <div class="image-container">
      <img :src="currentImage" alt="Image Slider" />
    </div>
    <div class="controls">
      <button @click="prevImage" :disabled="isFirstImage">← Wstecz</button>
      <button @click="nextImage" :disabled="isLastImage">Dalej →</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageSlider',
  data () {
    return {
      images: [ // Ścieżki do zdjęć
        require('@/assets/muraj/image1.jpg'),
        require('@/assets/muraj/image2.jpg'),
        require('@/assets/muraj/image3.jpg'),
        require('@/assets/muraj/image4.jpg')
      ],
      currentIndex: 0 // Indeks aktualnego zdjęcia
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    },
    isFirstImage () {
      return this.currentIndex === 0
    },
    isLastImage () {
      return this.currentIndex === this.images.length - 1
    }
  },
  methods: {
    prevImage () {
      if (!this.isFirstImage) {
        this.currentIndex--
      }
    },
    nextImage () {
      if (!this.isLastImage) {
        this.currentIndex++
      }
    }
  }
}
</script>
<style scoped>
.image-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}

.image-container {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  gap: 10px;
}

.controls button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #304736;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.controls button:hover {
  background-color: #f39c12;
}

.controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
