<template>
  <div>
    <!-- Test -->
    <span @click="lock = false">无锁|</span>
    <span @click="lock = true">有锁</span>

    <div v-if="!lock">
      <no-lock></no-lock>
    </div>
    <div v-else>
      <has-lock></has-lock>
    </div>
  </div>
</template>

<script>
import noLock from './nolock.vue'
import hasLock from './haslock.vue'

export default {
  components: {
    noLock,
    hasLock
  },
  data () {
    return {
      lock: false
    }
  }
}
</script>
