<template>
  <BaseModal v-model="model">
    <div class="card">
      <button class="close-modal" @click="model = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#ffffff" />
      </button>
      <video class="video" v-if="videoRes" muted loop autoplay controls>
        <source
          v-if="videoRes.webm"
          :src="videoRes.webm"
          type="video/webm"
        />
        <source
          v-if="videoRes.mp4"
          :src="videoRes.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </BaseModal>
</template>

<script setup>
  import { useConfig } from '@/composables/useConfig';
  import { computed } from 'vue';

  const props = defineProps({
    video: {
      default: null,
      type: Object,
    }
  });

  const model = defineModel();

  const config = useConfig();

  const videoRes = computed(() => {
    if(!props.video) return null;
    const newVideo = { ...props.video };
    for(let key in newVideo) {
      newVideo[key] = config.filesBase + newVideo[key];
    }
    return newVideo;
  });
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .video {
    width: auto;
    height: calc(100vh - var(--p, 16px) * 2);
  }
</style>
