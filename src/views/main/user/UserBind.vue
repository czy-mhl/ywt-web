<template>
  <div>
    <page-header :title="header.title"></page-header>

    <div class="form">
      <el-form :label-position="labelPosition" :model="user">
        <el-form-item label="户号：">
          <el-input v-model="user.number" placeholder="请输入户号"></el-input>
        </el-form-item>
        <el-form-item label="户名：">
          <el-input v-model="user.name" placeholder="请输入户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm">绑定</el-button>

          <el-button style="width: 100%;margin: 10px 0 0 0" @click="resetForm">取消</el-button>
        </el-form-item>
        <div style="text-align: center;color: blue" @click="inviteClick">点击输入推荐号</div>
        <el-form-item v-if="isInvite" label="推荐号：">
          <el-input v-model="user.inviteCode" placeholder="请填写推荐人推荐号，若没有推荐人，请留空"></el-input>
        </el-form-item>
        <div style="font-size: 14px">
          尊敬的用户：<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;请输入您水费通知单上的户号、户名进行户号绑定，并确保输入信息一致。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;如有疑问，请拨打96106进行咨询。
        </div>
      </el-form>
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
      labelPosition: 'top',
      user: {
        number: '',
        name: '',
        inviteCode: ''
      },
      isInvite: false,
      header: {
        title: '户号绑定',
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
.form {
  margin-left: 10px;
  margin-right: 10px;
}
</style>

