<template>
  <button class="show-all-card">
    <span>Посмотреть все отзывы</span>
  </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .show-all-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #494848;
    border-radius: 20px;
    transition: opacity 100ms;
    @apply tw-uppercase tw-underline tw-font-noto tw-font-medium tw-text-24 tw-text-white;

    &:hover {
      opacity: 0.9;
    }
  }
</style>
