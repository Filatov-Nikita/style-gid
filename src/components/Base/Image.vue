<template>
  <img :src="url" />
</template>

<script setup>
  import { useConfig } from '@/composables/useConfig';
  import { computed } from 'vue';

  const config = useConfig();

  const props = defineProps({
    src: {
      required: true,
      type: String,
    }
  });

  const url = computed(() => {
    return config.filesBase + props.src;
  });
</script>
