<template>
    <div>
    <h2>测试demo</h2>
    <el-row>
      <el-button  plain type="success" @click="goTree()">树状图demo</el-button>
      <el-button  plain type="info" @click="dynamic()">select更新echarts</el-button>
      <el-button  plain type="warning" @click="goAdd()">动态添加demo</el-button>
      <el-button  plain type="danger" @click="switchDemo()">图表切换</el-button>
      <el-button @click="mergeCells()">合并单元格demo</el-button>
      <el-button  plain type="primary" @click="upload()">文件批量上传demo</el-button>
    </el-row>
    </div>
</template>
<script>
export default {
    name:'start',
    data(){
        return {}
    },
    methods:{
        mergeCells(){
            this.$router.push('/test')
        },
        upload(){
            this.$router.push('/upload')
        },
        dynamic(){
            this.$router.push('/dynamic')
        },
        switchDemo(){
            this.$router.push('/switchdemo')
        },
        goTree(){
            this.$router.push('/treeCharts')
        },
        goAdd(){
            this.$router.push('/addEchart')
        }
    }
}
</script>