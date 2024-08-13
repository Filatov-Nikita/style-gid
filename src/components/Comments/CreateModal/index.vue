<template>
  <BaseModal v-model="model">
    <BaseModalCard class="tw-p-6">
      <form @submit.prevent="onSubmit">
        <SelectDesigners class="tw-mb-4" v-model="form.activity_id" />
        <BaseTextarea label="Текст" v-model="form.message" placeholder="Текст отзыва" />
        <BaseButton class="tw-mt-4" :disabled="disabledSubmit">Отправить</BaseButton>
      </form>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import { computed } from 'vue';
  import SelectDesigners from '@/components/Select/Designers.vue';
  import useAuth from '@/composables/useAuth';
  import * as CommentsAPI from '@/http/comments';
  import { useNotification } from "@kyvg/vue3-notification";
  import useForm from '@/composables/useForm';

  const { notify } = useNotification();

  const auth = useAuth();

  const model = defineModel();

  function createFn(form) {
    return CommentsAPI.create(auth.user.value.api_token, {
      user_id: auth.user.value.id,
      ...form,
    });
  }

  function successFn(_res, { reset }) {
    model.value = false;
    reset();
    notify({
      type: 'success',
      text: 'Ваш отзыв успешно принят!',
    });
  }

  const { form, pending, onSubmit } = useForm(
    createFn,
    {
      message: '',
      activity_id: null,
    },
    successFn,
  );

  const disabledSubmit = computed(() => {
    return form.message === '' || form.activity_id === null || pending.value;
  });
</script>
