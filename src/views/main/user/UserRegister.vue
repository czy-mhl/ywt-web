<template>
  <div>
    <page-header :title="header.title"></page-header>

    <div class="form">
      <el-form :label-position="labelPosition" label-width="88px" :model="register">
        <el-form-item label="手机号码：">
          <el-input v-model="register.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="register.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input type="password" v-model="register.confirm" placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码：">
          <el-input style="width: 54%" v-model="register.code" placeholder="请输入验证码"></el-input>
          <el-button type="primary" @click="submitForm">获取验证码</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">注册</el-button>
          <el-button type="primary" @click="goback">返回</el-button>
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
  name: 'UserRegister',
  data() {
    return {
      labelPosition: 'right',
      register: {
        phone: '',
        code: '',
        pwd: '',
        confirm: ''
      },
      header: {
        title: '用户注册',
        img: ''
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
    goback() {
      history.go(-1)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.form {
  margin: 10% 10px 10px;
}
</style>

