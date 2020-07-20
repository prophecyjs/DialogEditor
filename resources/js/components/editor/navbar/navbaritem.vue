<template>
    <a href="javascript:void(0)"
       v-on:mouseover="item_highlight = true"
       v-on:mouseout="item_highlight = false"
       @click="click"
       :class="(item_highlight || item_active) ? 'bg-navbarhover':''" class="block mt-4 lg:inline-block lg:mt-0 p-2 rounded-lg hover:shadow-inner">
        <slot></slot>
    </a>
</template>

<script>
  export default {
    props: ['name', 'active'],
    data () {
      return {
        item_highlight: false,
        item_active: false,
      }
    },
    created () {
      this.item_active = this.active;

      VueEvent.on('navbaritem_clicked', (item) => {
        if (item.name !== this.name) {
          this.item_active = false
        }
      })
    },
    methods: {
      click () {
        this.item_active = true
        VueEvent.fire('navbaritem_clicked', this)
      }
    }
  }
</script>

<style scoped>

</style>