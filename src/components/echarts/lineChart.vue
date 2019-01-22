<template>
  <div id="lineChart"></div>
</template>
<script>
export default {
  name: "LineChart",
  data() {
    return {
        lineDate:{
            years: ["2003", "2004", "2005", "2006", "2007", "2008"],
            list: [
                {
                    name: "上市公司投资者波爱护状况客观评价得分",
                    type: "line",
                    stack: "总量",
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: "上市公司治理结构对投资者决策参与权的保护状况得分",
                    type: "line",
                    stack: "总量",
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: "上市公司信息披露对投资者知情权的保护状况得分",
                    type: "line",
                    stack: "总量",
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: "上市公司经营活动对投资者投资收益权的保护状况得分",
                    type: "line",
                    stack: "总量",
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        }
    };
  },
  methods: {
    createChart(data) {
        // let data = this.lineDate;
        let getName = data => {
            let arr = [];
                data.map(item => {
                arr.push(item.name);
            });
        return arr;
      };
      let option = {
        title: {
          text: "上市公司投保评分态势",
          x: "left",
          y: "top"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          type: "plain",
          show: true,
          orient: "horizontal", //图例列表的布局朝向。'horizontal' 'vertical'
          width: 800,
          height: "auto",
          right: 0,
          right: 0,
          tooltip: {
            show: true
          },
          textStyle: {
            fontSize: 12,
            fontStyle: "normal",
            color: "#000000"
          },
          data: getName(data.list)
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.years
        },
        yAxis: {
          type: "value"
        },
        series: data.list
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("lineChart"));
      myChart.setOption(option);
    }
  }
};
</script>
