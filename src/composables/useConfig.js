import { inject } from 'vue';

export function init() {
  const config = {
    filesBase: import.meta.env.DEV ? import.meta.env.VITE_FILES_BASE ?? '' : '',
  };
  return config;
}

export function useConfig() {
  const config = inject(configKey);
  if(!config) throw new Error('Конфиг не определен');
  return config;
}

export const configKey = Symbol();
