<!--业务页面底部公共copyright标识-->
<template>
  <div class="footerCont">
    Copyright&copy; 自来水有限公司
  </div>
</template>

<script>

export default {
  name: 'Copyright'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.footerCont{
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F0F2F7 !important;
  position: fixed;
  bottom: 0;
}
</style>
