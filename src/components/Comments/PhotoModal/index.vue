<template>
  <BaseModal v-model="model">
    <BaseModalCard class="card">
      <button class="close-modal" @click="model = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="slider">
        <div class="nav-btn" :class="{ 'nav-btn--disabled': !canPrev }" @click="prev">
          <SwiperBtn dir="left" :disabled="!canPrev" />
        </div>
        <Swiper class="swr" :initialSlide="activePhoto" :spaceBetween="20" @swiper="onSwiper" @slideChange="onSliderChange">
          <SwiperSlide
            v-for="photo in urls"
          >
            <img class="img" :src="photo" />
          </SwiperSlide>
        </Swiper>
        <div class="nav-btn" :class="{ 'nav-btn--disabled': !canNext }" @click="next">
          <SwiperBtn dir="right" :disabled="!canNext" />
        </div>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import SwiperBtn from '@/components/SwiperNav/Btn.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { ref, computed } from 'vue';
  import useSwiperNav from '@/composables/useSwiperNav';

  const props = defineProps({
    photos: {
      required: true,
      type: Array,
    },
    activePhoto: {
      required: true,
      type: Number,
    },
  });

  const model = defineModel();
  const swiper = ref(null);

  const base = (import.meta.env.VITE_API_BASE ?? '').replace('/api', '');

  const urls = computed(() => props.photos.map(photo => base + photo));

  const {
    canPrev,
    canNext,
    updateInd,
    updateActions,
    onSliderChange,
    prev,
    next,
  } = useSwiperNav(swiper);

  function onSwiper(swr) {
    swiper.value = swr;
    updateActions();
    updateInd();
  };
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    max-width: 720px;
    padding: 60px 20px 30px;
  }

  .img {
    object-fit: contain;
    width: 100%;
    height: calc(100vh - 250px);
  }

  .slider {
    display: flex;
    gap: 20px;
  }

  .swr {
    flex-grow: 1;
  }
</style>
