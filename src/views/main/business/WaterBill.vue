<template>
  <div>
    <page-header :header="header"></page-header>

    <div class="divOuterLayer">
      <div class="divInnerLayer">
        <font size="2" color="black">
          201904
        </font>
        <a href="#">
          <span>
            <font size="2" @click="goBillDetaild">账单详情</font>
            <i class="el-icon-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="divOuterLayer">
      <div class="divInnerLayer">
        <div class="divSpan">
          <font size="2" color="#00bfff">
            金额
          </font>
          <span style="float: right;" v-if="show">
            <font size="2" color="#a9a9a9">
                  {{ msg }}
            </font>
          </span>
        </div>

        <!--<div class="divSpan">-->
        <!--<font class="fontMoney">-->
        <!--14408.40元-->
        <!--</font>-->
        <!--<span style="float: right;">-->
        <!--<font size="2" color="#a9a9a9">-->
        <!--发票开具-->
        <!--</font>-->
        <!--</span>-->
        <!--</div>-->

        <div class="divSpan">
          <font size="2" color="#00bfff">
            14000元
          </font>
          <span style="float: right;">
            <font size="2" color="#a9a9a9">
              发票开具
            </font>
          </span>
        </div>

      </div>
    </div>

    <div class="divOuterLayer">
      <div class="divInnerLayer">
        <font size="2" color="black">
          201904
        </font>
        <a href="#">
          <span>
            <font size="2" @click="goBillDetaild">账单详情</font>
            <i class="el-icon-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="divOuterLayer">
      <div class="divInnerLayer">
        <div class="divSpan">
          <font size="2" color="#00bfff">
            金额
          </font>
          <span style="float: right;" v-if="show">
            <font size="2" color="#a9a9a9">
                  {{ msg }}
            </font>
          </span>
        </div>

        <div class="divSpan">
          <font size="2" color="#00bfff">
            898989.89元
          </font>
          <a style="float: right;">
            <font size="2">
              发票查看
            </font>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>


    <div style="position: fixed;bottom: 50px">
    <div>
      <i
        class="el-icon-document"
        style="margin-left: 30px;margin-top: 10px;color: #00bfff;font-size: 22px">
      </i>
      <font size="2" style="color: #00bfff;margin-left: 5px">指定月账单</font>
    </div>

    <div style="margin-top: 10px">
      <input style="margin-left: 70px" type="text" placeholder="请输入查询账单月"></input>
      <button class="mint-button mint-button--primary mint-button--small"><!----> <label class="mint-button-text">查询</label></button>
    </div>
    <div style="margin-left: 30px;margin-top: 10px">
      <font size="2">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尊敬的用户，请输入需要查询的账单月，如查询2014年1月，请输入201401
      </font>
    </div>
    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'

  export default {
    name: 'WaterBill',
    data() {
      return {
        show: true,
        msg: '未交费 未开票',
        labelPosition: 'top',
        header: {
          title: '最近一年账单',
          img: ''
        }
      }
    },
    components: {
      PageHeader,
      Copyright
    },
    methods: {
      inviteClick() {
        this.isInvite = true
      },
      submitForm() {

      },
      resetForm() {

      },
      goBillDetaild() {
        this.$router.push({name: 'BillDetaild'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  a {
    color: #1e90ff;
    float: right;
  }

  .divSpan {
    line-height: 30px;
  }

  .divSearch{
    position: absolute;
    padding: 17px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .divOuterLayer{
    border-bottom:1px solid #d3dce6;
    margin: 50px;
  }

  .divInnerLayer{
    margin-top: 10px;

  }
</style>

