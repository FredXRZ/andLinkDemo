<template>
<div>
    <ul class="container">
        <li>
            公司类型:
            <div class="btns">
                <el-radio @change="handlerChange" v-model="radio" label="1" border>央企</el-radio>
                <el-radio @change="handlerChange" v-model="radio" label="2" border>外资</el-radio>
                <el-radio @change="handlerChange" v-model="radio" label="3" border>地方国企</el-radio>
                <el-radio @change="handlerChange" v-model="radio" label="4" border>民营企业</el-radio>
            </div>
        </li>
        <li>
            行业类型:
            <el-select @change='handleSelectIndustry' style="marginLeft:50px;width:150px;marginRight:20px" v-model="value1" placeholder="请选择">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            所在省份：
            <el-select @change='handleSelectProvince' style="width:150px" v-model="value2" placeholder="请选择">
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </li>
        <li>
            上市时间:
            <el-select disabled @change='beListedStart' style="marginLeft:50px;width:150px;marginRight:20px" v-model="value3" placeholder="请选择">
                <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            至
            <el-select disabled @change='beListedEnd' style="marginLeft:50px;width:150px;marginRight:20px" v-model="value4" placeholder="请选择">
                <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </li>
        <li>
            公司规模:
            <el-select @change="companySizeStart" style="marginLeft:50px;width:150px;marginRight:20px" v-model="value5" placeholder="请选择">
                <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            至
            <el-select @change="companySizeEnd" style="marginLeft:50px;width:150px;marginRight:20px" v-model="value6" placeholder="请选择">
                <el-option
                v-for="item in options6"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </li>
        <li style="display:flex;justify-content:space-around;marginTop:60px;marginLeft:0">
            <el-button>重置</el-button>
            <el-button @click="handleConfirm">确认筛选</el-button>
        </li>
    </ul>
    <div class="change-icon">
        <span 
            style="display:inline-block;font-size:26px;cursor:pointer" 
            class="iconfont icon-guanzhu"
            v-show='isShow' 
            @click='handlerIsShow()'>
        </span>
        <span 
            style="display:inline-block;font-size:26px;cursor:pointer" 
            class="iconfont icon-tianchongxing-"
            v-show='!isShow'
            @click='handlerIsShow()'>
        </span>
    </div>
    <div class="companyName">
        {{text}}
    </div>
    </div>
</template>
<script>
import '../assets/font_dzbegyr6mku/iconfont.css'
export default {
    data(){
        return{
            text:'安联科技',
            isShow:true,
            radio: '1',
            options1: [{
                value: '全部',
                label: '全部'
                }, {
                value: '金融业',
                label: '金融业'
                }, {
                value: '房地产业',
                label: '房地产业'
                }, {
                value: '医药业',
                label: '医药业'
                }, {
                value: '纺织业',
                label: '纺织业'
            }],
            options2: [{
                value: '江苏省',
                label: '江苏省'
                }, {
                value: '浙江省',
                label: '浙江省'
                }, {
                value: '安徽省',
                label: '安徽省'
                }, {
                value: '河南省',
                label: '河南省'
                }, {
                value: '江西省',
                label: '江西省'
            }],
            options3: [{
                value: '2015',
                label: '2015'
                }, {
                value: '2016',
                label: '2016'
                }, {
                value: '2017',
                label: '2017'
                }, {
                value: '2018',
                label: '2018'
                }, {
                value: '2019',
                label: '2019'
            }],
            options4: [{
                value: '2015',
                label: '2015'
                }, {
                value: '2016',
                label: '2016'
                }, {
                value: '2017',
                label: '2017'
                }, {
                value: '2018',
                label: '2018'
                }, {
                value: '2019',
                label: '2019'
            }],
            options5: [{
                value: '0',
                label: '0'
                }, {
                value: '99',
                label: '99'
                }, {
                value: '999',
                label: '999'
                }, {
                value: '9999',
                label: '9999'
                }, {
                value: '9999+',
                label: '9999+'
            }],
            options6: [{
                value: '99',
                label: '99'
                }, {
                value: '999',
                label: '999'
                }, {
                value: '9999',
                label: '9999'
                }, {
                value: '99999',
                label: '99999'
                }, {
                value: '9999+',
                label: '9999+'
            }],
                companyType:'',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
        }
    },
    methods:{
        handlerIsShow(){
            this.isShow = !this.isShow;
            if(!this.isShow){
                this.text = '已关注安联科技'
            }else{
                this.text = '安联科技'
            }
        },
        handlerChange(value){
            this.companyType = value;
            // console.log(this.companyType)
        },
        handleSelectIndustry(value){
            this.value1 = value
            // console.log(this.value1)
        },
        handleSelectProvince(value){
            this.value2 = value
            // console.log(this.value2)
        },
        beListedStart(value){
            this.value3 = value
            // console.log(this.value3)
        },
        beListedEnd(value){
            this.value4 = value
            // console.log(this.value4)
        },
        companySizeStart(value){
            this.value5 = value
            // console.log(this.value5)
        },
        companySizeEnd(value){
            this.value6 = value
            // console.log(this.value6)
        },
        handleConfirm(){
            let obj = {
                companyType:this.companyType,
                IndustryType:this.value1,
                province:this.value2,
                beListedStart:this.value3,
                beListedEnd:this.value4,
                companySizeStart:this.value5,
                companySizeEnd:this.value6
            }
            console.log(obj)
        }
    }
}
</script>
<style scoped>
.container{
    width: 50%;
    height: 400px;
    margin: 0 auto;
    padding-top: 44px;
    box-sizing: border-box;
    border:1px solid #000;
    border-radius: 10px;
}
.container>li{
    display: block;
    list-style:none;
    text-align-last: left;
    margin-left:50px;
    line-height: 50px;
}
.container>li>.btns{
    display: inline-block;
    margin-left: 50px;
}
</style>


