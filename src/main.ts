import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import './sass/main.scss';
import {conf} from './conf';

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  data: {
    instance: 'Using The Vue Instance',
    searchPlaceholder: 'type anything but Friends!',
    fetching: false,
    loading: 'Fetching shows...',
    shows: [],
    bandName: '',
    wasNotFound: 'was not found'
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
      const api = `http://api.tvmaze.com/search/shows?q=:${event.target.value}/`;
      axios.get(api)
        .then(items => {
          this.fetching = false;
          console.log(items.data.map(item => item.show));
          this.shows = items.data ? items.data.map(item => item.show) : [];
        }, err => console.log(err));
    }
  }
});
