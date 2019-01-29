<template>
  <div :id="chartId"></div>
</template>
<script>
import chinaJson from "@/common/json/china.json";
export default {
  name: "MapChart",
  data() {
    return {};
  },
  props:["data","chartId"],
  mounted(){
    if(this.chartId){
      this.createChart();
    }
  },
  methods: {
    createChart(res) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.chartId));
      let name_title = "上市公司分布地图";
      let nameColor = " rgb(55, 75, 113)";
      let name_fontFamily = "等线";
      let subname_fontSize = 15;
      let name_fontSize = 18;
      let mapName = "china";
      let data = this.data;
    //   let data = [
    //     { name: "北京", value: 177 },
    //     { name: "天津", value: 42 },
    //     { name: "河北", value: 102 },
    //     { name: "山西", value: 81 },
    //     { name: "内蒙古", value: 47 },
    //     { name: "辽宁", value: 67 },
    //     { name: "吉林", value: 82 },
    //     { name: "黑龙江", value: 66 },
    //     { name: "上海", value: 24 },
    //     { name: "江苏", value: 92 },
    //     { name: "浙江", value: 114 },
    //     { name: "安徽", value: 109 },
    //     { name: "福建", value: 116 },
    //     { name: "江西", value: 91 },
    //     { name: "山东", value: 119 },
    //     { name: "河南", value: 137 },
    //     { name: "湖北", value: 116 },
    //     { name: "湖南", value: 114 },
    //     { name: "重庆", value: 91 },
    //     { name: "四川", value: 125 },
    //     { name: "贵州", value: 62 },
    //     { name: "云南", value: 83 },
    //     { name: "西藏", value: 9 },
    //     { name: "陕西", value: 80 },
    //     { name: "甘肃", value: 56 },
    //     { name: "青海", value: 10 },
    //     { name: "宁夏", value: 18 },
    //     { name: "新疆", value: 67 },
    //     { name: "广东", value: 123 },
    //     { name: "广西", value: 59 },
    //     { name: "海南", value: 14 }
    //   ];

      let geoCoordMap = {};

      /*获取地图数据*/
      myChart.showLoading();
      this.$echarts.registerMap(mapName, chinaJson);
      console.log( this.$echarts.getMap(mapName))
      let mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      //地图绘制省市的对象
      mapFeatures.forEach(function(v) {
        // 地区名称
        let name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      console.log(geoCoordMap)
      let max = 480,
          min = 9; // todo
      let maxSize4Pin = 100,
          minSize4Pin = 20;
      //传入数据和地图数据
      let convertData = function(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let name = data[i].name;
          console.log(name)
          let geoCoord = geoCoordMap[name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      let handleData = function(data){
        data.map(item=>{
          if(item.name.indexOf("内蒙")>-1){
            item.name = "内蒙古";
          }else if(item.name.indexOf("省")==-1){
            item.name = item.name.substring(0,2);
          }
        })
        console.log(data)
        return data;
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
            showLegendSymbol: false, // 在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 legend 组件时生效。
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
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle: {//地图区域的多边形 图形样式。
              normal: {
                areaColor: "#ff0000",
                borderColor: "#3B5077"
              },
              emphasis: { //高亮状态下的多边形和标签样式。
                areaColor: "#2B91B7"
              }
            },
            animation: true,
            data: handleData(data)
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
    }
  }
};
</script>
