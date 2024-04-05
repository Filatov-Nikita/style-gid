<template>
  <BaseModal v-model="showed">
    <BaseModalCard class="order-card">
      <button class="order-card__close" @click="showed = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="order-card__body">
        <AuthForm />
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import AuthForm from './AuthForm.vue';

  const showed = defineModel('showed');
</script>

<style scoped lang="scss">
  .order-card {
    position: relative;
    max-width: 500px;
    padding: 60px 20px 30px;

    &__close {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
      top: 20px;
    }

    &__title {

    }
  }
</style>
