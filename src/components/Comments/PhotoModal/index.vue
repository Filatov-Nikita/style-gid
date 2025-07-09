<template>
  <BaseModal v-model="model">
    <BaseModalCard class="card">
      <button class="close-modal" @click="model = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="slider">
        <div v-if="grid.md" class="nav-btn" :class="{ 'nav-btn--disabled': !canPrev }" @click="prev">
          <SwiperBtn dir="left" :disabled="!canPrev" />
        </div>
        <Swiper class="swr" :initialSlide="activePhoto" :spaceBetween="20" @swiper="onSwiper" @slideChange="onSliderChange">
          <SwiperSlide
            class="slide"
            v-for="photo in urls"
          >
            <img class="img" :src="photo" />
          </SwiperSlide>
        </Swiper>
        <div v-if="grid.md" class="nav-btn" :class="{ 'nav-btn--disabled': !canNext }" @click="next">
          <SwiperBtn dir="right" :disabled="!canNext" />
        </div>
      </div>
      <div v-if="!grid.md" class="actions-mobile">
        <SwiperBtn class="actions-mobile__action" dir="left" :disabled="!canPrev" @click="prev" />
        <SwiperBtn class="actions-mobile__action" dir="right" :disabled="!canNext" @click="next"/>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import SwiperBtn from '@/components/SwiperNav/Btn.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { ref, computed } from 'vue';
  import useSwiperNav from '@/composables/useSwiperNav';
  import useAppGrid from '@/composables/useAppGrid';

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
  const grid = useAppGrid();

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
    --modal-py: 16px;
    --pt: 60px;
    --pb: 30px;
    --px: 20px;
    position: relative;
    padding: var(--pt) var(--px) var(--pb);
    max-width: 1200px;

    @include md {
      --px: 16px;
    }

    @include sm {
      --pb: 70px;
    }
  }

  .img {
    max-width: 100%;
    max-height: calc(100vh - var(--modal-py) * 2 - var(--pt) - var(--pb));
  }

  .slider {
    display: flex;
    gap: 20px;
  }

  .swr {
    flex-grow: 1;

    @include sm {
      width: 100%;
    }
  }

  .slide {
    display: flex;
    justify-content: center;
  }
</style>
