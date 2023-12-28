<template>
  <div id="app">
    <nav>
      <a @click="switchNum(1)" :class="{'active':num === 1}">Chart.js</a> | 
      <a @click="switchNum(3)" :class="{'active':num === 3}">Apexchart</a> | 
      <a @click="switchNum(4)" :class="{'active':num === 4}">Echart</a> | 
      <a @click="switchNum(5)" :class="{'active':num === 5}">Google Chart</a>
    </nav>
    <ChartView :num="num"/>
  </div>
</template>
<script>
import ChartView from '@/views/ChartView.vue'
export default {
  name:"App",
  components:{
    ChartView
  },
  data() {
    return {
      num:1
    }
  },
  methods: {
    switchNum(num){
      this.num = num;
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/all.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px 0;

  a {
    font-weight: bold;
    font-size: 20px;
    color: #2c3e50;
    margin: 0 10px;
    cursor: pointer;
    &.active {
      color: #42b983;
    }
  }
}
</style>
