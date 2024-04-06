<template>
  <BaseModal v-model="showed">
    <BaseModalCard class="or-success">
      <button class="or-success__close" @click="finish">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="or-success__body">
        <p>
          Ваша запись успешно завершена!
        </p>
        <p class="tw-mb-2">Дата: {{ orderDate }}</p>
        <p class="tw-mb-2">Стилист: {{ designerName }}</p>
        <BaseButton class="or-success__btn" theme="black" @click="finish">
          Завершить
        </BaseButton>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  defineProps({
    orderDate: {
      required: true,
      type: String,
    },
    designerName: {
      required: true,
      type: String,
    }
  });

  const emit = defineEmits([ 'finish' ]);

  const showed = defineModel('showed');

  function finish() {
    showed.value = false;
    emit('finish')
  }
</script>

<style scoped lang="scss">
  .or-success {
    position: relative;
    max-width: 500px;
    padding: 60px 20px 30px;

    @include sm {
      padding: 40px 20px 16px;
    }

    &__close {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
      top: 20px;
    }

    &__body {
      @apply tw-text-center tw-font-medium tw-text-18;
    }

    &__btn {
      margin-top: 32px;
    }
  }
</style>
