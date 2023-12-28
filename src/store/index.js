import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    offsetChartName:['chartjsSample'],
    chartjs:{
      data:{
        id:'chartjs',
        labels:['Jan.','Feb.','Mar.','Apr.','May'],
        datasets:[
          {
            label:'milk',
            barThickness:"60",
            backgroundColor: "#6ee4ad",
            data:[20,15,6,35,11],
            order:2,
            yAxisID: 'left-data'
          },
          {
            label:'orange',
            barThickness:"60",
            backgroundColor: "#ffea53",
            data:[15,24,29,19,5],
            order:2,
            yAxisID: 'left-data'
          },
          {
            label:'shortage(milk)',
            data: [10,8,5,3,6],
            backgroundColor:'rgba(0, 0, 0, 0)',
            borderColor: '#00cae0',
            pointBackgroundColor:'#00cae0',
            lineTension:0,
            type:'line',
            order:1,
            yAxisID:'right-data'
          },
          {
            label:'shortage(orange)',
            data: [7,3,4,1,7],
            backgroundColor:'rgba(0, 0, 0, 0)',
            borderColor: '#ff9200',
            pointBackgroundColor:'#ff9200',
            lineTension:0,
            type:'line',
            order:1,
            yAxisID:'right-data'
          }
        ]
      },
      options:{ //chart.js圖表設定參數
        chartname:"chartjsSample",
        animation: {//設置不做動畫 （可以提高性能）
          duration: 0// general animation time
        },
        responsive: true,//響應式(寬度)
        maintainAspectRatio: false,//保持長寬比
        legend:{// 圖例的配置
          display: true,
        },
        title: { //對標題的配置
          display: true,
        },
        scales: { //維度相關的配置
          xAxes: [{
            stacked: false,//堆疊圖
            ticks:{   //對X軸開始配置
              beginAtZero: true,
            },
            gridLines: {//格線
              display:true,
              color:'#c3e8c4',
            }
          }],
          yAxes: [{
            id: 'left-data',
            position: 'left',//顯示位置
            ticks:{   //對Y軸開始配置
              beginAtZero: true,
              maxTicksLimit:8//最大刻度數量
            },
            gridLines:{
              drawOnChartArea:false,//圖表格線顯示
              drawBorder:false,//圖表邊界顯示
              color:'#c3e8c4',
              zeroLineColor:'#c3e8c4',//0刻線顏色
            }
          },{
            id: 'right-data',
            position: 'right',
            ticks:{ 
              beginAtZero: true,
              maxTicksLimit:8
            },
            gridLines:{
              drawOnChartArea:false,
              drawBorder:false,
              color:'#c3e8c4',
              zeroLineColor:'#c3e8c4',
            }
          }],
        }
      },
    },
    chartkick:{
      data:[
        {name:"milk",data:{'Jan':32,'Feb': 46, 'Mar': 28, 'Apr': 28, 'May': 28}},
        {name:"orange",data:{'Jan':15,'Feb': 24, 'Mar': 29, 'Apr': 19, 'May': 5},color:"#ffea53"}
      ],
      options:{
        plugins:{
          chartjsSample:false,
        }
      }
    },
    apexcharts:{
      data:[
        {
          name: 'milk',
          type:'column',
          data: [30, 40, 26, 18, 33]
        },
        {
          name: 'orange',
          type:'column',
          data: [20, 15, 6, 35, 11]
        },
        {
          name: 'milk_storage',
          type:'line',
          data: [10, 3, 11, 14, 23]
        },
        {
          name: 'orange_storage',
          type:'line',
          data: [12, 8, 5, 22, 3]
        }
      ],
      options:{
        chart: {
          id: 'vuechart-example',
          type: 'line',
        },
        stroke: {
          width: [1, 1, 4,4],
          curve: 'straight'
        },
        colors:['#008FFB','#00E396','#FEB019','#FFD719'],
        markers:{
          size:5,
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50px',
          },
        },
        xaxis: {
          categories: ['Jan.','Feb.','Mar.','Apr.','May']
        },
        yaxis:[
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'orange',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
          },
          {
            seriesName: 'milk_storage',
            opposite: true,
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          {
            seriesName: 'orange_storage',
            opposite: true,
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            },
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      }
    },
    gchart:{
      data:[
        ['month', 'milk', 'orange'],
        ['Jan', 1000, 400],
        ['Feb', 1170, 460],
        ['Mar', 660, 1120],
        ['Apr', 1030, 540],
        ['May', 1030, 540]
      ],
      options:{
        title:"Sales",
        hAxis: {
          title: 'month',
          minValue: 0,
        },
        vAxis: {
          title: '商品',
        },
        width:'100%',
        height:400
      }
    }

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
