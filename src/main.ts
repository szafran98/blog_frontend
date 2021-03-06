import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import VueTippy from 'vue-tippy';
/*import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);
hljs.initHighlightingOnLoad();*/

const app = createApp(App);
//app.use(hljs.vuePlugin);
app.use(store, key);
app.use(router);
app.use(VueTippy, {
  defaultProps: {
    placement: 'bottom',
  },
});
app.mount('#app');
//app.use(VueCookies)

export { app };
