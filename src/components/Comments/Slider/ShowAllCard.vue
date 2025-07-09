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
    font-size: 18px;
    padding: 20px;
    @apply tw-uppercase tw-underline tw-font-druk tw-font-bold tw-text-white;

    @include sm {
      font-size: 14px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
</style>
