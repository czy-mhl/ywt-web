<!--业务页面头部公共组件-->
<template>
  <div class="headerCont">
    <i v-if="showBack" class="el-icon-back"></i>
    <img v-if="img !== ''" :src="img" alt="" />{{ title }}
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  data() {
    return {

    }
  },
  prop: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.headerCont{
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F0F2F7 !important;
  position: fixed;
  top: 0;
}
</style>
