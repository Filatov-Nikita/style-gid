<template>
  <article class="comment-item">
    <h3 class="comment-item__name">{{ comment.user.first_name }} {{ comment.user.last_name }}</h3>
    <div class="comment-item__designer">
      <span class="comment-item__des-pos">Стилист</span>
      <span class="comment-item__des-name">{{ comment.activity.title }}</span>
    </div>
    <div>
      <p class="comment-item__text" v-if="fullText">{{ comment.message }}</p>
      <TextClamp v-else class="comment-item__text" :lines="4">
        {{ comment.message }}
      </TextClamp>
    </div>
    <div class="comment-item__photos">
      <PhotoList v-if="comment.photos" :photos="comment.photos" />
    </div>
  </article>
</template>

<script setup>
  import PhotoList from '../PhotoList/index.vue';
  import TextClamp from '@/components/TextClamp.vue';

  defineProps({
    comment: {
      required: true,
      type: Object,
    },
    fullText: {
      default: false,
      type: Boolean,
    }
  });
</script>

<style scoped lang="scss">
  .comment-item {
    padding: 30px;
    background: #F7F7F7;
    border-radius: 20px;

    &__name {
      line-height: 1.125;
      margin-bottom: 8px;
      @apply tw-text-20 tw-font-semibold;
    }

    &__designer {
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: 1.3;
      margin-bottom: 18px;
      @apply tw-text-16;
    }

    &__des-pos {
      flex-shrink: 0;
      color: #858585;
    }

    &__text {
      min-height: 105px;
      line-height: 1.3;
      @apply tw-text-16;
    }

    &__photos {
      margin-top: 40px;
    }
  }
</style>
