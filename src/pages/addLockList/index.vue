<template>
  <div>
    <div v-if="hasAccessLock === '0'">
      <not-access />
    </div>
    <div v-if="hasAccessLock === '1'">
      <access />
    </div>
  </div>
</template>

<script>
import notAccess from './notAccess'
import access from './access'

export default {
  components: {
    notAccess,
    access
  },
  data () {
    return {
      hasAccessLock: ''
    }
  },
  onLoad (option) {
    console.log(option)
    this.hasAccessLock = option.access
  }
}
</script>
