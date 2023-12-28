<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'chartjsSample',
  props:['chartData'],
  data() {
    return {
      title:"chartjs",
      note:"",
      chartname:this.$store.state.chartjs.options.chartname,
    }
  },
  mounted() {
    let vm = this;
    Chart.pluginService.register({
      id:"chartjsSample",
      afterUpdate: function(chart) {
        console.log('chart:afterUpdate');
        let chartid = vm.title;
        if(chartid === 'chartjs'){
          vm.chartOffset(chart,2,-30);
          vm.chartOffset(chart,3,30);
        }
      }
    });
    this.$emit('changenote',this.note);
    this.$emit('changetitle',this.title);
    this.$emit('changelink',"https://vue-chartjs.org/zh-cn/guide/");
    this.renderChart(this.chartData,this.$store.state.chartjs.options);
    console.log('chartData',this.chartData);
  },
  methods: {
    chartOffset(chart,datasetNum,offset){
        let dataset = chart.config.data.datasets[datasetNum];
        console.log('func:chartOffset.dataset',dataset);
        // console.log('func:chartOffset.dataset._meta[1].data',dataset._meta[0].data);
        for (var i = 0; i < dataset._meta[0].data.length; i++) {
          var model = dataset._meta[0].data[i]._model;
          // console.log('dataset._meta[1].data[i]._model',model);
          model.x += offset;
          model.controlPointNextX += offset;
          model.controlPointPreviousX += offset;
        }
      
    }
  },
}
</script>

