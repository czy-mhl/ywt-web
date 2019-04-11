<!--业务页面头部公共组件-->
<template>
  <div class="headerCont">
    <span class="back" @click="goBack">
      <i v-if="showBack" class="el-icon-back"></i>
    </span>
    <span class="center">
      <img v-if="img !== ''" :src="img" alt="" />{{ title }}
    </span>
    <span v-if="rightLink" class="right" @click="goRightLink">
      {{ rightLink.text }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  data() {
    return {

    }
  },
  props: {
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
    },
    rightLink: {
      type: Object,
      default: function () {

      }
    }
  },
  methods: {
    goBack() {
      history.go(-1)
    },
    goRightLink() {
      this.$router.push({name: this.rightLink.name})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .headerCont {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #F0F2F7 !important;
    position: relative;
    top: 0;
  }
  .back {
    position: fixed;
    left: 5px
  }
  .right {
    position: fixed;
    right: 15px;
  }
</style>
