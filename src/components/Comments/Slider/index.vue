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
          :slidesPerView="2.3"
          @swiper="onSwiper"
          @slideChange="onSliderChange"
        >
          <SwiperSlide class="comment-block__slide" v-for="comment in commentsList" :key="comment.id">
            <Item class="comment-block__item" :comment="comment" />
          </SwiperSlide>
          <SwiperSlide
            v-if="lastComment"
            key="show_all"
          >
            <ShowAllCard class="comment-block__last-slide" @click="showedCommentModal = true" />
          </SwiperSlide>
        </Swiper>
        <BaseButton @click="showCreateCommentAction">Оставить отзыв</BaseButton>
        <CreateModal v-model="showedCreateModal" />
        <ShowOneModal
          v-if="lastComment"
          v-model="showedCommentModal"
          :commentId="lastComment.id"
        />
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
  import useAuth from '@/composables/useAuth';
  import * as CommentsAPI from '@/http/comments';
  import { computed, ref } from 'vue';

  const auth = useAuth();
  const { data } = await CommentsAPI.all();
  const comments = ref(data.results ?? []);
  const showedCreateModal = ref(false);
  const showedCommentModal = ref(false);

  const commentsList = computed(() => {
    if(comments.value.length === 0) return [];
    return [ ...comments.value ].reverse().slice(0, 8);
  });

  const lastComment = computed(() => {
    if(commentsList.value.length === 0) return null;
    return commentsList.value[ commentsList.value.length - 1 ];
  });

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

  function showCreateComment() {
    showedCreateModal.value = true;
  }

  const showCreateCommentAction = auth.addAction(showCreateComment);
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

    &__sw-nav {
      margin-bottom: 25px;
    }

    &__last-slide, &__item {
      min-height: 410px !important;
    }
  }
</style>
