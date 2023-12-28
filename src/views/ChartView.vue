<template>
  <div class="chartview">
    <h1>Sample of <span>{{ title }}</span></h1>
    <div class="chart_content">
      <chartjsSample v-show="num===1" @changetitle="changetitle" :chartData="chartjs" @changelink="changelink" @changenote="changenote"/>
      <!-- <chartkickSample v-show="num===2" @changetitle="changetitle" :chartData="chartkick" @changelink="changelink" @changenote="changenote"/> -->
      <apexchartsSample v-if="num===3" @changetitle="changetitle" :chartData="apexcharts" @changelink="changelink" @changenote="changenote"/>
      <echartsSample v-if="num===4" @changetitle="changetitle" @changelink="changelink" @changenote="changenote"/>
      <gchartSample v-if="num===5" @changetitle="changetitle" :chartData="gchart" @changelink="changelink" @changenote="changenote"/>
    </div>
    <div class="note" v-html="note"></div>
    <div class="org_link">
      <a :href="link" target="_blank" rel="noopener noreferrer" > Refference </a>
    </div>
  </div>
</template>

<script>
import chartjsSample from '@/components/chartjsSample.vue'
// import chartkickSample from '@/components/chartkickSample.vue'
import apexchartsSample from '@/components/apexchartsSample.vue'
import echartsSample from '@/components/echartsSample.vue'
import gchartSample from '@/components/gchartSample.vue'

export default {
  name: 'ChartView',
  components: {
    chartjsSample,
    // chartkickSample,
    apexchartsSample,
    echartsSample,
    gchartSample
  },
  props:["num"],
  data() {
    return {
      title:"Chart.js",
      link:"",
      note:"",
      chartjs:this.$store.state.chartjs.data,
      chartkick:this.$store.state.chartkick.data,
      apexcharts:this.$store.state.apexcharts.data,
      gchart:this.$store.state.gchart.data
    }
  },
  methods:{
    changetitle(data){
      this.title = data;
    },
    changelink(data){
      this.link = data;
    },
    changenote(data){
      this.note = data;
    },
  }
}
</script>
<style lang="scss" scoped>
h1{
  margin: 20px 0 40px 0 ;
  span{
    color: var(--chart-title-color);
    padding: 0 5px;
    border-bottom: 2px solid var(--chart-title-color);
  }
}
.chart_content{
  width: 95%;
  min-width: 768;
  max-width: 1240px;
  min-height: 432px;
  padding: 15px;
  margin: 0 auto;
  border: var(--border-style);
}
.org_link{
  a{
    display: inline-block;
    color: var(--main-color);
    text-decoration: none;
    padding: 10px 20px;
    border: 1px solid var(--main-color);
    border-radius: 100rem;
    margin:20px 0 0 0;
  }

}
.note{
  width: 95%;
  min-width: 768;
  max-width: 1240px;
  text-align: left;
  margin:10px auto;
}

</style>
