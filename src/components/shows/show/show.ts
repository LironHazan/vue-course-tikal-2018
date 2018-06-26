import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <div>
      <h3 class="show-title">{{show.name}}</h3>
      <div><img :src="show.image.medium" v-on:click="onClick" alt=""/></div>
      <div v-html="show.summary"></div>
  </div>`,
  props: {
    show: Object
  }
})
export class ShowComponent extends Vue {

  constructor () {
    super();
  }

  onClick (event) {
    this.$emit('page-opacity', 'someValue');
  }
}
