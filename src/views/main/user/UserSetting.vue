<template>
  <div>
    <page-header :title="header.title"></page-header>

    <div class="collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="修改电话号码" name="phone">
          <div class="form">
            <el-form :label-position="labelPosition" label-width="120px" :model="phone">
              <el-form-item label="手机号码：">
                <el-input type="tel" style="width: 94%" size="mini" v-model="phone.old" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item label="新手机号码：">
                <el-input type="tel" style="width: 94%" size="mini" v-model="phone.new" placeholder="请输入新手机号码"></el-input>
              </el-form-item>
              <el-form-item label="验证码：">
                <span class="left">
                  <el-input type="number" style="width: 50%" size="mini" v-model="phone.code" placeholder="请输入验证码"></el-input>
                </span>
                <span class="right">
                  <el-button size="mini" type="primary" @click="submitForm">获取验证码</el-button>
                </span>
              </el-form-item>
              <el-form-item>
                <el-button class="bindbtn" size="mini" type="primary" @click="submitForm">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="修改密码" name="pwd">
          <div class="form">
            <el-form :label-position="labelPosition" label-width="120px" :model="pwd">
              <el-form-item label="旧密码：">
                <el-input type="password" style="width: 94%" size="mini" v-model="pwd.old" placeholder="请输入旧密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码：">
                <el-input type="password" style="width: 94%" size="mini" v-model="pwd.new" placeholder="请输入新密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码：">
                <el-input type="password" style="width: 94%" size="mini" v-model="pwd.new" placeholder="请输入确认密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="bindbtn" size="mini" type="primary" @click="submitForm">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <copyright></copyright>
  </div>
</template>

<script>
  import PageHeader from '@/views/common/PageHeader'
  import Copyright from '@/views/common/Copyright'
  export default {
    name: 'UserSetting',
    data() {
      return {
        labelPosition: 'right',
        phone: {
          old: '',
          new: '',
          code: ''
        },
        pwd: {
          old: '',
          new: '',
          confirm: ''
        },
        isInvite: false,
        header: {
          title: '修改注册信息',
          img: ''
        },
        activeName: ''
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
  .collapse {
    margin-left: 5px;

  }
  .form {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
  }
  .bindbtn {
    position: center;
    width: 80%;
  }
</style>

