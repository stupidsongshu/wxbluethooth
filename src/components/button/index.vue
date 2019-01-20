<template>
  <div class="my-button-wrapper" @click="clickFn">
    <div class="my-button-content" :class="{disabled: disabled}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickFn () {
      if (!this.disabled && !this.loading) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="stylus">
.my-button-wrapper
  position: relative
  width: 212px
  height: 56px
  margin: 0 auto
  .my-button-content
    display: flex
    justify-content center
    align-items: center
    width: 100%
    height: 100%
    border-radius: 28px
    font-size: 18px
    color: #fff
    background-color: #31A9FF
    // .arrow:after
    //   content: '->'
    &.disabled
      background-color: #B9BDC2
</style>
