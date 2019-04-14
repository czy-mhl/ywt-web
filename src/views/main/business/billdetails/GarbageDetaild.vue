<template>
  <div>
    <page-header :header="header"></page-header>

    <div style="width: 320px;height: 50px;background-color: dodgerblue;margin-top: 50px;margin-left: 15px">
      <div style="margin-left: 50px;">
        <font size="2" color="#f0f8ff">征收月份</font>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <font size="2" color="#f0f8ff">垃圾费</font>
      </div>
      <div style=";width: 320px;height: 20px;background-color: antiquewhite">
        <div style="margin-left: 50px">
        <font size="2" color="black">201903</font>
          &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font size="2" color="black">666.00</font>
        </div>
      </div>
    </div>
    <div>
      <div style="margin-left: 17px;font-size: small">
        注：<br><br>
      </div>
      <div style="margin-left: 40px;font-size: small">如有疑问可向xx市城市综合管理执法局咨询。</div>
    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'

  export default {
    name: 'GarbageDetaild',
    data() {
      return {
        labelPosition: 'top',
        header: {
          title: '垃圾处理费明细',
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
</style>

