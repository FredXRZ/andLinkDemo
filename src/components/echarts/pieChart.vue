<template>
    <div id="pieChart"></div>
</template>
<script>
export default {
    name:'PieChart',
    data(){
        return {
            listData:[
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
        }
    },
    methods:{
        createPie(data){
            // let listData = this.listData;
            // console.log(listData)
            if(!(data instanceof Array) || data.length==0)return;
            let textList = [];
            data.map(item => {
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
                        radius: ["30%", "60%"],
                        center: ["35%", "50%"],
                        label: {
                            normal: {
                                position: "inner",
                                formatter: "{d}%",
                                align:'center',
                                verticalAlign:'middle',
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
                        data: data
                    }
                ]
            };
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById("pieChart"));
            myChart.setOption(option);
            // this.$emit('createPie');
        }
    }
}
</script>
