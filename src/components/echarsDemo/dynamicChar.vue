<template>
  <div class="container">
    <div>动态图表页面</div>
    <el-select v-model="value" placeholder="请选择" @change="selectChange(value)">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div id="pieChart"></div>
    <div id="mapChart"></div>
    <div id="barChart"></div>
    <div id="lineChart"></div>
  </div>
</template>
<script>
import Mock from "mockjs";
import chinaJson from "@/common/json/china.json";
var pielistArr = [];
export default {
  name: "DynamicChar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      options: [
        {
          value: "2015",
          label: "2015"
        },
        {
          value: "2016",
          label: "2016"
        },
        {
          value: "2017",
          label: "2017"
        },
        {
          value: "2018",
          label: "2018"
        },
        {
          value: "2019",
          label: "2019"
        }
      ],
      value: ''
    };
  },
  mounted() {
    this.drawBar();
    this.drwaPie();
    this.drawMap();
    this.drawLine();
  },
  methods: {
    selectChange(e){
        console.log(e)
        this.axios.get('https://www.baidu.com')
        .then(res=>{
          console.log(res)
        })
    },
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
      ];
      let textList = [];
      listData.map(item => {
        textList.push(item.name);
      });
      let option = {
        title: {
          //   text: "去年",
          //   subtext: "12月",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            fontSize: 18
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
          y: "center",
          data: textList,
          itemWidth: 20,
          itemHeight: 10
        },
        series: [
          {
            name: "企业性质",
            type: "pie",
            selectedMode: "single",
            radius: ["40%", "60%"],
            center: ["35%", "50%"],
            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 10
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: listData
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("pieChart"));
      myChart.setOption(option);
    },
    drawMap() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("mapChart"));
      let name_title = "上市公司分布地图";
      let nameColor = " rgb(55, 75, 113)";
      let name_fontFamily = "等线";
      let subname_fontSize = 15;
      let name_fontSize = 18;
      let mapName = "china";
      let data = [
        { name: "北京", value: 177 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 66 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 67 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 }
      ];

      let geoCoordMap = {};

      /*获取地图数据*/
      myChart.showLoading();
      this.$echarts.registerMap(mapName, chinaJson);
      let mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function(v) {
        // 地区名称
        let name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      let max = 480,
        min = 9; // todo
      let maxSize4Pin = 100,
        minSize4Pin = 20;

      let convertData = function(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      let option = {
        title: {
          text: name_title,
          x: "center",
          y: "15%",
          textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
          },
          subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            // console.log(params)
            if (typeof params.value != "undefined") {
              var toolTiphtml = "";
              data.map(item => {
                if (params.name == item.name) {
                  toolTiphtml += `${item.name}<br/>上市公司数：${item.value}家`;
                }
              });
              return toolTiphtml;
            }
          }
        },
        visualMap: {
          //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道） 范围选取组建
          show: false,
          min: 0,
          max: 200,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          seriesIndex: [1], //指定取哪个系列的数据，即哪个系列的 series.data。
          inRange: {
            //定义 在选中范围中 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            color: ["#00467F", "#A5CC82"] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
          }
        },
        /*工具按钮组*/
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {
        //             readOnly: false
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        geo: {
          //地理坐标系组件。
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          itemStyle: {
            //地图区域的多边形 图形样式。
            normal: {
              areaColor: "#031525", //地图区域的颜色。
              borderColor: "#3B5077" //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
            },
            emphasis: {
              //高亮状态下的多边形和标签样式。
              areaColor: "#2B91B7"
            }
          }
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            // data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9"
              }
            }
          },
          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: true,
            data: data
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡 标记的图形。提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbolSize: 20,
            // symbolSize: function(val) {
            //     var a = (maxSize4Pin - minSize4Pin) / (max - min);
            //     var b = minSize4Pin - a * min;
            //     b = maxSize4Pin - a * max;
            //     return a * val[2] + b;
            // },
            label: {
              //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
              normal: {
                show: false,
                textStyle: {
                  color: "#fff",
                  fontSize: 9
                },
                formatter: function(params) {
                  console.log(params);
                  if (params.value) {
                    return params.value[2];
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#F62157" //标志颜色(气泡)
              }
            },
            zlevel: 6,
            data: convertData(data)
          }
          // {
          //     name: 'Top 5',
          //     type: 'effectScatter',//带有涟漪特效动画的散点（气泡）图。
          //     coordinateSystem: 'geo',
          //     data: convertData(data.sort(function(a, b) {
          //         return b.value - a.value;
          //     }).slice(0, 5)),
          //     symbolSize: function(val) {
          //         return val[2] / 10;
          //     },
          //     showEffectOn: 'render',
          //     rippleEffect: {
          //         brushType: 'stroke'
          //     },
          //     hoverAnimation: true,
          //     label: {
          //         normal: {
          //             formatter: '{b}',
          //             position: 'right',
          //             show: true
          //         }
          //     },
          //     itemStyle: {
          //         normal: {
          //             color: 'yellow',
          //             shadowBlur: 10,
          //             shadowColor: 'yellow',
          //             opacity:1
          //         }
          //     },
          //     zlevel: 1
          // },
        ]
      };
      myChart.setOption(option);
    },
    drawBar() {
      let data = [
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
      ];
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
            barWidth: "60%",
            data: getVal(data)
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("barChart"));
      myChart.setOption(option);
    },
    drawLine() {
      let data = {
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
      };
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
            fontSize: 10,
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
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
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
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
#pieChart {
  width: 300px;
  height: 300px;
}
#mapChart {
  width: 500px;
  height: 500px;
}
#barChart {
  width: 800px;
  height: 500px;
  overflow-x: scroll;
  overflow-y: hidden;
}
#lineChart {
  width: 1000px;
  height: 300px;
}
</style>
