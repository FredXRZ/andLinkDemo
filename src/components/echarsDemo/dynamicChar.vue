<template>
  <div>
    <div>动态图表页面</div>
    <div id="pieChart" :style="{width: '500px', height: '500px'}"></div>
    <div id="mapChart" :style="{width: '500px', height: '500px'}"></div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>
    import Mock from 'mockjs'
    import chinaJson from '@/common/json/china.json'
    var pielistArr = []
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
            this.drawMap();
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
            drawMap(){
                 // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById("mapChart"));
                var name_title = "上市公司分布地图"
                var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数'
                var nameColor = " rgb(55, 75, 113)"
                var name_fontFamily = '等线'
                var subname_fontSize = 15
                var name_fontSize = 18
                var mapName = 'china'
                var data = [
                    {name:"北京",value:177},
                    {name:"天津",value:42},
                    {name:"河北",value:102},
                    {name:"山西",value:81},
                    {name:"内蒙古",value:47},
                    {name:"辽宁",value:67},
                    {name:"吉林",value:82},
                    {name:"黑龙江",value:66},
                    {name:"上海",value:24},
                    {name:"江苏",value:92},
                    {name:"浙江",value:114},
                    {name:"安徽",value:109},
                    {name:"福建",value:116},
                    {name:"江西",value:91},
                    {name:"山东",value:119},
                    {name:"河南",value:137},
                    {name:"湖北",value:116},
                    {name:"湖南",value:114},
                    {name:"重庆",value:91},
                    {name:"四川",value:125},
                    {name:"贵州",value:62},
                    {name:"云南",value:83},
                    {name:"西藏",value:9},
                    {name:"陕西",value:80},
                    {name:"甘肃",value:56},
                    {name:"青海",value:10},
                    {name:"宁夏",value:18},
                    {name:"新疆",value:67},
                    {name:"广东",value:123},
                    {name:"广西",value:59},
                    {name:"海南",value:14},
                    ];
                    
                var geoCoordMap = {};
                var toolTipData = [ 
                    {name:"北京",value:82},
                    {name:"天津",value:20},
                    {name:"河北",value:42},
                    {name:"山西",value:41},
                    {name:"内蒙古",value:24},
                    {name:"辽宁",value:28},
                    {name:"吉林",value:41},
                    {name:"黑龙江",value:31},
                    {name:"上海",value:12},
                    {name:"江苏",value:45},
                    {name:"浙江",value:57},
                    {name:"安徽",value:52},
                    {name:"福建",value:57},
                    {name:"江西",value:42},
                    {name:"山东",value:52},
                    {name:"河南",value:68},
                    {name:"湖北",value:56},
                    {name:"湖南",value:52},
                    {name:"重庆",value:44},
                    {name:"四川",value:60},
                    {name:"贵州",value:30},
                    {name:"云南",value:41},
                    {name:"西藏",value:4},
                    {name:"陕西",value:42},
                    {name:"甘肃",value:28},
                    {name:"青海",value:5},
                    {name:"宁夏",value:8},
                    {name:"新疆",value:31},
                    {name:"广东",value:60},
                    {name:"广西",value:30},
                    {name:"海南",value:6},
                ];
                // var toolTipData = [ 
                //     {name:"北京",value:[{name:"文科",value:95},{name:"理科",value:82}]},
                //     {name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},
                //     {name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},
                //     {name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},
                //     {name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},
                //     {name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},
                //     {name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},
                //     {name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},
                //     {name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},
                //     {name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},
                //     {name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},
                //     {name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},
                //     {name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},
                //     {name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},
                //     {name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},
                //     {name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},
                //     {name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},
                //     {name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},
                //     {name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},
                //     {name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},
                //     {name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},
                //     {name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},
                //     {name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},
                //     {name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},
                //     {name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},
                //     {name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},
                //     {name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},
                //     {name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},
                //     {name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},
                //     {name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},
                //     {name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]},
                // ];

                /*获取地图数据*/
                myChart.showLoading();
                this.$echarts.registerMap(mapName, chinaJson);
                var mapFeatures = this.$echarts.getMap(mapName).geoJson.features;

                myChart.hideLoading();
                mapFeatures.forEach(function(v) {
                    // 地区名称
                    var name = v.properties.name;
                    // 地区经纬度
                    geoCoordMap[name] = v.properties.cp;

                });

                // console.log("============geoCoordMap===================")
                // console.log(geoCoordMap)
                // console.log("================data======================")
                var max = 480,
                    min = 9; // todo 
                var maxSize4Pin = 100,
                    minSize4Pin = 20;

                var convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value),
                            });
                        }
                    }
                    return res;
                };
                myChart.setOption({
                    title: {
                    text: name_title,
                    // subtext: subname,
                    x: 'center',
                    y:'15%',
                    textStyle: {
                        color: nameColor,
                        fontFamily: name_fontFamily,
                        fontSize: name_fontSize
                    },
                    subtextStyle:{
                        fontSize:subname_fontSize,
                        fontFamily:name_fontFamily
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        // console.log(params)
                         if (typeof(params.value)!='undefined') {
                            var toolTiphtml='';
                            toolTipData.map((item)=>{
                                if(params.name==item.name){     
                                    toolTiphtml+=`${item.name}<br/>上市公司数：${item.value}家`;
                                }
                            })
                            return toolTiphtml;
                        }
                        // if (typeof(params.value)[2] == "undefined") {
                        //     var toolTiphtml = ''
                        //     for(var i = 0;i<toolTipData.length;i++){
                        //         if(params.name==toolTipData[i].name){
                        //             toolTiphtml += toolTipData[i].name+':<br>'
                        //             for(var j = 0;j<toolTipData[i].value.length;j++){
                        //                 toolTiphtml+=toolTipData[i].value[j].name+'上市公司数：'+toolTipData[i].value[j].value+"<br>"
                        //             }
                        //         } 
                        //     }
                        //     // console.log(toolTiphtml)
                        //     // console.log(convertData(data))
                        //     return toolTiphtml;
                        // } else {
                        //     var toolTiphtml = ''
                        //     for(var i = 0;i<toolTipData.length;i++){
                        //         if(params.name==toolTipData[i].name){
                        //             toolTiphtml += toolTipData[i].name+':<br>'
                        //             for(var j = 0;j<toolTipData[i].value.length;j++){
                        //                 toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        //             }
                        //         }
                        //     }
                        //     // console.log(stoolTiphtml)
                        //     // console.log(convertData(data))
                        //     return toolTiphtml;
                        // }
                    }
                },
                // legend: {
                //     orient: 'vertical',
                //     y: 'bottom',
                //     x: 'right',
                //     data: ['credit_pm2.5'],
                //     textStyle: {
                //         color: '#fff'
                //     }
                // },
                visualMap: { //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道） 范围选取组建
                    show: false,
                    min: 0,
                    max: 200,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
                    seriesIndex: [1], //指定取哪个系列的数据，即哪个系列的 series.data。
                    inRange: { //定义 在选中范围中 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）
                        // color: ['#3B5077', '#031525'] // 蓝黑
                        // color: ['#ffc0cb', '#800080'] // 红紫
                        // color: ['#3C3B3F', '#605C3C'] // 黑绿
                        // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                        // color: ['#23074d', '#cc5333'] // 紫红
                        color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#1488CC', '#2B32B2'] // 浅蓝
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿

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
                geo: {  //地理坐标系组件。
                    show: true,
                    map: mapName,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    roam: false, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    itemStyle: { //地图区域的多边形 图形样式。
                        normal: {
                            areaColor: '#031525', //地图区域的颜色。
                            borderColor: '#3B5077', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                        },
                        emphasis: { //高亮状态下的多边形和标签样式。
                            areaColor: '#2B91B7',
                        }
                    }
                },
                series: [
                    {
                        name: '散点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        // data: convertData(data),
                        symbolSize: function(val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#05C3F9'
                            }
                        }
                    },
                    {
                        type: 'map',
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
                                    color: '#fff'
                                }
                            }
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#3B5077',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: true,
                        data: data
                    },
                    {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin', //气泡 标记的图形。提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                        symbolSize: 20,
                        // symbolSize: function(val) {
                        //     var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        //     var b = minSize4Pin - a * min;
                        //     b = maxSize4Pin - a * max;
                        //     return a * val[2] + b;
                        // },
                        label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                            normal: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 9,
                                },
                                formatter:function(params){
                                    console.log(params)
                                    if(params.value){
                                        return params.value[2]
                                    }
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F62157', //标志颜色(气泡)
                            }
                        },
                        zlevel: 6,
                        data: convertData(data)
                    },
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
                })
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
