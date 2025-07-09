<template>
  <BaseSelect
    v-model="designer"
    label="Стилист"
    emptyLabel="Выберите стилиста"
    :options="designers"
    :size="size"
  />
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    designers: {
      required: true,
      type: Array,
    },
    size: {
      default: 'md',
      type: String,
    }
  });

  const designer = defineModel({
    default: null,
  });

  const designers = computed(() => {
    return props.designers.map(designer => ({ value: designer.id, label: designer.title }));
  });
</script>
