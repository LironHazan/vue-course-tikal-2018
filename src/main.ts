import Vue from 'vue';
import './sass/main.scss';
import {ShowsComponent} from './components/shows';

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  components: {
      'shows': ShowsComponent
  }
});
