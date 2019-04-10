<template>
  <div>
    <page-header :title="header.title"></page-header>

    <div class="collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="修改电话号码" name="phone">
          <div class="form">
            <el-form :label-position="labelPosition" :model="phone">
              <el-form-item label="手机号码：">
                <el-input style="width: 60%" size="mini" v-model="phone.old" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item label="新手机号码：">
                <el-input style="width: 60%" size="mini" v-model="phone.new" placeholder="请输入新手机号码"></el-input>
              </el-form-item>
              <el-form-item label="验证码：">
                <span class="left">
                  <el-input style="width: 30%" size="mini" v-model="phone.code" placeholder="请输入验证码"></el-input>
                </span>
                <span class="right">
                  <el-button size="mini" type="primary" @click="submitForm">获取验证码</el-button>
                </span>
              </el-form-item>
              <el-form-item>
                <el-button size="mini" style="width: 60%;" type="primary" @click="submitForm">绑定</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="修改密码" name="pwd">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
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
    name: 'UserBind',
    data() {
      return {
        labelPosition: 'right',
        phone: {
          old: '',
          new: '',
          code: ''
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
  .form {
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
</style>

