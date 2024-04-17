<template>
  <Swiper class="person-slider" v-bind="options" @swiper="onSwiper" @slide-change="onSliderChange">
    <SwiperSlide
      class="person-slide"
      v-for="person in persons"
    >
      <div class="person-slide__wrap">
        <div class="person-slide__photo-wrap">
          <img class="person-slide__photo" :width="person.photo.width" :height="person.photo.height" :src="person.photo.url" loading="lazy" />
          <button class="slider-mini-btn slider-mini-btn--left" :disabled="!canPrev" @click="prev">
            <BaseIcon :color="canPrev ? '#000000' : '#BEBEBE'" class="slider-mini-btn__icon" name="slider-left" />
          </button>
          <button class="slider-mini-btn slider-mini-btn--right" :disabled="!canNext" @click="next">
            <BaseIcon :color="canNext ? '#000000' : '#BEBEBE'" class="slider-mini-btn__icon" name="slider-right" />
          </button>
        </div>
        <div class="person-slide__body">
          <div class="counter-block-mini person-slide__cnt">
            <span>{{ counter.current }}</span><span>/</span><span class="counter-block-mini__total">{{ counter.total }}</span>
          </div>
          <p class="person-slide__name">{{ person.name }}</p>
          <p class="person-slide__label">{{ person.description }}</p>
          <p class="person-slide__text" v-html="person.body"></p>
          <div class="person-slide__actions">
            <div class="counter-block person-slide__cnt">
              <div class="counter-block__wrap">
                <span>{{ counter.current }}</span><span>/</span><span class="counter-block__total">{{ counter.total }}</span>
              </div>
            </div>
            <div class="slider-buttons">
              <button class="slider-btn" :disabled="!canPrev" @click="prev">
                <BaseIcon :color="canPrev ? '#000000' : '#BEBEBE'" class="slider-btn__icon" name="slider-left" />
              </button>
              <button class="slider-btn" :disabled="!canNext" @click="next">
                <BaseIcon :color="canNext ? '#000000' : '#BEBEBE'" class="slider-btn__icon" name="slider-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
  import { EffectFade } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { computed, ref } from 'vue';
  import { numWithZero } from '@/helpers';
  import 'swiper/css';
  import 'swiper/css/effect-fade';

  const props = defineProps({
    persons: {
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
  });

  const swiper = ref(null);

  const currentInd = ref(0);
  const canNext = ref(false);
  const canPrev = ref(false);

  const total = computed(() => {
    return props.persons.length;
  });

  const counter = computed(() => {
    return {
      current: numWithZero(currentInd.value + 1),
      total: numWithZero(total.value),
    }
  });

  function updateActions() {
    if(swiper.value === null) return;
    canNext.value = !swiper.value.isEnd;
    canPrev.value = !swiper.value.isBeginning;
  }

  function onSwiper(swr) {
    swiper.value = swr;
    updateActions();
  }

  function onSliderChange() {
    updateInd();
    updateActions();
  }

  function updateInd() {
    if(swiper.value === null) return;
    currentInd.value = swiper.value.activeIndex;
  }

  function next() {
    if(swiper.value === null) return;
    swiper.value.slideNext();
    updateInd();
    updateActions();
  }

  function prev() {
    if(swiper.value === null) return;
    swiper.value.slidePrev();
    updateInd();
    updateActions();
  }
</script>

<style scoped lang="scss">
  .person-slider {
    height: 780px;

    @include md {
      height: auto;
    }
  }

  .person-slide {
    &__wrap {
      display: flex;
      gap: 40px;
      @apply tw-bg-white;

      @include md {
        flex-wrap: wrap;
        gap: 30px;
      }

      @include sm {
        gap: 6px;
      }
    }

    &__photo-wrap {
      flex-basis: 600px;
      height: 780px;

      @include sm {
        position: relative;
        height: auto;
        flex-basis: 100%;
      }
    }

    &__photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__body {
      position: relative;
      flex-grow: 1;
      flex-basis: 600px;
      padding-top: 87px;

      @include lg {
        padding-top: 0px;
      }

      @include md {
        flex-basis: 100%;
      }
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
      margin-bottom: 40px;
      @apply tw-text-24;

      @include sm {
        margin-bottom: 20px;
        @apply tw-text-20;
      }
    }

    &__text {
      @apply tw-text-20;

      @include sm {
        @apply tw-text-16;
      }
    }

    &__actions {
      position: absolute;
      bottom: 120px;
      left: 0px;
      z-index: 10;

      @include lg {
        bottom: 0px;
      }

      @include md {
        position: static;
        bottom: auto;
        left: auto;
        margin-top: 20px;
      }

      @include sm {
        display: none;
      }
    }

    &__cnt {
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 16px;
      }
    }
  }

  .counter-block {
    line-height: 1.15;
    @apply tw-text-30 tw-font-light;

    @include sm {
      display: none;
    }

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
    display: none;
    line-height: 1.15;
    @apply tw-text-20 tw-font-light;

    @include sm {
      display: block;
    }

    &__total {
      color: #A2A2A2;
    }
  }

  .slider-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .slider-btn {
    width: 34px;
    height: 34px;
    line-height: 34px;
    border-radius: 50%;
    background-color: #EDEDED;
    text-align: center;
    font-size: 0px;
    @apply tw-text-black;

    &__icon {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }

  .slider-mini-btn {
    display: none;
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
</style>
