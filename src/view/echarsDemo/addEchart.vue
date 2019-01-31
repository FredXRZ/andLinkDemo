<template>
    <div>
        <div class="chart_container">
            <div class="all_chart" v-for="(item, index) in charList" :key="index">
                <BarChart v-if="item.type==0" :data="item.data" :chartId="item.id" class="barClass"></BarChart>
                <PieChart v-if="item.type==1" class="pieClass" :data="item.data" :chartId="item.id" ></PieChart>
                <MapChart v-if="item.type==2"  class="mapClass" :data="item.data" :chartId="item.id"></MapChart>
                <LineChart v-if="item.type==3" class="lineClass" :data="item.data" :chartId="item.id"></LineChart>
            </div>
            <a class="big_add_btn" @click="dialogFormVisible = true" >+</a>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item> -->
            <el-form-item label="展现方式" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择展示方式">
                    <el-option label="柱状图" value="0"></el-option>
                    <el-option label="饼图" value="1"></el-option>
                    <el-option label="地图" value="2"></el-option>
                    <el-option label="折线图" value="3"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="showChart">确 定</el-button>
        </div>
    </el-dialog>
    </div>
</template>
<script>
import Mock from "mockjs";
import PieChart from "@/components/echarts/pieChart.vue";
import MapChart from "@/components/echarts/mapChart.vue";
import BarChart from "@/components/echarts/barChart.vue";
import LineChart from "@/components/echarts/lineChart.vue";
export default {
    name:"addChart",
    data(){
        return {
            charList:[],
            barData:[],
            barId:null,
            lineData:[],
            lineId:null,
            mapData:[],
            mapId:null,
            pieData:[],
            pieId:null,
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    components: {
        PieChart,
        MapChart,
        BarChart,
        LineChart
    },
    // mounted(){
    //     this.mockBar()
    // },
    methods:{
        showChart(){
            console.log(this.form.region)
            let type = this.form.region;
            if(type==0){
                this.mockBar();
            }else if(type==1){
                this.mockPie();
            }else if(type==2){
                this.mockMap();
            }else if(type==3){
                this.mockLine();
            }
            this.dialogFormVisible=false;
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
            this.ajax({
                url:"http://barPost",
                method:"GET",
                success:(res)=>{
                    console.log(res);
                    let data = {
                    "id":"bar"+res.id,
                    "type":0,
                    "data":res.arr
                    }
                    this.charList.push(data)
                    console.log(this.charList)
                    // this.$refs.barChart.createChart(data);
                }
            })
        },
         /**
     * 设置饼图Mock
     */
    mockPie() {
      let arg = {
        "id":"@id",
        "arr|5": [
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
            let data = {
                "id":"pie"+res.id,
                "type":1,
                "data":res.arr
            }
            this.charList.push(data)
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
          console.log(res);
            let data = {
                "id":"pie"+res.id,
                "type":2,
                "data":res.arr
            }
            this.charList.push(data)
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
            let data = {
                "id":"pie"+res.id,
                "type":3,
                "data":res
            }
            this.charList.push(data)
        }
      })
    },
    }
}
</script>
<style>
    .chart_container{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .all_chart{
        width: 400px;
        height: 340px;
    }
    .barClass{
        width: 100%;
        height: 100%;
    }
    .pieClass {
  width: 100%;
        height: 100%;
}
.mapClass {
  width: 100%;
        height: 100%;
}
.lineClass {
  width: 100%;
        height: 100%;
}
    .big_add_btn{
        width: 400px;
        height: 400px;
        line-height: 400px;
        text-align: center;
        font-size: 200px;
        display: block;
        background: #ccc;
        color: #999

    }
</style>