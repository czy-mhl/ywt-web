<template>
  <div>
    <page-header :title="header.title"></page-header>

    <div>
      <div style="margin-left: 15px;margin-top: 7px">
        <span1 style="font-size: small;color: darkgrey">
          尊敬的用户你当前的预存余额为:
        </span1>
      </div>

      <div style="margin-top: 10px">

        <span2 style="font-size: x-large">
          <i class="el-icon-loading"></i>
          0.00元
        </span2>

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
        labelPosition: 'top',
        header: {
          title: '账户预存信息',
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
  span2{
    text-align: center;
    display: block;
  }
</style>

