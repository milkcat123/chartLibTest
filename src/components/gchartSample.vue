<template>
  <div>
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>
<script>
/* google chart */
import { GChart } from 'vue-google-charts/legacy'
export default {
  name: 'gchartSample',
  components:{
    GChart
  },
  props:['chartData'],
  data() {
    return {
      title:"Google Chart",
      note:"#要先用 babel-polyfill 去轉換es6 <br> #套件裡的index.js的第19行 append 要改成 appendChild",
      chartOptions:this.$store.state.gchart.options
    }
  },
  mounted() {
    this.$emit('changenote',this.note);
    this.$emit('changetitle',this.title);
    this.$emit('changelink',"https://codesandbox.io/examples/package/vue-google-charts");
    console.log('gchartSample',this.chartData,'options',this.chartOptions)
  },
  methods: {
    
  },
}
</script>

