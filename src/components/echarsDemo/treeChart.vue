<template>
  <div id="treeChart"></div>
</template>
<script>
export default {
  name: "TreeChart",
  data() {
    return {};
  },
  mounted(){
      this.createTree();
  },
  methods: {
    createTree() {
        let json = {
            "name":"第一层",
            "children":[
                {
                    "name":"第二层"
                },
                {
                    "name":"第二层",
                    "children":[
                        {
                            "name":"第三层"
                        }
                    ]
                }
            ]
        }
        let data = JSON.stringify(json);
        console.log(json)
        let option = {
          tooltip: {
            trigger: "item",
            triggerOn: "mousemove"
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
                rotate: 90,
                verticalAlign: "middle",
                align: "right"
              },
              leaves: {
                label: {
                  position: "top",
                  rotate: 90,
                  verticalAlign: "middle",
                  align: "left"
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
<style scoped>
#treeChart{
  width: 1000px;
  height: 500px;
}
</style>
