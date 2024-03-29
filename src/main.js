import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/app.scss';
import BaseButton from './components/Base/Button.vue';
import BaseIcon from './components/Base/Icon.vue';
import BaseSelect from './components/Base/Select.vue';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseIcon', BaseIcon);
app.component('BaseSelect', BaseSelect);

app.mount('#app');
