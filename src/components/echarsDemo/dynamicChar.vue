<template>
  <div>
    <div>动态图表页面</div>
    <div id="pieChart" :style="{width: '500px', height: '500px'}"></div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>
export default {
  name: "DynamicChar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
    this.drwaPie();
  },
  methods: {
    drwaPie() {
        let listData = [
            {
                value: 11,
                name: "央企"
            },
            {
                value: 22,
                name: "地方国企"
            },
            {
                value: 33,
                name: "外资企业"
            },
            {
                value: 22,
                name: "民营企业"
            },
            {
                value: 12,
                name: "其他企业"
            }
        ]
        let textList = [];
        listData.map((item)=>{
            textList.push(item.name)
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("pieChart"));
        myChart.setOption({
            title: {
            //   text: "去年",
            //   subtext: "12月",
            x: "center",
            y: "center",
            textStyle: {
                fontWeight: "normal",
                fontSize: 22
            }
            },
            tooltip: {
            trigger: "item",
            formatter: function(params, ticket, callback) {
                // var res = params.seriesName;
                var res = "" + params.name + " : " + params.percent + "%";
                return res;
            }
            },
            legend: {
            orient: "vertical",
            right: "0%",
            bottom: "0%",
            data: textList,
            itemWidth: 20,
            itemHeight: 10
            },
            series: [
                {
                    name: "消费",
                    type: "pie",
                    selectedMode: "single",
                    radius: ["50%", "90%"],
                    label: {
                    normal: {
                        position: "inner",
                        formatter: "{d}%",
                        textStyle: {
                        color: "#fff",
                        fontSize: 14
                        }
                    }
                    },
                    labelLine: {
                    normal: {
                        show: false
                    }
                    },
                    data:listData
                }
            ]
      });
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#chart1 {
  width: 300px;
  height: 300px;
}
</style>
