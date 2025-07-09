<template>
  <BaseModal v-model="model">
    <BaseModalCard class="card">
      <button class="close-modal" @click="model = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="comment" :style="{ '--h': screenHeight  }">
        <div v-if="grid.md" class="nav-btn" :class="{ 'nav-btn--disabled': nextId === null }" @click="load(nextId)">
          <SwiperBtn dir="left" :disabled="nextId === null" />
        </div>
        <div class="loader" v-if="loading">
          <BaseSpinner />
        </div>
        <Item class="comment__item" v-else-if="data" :comment="data" fullText />
        <div v-if="grid.md" class="nav-btn" :class="{ 'nav-btn--disabled': prevId === null }" @click="load(prevId)">
          <SwiperBtn dir="right" :disabled="prevId === null" />
        </div>
        <div v-if="!grid.md" class="actions-mobile">
          <SwiperBtn class="actions-mobile__action" dir="left" :disabled="nextId === null" @click="load(nextId)" />
          <SwiperBtn class="actions-mobile__action" dir="right" :disabled="prevId === null" @click="load(prevId)"/>
        </div>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import { watch, ref, computed } from 'vue';
  import useComment from './model/useComment';
  import Item from '../Item/index.vue';
  import SwiperBtn from '@/components/SwiperNav/Btn.vue';
  import { useScreen } from 'vue-screen';
  import useAppGrid from '@/composables/useAppGrid';

  const screen = useScreen({}, 100);
  const screenHeight = computed(() => `${screen.height * 0.8}px`);
  const grid = useAppGrid();

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
      load(_commentId.value);
    }
  });

  watch(_commentId, (id) => {
    load(id);
  });
</script>

<style scoped lang="scss">
  .card {
    --py: 60px;
    --px: 40px;
    --modal-py: 16px;
    position: relative;
    max-width: 1000px;
    padding: var(--py) var(--px);

    @include md {
      --px: 16px;
    }

    @include sm {
      --px: 0px;
      --py: 0px;
    }
  }

  .comment {
    display: flex;
    gap: 24px;
  }

  .comment__item {
    flex-grow: 1;
    overflow-x: hidden;

    @include sm {
      width: 100%;
      padding: 60px 16px 70px;
      border-radius: 10px;
      background: theme('colors.white');
    }
  }

  .comment__item, .loader {
    height: calc(80vh - var(--py) * 2 - var(--modal-py) * 2);
    height: calc(var(--h) - var(--py) * 2 - var(--modal-py) * 2);
  }

  .loader {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
