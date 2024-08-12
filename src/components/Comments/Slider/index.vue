<template>
  <section class="comment-block" id="comments">
    <div class="wrapper">
      <div class="comment-block__wrap">
        <h2 class="h1 comment-block__title">Отзывы</h2>
        <SwiperNav
          class="comment-block__sw-nav tw-justify-end"
          :canPrev="canPrev"
          :canNext="canNext"
          @prev="prev"
          @next="next"
        />
        <Swiper
          class="comment-block__slider"
          :spaceBetween="20"
          :slidesPerView="2.5"
          @swiper="onSwiper"
          @slideСhange="onSliderChange"
        >
          <SwiperSlide v-for="comment in comments" :key="comment.id">
            <Item :comment="comment" />
          </SwiperSlide>
          <SwiperSlide class="comment-block__last-slide" key="show_all">
            <ShowAllCard @click="showedCommentModal = true" />
          </SwiperSlide>
        </Swiper>
        <BaseButton @click="showedCreateModal = true">Оставить отзыв</BaseButton>
        <CreateModal v-model="showedCreateModal" />
        <ShowOneModal v-model="showedCommentModal" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import Item from '../Item/index.vue';
  import ShowAllCard from './ShowAllCard.vue';
  import CreateModal from '../CreateModal/index.vue';
  import ShowOneModal from '../ShowOneModal/index.vue';
  import SwiperNav from '@/components/SwiperNav/index.vue';
  import useSwiperNav from '@/composables/useSwiperNav';
  import * as CommentsAPI from '@/http/comments';
  import { ref } from 'vue';

  const { data } = await CommentsAPI.all();
  const comments = ref(data.results ?? []);
  const showedCreateModal = ref(false);
  const showedCommentModal = ref(false);

  const swiper = ref(null);

  function onSwiper(swr) {
    swiper.value = swr;
    updateActions();
  }

  const {
    canPrev,
    canNext,
    updateActions,
    onSliderChange,
    prev,
    next,
  } = useSwiperNav(swiper);
</script>

<style scoped lang="scss">
  .comment-block {
    &__wrap {
      padding-bottom: 150px;
    }

    &__title {
      margin-bottom: 2px;
    }

    &__slider {
      margin-bottom: 50px;
    }

    &__last-slide {
      height: auto;
    }

    &__sw-nav {
      margin-bottom: 25px;
    }
  }
</style>
