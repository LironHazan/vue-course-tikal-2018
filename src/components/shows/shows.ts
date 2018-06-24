import {Component, Vue} from 'vue-property-decorator';
import bContainer from 'bootstrap-vue/es/components/layout/container';
import bCol from 'bootstrap-vue/es/components/layout/col';
import bRow from 'bootstrap-vue/es/components/layout/row';
import {ShowComponent} from './show/show';
import axios, { AxiosResponse } from 'axios';


@Component({
  name: 'shows',
  template: require('./shows.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow,
    'show': ShowComponent
  },
})
export class ShowsComponent extends Vue {
  shows = [];
  searchPlaceholder = 'search';
  constructor () {
    super();
  }
  search (event) {
    const api = `http://api.tvmaze.com/search/shows?q=:${event.target.value}/`;
    axios.get(api)
    .then(items => {
      this.shows = items.data ? items.data.map(item => item.show) : [];
    }, err => console.log(err));
}
}
