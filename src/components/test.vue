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
            <tbody>
                <tr>
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
                </tr>
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
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'40'
                              }
                            ]
                        },
                        {
                            name:'二级指标内容',
                            score:'60',
                            thirdLever:[
                              {
                                name:'三级指标内容',
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'40'
                              }
                            ]
                        },
                        {
                            name:'二级指标内容',
                            score:'60',
                            thirdLever:[
                              {
                                name:'三级指标内容',
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'40'
                              },
                              {
                                name:'三级指标内容',
                                score:'40'
                              }
                            ]
                        },
                    ],
                },
            ]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        console.log(row)
        console.log(column)
        console.log(rowIndex)
        console.log(columnIndex)
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
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