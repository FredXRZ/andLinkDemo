<template>
    <div :id="chartId"></div>
</template>
<script>
export default {
    name:'PieChart',
    data(){
        return {
            // 数据模型
            // listData:[
            //     {
            //         value: 11,
            //         name: "央企"
            //     },
            //     {
            //         value: 22,
            //         name: "地方国企"
            //     },
            //     {
            //         value: 33,
            //         name: "外资企业"
            //     },
            //     {
            //         value: 22,
            //         name: "民营企业"
            //     },
            //     {
            //         value: 12,
            //         name: "其他企业"
            //     }
            // ]
        }
    },
    props:["data","chartId"],
    mounted(){
        if(this.chartId){
            this.createChart();
        }
    },
    methods:{
        createChart(){
            let textList = [];//图例组件显示内容
            let data = this.data;
            let allColors = [
                "#005ED7","#5FA9FF","#59CCFF","#13C2C2","#27A97D",
                "#4AFABF","#00EA8F","#FFCE31","#FF8533","#FD8D76"
            ];
            let colors = [];
            if(!(data instanceof Array) || data.length==0)return;
            data.map(item => {
                textList.push(item.name);
            });
            for(let i=0;i<data.length;i++){
                let len = allColors.length;
                let randomIndex = Math.floor(Math.random()*len);
                let color = allColors.splice(randomIndex,1)[0];
                colors.push(color);
            }
            console.log(colors)
            let option = {
                tooltip: {
                    trigger: "item",
                    formatter: function(params, ticket, callback) {
                        // var res = params.seriesName;
                        var res = "" + params.name + " : " + params.percent + "%";
                        return res;
                    }
                },
                legend: {
                    orient: "horizontal",
                    width:"90%",
                    top: "10%",
                    left : "center",
                    data: textList,
                    itemWidth: 20,
                    itemHeight: 12,
                    itemGap:8,
                    show:true
                },
                series: [
                    {
                        name: "企业性质",
                        type: "pie",
                        selectedMode: false,
                        radius: ["25%", "40%"],
                        center: ["50%", "60%"],
                        color:colors,
                        label: {
                            normal: {
                                position: "outside",
                                formatter: "{b|{b}}\n{d|{d}%}",
                                align:"center",
                                verticalAlign:"middle",
                                // padding:10,
                                rich:{
                                    b:{
                                        color:"#333333",
                                        fontSize:12,
                                         align:"center",
                                        padding:[5,0,0,0]
                                    },
                                    d:{
                                        color:"#004F8D",
                                        fontSize:18,
                                        fontWeight:"bold"
                                    }
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 15,
                                length2: 5,
                                lineStyle: {
                                    color: '#979797'
                                }
                            }
                        },
                        data: data
                    }
                ]
            };
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(this.chartId));
            myChart.setOption(option);
            // this.$emit('createPie');
        }
    }
}
</script>
