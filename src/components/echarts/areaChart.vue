<template>
    <div :id="chartId"></div>
</template>
<script>
export default {
    name:"AreaChart",
    data(){
        return {
            areaInfo:{
                years:["2013","2014","2015","2016","2017"],
                list:[
                    {
                        name:"地方企业",
                        type:"line",
                        // stack: "总量", //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
                        areaStyle: {
                            normal: {
                            //    opacity:0.5
                            }
                        },
                        data:[200, 232, 180, 450, 590]
                    },
                     {
                        name:"外资企业",
                        type:"line",
                        areaStyle: {
                            normal: {
                            //    opacity:0.5
                            }
                        },
                        data:[400, 392, 400, 350, 300]
                    }
                ]
            }
        }
    },
    props:["data","chartId"],
    mounted(){
        this.createChart();
    },
    methods:{
        createChart(){
            let allColors = [
                "#005ED7","#5FA9FF","#59CCFF","#13C2C2","#27A97D",
                "#4AFABF","#00EA8F","#FFCE31","#FF8533","#FD8D76"
            ];
            let data = this.data;
            let getNameList = data =>{
                let nameList = [];
                data.map(item=>{
                    nameList.push(item.name)
                })
                return nameList;
            }
            let option = {
                // title: {
                //     text: "堆叠区域图"
                // },
                tooltip : {
                    trigger: "axis"
                },
                legend: {
                    icon:"rect",
                    show:true, //图例组件是否显示
                    data:getNameList(data.list)
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true //grid 区域是否包含坐标轴的刻度标签。
                },
                xAxis : [
                    {
                        type : "category",
                        boundaryGap : true, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。boolean, Array
                        offset:0,
                        axisLabel:{
                            color:"#333"
                        },
                        axisLine:{
                            show:false  // 坐标轴是否显示
                        },
                        axisTick:{
                            show:false //坐标轴刻度线是否显示
                        },
                        data : data.years
                    }
                ],
                yAxis : [
                    {
                        type : "value",
                        axisLabel:{
                            color:"#333"
                        },
                        axisLine:{
                            show:false  // 坐标轴是否显示
                        },
                        axisTick:{
                            show:false //坐标轴刻度线是否显示
                        },
                        splitLine:{
                            show:true, //网格线开关
                            lineStyle:{
                                type:"dashed",
                                color:"#C0CFDB"
                            }
                        },
                    }
                ],
                color:allColors,
                series : data.list
            };
            let myChart = this.$echarts.init(document.getElementById(this.chartId));
            myChart.setOption(option);
        }
    }
}
</script>

