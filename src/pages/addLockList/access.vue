<template>
  <div class="has-lock page-content">
    <ul>
      <li class="lock-item" v-for="(item, index) in accessList" :key="index" @click="setNickname(item)">
        <div class="lock-item-l">
          <span class="lock-icon">
            <img v-if="item.access" src="./img/icon-access@2x.png" alt="">
            <img v-else src="./img/icon-not-access@2x.png" alt="">
          </span>
          <span class="lock-name">{{item.name}}</span>
        </div>
        <div class="lock-add" v-if="item.access">
          <img src="./img/icon-add@2x.png" alt="">
        </div>
      </li>
      <!-- <li class="lock-item">
        <div class="lock-item-l">
          <span class="lock-icon">
            <img v-if="access" src="./img/icon-access@2x.png" alt="">
            <img v-else src="./img/icon-not-access@2x.png" alt="">
          </span>
          <span class="lock-name">M088686</span>
        </div>
        <div class="lock-add" v-if="access">
          <img src="./img/icon-add@2x.png" alt="">
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accessList: [
        {
          name: 'M088686',
          access: true
        },
        {
          name: 'M088687',
          access: false
        }
      ]
    }
  },
  mounted () {
    wx.showModal({
      title: '无法添加',
      showCancel: false,
      content: '锁已被添加，请联系管理员删除后再添加',
      confirmColor: '#31A9FF',
      success (res) {
        if (res.confirm) {
          console.log('confirm')
        }
      }
    })
  },
  methods: {
    setNickname (item) {
      if (item.access) {
        const url = '/pages/setNickname/main'
        wx.navigateTo({ url })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.has-lock
  padding-top: 24px
  .lock-item
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 34px
    img
      width: 100%
      height: 100%
    .lock-item-l
      display: flex
      align-items: center
      .lock-icon
        display: inline-block
        width: 21px
        height: 30px
        margin-right: 22px
      .lock-name
        font-size: 18px
        color: #3E3E3F
    .lock-add
      width: 20px
      height: 20px
</style>
