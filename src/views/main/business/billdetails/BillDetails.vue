<template>
  <div>
    <page-header :header="header"></page-header>

    <table class="dashed" style="width: 300px;margin: auto;margin-top: 50px">
      <tr class="tr1">
        <td>户号</td>
        <td>1800908647</td>
      </tr>
      <tr>
        <td>账单月份</td>
        <td>201904</td>
      </tr>
      <tr>
        <td>上次抄表</td>
        <td>2019.03.01</td>
      </tr>
      <tr>
        <td>本次抄表</td>
        <td>2019.04.03</td>
      </tr>
      <tr>
        <td>上次到度</td>
        <td>56723立方米</td>
      </tr>
      <tr>
        <td>本次到度</td>
        <td>59186立方米</td>
      </tr>
      <tr>
        <td>抄表情况</td>
        <td>正常</td>
      </tr>
      <tr>
        <td>用水量</td>
        <td>2454立方米</td>
      </tr>
      <tr>
        <td>自来水费</td>
        <td>10674.90元</td>
      </tr>
      <tr>
        <td>污水费</td>
        <td>3067.50元</td>
      </tr>
      <tr>
        <td>垃圾费</td>
        <td>666.00元</td>
      </tr>
      <tr>
        <td>违约金</td>
        <td>0.00元(截至今日)</td>
      </tr>
    </table>

    <div style="width: 100%;height: 60px;background-color: dodgerblue;position: fixed;bottom: 30px">
      <div>
        <i class="el-icon-menu" style="margin-left: 30px;margin-top: 10px">
        </i>
        <i class="el-icon-menu" style="margin-left: 100px;margin-top: 10px">
        </i>
        <i class="el-icon-menu" style="margin-left: 100px;margin-top: 10px">
        </i>
      </div>

      <div style="margin-left: 11px">
        <div style="display: inline">
          <font size="2" color="#faebd7" @click="goWaterDetaild">水费明细</font>
        </div>
        <div style="display: inline;margin-left: 60px">
          <font size="2" color="#faebd7" @click="goSewageDetaild">污水费明细</font>
        </div>
        <div style="display: inline;margin-left: 52px">
          <font size="2" color="#faebd7" @click="goGarbageDetaild">垃圾费明细</font>
        </div>
      </div>
    </div>


    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'

  export default {
    name: 'BillDetaild',
    data() {
      return {
        labelPosition: 'top',
        header: {
          title: '账单明细',
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
      goWaterDetaild() {
        this.$router.push({name: 'WaterDetaild'})
      },
      goSewageDetaild() {
        this.$router.push({name: 'SewageDetaild'})
      },
      goGarbageDetaild() {
        this.$router.push({name: 'GarbageDetaild'})
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
    border-collapse: collapse;
  }

  .span1 {
    font-size: small;
    color: aliceblue;
    padding-top: 10px;
    padding-left: 22px;
  }

  .span2 {
    font-size: small;
    color: black;
    padding-top: 30px;
    padding-left: 10px;
  }

  td{
    padding-top: 12px;
    padding-left: 10px;
  }
  tr {
    border-width: 2px;
    border-style: dashed;
    border-color: rgb(238, 238, 238);
  }
</style>

