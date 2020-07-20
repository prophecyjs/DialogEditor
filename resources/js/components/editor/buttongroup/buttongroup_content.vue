<template>
    <div v-show="item_active" class="h-auto">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: [
      'active', 'name'
    ],
    data () {
      return {
        item_active: false,
        classes: '',
        count: 0,
      }
    },
    created () {
      this.item_active = (this.active == 'true')

      VueEvent.on('button_group_item_clicked', (item) => {
        if (item.name !== this.name) {
          this.item_active = false
        } else {
          this.item_active = true
        }
      })
    }
  }
</script>

<style scoped>

</style>