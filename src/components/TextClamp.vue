<template>
  <div>
    <p ref="textRef" class="text" :class="{ 'collapsed': !expaned }">
      <slot></slot>
    </p>
    <button v-if="showedBtn" class="expand-btn" @click="expaned = !expaned">
      {{ expaned ? 'свернуть' : 'показать полностью' }}
    </button>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  defineProps({
    lines: {
      required: true,
      type: Number,
    }
  });


  const showedBtn = ref(false);
  const textRef = ref(null);
  const expaned = ref(false);

  function isOverflow() {
    return textRef.value && textRef.value.scrollHeight > textRef.value.offsetHeight;
  };

  onMounted(() => {
    setTimeout(() => {
      showedBtn.value = isOverflow();
    }, 10);
  });
</script>

<style scoped>
  .text {
    overflow: hidden;
  }

  .collapsed {
    display: -webkit-box;
    -webkit-line-clamp: v-bind(lines);
    line-clamp: v-bind(lines);
    -webkit-box-orient: vertical;
  }

  .expand-btn {
    margin-top: 5px;
    display: inline-block;
    color: #0A3CF0;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-decoration: underline;
  }

  .expand-btn:hover {
    opacity: 0.7;
  }
</style>
