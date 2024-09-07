<template>
  <BaseModal v-model="model">
    <BaseModalCard class="tw-p-6">
      <form @submit.prevent="onSubmit">
        <SelectDesigners class="tw-mb-4" size="sm" v-model="form.activity_id" />
        <BaseTextarea class="tw-mb-4" label="Текст" v-model="form.message" placeholder="Текст отзыва" />
        <BaseFileInput
          multiple
          label="Фото"
          caption="Максимум 4 файла, до 5мб"
          placeholder="Загрузите фото"
          accept="image/jpeg, image/png"
          :maxFiles="4"
          :maxSize="5000000"
          @change="onPhoto"
        />
        <BaseButton class="tw-mt-8" :disabled="disabledSubmit">Отправить</BaseButton>
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
  import { fileToBase64 } from '@/helpers';

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
      photos: [],
    },
    successFn,
  );

  const disabledSubmit = computed(() => {
    return form.message === '' || form.activity_id === null || form.photos.length === 0 || pending.value;
  });

  async function onPhoto(files) {
    const filesBase64 = await Promise.all(files.map(async (f) => {
      return {
        ext: f.name.split('.').pop(),
        mime: f.type,
        data: await fileToBase64(f),
      }
    }));
    form.photos = filesBase64;
  }
</script>
