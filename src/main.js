import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/app.scss';
import BaseButton from './components/Base/Button.vue';
import BaseIcon from './components/Base/Icon.vue';
import BaseSelect from './components/Base/Select.vue';
import BaseModal from './components/Base/Modal/index.vue';
import BaseModalCard from './components/Base/Modal/Card.vue';
import BaseInput from './components/Base/Input.vue';
import Notifications from '@kyvg/vue3-notification';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(Notifications);

app.component('BaseButton', BaseButton);
app.component('BaseIcon', BaseIcon);
app.component('BaseSelect', BaseSelect);
app.component('BaseModal', BaseModal);
app.component('BaseModalCard', BaseModalCard);
app.component('BaseInput', BaseInput);

app.mount('#app');
