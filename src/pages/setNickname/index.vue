<template>
  <div class="nickname page-content">
    <ul class="list">
      <li class="item">
        <div class="name">锁昵称</div>
        <div class="value">
          <input type="text" v-model="nickname" placeholder="给您的锁起个名吧～">
        </div>
      </li>
      <li class="item">
        <div class="name">序列号</div>
        <div class="value">ABVHJ23455</div>
      </li>
      <li class="item">
        <div class="name">电量</div>
        <div class="value">100%</div>
      </li>
      <li class="item">
        <div class="name">使用类型</div>
        <div class="value">管理员</div>
      </li>
    </ul>

    <my-button :disabled="disabled" @click="setNickname">
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
      nickname: ''
    }
  },
  computed: {
    disabled () {
      if (!this.nickname.trim()) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    setNickname () {
      console.log('setNickname')
    }
  }
}
</script>

<style lang="stylus" scoped>
.nickname
  padding-top: 24px
  font-size 16px
  .list
    margin-bottom 220px
    .item
      display flex
      justify-content space-between
      align-items: center
      margin-bottom: 34px
      &:last-child
        margin-bottom 0
      .name
        color #3E3E3F
      .value
        color #676467
</style>
