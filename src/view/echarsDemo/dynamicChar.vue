<template>
  <div class="container">
    <div>动态图表页面</div>
    <el-select class="elSelect" v-model="value" placeholder="请选择" @change="selectChange(value)">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <PieChart class="pieClass" :data="pieData" :chartId="pieId" ref="pieChart"></PieChart>
    <AreaChart class="areaClass"  ref="areaChart"></AreaChart>
    <MapChart  class="mapClass" :data="mapData" :chartId="mapId" ref="mapChart"></MapChart>
    <BarChart  class="barClass" :data="barData" :chartId="barId" ref="barChart"></BarChart>
    <LineChart class="lineClass" :data="lineData" :chartId="lineId" ref="lineChart"></LineChart>
    <div id="addContainer"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import Mock from "mockjs";
import PieChart from "@/components/echarts/pieChart.vue";
import MapChart from "@/components/echarts/mapChart.vue";
import BarChart from "@/components/echarts/barChart.vue";
import LineChart from "@/components/echarts/lineChart.vue";
import AreaChart from "@/components/echarts/areachart.vue";
var pielistArr = [];
export default {
  name: "DynamicChar",
  components: {
    PieChart,
    MapChart,
    BarChart,
    LineChart,
    AreaChart
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
      value: "",
      barData:[],
      barId:null,
      lineData:[],
      lineId:null,
      mapData:[],
      mapId:null,
      pieData:[],
      pieId:null
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
        "id":"@id",
        "arr|2-5": [
          {
            "value|1-100": 20,
            "name|+1": ["央企", "地方国企", "外资企业", "民营企业", "其他企业"]
          }
        ]
      }
      let data = Mock.mock("http://piePost", arg)
      this.ajax({
        url:"http://piePost",
        method:"GET",
        success:(res)=>{
          // console.log(res);
          this.pieData = res.arr;
          this.pieId = `pie${res.id}`;
          this.$nextTick(function () {
            this.$refs.pieChart.createChart();
          })
        }
      })
    },
      /**
     * 设置地图Mock
     */
    mockMap() {
      let arg = {
        "id":"@id",
        "arr|5-10": [
          {
            "value|1-100": 10,
            // "name|+1":["北京","天津","河北省", "山西省","内蒙古","辽宁省","吉林省","黑龙江省","上海","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","重庆省","四川省","贵州省","云南省","西藏省","陕西省","甘肃省","青海省","宁夏","新疆","广东省","广西省","海南省"]
            "name|+1":[
              "@province"
            ]
          }
        ]
      }
      let data = Mock.mock("http://mapPost",arg)
      // console.log(data)
      this.ajax({
        url:"http://mapPost",
        method:"GET",
        success:(res)=>{
          this.mapData = res.arr;
          this.mapId = `map${res.id}`;
          this.$nextTick(function () {
            this.$refs.mapChart.createChart();
          })
        }
      })
    },
    /**
     * 设置柱状图Mock
     */
    mockBar(){
      let arg = {
        "id":"@id",
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
      let that = this;
      this.ajax({
        url:"http://barPost",
        method:"GET",
        success:(res)=>{
          console.log(res);
          let data = {
            "id":"bar"+res.id,
            "data":res.arr
          }
          this.barData = res.arr;
          this.barId = `bar${res.id}`;
          let id = `bar${res.id}`;
          // this.$set(this,"barId",id);
          // this.$set(this,"barData",res.arr);
           this.$nextTick(function () {
             this.$refs.barChart.createChart();
           })
        }
      })
    },
    /**
     * 设置折线图Mock
     */
    mockLine(){
      let arg = {
        // "years|3-10":[2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
        "id":"@id",
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
      this.ajax({
        url:"http://linePost",
        method:"GET",
        success:(res)=>{
          // console.log(res);
          this.lineData = res;
          this.lineId = `line${res.id}`;
          this.$nextTick(function () {
            this.$refs.lineChart.createChart();
          })
        }
      })
    },
    selectChange(e) {
      // console.log(e);
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
.elSelect{
  display: block;
  position: absolute;
  top: 100px;
  left: 50%;
  z-index: 1000;
}
.pieClass {
  width: 400px;
  height: 300px;
}
.areaClass{
  width: 400px;
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
