<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>一级指标(权重%)</th>
                    <th>得分</th>
                    <th>二级指标(权重%)</th>
                    <th>得分</th>
                    <th>三级指标(权重%)</th>
                    <th>得分</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in tableInfo" :key="index">
              <tr v-for="(val, key) in tableTimes.allRow" :key="key">
                <td>{{item.name}}</td>
                <td>{{item.score}}</td>
                <td>{{item.secondLever[index].name}}</td>
                <td>{{item.secondLever[index].score}}</td>
                <td>{{val.name}}</td>
                <td>{{val.score}}</td>
              </tr>
                <!-- <tr>
                    <td rowspan="3">上市公司治理结构对投资这决策参与权的保护程度</td>
                    <td rowspan="3">73.56</td>
                    <td rowspan="3">1.1公司治理及内控有效性</td>
                    <td rowspan="3">84.62</td>
                    <td>1.1.1治理文件的制定情况</td>
                    <td>53.85</td>
                </tr>
                <tr>
                    <td>1.1.2董事长与总经理兼任情况</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>1.1.3内部控制有效性</td>
                    <td>100</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
        // 数据格式
                tableInfo:[{
                    name:'一级指标内容',
                    score:'80',
                    secondLever:[
                        {
                            name:'二级指标内容',
                            score:'61',
                            thirdLever:[
                              {
                                name:'三级指标内容',
                                score:'10'
                              },
                              {
                                name:'三级指标内容',
                                score:'20'
                              },
                              {
                                name:'三级指标内容',
                                score:'30'
                              }
                            ]
                        },
                        {
                            name:'二级指标内容',
                            score:'70',
                            thirdLever:[
                              {
                                name:'三级指标内容',
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'50'
                              },
                              {
                                name:'三级指标内容',
                                score:'60'
                              }
                            ]
                        },
                        {
                            name:'二级指标内容',
                            score:'80',
                            thirdLever:[
                              {
                                name:'三级指标内容',
                                score:'70'
                              },
                              {
                                name:'三级指标内容',
                                score:'80'
                              },
                              {
                                name:'三级指标内容',
                                score:'90'
                              }
                            ]
                        },
                    ],
                },
            ],
            tableTimes:{
              secondRow:[],
              allRow:[]
            }
      };
    },
    mounted(){
      this.createTable()
    },   
    methods: {
      createTable(){
        let obj = this.tableInfo;
        console.log(obj)
        let len = 0;
        let arr = [];
        console.log(obj)
        obj.map(item=>{
          if(item.secondLever){
            this.tableTimes.secondRow.push(item.secondLever.length)
            item.secondLever.map((val,key)=>{
              val.rowSpan = key;
              if(val.thirdLever){
                console.log(val.thirdLever)
                val.thirdLever.map(value=>{
                  arr.push(value)
                })
              }
            })
          }
        })
        
        console.log( this.tableTimes.secondRow)
        console.log(arr)
        this.tableTimes.allRow = [...arr];
      }
    }
  };
</script>
<style scoped>
    table{
        margin-top: 15px;
        width: 100%;
        border:1px solid #e9eaec;
        border-collapse:collapse
    }
    th{
        background-color: #f8f8f9;
    }
    th,td{
        padding: 5px;
        border: 1px solid #e9eaec;
        text-align: center;
        vertical-align: top;
        line-height: 30px;
    }
</style>