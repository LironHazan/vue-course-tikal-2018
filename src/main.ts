import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import './sass/main.scss';
import {conf} from './conf';

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  data: {
    instance: 'Using The Vue Instance',
    api_key: conf.api_key,
    searchPlaceholder: 'Hit The F***ing Metal Band Dude!',
    fetching: false,
    loading: '666 Fetching your bands... 666',
    bands: [],
    bandName: '',
    wasNotFound: 'was not found 666'
  },
  computed: {
    notFound: function() {
      return `${this.bandName} ${this.wasNotFound}`;
    }
  },
  methods: {
    search: function (event) {
      this.bandName = event.target.value;
      this.fetching = true;
      const api = `http://em.wemakesites.net/search/band_name/${event.target.value}?api_key=${this.api_key}`;
      axios.get(api)
        .then(metalbands => {
          this.fetching = false;
          console.log(metalbands);
          this.bands = metalbands.data.data.search_results;
        }, err => console.log(err));
    }
  }
});
