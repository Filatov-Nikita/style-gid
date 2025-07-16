<template>
  <Swiper class="person-slider" v-bind="options" @swiper="onSwiper" @slide-change="onSliderChange">
    <SwiperSlide
      class="person-slide"
      v-for="designer in designers"
    >
      <div class="person-slide__wrap">
        <div class="person-slide__photo-wrap">
          <BaseImage
            class="person-slide__photo"
            :width="designer.options.photo.width"
            :height="designer.options.photo.height"
            :src="designer.options.photo.url"
            loading="lazy"
          />
          <template v-if="!grid.md">
            <button class="slider-mini-btn slider-mini-btn--left" :disabled="!canPrev" @click="prev">
              <BaseIcon :color="canPrev ? '#000000' : '#BEBEBE'" class="slider-mini-btn__icon" name="slider-left" />
            </button>
            <button class="slider-mini-btn slider-mini-btn--right" :disabled="!canNext" @click="next">
              <BaseIcon :color="canNext ? '#000000' : '#BEBEBE'" class="slider-mini-btn__icon" name="slider-right" />
            </button>
          </template>
        </div>
        <div class="person-slide__body">
          <div v-if="!grid.md" class="counter-block-mini person-slide__cnt">
            <span>{{ counter.current }}</span><span>/</span><span class="counter-block-mini__total">{{ counter.total }}</span>
          </div>
          <p class="person-slide__name">{{ designer.title }}</p>
          <p class="person-slide__label">{{ designer.subtitle }}</p>
          <p class="person-slide__text" v-html="designer.preview_text"></p>
          <div class="person-slide__video video-block" v-if="designer.options.video">
            <p class="video-block__title">Видеовизитка</p>
            <BaseButton @click="showedVideo = designer.options.video">Смотреть</BaseButton>
          </div>
          <div v-if="grid.md" class="person-slide__actions">
            <div class="counter-block person-slide__cnt">
              <div class="counter-block__wrap">
                <span>{{ counter.current }}</span><span>/</span><span class="counter-block__total">{{ counter.total }}</span>
              </div>
            </div>
            <SwiperNav
              :canPrev="canPrev"
              :canNext="canNext"
              @prev="prev"
              @next="next"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <PersonVideoModal :modelValue="showedVideo !== null" @update:modelValue="showedVideo = null" :video="showedVideo" />
</template>

<script setup>
  import { EffectFade } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { computed, ref } from 'vue';
  import { numWithZero } from '@/helpers';
  import SwiperNav from '@/components/SwiperNav/index.vue';
  import useSwiperNav from '@/composables/useSwiperNav';
  import PersonVideoModal from './PersonVideoModal.vue';
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import useAppGrid from '@/composables/useAppGrid';

  const props = defineProps({
    designers: {
      required: true,
      type: Array,
    }
  });

  const options = ref({
    'spaceBetween': 30,
    'slidesPerView': 1,
    'modules': [ EffectFade ],
    'effect': 'fade',
    'autoHeight': true,
    'allowTouchMove': true,
    'autoHeight': true,
  });

  const grid = useAppGrid();

  const swiper = ref(null);

  const {
    currentInd,
    canPrev,
    canNext,
    updateActions,
    onSliderChange,
    prev,
    next,
  } = useSwiperNav(swiper);

  const showedVideo = ref(null);

  const total = computed(() => {
    return props.designers.length;
  });

  const counter = computed(() => {
    return {
      current: numWithZero(currentInd.value + 1),
      total: numWithZero(total.value),
    }
  });

  function onSwiper(swr) {
    swiper.value = swr;
    updateActions();
  }
</script>

<style scoped lang="scss">
  .person-slider {}

  .person-slide {
    &__wrap {
      --gap-x: 40px;
      --gap-y: 24px;
      --col1: 40%;
      --col2: 60%;
      display: flex;
      flex-wrap: wrap;
      column-gap: var(--gap-x);
      row-gap: var(--gap-y);
      @apply tw-bg-white;

      @include lg {
        --col1: 50%;
        --col2: 50%;
      }

      @include md {
        --col1: 100%;
        --col2: 100%;
        --gap-x: 0px;
      }

      @include sm {
        --gap-y: 8px;
      }
    }

    &__photo-wrap {
      position: relative;
      width: calc(var(--col1) - (var(--gap-x) / 2));
    }

    &__photo {
      width: 100%;

      @include md {
        max-width: 600px;
      }
    }

    &__body {
      width: calc(var(--col2) - (var(--gap-x) / 2));
      position: relative;
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-size: 38px;
      line-height: 1.35;
      margin-bottom: 12px;
      @apply tw-font-bold;

      @include sm {
        font-size: 26px;
        margin-bottom: 10px;
      }
    }

    &__label {
      line-height: 1.35;
      margin-bottom: 30px;
      @apply tw-text-24;

      @include sm {
        margin-bottom: 20px;
        @apply tw-text-20;
      }
    }

    &__text {
      flex-grow: 1;
      max-width: 900px;
      margin-bottom: 30px;
      @apply tw-text-20;

      @include sm {
        @apply tw-text-16;
      }
    }

    &__cnt {
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 16px;
      }
    }

    &__video {
      margin-bottom: 30px;

      @include lg {
        margin-bottom: 40px;
      }

      @include sm {
        margin-bottom: 0px;
      }
    }
  }

  .counter-block {
    line-height: 1.15;
    @apply tw-text-30 tw-font-light;

    &__wrap {
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 8px;
      }
    }

    &__total {
      color: #A2A2A2;
    }
  }

  .counter-block-mini {
    line-height: 1.15;
    @apply tw-text-20 tw-font-light;

    @include sm {
      display: block;
    }

    &__total {
      color: #A2A2A2;
    }
  }

  .slider-mini-btn {
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    background-color: #EDEDED;
    text-align: center;
    font-size: 0px;
    @apply tw-text-black;

    @include sm {
      display: block;
    }

    &--left {
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
    }

    &--right {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
    }

    &__icon {
      display: inline-block;
      width: 14px;
      height: 14px;
    }
  }

  .video-block {
    &__title {
      line-height: 1.375;
      margin-bottom: 16px;
      @apply tw-text-24;

      @include sm {
        @apply tw-text-20;
      }
    }
  }
</style>
