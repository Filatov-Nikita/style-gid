<template>
  <article class="comment-item">
    <h3 class="comment-item__name">{{ comment.user.first_name }} {{ comment.user.last_name }}</h3>
    <div class="comment-item__designer">
      <span class="comment-item__des-pos">Стилист</span>
      <span class="comment-item__des-name">{{ comment.activity.title }}</span>
    </div>
    <p class="comment-item__text">{{ comment.message }}</p>
  </article>
</template>

<script setup>
  defineProps({
    comment: {
      required: true,
      type: Object,
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
      line-height: 1.3;
      margin-bottom: 40px;
      @apply tw-text-16;
    }
  }
</style>
