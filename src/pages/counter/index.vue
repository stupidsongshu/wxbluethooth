<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <p>global store: {{no}}</p>
    <p @click="up">+</p>
    <p @click="down">-</p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import globalStore from '@/stores'

export default {
  computed: {
    count () {
      return store.state.count
    },
    no () {
      return globalStore.state.no
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    up () {
      globalStore.commit('up')
    },
    down () {
      globalStore.commit('down')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
