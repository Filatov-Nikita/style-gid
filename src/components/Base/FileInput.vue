<template>
  <div class="file-input">
    <label class="file-input__label" :for="_id">{{ label }}</label>
    <div class="file-input__wrap">
      <div class="file-input__name-wrap" v-if="fileNames !== ''">
        <span class="file-input__name">{{ fileNames }}</span>
        <button class="file-input__clear" @click="clear">
          <BaseIcon name="close" />
        </button>
      </div>
      <div class="file-input__placeholder" v-else-if="placeholder">{{ placeholder }}</div>
      <input ref="input" class="file-input__input" type="file" :multiple="multiple" :accept="accept" @change="onChange" />
    </div>
    <div v-if="caption" class="file-input__caption">{{ caption }}</div>
  </div>
</template>

<script setup>
  import useId from '@/composables/useId';
  import { toRef, ref, computed } from 'vue';
  import { useNotification } from "@kyvg/vue3-notification";

  const props = defineProps({
    name: {
      default: undefined,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    id: {
      default: undefined,
      type: String,
    },
    multiple: {
      default: false,
      type: Boolean,
    },
    caption: {
      default: undefined,
      type: String,
    },
    placeholder: {
      default: undefined,
      type: String,
    },
    accept: {
      default: undefined,
      type: String,
    },
    maxFiles: {
      default: undefined,
      type: Number,
    },
    maxSize: {
      default: undefined,
      type: Number,
    },
  });

  const { notify } = useNotification();

  const emit = defineEmits([ 'change' ]);

  const { id: _id } = useId(toRef(props, 'id'));

  const files = ref([]);

  const input = ref(null);

  function onChange(e) {
    const _files = [ ...e.target.files ];
    if(_files.length === 0 || !validFiles(_files)) return;
    files.value = _files;
    emit(
      'change',
      props.multiple
        ? files.value
        : files.value[0]
    );
  }

  const fileNames = computed(() => files.value.map(f => f.name).join(', '));

  function clear() {
    files.value = [];
    input.value.value = '';
    emit('change', props.multiple ? [] : null);
  }

  function validFiles(files) {
    let valid = true;
    if(props.maxFiles && files.length > props.maxFiles) {
      valid = false;
      notify({
        type: 'error',
        text: 'Максимум 4 файла',
      });
    }

    if(props.maxSize) {
      files.map(f => {
        if(f.size > props.maxSize) {
          valid = false;
          notify({
            type: 'error',
            text: `${f.name} не должен превышать ${props.maxSize / (1000 * 1000)}мб`,
          });
        }
      });
    }


    return valid;
  }
</script>

<style scoped lang="scss">
  .file-input {
    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 1.2;
      margin-bottom: 8px;
      @apply tw-text-black tw-font-medium;
    }

    &__wrap {
      position: relative;
      cursor: pointer;
      border: 1px solid #C3C3C3;
      height: 50px;
      padding: 8px 16px;
      @apply tw-text-16 tw-text-black;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      &:hover {
        @apply tw-border-black;
      }

      &:focus {
        @apply tw-border-black;
      }
    }

    &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 10;
    }

    &__placeholder {
      color: #959595;
    }

    &__caption {
      margin-top: 4px;
      font-size: 14px;
      line-height: 16px;
    }

    &__clear {
      position: relative;
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      padding: 4px;
      z-index: 20;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__name-wrap {
      width: 100%;
      display: flex;
      align-items: center;
    }

    &__name {
      flex-grow: 1;
    }
  }
</style>
