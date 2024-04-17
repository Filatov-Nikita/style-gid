<template>
  <BaseModal v-model="showed">
    <BaseModalCard class="order-card">
      <button class="order-card__close" @click="showed = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <div class="order-card__body">
        <KeepAlive>
          <AuthForm v-if="step === 'data'" @submit="onAuth" :pending="authPending" />
          <CodeForm v-else-if="step === 'code'" @submit="onCode" :pending="checkCodePending" />
        </KeepAlive>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import AuthForm from './AuthForm.vue';
  import CodeForm from './CodeForm.vue';
  import { ref, watch } from 'vue';
  import * as AuthApi from '@/http/auth';
  import * as User from '@/helpers/user';
  import { useNotification } from "@kyvg/vue3-notification";

  const { notify }  = useNotification();

  const emit = defineEmits(['auth:completed']);

  const showed = defineModel('showed');

  const authPending = ref(false);
  const checkCodePending = ref(false);

  const step = ref('data');

  const authBody = ref({});
  const codeBody = ref({});

  async function onAuth(body) {
    authPending.value = true;

    const { data } = await AuthApi.sendCode({
      personal_data_agree: body.personal_data_agree,
      email_subscribe_agree: body.email_subscribe_agree,
      phone: body.phone,
      g_token: body.g_token,
    });

    if(!data.success) {
      notify({
        type: 'error',
        text: data.error,
      });
    } else {
      authBody.value = body;
      step.value = 'code';
      console.log(data);
    }

    authPending.value = false;
  }

  async function onCode({ code }) {
    checkCodePending.value = true;

    const { data } = await AuthApi.checkCode({
      token: code,
      personal_data_agree: authBody.value.personal_data_agree,
      email_subscribe_agree: authBody.value.email_subscribe_agree,
      phone: authBody.value.phone,
      lastname: authBody.value.lastname,
      firstname: authBody.value.firstname,
    });

    if(!data.success) {
      notify({
        type: 'error',
        text: data.error,
      });
    } else {
      User.save(data.results);
      emit('auth:completed', data.results);
    }

    checkCodePending.value = false;
  }

  watch(showed, (val) => {
    if(!val) {
      authBody.value = {};
      codeBody.value = {};
      step.value = 'data';
    }
  });
</script>

<style scoped lang="scss">
  .order-card {
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

    &__title {

    }
  }
</style>
