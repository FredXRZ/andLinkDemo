<template>
    <div>
        <div class="title">
            指标详情-2.2重大事项披露
            <span class='back iconfont icon-ai207'>返回</span>
        </div>
        <div class="quota-msg">
            <div class="title">
                指标信息
            </div>
            <div class="table-container">
                <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="tableHeaderColor">
            <el-table-column
                prop="define"
                label="指标定义"
                :render-header="renderHeader">
            </el-table-column>
            <el-table-column
                prop="legalCapacity"
                label="法律依据"
                :render-header="renderHeader">
            </el-table-column>
            <el-table-column
                prop="dataSource"
                label="数据来源"
                :render-header="renderHeader">
            </el-table-column>
            <el-table-column
                prop="formula"
                label="观察值量化公式">
            </el-table-column>
            <el-table-column
                prop="notFormula"
                label="观察值无量化公式">
            </el-table-column>
            <el-table-column
                prop="quotaWeight"
                label="指标权重"
                :render-header="renderHeader">
            </el-table-column>
            </el-table>
            </div>
        </div>
        <div class="change-record">
            <div class="title">
                变更记录
            </div>
            <div class="change-container">
                <div class="change-item">
                    <div class="instruction">
                        <span style="color:#999">说明:</span>
                        指标初步建立，用于反映上市公司信息发布的及时性
                    </div>
                    <div class="sender">创建/修改人：<span style="color:#333;font-weight:600">刘佳倩</span></div>
                </div>
                <div class="change-item">
                    <div class="instruction">
                        <span style="color:#999">说明:</span>
                        指标初步建立，用于反映上市公司信息发布的及时性
                    </div>
                    <div class="sender">创建/修改人：<span style="color:#333;font-weight:600">刘佳倩</span></div>
                </div>
                <div class="change-item">
                    <div class="instruction">
                        <span style="color:#999">说明:</span>
                        指标初步建立，用于反映上市公司信息发布的及时性
                    </div>
                    <div class="sender">创建/修改人：<span style="color:#333;font-weight:600">刘佳倩</span></div>
                </div>
                <div class="change-item">
                    <div class="instruction">
                        <span style="color:#999">说明:</span>
                        指标初步建立，用于反映上市公司信息发布的及时性
                    </div>
                    <div class="sender">创建/修改人：<span style="color:#333;font-weight:600">刘佳倩</span></div>
                </div>
            </div>
        </div>
        <div class="time-line">
            <span><i>2018-9</i></span>
            <span><i>2018-9</i></span>
            <span><i>2018-9</i></span>
            <span><i>2018-9</i></span>
        </div>
    </div>
</template>

<script>
import '../../assets/font_7uobeu4vjs3/iconfont.css'
export default {
    methods:{
        renderHeader(h,{column}){
            return h(
                'div',
                [ 
                    h('span', column.label),
                    h('i', {
                    class:'el-icon-edit-outline',
                    style:'color:#409eff;margin-left:40px;cursor:pointer;font-size:13px',
                    on:{
                        click:()=>{
                            this.handlerClick()
                        }
                    }
                    },'编辑')
                ],
            )
        },

        tableHeaderColor({ row, column, rowIndex, columnIndex }){
            if (rowIndex === 0) {
                return 'background-color: rgba(242,244,247,1);color: #333333;font-size: 16px;padding:0'
            }
        },

        handlerClick(){
            console.log(1)
        }
    },
     data() {
        return {
          tableData: [{
            define: '本指标为点指标，取值范围为非负整数。上市公司本年度每披露一次年度业绩预告（或快报）更正公告，就计为1，可累加。',
            legalCapacity: '证监会于2007年1月30日颁布的《上市公司信息披露管理办法》第二十五条规定“上市公司预计经营业绩发生亏损或者发生大幅变动的，应当及时进行业绩预告”上交所…【查看详情】',
            dataSource: '证监会于2007年1月30日颁布的《上市公司信息披露管理办法》第二十五条规定“上市公司预计经营业绩发生亏损或者发生大幅变动的，应当及时进行业绩预上交所于2014…【查看详情】',
            formula: '=上市公司本年度每披露一次年度业绩预告（或快报）更正公告，就计为1，可累加。',
            notFormula: '其中， 为观察值 的无量纲化值， 为“年度业绩预披露的偏差情况”，j为“公历年＋公司代码”…',
            quotaWeight: '33%'
          }]
        }
      }
}
</script>

