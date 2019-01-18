<template>
    <div>
    <h2>测试demo</h2>
    <el-row>
      <el-button  plain type="success" @click="goTree()">树状图demo</el-button>
      <el-button  plain type="info" @click="dynamic()">饼状图demo</el-button>
      <el-button  plain type="warning">中国地图demo</el-button>
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
            this.$router.push('/mergecell')
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
            this.$router.push('/treeChart')
        }
    }
}
</script>