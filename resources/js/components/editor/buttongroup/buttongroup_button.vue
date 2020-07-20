<template>
    <div
            @mouseover="mouseover"
            @mouseout="mouseout"
            @click="click"
            :class="classes"
            class="text-white border-black cursor-pointer border px-4">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: [
      'first', 'last', 'active', 'name'
    ],
    data () {
      return {
        state: {
          item_highlight: false,
          item_active: false,
          item_first: false,
          item_last: false,
        },
        classes: '',
        count: 0,
      }
    },
    created () {
      this.state.item_active = (this.active == 'true');
      this.state.item_first = (this.first == 'true');
      this.state.item_last = (this.last == 'true');
      this.updateClasses();


      VueEvent.on('button_group_item_clicked', (item) => {
        if (item.name !== this.name) {
          this.state.item_active = false
          this.updateClasses()
        }
      })

    },
    methods: {
      updateClasses() {
        let classes = '';

        if (this.state.item_highlight || this.state.item_active) {
          classes += ' bg-black '
        } else {
          classes += ' bg-blue-900 '
        }

        if (this.state.item_active) {
          classes += ' font-bold border-white'
        }

        if (this.state.item_first) {
          classes += ' rounded-l rounded-r-none'
        }

        if (this.state.item_last) {
          classes += ' rounded-r rounded-l-none '
        }

        this.classes = classes.trim()
      },

      click () {
        this.state.item_active = true
        this.updateClasses();
        VueEvent.fire('button_group_item_clicked', this)
      },
      mouseover() {
        this.state.item_highlight = true
        this.updateClasses()
      },
      mouseout() {
        this.state.item_highlight = false
        this.updateClasses()
      }
    }
  }
</script>

<style scoped>

</style>