<style scoped>
    .title{
        width: 1200px;
        height: 42px;
        margin:0 auto;
        border-left:6px solid #0071C9;
        text-align-last: left;
        background-color: #eee;
        line-height: 42px;
        padding-left: 14px;
        box-sizing: border-box;
        margin-bottom: 15px;
    }
    .back{
        float: right;
        padding-right: 15px;
        color:#3FA5FD;
        font-size: 14px;
        cursor: pointer;
    }
    .quota-msg{
        border:1px solid #eee;
        width: 1200px;
        margin:0 auto 15px;

        /* background-color: #eee; */
    }
    .quota-msg>.title,
    .change-record>.title{
        width: 1200px;
        height: 42px;
        margin:0 auto;
        border-left:6px solid #3FA5FD;
        text-align-last: left;
        background-color: #fff;
        line-height: 42px;
        padding-left: 14px;
    }
    .table-container{
        width: 100%;
        padding:0 10px;
        margin-top: 10px;
        box-sizing: border-box;
    }
    .el-table .cell{
        text-align: center!important;
    }
    .change-container{
        /* margin-top:36px; */
        width: 1200px;
        height: 200px;
        margin:36px auto 0;
        display: flex;
        justify-content: space-around;
    }
    .change-item{
        position:relative;
        width: 160px;
        height: 200px;
        background:rgba(242,244,247,1);
        box-shadow:1px 1px 2px 0px rgba(0,0,0,0.25);
        border-radius:2px;
        border:1px solid rgba(242,244,247,1);
        padding:0 8px;
    }
    .instruction{
        font-size: 14px;
        color:#333;line-height: 24px;
        font-weight: 600;
        text-align: left
    }
    .sender{
        position:absolute;
        bottom:8px;
        left:8px;
        font-size: 14px;
        color:#999;
        font-weight: 600
    }
    .time-line{
        position:relative;
        /* margin-top: 22px; */
        width: 912px;
        height: 2px;
        background-color: #ddd;
        margin:22px auto 0
    }
    .time-line>span{
        display: inline-block;
        border-radius:50%;
        position:absolute;
        top:-8px;
    }
    .time-line>span:nth-child(1){
        width: 18px;
        height: 18px;
        background-color: #3FA5FD;
        left:-9px;
        top:-8px;
        color:#3FA5FD;
    }
    .time-line>span:nth-child(2){
        width: 11px;
        height: 11px;
        background-color: #ddd;
        left:303px;
        color:#ddd;
        top:-4px
    }
    .time-line>span:nth-child(3){
        width: 11px;
        height: 11px;
        background-color: #ddd;
        left:602px;
        color:#ddd;
        top:-4px
    }
    .time-line>span:nth-child(4){
        width: 11px;
        height: 11px;
        background-color: #ddd;
        right:0;
        color:#ddd;
        top:-4px
    }
    .time-line>span:nth-child(1)>i{
        width: 50px;
        position: absolute;
        font-size:14px;
        font-style: normal;
        font-family:PingFangSC-Regular;
        left:-14px;
        top:17px;
        line-height:22px;
    }
    .time-line>span:nth-child(2)>i,
    .time-line>span:nth-child(3)>i,
    .time-line>span:nth-child(4)>i{
        width: 50px;
        position: absolute;
        font-size:14px;
        font-style: normal;
        font-family:PingFangSC-Regular;
        left:-18px;
        top:12px;
        line-height:22px;
    }
</style>
