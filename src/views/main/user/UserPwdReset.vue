<template>
  <div>
    <page-header :header="header"></page-header>

    <div class="form">
      <mt-field label="手机号码：" placeholder="请输入手机号码" v-model="reset.phone"></mt-field>
      <mt-field label="验证码：" placeholder="请输入验证码" v-model="reset.code">
        <mt-button style="margin-left: 10px" size="small" type="primary">获取验证码</mt-button>
      </mt-field>
      <mt-field label="新密码：" type="password" placeholder="请输入密码" v-model="reset.pwd"></mt-field>
      <mt-field label="确认密码：" type="password" placeholder="请输入确认密码" v-model="reset.confirm"></mt-field>
      <span class="btn">
        <mt-button class="item" size="small" type="primary" @click="submitForm">提交</mt-button>
        <mt-button class="item" size="small" type="primary" @click="goback">返回</mt-button>
      </span>
    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'
  import { checkPhone, checkCode, checkPwd } from '@/utils/validate'
  export default {
    name: 'UserPwdReset',
    data() {
      return {
        labelPosition: 'right',
        reset: {
          phone: '',
          code: '',
          pwd: '',
          confirm: ''
        },
        header: {
          title: '找回密码',
        },
        codeLoginType: true,
      }
    },
    components: {
      PageHeader,
      Copyright
    },
    methods: {
      submitForm() {

      },
      resetForm() {

      },
      goback() {
        history.go(-1)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .form {
    margin: 14% 10px 10px;
  }
  .btn {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 100px;
    .item {
      margin-top: 6%;
      width: 100px;
    }
  }
</style>

