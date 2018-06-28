import Vue from 'vue';
import './sass/main.scss';
import {ShowsComponent} from './components/shows';
import {createRouter} from './router';
import {PlayerComponent} from './components/player/player';

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
      'shows': ShowsComponent,
      'play': PlayerComponent
  }
});
