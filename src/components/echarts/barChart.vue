<template>
  <div :id="chartId" ref="barChar"></div>
</template>
<script>
export default {
  name: "BarChart",
  data() {
    return {
      //模板格式
       /* barList:[
        {
          name: "北京市",
          value: 100
        },
        {
          name: "江苏省",
          value: 345
        },
        {
          name: "天津市",
          value: 102
        },
        {
          name: "河北省",
          value: 10
        },
        {
          name: "安徽省",
          value: 30
        },
        {
          name: "浙江省",
          value: 50
        },
        {
          name: "山东省",
          value: 300
        },
        {
          name: "江西省",
          value: 150
        },
        {
          name: "河南省",
          value: 221
        },
        {
          name: "湖南省",
          value: 315
        },
        {
          name: "四川省",
          value: 222
        },
        {
          name: "福建省",
          value: 333
        },
        {
          name: "广西省",
          value: 444
        },
        {
          name: "广东省",
          value: 666
        }
      ]*/
    };
  },
  props:["data","chartId"],
  mounted(){
    if(this.chartId){
      this.createChart();
    }
  },
  methods: {
    createChart(res) {
      let data = this.data;
      let getName = data => {
        let arr = [];
        data.map(item => {
          arr.push(item.name);
        });
        return arr;
      };
      let getVal = data => {
        let arr = [];
        data.map(item => {
          arr.push(item.value);
        });
        return arr;
      };
      // 绘制图表
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          //直角坐标系 grid 中的 x 轴
          {
            type: "category",
            data: getName(data),
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              fontSize: 14,
              interval: 0,
              rotate: 45,
              showMinLabel: true,
              showMaxLabel: true
            }
          }
        ],
        yAxis: [
          //直角坐标系 grid 中的 y 轴
          {
            type: "value",
            name: "家数（家）",
            nameLocation: "end",
            nameTextStyle: {
              color: "#000000"
            },
            offset: 0,
            data: getVal(data)
          }
        ],
        series: [
          {
            name: "数量",
            type: "bar",
            barWidth: "50%",
            data: getVal(data)
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      // let myChart = this.$echarts.init(this.$refs.barChar);
      let myChart = this.$echarts.init(document.getElementById(this.chartId));
      myChart.setOption(option);
    }
  }
};
</script>
