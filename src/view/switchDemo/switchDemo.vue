<template>
    <div>
        <el-button @click="drawBar()">柱状图</el-button>
        <el-button @click="drawLine()">折线图</el-button>
        <el-button @click="drawPie()">饼状图</el-button>
        <el-button @click="drawArea()">面积图</el-button>
        <el-button @click="drawRadar()">雷达图</el-button>
        <div id="myChart" :style="{width: '500px', height: '500px',margin:'100px auto'}"></div>
    </div>
</template>
<script>
export default {
    name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataBar:{
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [13, 26, 80, 63, 45, 90]
            }]
        },
        dataLine:{
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [13, 26, 80, 63, 45, 90]
            }]
        },
        dataPie:{
            title: { text: '在Vue中使用echarts' },
            series: [{
                name: '销量',
                type: 'pie',
                data: [
                    {value:5, name:'衬衫'},
                    {value:20, name:'羊毛衫'},
                    {value:36, name:'雪纺衫'},
                    {value:10, name:'裤子'},
                    {value:10, name:'高跟鞋'},
                    {value:20, name:'袜子'}
                ]
            }]
        },
        dataArea:{
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [13, 26, 80, 63, 45, 90],
                type: 'line',
                areaStyle: {}
            }]
        },
        dataRadar:{
            title: {
                text: '基础雷达图'
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                }
                },
                indicator: [
                { name: '衬衫', max: 100},
                { name: '羊毛衫', max: 100},
                { name: '雪纺衫', max: 100},
                { name: '裤子', max: 100},
                { name: '高跟鞋', max: 100},
                { name: '袜子', max: 100}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [13, 26, 80, 63, 45, 90],
                    }
                ]
            }]
        }
    }
  },
  methods: {
    drawBar(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.clear()
        myChart.setOption(this.dataBar);
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.clear()
        myChart.setOption(this.dataLine);
    },
    drawPie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.clear()
        myChart.setOption(this.dataPie);
    },
    drawArea(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.clear()
        myChart.setOption(this.dataArea);
    },
    drawRadar(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.clear()
        myChart.setOption(this.dataRadar);
    },

  }
}
</script>