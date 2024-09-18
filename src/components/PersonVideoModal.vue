<template>
  <BaseModal v-model="model">
    <div class="card">
      <button class="close-modal" @click="model = false">
        <BaseIcon class="tw-w-full tw-h-full" name="close" color="#151515" />
      </button>
      <video class="video" v-if="video" muted loop autoplay controls>
        <source
          v-if="video.webm"
          :src="video.webm"
          type="video/webm"
        />
        <source
          v-if="video.mp4"
          :src="video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  defineProps({
    video: {
      default: null,
      type: Object,
    }
  });

  const model = defineModel();
</script>

<style scoped lang="scss">
  .video {
    width: 100%;
    height: calc(100vh - 160px);
    object-fit: contain;
    object-position: center;

    @include sm {
      height: calc(100vh - 120px);
    }
  }
</style>
