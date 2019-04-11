<template>
  <div>
    <page-header :title="header.title" :rightLink="header.link"></page-header>

    <div class="form">
      <el-form :label-position="labelPosition" label-width="88px" :model="login">
        <el-form-item label="手机号码：">
          <el-input v-model="login.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" v-if="codeLoginType">
          <el-input style="width: 54%" v-model="login.code" placeholder="请输入验证码"></el-input>
          <el-button type="primary" @click="submitForm">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码：" v-else>
          <el-input style="width: 59%" type="password" v-model="login.pwd" placeholder="请输入密码"></el-input>
          <el-button type="primary" @click="goPwdReset">忘记密码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="primary" v-if="codeLoginType"  @click="typeRevert">密码登录</el-button>
          <el-button type="primary" v-else  @click="typeRevert">验证码登录</el-button>
        </el-form-item>
      </el-form>
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
      codeLoginType: true
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
  margin: 10% 10px 10px;
}
</style>

