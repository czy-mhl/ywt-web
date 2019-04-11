<template>
  <div>
    <page-header :title="header.title"></page-header>

    <!-- 没有右边框 -->
    <table class="dashed table1" style="width: 330px;height: 100px;margin: auto">
      <tr class="dashed">
        <td>
          <font size="2">账单月份</font>
        </td>
        <td>
          <font size="2">201904</font>
        </td>
        <td>
        </td>
        <td>
        </td>

      </tr>
      <tr class="dashed">
        <td>
          <font size="2">用水量</font>
        </td>
        <td>
          <font size="3" color="#00bfff">2454</font>
          <font size="2">立方米</font>
        </td>
      </tr>
      <tr class="dashed">
        <td>
          <font size="2">自来水费</font>
        </td>
        <td>
          <font size="3" color="#00bfff">10674.90</font>
          <font size="2">元</font>
        </td>
      </tr>
    </table>

    <!-- 水费组成 -->
    <div style="bottom: 50px">
      <div>
        <i
          class="el-icon-document"
          style="margin-left: 30px;margin-top: 10px;color: #00bfff;font-size: 22px">
        </i>
        <font size="2" style="color: #00bfff;margin-left: 5px">水费组成</font>
      </div>
    </div>

    <div style="width: 320px;height: 80px;margin-top: 10px; margin-left: 20px;background-color: dodgerblue">
      <div>
        <span class="span1">
        类别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </span>
      <span class="span1">
        单价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </span>
      <span class="span1">
        水量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        </span>
      <span class="span1">
        金额
        </span>
    </div>
      <div style="width: 320px;height: 40px;background-color: darkgrey;margin-top: 8px">
        <span class="span2">
        工商用水&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="span2">
        4.35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="span2">
        2454&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="span2">
        10674.90
        </span>
      </div>
    </div>

    <div style="font-size: small;color: deepskyblue;margin-left: 20px;margin-top: 10px;margin-right: 20px">
      注: <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      用水单位及阶梯级水价请查询"谁家标准"，混合用水比例请查询"我的档案"功能。
    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'

  export default {
    name: 'WaterDetaild',
    data() {
      return {
        labelPosition: 'top',
        header: {
          title: '水费组成明细',
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

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .divOuterLayer {
    position: relative;
    padding: 8px;
    display: flex;
    align-items: center;
    z-index: 100;
    border-bottom: 1px solid #dcdcdc;
    background-color: transparent;
    width: 100%;
  }

  .divInnerLayer {
    margin-left: 30px;
    width: 100%;
    white-space: nowrap;
    word-break: break-all;
  }

  .dashed {
    border-width: 2px;
    border-style: dashed;
    border-color: rgb(238, 238, 238);
    border-image: initial;
  }

  .table1 {
    border-collapse: collapse;
  }

  .span1 {
    font-size: small;
    color: aliceblue;
    padding-top: 10px;
    padding-left: 22px;
  }
  .span2{
    font-size: small;
    color: black;
    padding-top: 30px;
    padding-left: 10px;
  }
</style>

