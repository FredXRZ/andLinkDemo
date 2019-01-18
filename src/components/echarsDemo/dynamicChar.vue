<template>
  <div class="container">
    <div @click="mockPie()">动态图表页面</div>
    <el-select v-model="value" placeholder="请选择" @change="selectChange(value)">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <PieChart class="pieClass" ref="pieChart"></PieChart>
    <MapChart class="mapClass" ref="mapChart"></MapChart>
    <BarChart class="barClass" ref="barChart"></BarChart>
    <LineChart class="lineClass" ref="lineChart"></LineChart>
  </div>
</template>
<script>
import Mock from "mockjs";
import PieChart from "./../echarts/pieChart.vue";
import MapChart from "./../echarts/mapChart.vue";
import BarChart from "./../echarts/barChart.vue";
import LineChart from "./../echarts/lineChart.vue";
var pielistArr = [];
export default {
  name: "DynamicChar",
  components: {
    PieChart,
    MapChart,
    BarChart,
    LineChart
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      options: [
        {
          value: "2015",
          label: "2015"
        },
        {
          value: "2016",
          label: "2016"
        },
        {
          value: "2017",
          label: "2017"
        },
        {
          value: "2018",
          label: "2018"
        },
        {
          value: "2019",
          label: "2019"
        }
      ],
      value: ""
    };
  },
  mounted() {
    // this.$refs.mapChart.createMap();
    // this.$refs.barChart.createBar();
    // this.$refs.lineChart.createLine();
    this.mockMap();
    this.mockPie();
    this.mockBar();
    this.mockLine();
  },
  methods: {
    /**
     * 设置饼图Mock
     */
    mockPie() {
      let arg = {
        "arr|5": [
          {
            "value|1-100": 20,
            "name|+1": ["央企", "地方国企", "外资企业", "民营企业", "其他企业"]
          }
        ]
      }
      let data = Mock.mock("http://piePost", arg)
      this.mockPost({
        url:"http://piePost",
        method:"GET",
        success:(res)=>{
          // console.log(res);
          this.$refs.pieChart.createPie(res.arr);
        }
      })
    },
      /**
     * 设置地图Mock
     */
    mockMap() {
      let arg = {
        "arr|5-10": [
          {
            "value|1-100": 10,
            "name|+1":["北京","天津","河北", "山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","广东","广西","海南"]
          }
        ]
      }
      let data = Mock.mock("http://mapPost",arg)
      console.log(data)
      this.mockPost({
        url:"http://mapPost",
        method:"GET",
        success:(res)=>{
          // console.log(res);
          this.$refs.mapChart.createMap(res.arr);
        }
      })
    },
    /**
     * 设置柱状图Mock
     */
    mockBar(){
      let arg = {
        "arr|31":[
          {
            "name|+1":[
              "北京市","江苏省","天津市","河北省","安徽省",
              "浙江省","山东省","江西省","河南省","湖南省",
              "四川省","福建省","广西省","广东省","西藏",
              "新疆","台湾省","内蒙古省","黑龙江省","吉林省",
              "辽宁省","山西省","陕西省","宁夏省","青海省",
              "云南省","重庆市","上海市","湖北省","香港",
              "澳门"
            ],
            "value|1-500":50
          }
        ]
      }
      let data = Mock.mock("http://barPost",arg)
      this.mockPost({
        url:"http://barPost",
        method:"GET",
        success:(res)=>{
          // console.log(res);
           this.$refs.barChart.createBar(res.arr);
        }
      })
    },
    /**
     * 设置折线图Mock
     */
    mockLine(){
      let arg = {
        // "years|3-10":[2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
        "years|1":["@range(2012, 2019)"],
        "list|4":[
          {
            "name|+1":[
              "上市公司投资者波爱护状况客观评价得分","上市公司治理结构对投资者决策参与权的保护状况得分",
              "上市公司信息披露对投资者知情权的保护状况得分","上市公司经营活动对投资者投资收益权的保护状况得分"
            ],
            "type":"line",
            "stack":"总量",
            "data|7":[
              "@integer(0, 100)"
            ]
          }
        ]
      }
      let data = Mock.mock("http://linePost",arg)
      this.mockPost({
        url:"http://linePost",
        method:"GET",
        success:(res)=>{
          console.log(res);
          this.$refs.lineChart.createLine(res);
        }
      })
    },
    /**
     * Mock请求
     */
    mockPost(opt) {
      opt = opt || {};
      opt.method = opt.method.toUpperCase() || "POST";
      opt.url = opt.url || "";
      opt.data = opt.data || null;
      opt.success = opt.success || function(){};
      opt.fail = opt.fail || function(){};
      if(opt.method.toUpperCase() =="GET"){
        this.axios.get(opt.url).then(res => {
          console.log(res);
          if (res.status == 200) {
             opt.success(res.data);
          }else{
            opt.fail(res);
          }
        })
      }else if(opt.method.toUpperCase() =="POST"){
        this.axios.post(opt.url,opt.data).then(res => {
          if (res.status == 200) {
            opt.success(res.data);
          }else{
            opt.fail(res)
          }
        })
      }
    },
    selectChange(e) {
      console.log(e);
      this.updateChart();
    },
    async updateChart() {
      this.mockPie();
      await this.mockMap();
      await this.mockBar();
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.pieClass {
  width: 300px;
  height: 300px;
}
.mapClass {
  width: 500px;
  height: 500px;
}
.barClass {
  width: 800px;
  height: 500px;
  overflow-x: scroll;
  overflow-y: hidden;
}
.lineClass {
  width: 1200px;
  height: 300px;
}
</style>
