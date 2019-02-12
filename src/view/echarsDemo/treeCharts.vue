<template>
  <div style="width:1200px;margin:0 auto">
    <div class='title'>
      指标体系
      <el-button style="float:right;margin-right:10px;height:32px;margin-top:5px;
      line-height:6px" type="primary">创建指标树</el-button>
    </div>
    <TreeChart class="tree_chart" :data="treeData" :chartId="treeId" ref="treeChart" @treeClick="treeClick"></TreeChart>
    <!-- <div class="tree_name">2017上市公司投资者保护评价指标体系</div> -->
    <div class="time_axis_content" @click="getYear($event)">
      <span v-for="(item, index) in years" :key="index"><i>{{item}}</i></span>
      <!-- <span class="first_time">2016</span>
      <span class="second_time">2017</span>
      <span class="third_time">2018</span> -->
    </div>
  </div>
</template>
<script>
import Mock from "mockjs";
import TreeChart from "@/components/echarts/treeChart";
export default {
  name: "TreeCharts",
  components:{
    TreeChart
  },
  mounted(){
    
  },
  data() {
    return {
      years:[2016,2017,2018],
      json:{
        "name":"2017上市公司投资者保护评价指标体系",
        "id":1,
        "children":[
          {
            "name":"上市公司治理结构对投资者决策参与权的保护",
            "id":2,
            "children":[
              {
                'name':'1.1公司治理及内容\n有效性',
                'id':6,
                "children":[
              {
                'name':'1.1公司治理及内容\n有效性',
                'id':6
              },
              {
                'name':'1.1公司治\n理及内容\n有效性',
                'id':7
              },
              {
                'name':'1.3公司治理及内容有效性',
                'id':8
              },
              {
                'name':'1.4公司治理及内容有效性',
                'id':9
              },
            ]
              },
              {
                'name':'1.1公司治理及内容\n有效性',
                'id':7
              },
              {
                'name':'1.3公司治理及内容有效性',
                'id':8
              },
              {
                'name':'1.4公司治理及内容有效性',
                'id':9
              },
            ]
          },
          {
            "name":"上市公司信息披露对投资者知情权的保护状况",
            "id":3,
            "children":[
              {
                'name':'1.1公司治理及内容有效性',
                'id':6
              },
              {
                'name':'1.2公司治理及内容有效性',
                'id':7
              },
              {
                'name':'1.3公司治理及内容有效性',
                'id':8
              },
              {
                'name':'1.4公司治理及内容有效性',
                'id':9
              },
            ]
          },
          {
            "name":"上市公司经营活动对投资者投资收益权的保护",
            "id":5,
            "children":[
              {
                'name':'1.1公司治理及内容有效性',
                'id':6
              },
              {
                'name':'1.2公司治理及内容有效性',
                'id':7
              },
              {
                'name':'1.3公司治理及内容有效性',
                'id':8
              },
              {
                'name':'1.4公司治理及内容有效性',
                'id':9
              },
              {
                'name':'1.4公司治理及内容有效性',
                'id':9
              },
            ]
          },
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
      // if(data.name=="第三层"){
      //   this.$router.push("/")
      // }
    }
  }
};
</script>
<style scoped>
.title{
  width: 1200px;
  height: 42px;
  background-color: #EEE;
  margin:0 auto;
  font-size: 14px;
  font-weight: 600;
  color:rgba(51,51,51,1);
  line-height: 42px;
  text-align: left;
  box-sizing: border-box;
  border-left:6px solid #0071C9;
  padding-left: 14px;
}
.tree_chart{
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
.tree_name{
  margin-bottom: 30px;
  font-size:14px;
  font-weight:600;
  color:rgba(74,144,226,1);
  text-decoration: underline;
}
.time_axis_content{
  width: 100%;
  height: 3px;
  background:#ddd;
  position: relative;
  overflow: visible;
}
.time_axis_content>span{
  display: block;
  width: 18px;
  height: 18px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  background: #108EE9;
  color: #108EE9;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  -webkit-user-select: none;
}
.time_axis_content>span>i{
  font-style: normal;
  position: absolute;
  left:-9px;
}
.time_axis_content>span:nth-child(1){
  left: 10%;
  width: 11px;
  height: 11px;
  background: #ddd;
  color: #ddd;
}
.time_axis_content>span:nth-child(2){
  left: 50%;
  transform: translate(-50%,-50%); 
}
.time_axis_content>span:nth-child(3){
  right: 10%;
  width: 11px;
  height: 11px;
  background: #ddd;
  color:#ddd
}
</style>
