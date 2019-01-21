<template>
    <table
        cellspacing="0"
        border="1">
        <!-- 顶部title -->
        <tr>
            <th>一级指标</th>
            <th>得分</th>
            <th>二级指标</th>
            <th>得分</th>
            <th>三级指标</th>
            <th>得分</th>
        </tr>
        <!-- 暂无数据时显示 -->
        <tr v-if="!tableInfo">
                <td :colspan="6">
                    暂无数据
                </td>
        </tr>
        <!-- template不会被渲染 -->
        <template v-for="(item,index) in tableInfo">
            <!-- 左边跨行区域 -->
            <tr>
                <td :rowspan="item.secondLever.length+1+item.secondLever[index].thirdLever.length+1">{{item.name}}</td>
                <td :rowspan="item.secondLever.length+1+item.secondLever[index].thirdLever.length+1">{{item.score}}</td>
            </tr>
            <!-- 中间数据 -->
            <tr v-for="(son,index) in item.secondLever" :key="index">
                <td>{{son.name}}</td>
                <td>{{son.score}}</td>
            </tr>
            <!-- 右边数据 -->
            <tr v-for="(child,index) in item.secondLever[index].thirdLever" :key="index">
                <td>{{child.name}}</td>
                <td>{{child.score}}</td>
            </tr>
        </template>
    </table>
</template>
<script>
    export default {
        data(){
            return{
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
                // {
                //     name:'一级指标内容',
                //     score:'80',
                //     secondLever:[
                //         {
                //             name:'二级指标内容',
                //             score:'61',
                //             thirdLever:[
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               },
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               },
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               }
                //             ]
                //         },
                //         {
                //             name:'二级指标内容',
                //             score:'60',
                //             thirdLever:[
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               },
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               },
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               }
                //             ]
                //         },
                //         {
                //             name:'二级指标内容',
                //             score:'60',
                //             thirdLever:[
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               },
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               },
                //               {
                //                 name:'三级指标内容',
                //                 score:'40'
                //               }
                //             ]
                //         },
                //     ],
                // },
                ]
            }
        }
    }
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