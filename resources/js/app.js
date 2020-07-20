require('./bootstrap')

import fire from './editor'

window.VueEvent = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data) {
    this.vue.$emit(event, data)
  }

  on(event, callback) {
    this.vue.$on(event, callback)
  }
}


require('./components/editor')


const app = new Vue({
  el: '#app',
});

/**
 * Fire up the editor and run it.
 */
// fire()