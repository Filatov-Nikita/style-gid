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
  import useDataDesigners from '@/composables/useDataDesigners';

  const props = defineProps({
    size: {
      default: 'md',
      type: String,
    }
  });

  const { data } = useDataDesigners();

  const designer = defineModel({
    default: null,
  });

  const designers = computed(() => {
    if(!data.results) return [];
    return data.results.map(designer => ({ value: designer.id, label: designer.title }));
  });
</script>
