<template>
  <div>
    <page-header :title="header.title"></page-header>

    <div class="form">
      <el-form :rules="rules" ref="reset" status-icon :label-position="labelPosition" label-width="88px" :model="reset">
        <el-form-item label="手机号码：" prop="phone">
          <el-input v-model="reset.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code">
          <el-input style="width: 54%" v-model="reset.code" placeholder="请输入验证码"></el-input>
          <el-button type="primary" @click="submitForm">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="新密码：" prop="pwd">
          <el-input type="password" v-model="reset.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirm">
          <el-input type="password" v-model="reset.confirm" placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
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
import { checkPhone, checkCode, checkPwd } from '@/utils/validate'
export default {
  name: 'UserPwdReset',
  data() {
    const checkConfirm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'))
      } else if (value !== this.reset.pwd) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
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
        img: ''
      },
      codeLoginType: true,
      rules: {
        phone: [
          { validator: checkPhone, trigger: 'blur' },
        ],
        code: [
          { validator: checkCode, trigger: 'blur' },
        ],
        pwd: [
          { validator: checkPwd, trigger: 'blur' },
        ],
        confirm: [
          { validator: checkConfirm, trigger: 'blur' },
        ]
      }
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

