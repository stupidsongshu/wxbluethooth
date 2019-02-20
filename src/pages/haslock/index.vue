<template>
  <div class="page-wrapper">
    <div class="page-content">
      <ul>
        <li class="panel" v-for="(item, index) in lockList" :key="index">
          <img class="icon" src="./img/icon-access@2x.png">
          <span class="name">{{item.name}}</span>
          <span class="icon-user"></span>
          <span class="status">{{item.status}}</span>
          <div class="battery">
            <span class="battery-icon"></span>
            <span class="battery-per">{{item.battery}}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="tab">
      <div class="tab-item">退出登录</div>
      <div class="tab-item">添加锁</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lockList: [
        {
          name: '公司',
          status: '永久',
          battery: '100%'
        },
        {
          name: '公司1',
          status: '临时',
          battery: '85%'
        },
        {
          name: '公司1',
          status: '临时',
          battery: '85%'
        },
        {
          name: '公司1',
          status: '临时',
          battery: '85%'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// .page-wrapper
//   min-height 100%
//   background-color rgb(247,248,249)

.page-content
  padding-top 15px
.panel
  display flex
  justify-content space-between
  align-items center
  height 70px
  padding 0 15px
  margin-bottom 15px
  box-shadow 0px 2px 4px 0px rgba(185,189,201,0.5)
  border-radius 4px
  background-color #fff
  .icon
    width 21px
    height 30px
  .name
    font-size 18px
    color #3E3E3F
  .status
    font-size 14px
    color #676467
  .battery
    .battery-per
      font-size 14px
      color #ACB1B6

.tab
  position fixed
  bottom 0
  left 0
  display flex
  width 100%
  height 60px
  .tab-item
    display flex
    justify-content center
    align-items center
    width 50%
    font-size 18px
    &:first-child
      color #676467
      background-color #fff
    &:last-child
      color #fff
      background-color #31A9FF
</style>
