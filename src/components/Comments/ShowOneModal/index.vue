<template>
  <BaseModal v-model="model">
    <BaseModalCard class="card">
      <button class="close-modal" @click="model = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="comment">
        <div class="nav-btn" :class="{ 'nav-btn--disabled': nextId === null }" @click="load(nextId)">
          <SwiperBtn dir="left" :disabled="nextId === null" />
        </div>
        <div class="loader" v-if="loading">
          <Spinner />
        </div>
        <Item class="comment__item" v-else-if="data" :comment="data" fullText />
        <div class="nav-btn" :class="{ 'nav-btn--disabled': prevId === null }" @click="load(prevId)">
          <SwiperBtn dir="right" :disabled="prevId === null" />
        </div>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import { watch, ref } from 'vue';
  import useComment from './model/useComment';
  import Item from '../Item/index.vue';
  import SwiperBtn from '@/components/SwiperNav/Btn.vue';
  import Spinner from '@/components/Spinner.vue';

  const props = defineProps({
    commentId: {
      default: undefined,
      type: Number,
    }
  });

  const model = defineModel();

  const _commentId = ref(props.commentId);

  const { data, loading, prevId, nextId, load } = useComment();

  watch(model, (val) => {
    if(val && data.value === null) {
      console.log(_commentId.value);
      load(_commentId.value);
    }
  });

  watch(_commentId, (id) => {
    load(id);
  });
</script>

<style scoped lang="scss">
  .comment {
    display: flex;
    gap: 24px;

    &__item {
      flex-grow: 1;
      height: 390px;
      overflow-x: hidden;
    }
  }

  .card {
    position: relative;
    max-width: 740px;
    padding: 60px 40px;
  }

  .nav-btn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    &:hover {
      opacity: 0.7;
    }

    &--disabled {
      pointer-events: none;
    }
  }

  .loader {
    flex-grow: 1;
    height: 390px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
