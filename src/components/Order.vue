<template>
  <section class="order-block" id="order">
    <div class="wrapper">
      <h2 class="h1 order-block__title">
        Запись на&nbsp;услугу
      </h2>
      <div class="order-block__grid">
        <div class="order-block__left">
          <Calendar v-model="orderDate" :disabledDates="disabledDates" />
        </div>
        <div class="order-block__right">
          <BaseSelect
            class="order-block__select"
            v-model="designer"
            label="Стилист"
            emptyLabel="Выберите стилиста"
            :options="designers"
          />
          <div class="current-date order-block__curdt">
            <div class="current-date__label">Дата</div>
            <div class="current-date__value">{{ orderDateLabel }}</div>
          </div>
          <BaseSelect
            class="order-block__select"
            v-model="orderTime"
            label="Время"
            emptyLabel="Выберите время"
            :options="timeSlots"
            :disabled="!designer || !orderDate"
          />
          <BaseButton theme="black" :disabled="orderDate === '' || designer === null || orderPending" @click="tryOrder">
            Записаться
          </BaseButton>
        </div>
      </div>
    </div>
    <SuccessModal v-model:showed="successModal" :event="currentEvent" :designer="currentDesigner" @finish="finish" />
  </section>
</template>

<script setup>
  import { computed, ref, watch } from 'vue';
  import Calendar from './Calendar.vue';
  import SuccessModal from './CreateOrder/SuccessModal.vue';
  import useAuth from '@/composables/useAuth';
  import * as designersAPI from '@/http/designers';
  import * as OrderAPI from '@/http/order';
  import { useNotification } from "@kyvg/vue3-notification";
  import { dateToIso, dateToLocale } from '@/helpers';

  const { notify }  = useNotification();

  const auth = useAuth();

  const { data } = await designersAPI.all();

  const orderDate = ref('');

  const orderTime = ref('');

  const designer = ref(null);

  const successModal = ref(false);

  const orderPending = ref(false);

  const orderDateLabel = computed(() => {
    if(!orderDate.value) return 'Выберите дату';
    return dateToLocale(new Date(orderDate.value));
  });

  const designers = computed(() => {
    if(!data.results) return [];
    return data.results.map(designer => ({ value: designer.id, label: designer.title }));
  });

  const currentDesigner = computed(() => {
    if(!designer.value) return null;
    return data.results.find(d => d.id === designer.value) ?? null;
  });

  const availableEvents = computed(() => {
    if(!currentDesigner.value) return [];
    return currentDesigner.value.events.filter(event => {
      return event.start_date.substring(0, 10) === orderDate.value;
    });
  });

  const currentEvent = computed(() => {
    if(!orderTime.value) return null;
    return availableEvents.value.find(event => event.id === orderTime.value) ?? null;
  });

  const timeSlots = computed(() => {
    return availableEvents.value.map(event => ({
      value: event.id,
      label: event.start_date.substring(11, 16),
    }));
  });

  const bookedEvents = computed(() => {
    if(!currentDesigner.value) return [];
    return currentDesigner.value.events.filter(event => {
      return event.users_count >= event.capacity;
    });
  });

  const disabledDates = computed(() => {
    if(!data.results || !currentDesigner.value) return [ { start: null, end: null } ];

    return [
      {
        start: new Date(),
        repeat: {
          every: 'day',
          on: (_opts) => {
            return currentDesigner.value.events
              .every(event => {
                const dt1 = event.start_date.split(' ')[0];
                const dt2 = dateToIso(_opts.date);
                return dt1 !== dt2;
              });
          }
        },
      },
      // ...bookedEvents.value.map(event => new Date(event.start_date)),
    ]
  });

  async function createOrder(user) {
    auth.showedModal.value = false;
    orderPending.value = true;

    try {
      const res = await OrderAPI.create(user.api_token, {
        event_id: currentEvent.value?.id,
        user_id: user.id,
      });

      if(!data.success) {
        notify({
          type: 'error',
          text: data.error,
        });
      } else {
        console.log(res);
        successModal.value = true;
      }
    } catch (e) {
      if(e.response.status === 401) {
        auth.logout();
      }

      if(e.response && e.response.data && e.response.data.error) {
        notify({
          type: 'error',
          text: e.response.data.error,
        });
      }
    } finally {
      orderPending.value = false;
    }
  }

  function finish() {
    orderDate.value = '';
    designer.value = null;
  }

  async function tryOrder() {
    if(auth.isAuth.value) {
      await createOrder(auth.user.value);
    } else {
      auth.showedModal.value = true;
      auth.successEvent.on(createOrder, { once: true });
    }
  }

  watch(designer, () => {
    orderDate.value = '';
  });

  watch(orderDate, () => {
    orderTime.value = '';
  });
</script>

<style scoped lang="scss">
  .order-block {
    padding-top: 80px;
    padding-bottom: 150px;

    @include sm {
      padding-top: 35px;
      padding-bottom: 70px;
    }

    &__title {
      margin-bottom: 48px;

      @include md {
        margin-bottom: 30px;
      }

      @include sm {
        margin-bottom: 20px;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 84px;

      @include lg {
        gap: 45px;
      }

      @include sm {
        gap: 30px;
      }
    }

    &__left {
      flex-basis: 556px;

      @include lg {
        flex-basis: 450px;
        flex-grow: 1;
      }

      @include md {
        flex-basis: 100%;
      }
    }

    &__right {
      flex-basis: 433px;

      @include lg {
        flex-basis: 380px;
        flex-grow: 1;
      }

      @include md {
        flex-basis: 100%;
      }

      @include md {
        order: -1;
      }
    }

    &__curdt {
      margin-bottom: 30px;

      @include md {
        margin-bottom: 20px;
      }
    }

    &__select {
      margin-bottom: 50px;

      @include lg {
        margin-bottom: 30px;
      }

      @include sm {
        // margin-bottom: 30px;
      }
    }
  }

  .current-date {
    &__label {
      line-height: 1.35;
      margin-bottom: 10px;
      @apply tw-text-20;

      @include sm {
        margin-bottom: 6px;
        @apply tw-text-16;
      }
    }

    &__value {
      line-height: 1.35;
      @apply tw-text-24 tw-font-semibold;

      @include sm {
        @apply tw-text-20;
      }
    }
  }
</style>
