<template>
  <div>
    <page-header :header="header"></page-header>

    <div>
      <div style="margin-left: 15px;margin-top: 50px">
        <span1 style="font-size: small;color: darkgrey">
          尊敬的用户你当前的预存余额为:
        </span1>
      </div>

      <div style="margin-top: 10px;margin-left: 150px">
        <span2 style="font-size: x-large;color: deepskyblue">
          0.00元
        </span2>
      </div>
      <div>
        <button class="mint-button mint-button--primary mint-button--normal"
                style="width: 220px;height: 40px;margin-left: 70px">
          <label class="mint-button-text">预存</label>
        </button>
      </div>

      <div style="margin-top: 20px;margin-left: 20px">
        <span style="font-size: small;color: deepskyblue">
        温馨提示：<br>
        1.交清欠款才能预存。<br>
        2.预存金额大于欠费总金额才能成功扣款。
        </span>
      </div>

      <div style="margin-top: 20px;margin-left: 40px">
        <span style="font-size: medium;color: deepskyblue">
        余额变动明细
        </span>
      </div>

      <table style="width: 350px;height: auto;margin-top: 10px;margin-left:5px; border: 1px solid deepskyblue">
        <tr style="font-size: medium;">
          <th>时间</th>
          <th>存入</th>
          <th>支出</th>
          <th>余额</th>
          <th>摘要</th>
        </tr>
        <tr v-for="userbill in userList" :key="userbill.id">
          <td>{{userbill.lasttime}}</td>
          <td>{{userbill.deposit}}</td>
          <td>{{userbill.expenditure}}</td>
          <td>{{userbill.balance}}</td>
          <td>{{userbill.abstract}}</td>
        </tr>
      </table>


    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'

  export default {
    name: 'UserStoredInformation',
    data() {
      return {
        labelPosition: 'top',
        header: {
          title: '账户预存信息',
          img: ''
        },
        userList: [
          { lasttime: '20120626', deposit: '9627.40', expenditure: '9627.40', balance: '0.00', abstract: '201206账单' },
          { lasttime: '20120626', deposit: '9627.40', expenditure: '9627.40', balance: '0.00', abstract: '201206账单' },
          { lasttime: '20120626', deposit: '9627.40', expenditure: '9627.40', balance: '0.00', abstract: '201206账单' },
          { lasttime: '20120626', deposit: '9627.40', expenditure: '9627.40', balance: '0.00', abstract: '201206账单' },
          { lasttime: '20120626', deposit: '9627.40', expenditure: '9627.40', balance: '0.00', abstract: '201206账单' }
        ]
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
  td {
    font-size: small;
  }

  tr {
    padding-top: 20px;
    height: 50px;
    border: #CCCCCC 1px solid;
  }
</style>

