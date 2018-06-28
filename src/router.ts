import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import {ShowsComponent} from './components/shows/shows';
import {PlayerComponent} from './components/player/player';

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: ShowsComponent,
  },
  {
    path: '/play/:id',
    component: PlayerComponent,
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
