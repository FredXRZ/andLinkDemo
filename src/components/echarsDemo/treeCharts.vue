<template>
  <div>
    <TreeChart class="tree_chart" :data="treeData" :chartId="treeId" ref="treeChart" @treeClick="treeClick"></TreeChart>
    <div class="time_axis_content" @click="getYear($event)">
      <span v-for="(item, index) in years" :key="index">{{item}}</span>
      <!-- <span class="first_time">2016</span>
      <span class="second_time">2017</span>
      <span class="third_time">2018</span> -->
    </div>
  </div>
</template>
<script>
import Mock from "mockjs";
import TreeChart from "./../echarts/treeChart";
export default {
  name: "TreeCharts",
  components:{
    TreeChart
  },
  data() {
    return {
      years:[2016,2017,2018],
      json:{
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
      },
      treeData:[],
      treeId:null
    };
  },
  mounted(){
    this.treeData = this.json;
    this.treeId = "tree123456789";
    this.$nextTick(function () {
      this.$refs.treeChart.createChart();
    })
     
  },
  methods: {
    getYear(event){
      console.log(event);
      let targetText = event.target.innerHTML;
      console.log(targetText)
      let yearArr = this.years;
     if(targetText==yearArr[0]){
      yearArr = yearArr.map(item=>{
        return item -= 1;
       })
     }else if(targetText==yearArr[2]){
       yearArr = yearArr.map(item=>{
         return item += 1;
       })
      // for(var i =0;i<yearArr.length;i++){
      //   yearArr[i]+=1;
      // }
     }
     console.log(yearArr)
     this.years = [...yearArr];
    },
    treeClick(data){
      console.log(data)
      if(data.name=="第三层"){
        this.$router.push("/")
      }
    }
  }
};
</script>
<style scoped>
.tree_chart{
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
.time_axis_content{
  width: 100%;
  height: 3px;
  background: #358;
  position: relative;
  overflow: visible;
}
.time_axis_content>span{
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: #0f0;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  -webkit-user-select: none;
}
.time_axis_content>span:nth-child(1){
  left: 10%;
}
.time_axis_content>span:nth-child(2){
  left: 50%;
  transform: translate(-50%,-50%); 
}
.time_axis_content>span:nth-child(3){
  right: 10%;
}
</style>
