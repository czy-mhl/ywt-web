<template>
  <div>
    <page-header :header="header"></page-header>

    <div class="form">
      <mt-field label="手机号码：" placeholder="请输入手机号码" v-model="login.phone"></mt-field>
      <mt-field v-if="codeLoginType" label="验证码：" placeholder="请输入验证码" v-model="login.code">
        <mt-button style="margin-left: 10px" size="small" type="primary">获取验证码</mt-button>
      </mt-field>
      <mt-field v-else label="密码：" type="password" placeholder="请输入密码" v-model="login.pwd">
        <mt-button style="margin-left: 10px" size="small" type="primary" @click="goPwdReset">忘记密码</mt-button>
      </mt-field>
      <span class="btn">
        <mt-button class="item" size="small" type="primary">登录</mt-button>
        <mt-button v-if="codeLoginType" @click="typeRevert" class="item" size="small" type="primary">密码登录</mt-button>
        <mt-button v-else class="item" size="small" type="primary" @click="typeRevert">验证码登录</mt-button>
      </span>
    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'
  export default {
    name: 'UserLogin',
    data() {
      return {
        labelPosition: 'right',
        login: {
          phone: '',
          code: '',
          pwd: ''
        },
        header: {
          title: '用户登录',
          img: '',
          link: {
            text: '注册',
            name: 'UserRegister'
          }
        },
        codeLoginType: true,
      }
    },
    components: {
      PageHeader,
      Copyright
    },
    methods: {
      typeRevert() {
        this.codeLoginType = !this.codeLoginType
      },
      goPwdReset() {
        this.$router.push({name: 'UserPwdReset'})
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

