<template>
  <div :id="chartId"></div>
</template>
<script>
export default {
  name: "TreeChart",
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
        // let json = {
        //     "name":"第一层",
        //     "id":1,
        //     "children":[
        //         {
        //             "name":"第二层",
        //             "id":2
        //         },
        //         {
        //             "name":"第二层",
        //             "id":3,
        //             "children":[
        //                 {
        //                     "name":"第三层",
        //                     "id":4
        //                 }
        //             ]
        //         }
        //     ]
        // }
        let that = this;
        let data = this.data;
        let option = {
          tooltip: {
            trigger: "item",
            triggerOn: "click",
            formatter:function(params){
              that.$emit("treeClick",params.data)
            }
          },
          series: [
            {
              type: "tree",
              data: [data],
              left: "2%",
              right: "2%",
              top: "20%",
              bottom: "8%",
              symbol: "emptyCircle",
              orient: "BT",
              expandAndCollapse: true,
              label: {
                position: "bottom",
                rotate: 0,//树节点文字方向
                verticalAlign: "middle",
                align: "center",
                
              },
              leaves: {
                label: {
                  position: "top",
                  rotate: 0,
                  verticalAlign: "middle",
                  align: "center"
                },
                emphasis:{
                  label:{
                    rotate:0
                  }
                }
              },
              animationDurationUpdate: 750
            }
          ]
        }
       // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.chartId));
      myChart.setOption(option);
    }
  }
};
</script>
