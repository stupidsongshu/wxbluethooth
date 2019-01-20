<template>
  <div>
    <div class="logo-wrapper">
      <img class="logo-img" src="./img/logo@2x.png" alt="">
      <p class="logo-txt">智能云锁1.0</p>
    </div>

    <view class="section w212">
      <input type="number" class="input border-bottom input-mobile" placeholder="请输入手机号" maxlength="11" auto-focus v-model="mobileNo" />
      <div class="clear-wrapper" v-show="mobileNo" @click="mobileNo = ''">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </view>
    <view class="section w212">
      <input type="number" class="input border-bottom input-smscode" placeholder="验证码" maxlength="6" />
      <span class="btn" @click="getSmsCode">{{smsTxt}}</span>
    </view>

    <my-button :disabled="disabled" @click="submit">
      <div slot="content">-></div>
    </my-button>
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
      mobileNo: '',
      smscode: '',
      countdown: 60
    }
  },
  computed: {
    disabled () {
      if (this.mobileNo) {
        return false
      }
      return true
    },
    smsTxt () {
      if (this.countdown === 60) {
        return '获取验证码'
      } else {
        return this.countdown + 's'
      }
    }
  },
  methods: {
    getSmsCode () {
      if (this.countdown < 60) return
      let timer = setInterval(_ => {
        if (this.countdown <= 1) {
          clearInterval(timer)
          this.countdown = 60
        } else {
          this.countdown--
        }
      }, 1000)
    },
    submit () {
      const url = '../home/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style lang="stylus" scoped>
.w212
  width: 212px
  margin: 0 auto
.border-bottom
  border-bottom: 1px solid #E5E7EF

.logo-wrapper
  margin: 126px 0 100px 0
  text-align: center
  .logo-img
    width: 72px
    height: 70px
  .logo-txt
    color: #9E9FA0
    font-size: 13px
.section
  position: relative
  .input
    font-size 14px
    &.input-mobile
      margin-bottom: 22px
    &.input-smscode
      margin-bottom: 90px
  .clear-wrapper
    position: absolute
    bottom: 0
    right: 0
    z-index: 9
    width: 14px
    height: 14px
    transform: rotate(45deg)
    // background-color: #f00
    .line
      width: 9px
      height: 1px
      background-color: #D8D8D8
      &:nth-child(1)
        transform: translateY(1px)
      &:nth-child(2)
        transform: rotate(90deg)
  .btn
    position: absolute
    top: 0
    right: 0
    z-index: 9
    font-size: 14px
    color: #0090FF
</style>
