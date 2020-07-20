<template>
    <div>
        <div v-show="component_active" class="shadow-inner">
            <div class="p-6">
               Variables forms
                <!--                <a href="http://idflood.github.io/ThreeNodes.js/index_optimized.html#">Link1</a><br/>-->
                <!--                <a href="http://idflood.github.io/ThreeNodes.js/index_optimized.html#">Link2</a>-->
            </div>
        </div>
    </div>
</template>

<script>
  import { ContextMenu } from './contextmenu'

  export default {
    props: ['active'],
    data () {
      return {
        component_active: false,
      }
    },
    created () {
      this.component_active = (this.active === 'true')
    },
    mounted () {
      VueEvent.on('navbaritem_clicked', (item) => {
        if (item.name == 'variables') {
          this.component_active = true
        } else {
          this.component_active = false
        }
        if (this.component_active) {
          VueEvent.fire('hide_sidebar');
        }
      })
    }
  }
</script>

<style scoped>

</style>