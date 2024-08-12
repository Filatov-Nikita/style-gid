<template>
  <BaseModal v-model="model">
    <BaseModalCard class="tw-p-6">
      <form>
        <BaseTextarea label="Текст" v-model="form.message" placeholder="Текст отзыва" />
        <BaseButton class="tw-mt-4">Отправить</BaseButton>
      </form>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import { reactive } from 'vue';

  const model = defineModel();

  const form = reactive({
    message: '',
    activity_id: null,
  });
</script>
