<template>
  <section class="order-block" id="order">
    <div class="wrapper">
      <h2 class="h1 order-block__title">
        Запись на услугу
      </h2>
      <div class="order-block__grid">
        <div class="order-block__left">
          <Calendar v-model="orderDate" />
        </div>
        <div class="order-block__right">
          <div class="current-date order-block__curdt">
            <div class="current-date__label">Дата</div>
            <div class="current-date__value">{{ orderDateLabel }}</div>
          </div>
          <BaseSelect
            class="order-block__select"
            v-model="designer"
            label="Стилист"
            emptyLabel="Выберите стилиста"
            :options="designers"
          />
          <BaseButton theme="black" v-if="orderDate !== '' && designer !== null">
            Записаться
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import Calendar from './Calendar.vue';

  const orderDate = ref('');

  const designer = ref(null);

  const orderDateLabel = computed(() => {
    if(!orderDate.value) return 'Выберите дату';
    return new Date(orderDate.value).toLocaleDateString('ru-RU', {
      month: 'long',
      day: '2-digit',
    });
  });

  const designers = [
    {
      label: 'test1',
      value: 'test'
    }
  ];
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
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 84px;

      @include sm {
        gap: 30px;
      }
    }

    &__left {
      flex-basis: 556px;
    }

    &__right {
      flex-basis: 433px;
    }

    &__curdt {
      margin-bottom: 30px;

      @include sm {
        margin-bottom: 20px;
      }
    }

    &__select {
      margin-bottom: 50px;

      @include sm {
        margin-bottom: 30px;
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
