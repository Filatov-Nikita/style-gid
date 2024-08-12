import useEvent from './useEvent';
import * as User from '@/helpers/user';
import { ref, provide, inject, watch } from 'vue';

const exposedSymbol = Symbol();

export function init() {
  const user = ref(User.get());
  const isAuth = ref(user.value !== null);
  const showedModal = ref(false);
  const successEvent = useEvent();

  function logout() {
    user.value = null;
    isAuth.value = false;
    User.clean();
  }

  function onComplete(user) {
    successEvent.trigger(user);
  }

  watch(showedModal, (val) => {
    if(!val) successEvent.removeAll();
  });

  const exposed = {
    showedModal,
    isAuth,
    user,
    successEvent,
    logout,
    onComplete,
  };

  provide(exposedSymbol, exposed);

  return exposed;
};

export default function() {
  const exposed = inject(exposedSymbol);
  if(exposed === null) throw new Error('exposed не найден');
  return exposed;
};
