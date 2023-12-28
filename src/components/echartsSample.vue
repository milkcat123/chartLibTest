<template>
  <div id="myEchart" :style="{width: '100%', height: '400px'}"></div>
</template>
<script>
export default {
  name: 'echartsSample',
  data() {
    return {
      title:"Echarts",
      note:""
    }
  },
  mounted() {
    this.drawLine();
    this.$emit('changenote',this.note);
    this.$emit('changetitle',this.title);
    this.$emit('changelink',"https://echarts.apache.org/zh/index.html");
  },
  methods: {
    drawLine(){
      // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
      let vm = this;
      let chart = document.getElementById('myEchart');
      let myChart = this.$echarts.init(chart);
      // 绘制图表
      myChart.setOption({
          tooltip: {},
          xAxis: {
              data: ['Jan.','Feb.','Mar.','Apr.','May']
          },
          yAxis: [
            {
              type: 'value',
              name: 'milk',
              min: 0,
              max: 150,
              interval: 25,
              axisLabel: {
                formatter: '{value} 千個'
              }
            },
            {
              type: 'value',
              name: 'shortage',
              min: 0,
              max: 30,
              interval: 5,
              axisLabel: {
                formatter: '{value} 個'
              }
            }
          ],
          series: [
            {
              name: 'milk',
              type: 'bar',
              data: [30, 40, 26, 18, 33],
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 個';
                }
              },
            },
            {
              name: 'orange',
              type: 'bar',
              data: [20, 15, 6, 35, 11],
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 個';
                }
              },
            },
            {
              name: 'milk-shortage',
              type: 'line',
              data: [3, 8, 2, 13, 15],
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return '缺 ' + value + ' 個 milk';
                }
              },
            },
            {
              name: 'orange-shortage',
              type: 'line',
              data: [13, 5, 1, 8, 4],
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return '缺 ' + value + ' 個 orange';
                }
              },
            }
          ]
      });
      setTimeout(()=>{
        let chartInstance = vm.$echarts.getInstanceByDom(chart);
        console.log('chartInstance',chartInstance);
      });
    }
  },
}
</script>

