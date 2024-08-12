import { provide, inject } from 'vue';

const exposedSymbol = Symbol();

export async function init(data) {
  const exposed = {
    data,
  };

  provide(exposedSymbol, exposed);

  return exposed;
};

export default function() {
  const exposed = inject(exposedSymbol);
  if(exposed === null) throw new Error('exposed не найден');
  return exposed;
};
