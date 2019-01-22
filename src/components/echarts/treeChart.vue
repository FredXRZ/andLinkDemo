<template>
  <div id="treeChart"></div>
</template>
<script>
export default {
  name: "TreeChart",
  data() {
    return {};
  },
  methods: {
    createChart(data) {
        let json = {
            "name":"第一层",
            "id":1,
            "children":[
                {
                    "name":"第二层",
                    "id":2
                },
                {
                    "name":"第二层",
                    "id":3,
                    "children":[
                        {
                            "name":"第三层",
                            "id":4
                        }
                    ]
                }
            ]
        }
        console.log(json)
        let that = this;
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
              data: [json],
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
                align: "right"
              },
              leaves: {
                label: {
                  position: "top",
                  rotate: 0,
                  verticalAlign: "middle",
                  align: "left"
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
      let myChart = this.$echarts.init(document.getElementById("treeChart"));
      myChart.setOption(option);
    }
  }
};
</script>
