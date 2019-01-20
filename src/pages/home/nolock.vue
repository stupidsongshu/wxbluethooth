<template>
  <div class="no-lock">
    <img src="./img/no-lock@2x.png" alt="">
    <p class="hint">请先把锁激活哦～</p>

    <!-- Test -->
    <span @click="bluetooth = true">开蓝牙|</span>
    <span @click="bluetooth = false">关蓝牙</span>

    <div v-show="!bluetooth">
      <my-button @click="openBluetooth">
        <div slot="content">添加锁</div>
      </my-button>
      <div class="logout">
        <span @click="logout">退出登录</span>
      </div>
    </div>

    <div v-show="bluetooth">
      <div v-if="!loading">
        <my-button :loading="loading" @click="addLock">
          <!-- <div v-show="!loading">
            <div slot="content">-></div>
          </div>
          <div v-show="loading">
            <div slot="content">loading</div>
          </div> -->
          <div slot="content">-></div>
        </my-button>
      </div>
      <div v-if="loading">
        <my-button :loading="loading" @click="addLock">
          <div slot="content">
            <!-- TODO loading -->
          </div>
        </my-button>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from '@/components/button/index.vue'

export default {
  components: {
    myButton
  },
  data () {
    return {
      bluetooth: false,
      loading: false
    }
  },
  methods: {
    openBluetooth () {
      console.log('open bluetooth')
    },
    logout () {
      console.log('logout')
    },
    addLock () {
      console.log('addLock')
      this.loading = true
      setTimeout(_ => {
        this.loading = false
        // const url = '../locklist/main'
        // wx.navigateTo({ url })
      }, 3000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.no-lock
  img
    display: block
    margin: 80px auto 18px auto
    width: 215px
    height: 195px
  .hint
    margin-bottom: 86px
    text-align: center
    font-size: 14px
    color: #9E9FA0
  .logout
    margin-top: 30px
    text-align: center
    font-size: 14px
    color: #31A9FF
</style>
