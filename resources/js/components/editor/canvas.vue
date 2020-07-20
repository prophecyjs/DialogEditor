<template>
    <div>
        <div v-show="component_active" class="canvas shadow-inner">
            <div class="p-6">
<!--                <a href="http://idflood.github.io/ThreeNodes.js/index_optimized.html#">Link1</a><br/>-->
<!--                <a href="http://idflood.github.io/ThreeNodes.js/index_optimized.html#">Link2</a>-->
            </div>
        </div>
    </div>
</template>

<script>
  import { ContextMenu } from './contextmenu'

  export default {
    props: [
      'active'
    ],
    data () {
      return {
        contextMenu: null,
        component_active: false,
      }
    },
    created () {
      this.component_active = (this.active === 'true')
    },
    mounted () {
      this.contextMenu = new ContextMenu('.canvas')

      /**
       * Create the contextmenu for the editor.
       */
      this.contextMenu.add('Text', () => { console.log('Text clicked')})
        .add('Node', () => { console.log('Node clicked')})
        .add('Choice', () => { console.log('Choice clicked')})
        .add('Set', () => { console.log('Set clicked')})
        .add('Branch', () => { console.log('Branch clicked')})
        .enable()

      VueEvent.on('navbaritem_clicked', (item) => {
        if (item.name == 'canvas') {
          this.component_active = true
        } else {
          this.component_active = false
        }

        if (this.component_active) {
          VueEvent.fire('show_sidebar');
        }

      })
    }
  }
</script>

<style scoped>

</style>