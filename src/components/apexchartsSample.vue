<template>
  <div>
    <apexcharts width="100%" height="430" type="bar" :options="chartOptions" :series="chartData"></apexcharts>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'apexchartsSample',
  props:['chartData'],
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      title:"Apexcharts",
      note:"# 49要安裝 <code>npm i @juggle/resize-observer</code>",
      chartOptions:this.$store.state.apexcharts.options,
    }
  },
  mounted() {
    this.$emit('changenote',this.note);
    this.$emit('changetitle',this.title);
    this.$emit('changelink',"https://apexcharts.com/docs/vue-charts/");
    console.log('Apexcharts chartData',this.chartData,'chartOptions',this.chartOptions);
    this.changePointOffset('milk_storage','-27px');
    this.changePointOffset('orange_storage','27px');
  },
  methods: {
    changePointOffset(seriesname,offsetnum){
      let series = document.querySelector(`g.apexcharts-series[seriesName=${seriesname}]`);
      series.style.transform = `translateX(${offsetnum})`;
    }
  },
}
</script>

