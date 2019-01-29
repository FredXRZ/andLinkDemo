<template>
    <div style="overflow:hidden">
        <ul class="left-content">
            <li class="title">基本信息</li>
            <li @click="returnTop('#test1')">工商信息</li>
            <li class="title">投保评估</li>
            <li  @click="returnTop('#test2')">评估得分态势</li>
            <li @click="returnTop('#test3')">评估详情</li>
            <li class="title">处罚信息</li>
            <li @click="returnTop('#test4')">环保处罚</li>
            <li @click="returnTop('#test5')">安监处罚</li>
            <li @click="returnTop('#test6')">工商处罚</li>
            <li class="title">其他信息</li>
            <li @click="returnTop('#test7')">公司章程</li>
            <li @click="returnTop('#test8')">公司年报</li>
            <li @click="returnTop('#test9')">公司季报</li>
            <li @click="returnTop('#test10')">公司公告</li>
        </ul>
        <div class="container">
            <div style='height:300px' id="test1">
                <h2>工商信息</h2>
            </div>
            <div style='height:400px' id="test2">
                <h2>评估得分态势</h2>
            </div>
            <div style='height:400px' id="test3">
                <h2>评估详情</h2>
            </div>
            <div style='height:400px' id="test4">
                <h2>环保处罚</h2>
            </div>
            <div style='height:400px' id="test5">
                <h2>安监处罚</h2>
            </div>
            <div style='height:400px' id="test6">
                <h2>工商处罚</h2>
            </div>
            <div style='height:400px' id="test7">
                <h2>公司章程</h2>
            </div>
            <div style='height:400px' id="test8">
                <h2>公司年报</h2>
            </div>
            <div style='height:400px' id="test0">
                <h2>公司季报</h2>
            </div>
            <div style='height:400px'  id="test10">
                <h2>公司公告</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        returnTop(selector){
            document.querySelector(selector).scrollIntoView(true);
            
        }
    }
}
</script>



<style scope>
    *{
        margin: 0;
        padding: 0;
        list-style: none
    }
    .title{
        font-weight: bold;
        text-align: left;
        margin-left: 20%;
        cursor:default!important;
    }
    .left-content{
        position:  fixed;
        left:0;
        top:100px;
        width: 250px;
        border:1px solid #000;
        float: left;
        box-sizing: border-box;
    }
    .left-content>li{
        line-height: 40px;
        cursor: pointer;
    }

    .container{
        width:calc(100% - 250px);
        float: right;
    }
</style>
