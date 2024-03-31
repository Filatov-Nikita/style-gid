<template>
  <DatePicker
    class="app-calendar"
    borderless
    expanded
    color="red"
    title-position="left"
    :locale="{ id: 'ru', firstDayOfWeek: 2, masks: { weekdays: 'WW', modelValue: 'YYYY-MM-DD' } }"
    :disabled-dates="disabled"
    :min-date="from"
    v-model.string="date"
  />
</template>

<script setup>
  import { ref } from 'vue';
  import { DatePicker } from 'v-calendar';
  import 'v-calendar/style.css';

  const date = defineModel();

  const from = new Date();

  const disabled = ref([{
    repeat: {
      weekdays: [2, 3, 4, 5, 6],
    },
  }]);
</script>

<style lang="scss">
  .app-calendar {
    --vc-font-family: 'montserrat';
    --vc-focus-ring: #FB3F4A;
    --vc-weekday-color: #333333;
    --vc-header-arrow-color: #333333;
    --vc-header-arrow-hover-bg: #EDEDED;
    --vc-day-content-disabled-color: #C1C1C1;
    width: 100%;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    border-radius: 20px;

    .vc-weeks {
      padding: 40px 35px 20px;

      @include sm {
        padding: 20px 12px 15px;
      }
    }

    .vc-header {
      margin-top: 50px;
      padding-left: 35px;
      padding-right: 35px;
      font-size: 24px;

      @include sm {
        font-size: 16px;
        margin-top: 20px;
        padding-left: 12px;
        padding-right: 12px;
      }
    }

    .vc-red {
      --vc-accent-600: #FB3F4A;
    }

    .vc-weekday, .vc-day-content {
      font-size: 24px;
      font-weight: 500;
      line-height: normal;

      @include sm {
        font-size: 16px;
      }
    }

    .vc-day-content {
      width: 59px;
      height: 59px;

      @include sm {
        width: 32px;
        height: 32px;
      }
    }

    .vc-highlight {
      width: 56px;
      height: 56px;

      @include sm {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
