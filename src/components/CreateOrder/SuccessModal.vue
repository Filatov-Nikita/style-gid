<template>
  <BaseModal v-model="showed">
    <BaseModalCard class="or-success">
      <button class="or-success__close" @click="finish">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="or-success__body">
        <p class="tw-mb-6 tw-text-20 tw-font-semibold">
          Ваша запись успешно завершена!
        </p>
        <p class="tw-mb-4">{{ date }} в {{ time }}</p>
        <p class="tw-mb-4">Стилист: {{ designerName }}</p>
        <p>Ожидайте подтверждение по телефону.</p>
        <BaseButton class="or-success__btn" theme="black" @click="finish">
          Завершить
        </BaseButton>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { dateToLocale } from '@/helpers';

  const props = defineProps({
    event: {
      required: true,
      type: [Object, null],
    },
    designer: {
      required: true,
      type: [Object, null],
    }
  });

  const emit = defineEmits([ 'finish' ]);

  const showed = defineModel('showed');

  const designerName = computed(() => props.designer?.title ?? '-')

  const time = computed(() => {
    if(!props.event) return '-';
    return props.event.start_date.substring(11, 16) ?? '-';
  });

  const date = computed(() => {
    if(!props.event) return '-';
    return dateToLocale(new Date(props.event.start_date.substring(0, 10)));
  });

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
      padding: 50px 20px 16px;
    }

    &__close {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
      top: 20px;
    }

    &__body {
      @apply tw-text-center tw-text-16;
    }

    &__btn {
      width: 100%;
      margin-top: 32px;
    }
  }
</style>
