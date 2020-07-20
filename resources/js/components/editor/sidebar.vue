<template>
    <div v-show="visible">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        visible: true,
      }
    },
    created() {
      VueEvent.on('show_sidebar', () => {
        console.log('show')
        this.visible = true
      });

      VueEvent.on('hide_sidebar', () => {
        console.log('hide')
        this.visible = false
      });
    }
  }
</script>

<style scoped>

</style>