<template>
  <div>
  <div style="width: 100%;height: 80px;background-color: dodgerblue;z-index:999">
    <div style="font-size: small;color: aliceblue;">
      <span style="padding-top: 10px;padding-left: 20px">余额</span>
    </div>
    <div style="font-size: x-large;color: aliceblue;">
      <span style="padding-top: 10px;padding-left: 40px">0.00元</span>
    </div>
    <!--<div style="margin-left: 20px;margin-top: 10px">-->
    <!--<span style="font-size: small;color: #d3dce6">余额</span>-->
    <!--</div>-->
    <!--<div style="margin-left: 40px;margin-top: 6px">-->
    <!--<span style="font-size: x-large;color: #d3dce6">0.00元</span>-->
    <!--</div>-->

  </div>
    <div style="width: 100%;height: 300px">
      <span style="font-size: small;color: darkgrey;padding-top: 10px;padding-left: 120px">请选择预存金额</span>
      <div>
        <mt-button type="default" name="money" @click="changeBtn()">50元</mt-button>
        <mt-button type="default" name="money">100元</mt-button>
        <mt-button type="default" name="money">200元</mt-button>
      </div>
      <div>
        <mt-button type="default" name="money">300元</mt-button>
        <mt-button type="default" name="money">400元</mt-button>
        <mt-button type="default" name="money">500元</mt-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'UserBalance',
    data() {
      return {}
    },
    methods: {
      changeBtn(e) {
        e.currentTarget.class = 'primary'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  span {
    display: block;
  }
</style>

