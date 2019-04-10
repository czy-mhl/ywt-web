<template>
  <div>
    <div style="padding-bottom: 60%;  margin:0px;width:100%; background: url('../../../static/images/index_head_unlogin.png') no-repeat;background-size: 100% 100%">
      <div style="position: absolute; bottom: 20px;  left: 32%;  background: transparent;  width: 36%;  z-index: 999;cursor: pointer;  height: 37px;"></div>
    </div>

    <div style="position: relative;padding: 8px;display: flex; align-items: center;z-index: 100;border-bottom: 1px solid #dcdcdc;background-color:transparent;width: 100%;">
      <i class="report" style="position: absolute;top: 10px;left: 10px;background-color: transparent;"></i>
      <div style="margin-left: 30px;width: 100%;white-space: nowrap;word-break: break-all">
        <marquee id="noticeList" behavior="scroll" direction="left" loop="-1" style="width:100%">
                 测试用
        </marquee>
      </div>
    </div>
    <!-- 暂不设id -->
    <div  class="xttblog" style="width: 330px;">
      <ul class="box">

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="水费账单" class="ui-link"><img src="../../../static/images/sfzd.png">水费账单</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="水费预存" class="ui-link"><img src="../../../static/images/d3b28a4d9ea5465387afd85420ade086.png">水费预存</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="水费交纳" class="ui-link"><img src="../../../static/images/sfjn.png">水费交纳</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="电子发票" class="ui-link"><img src="../../../static/images/fphq.png">电子发票</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="水价标准" class="ui-link"><img src="../../../static/images/sjbz.png">水价标准</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="交费方式" class="ui-link"><img src="../../../static/images/e5a087544a854d2faa728a586e903eb7.png">交费方式</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="居民过户" class="ui-link"><img src="../../../static/images/grgh.png">居民过户</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="在线客服" class="ui-link"><img src="../../../static/images/rgkf.png">在线客服</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="停水通知" class="ui-link"><img src="../../../static/images/11b722b2c23c4c1db8aa9851e73adffd.png">停水通知</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="报漏报修" class="ui-link"><img src="../../../static/images/blbx.png">报漏报修</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="办理进度" class="ui-link"><img src="../../../static/images/bljd.png">办理进度</a></li>

        <li  style="min-width: 82.5px; max-width: 82.5px; min-height: 72.5px;"><a href="#" title="全部业务" class="ui-link"><img src="../../../static/images/more.png">全部业务</a></li>

      </ul>
    </div>
    <div style="margin-bottom: 50px;clear:both;"></div>

    <footer class="indexFooter" style="font-size: 12px;background-color: #fbfaf9;line-height: 30px;vertical-align: middle">
      <a href="" style="display: flex;align-items: center" class="ui-link"><i class="help"></i>&nbsp;帮助</a>
      <a style="display: flex;align-items: center;position:absolute;right: 30px;top:10px;" class="ui-link">请致电客服热线&nbsp;<span id="companyPhone" style="font-size: 20px">88888</span>&nbsp;<i class="phone"></i></a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    data() {
      return {}
    },

    created() {

    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-editor-container {
    min-height: 60vh;
    padding: 20px 20px 0px;
    background-color: #fff;
  }

  .box {
    list-style: none;
    width: 100%;
  }

  .box li {
    float: left;
    box-sizing: border-box;
    border: 0px solid #ccc;
    width: 25%;
    margin-top: 10px;
    min-height: 6.5em;
  }

  body, ul, li {
    margin: 0;
    padding: 0;
    text-shadow: none;
    font-size: 14px;
  }

  .report {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../../../static/images/report.png) no-repeat center;
    background-size: 16px 16px;
  }

  .xttblog {
    width: 100%;
    height: 170px;
    margin: 0 auto;
    background-color: transparent;
  }

  .box li a {
    vertical-align: middle;
    text-align: center;
    line-height: 100%;
    display: inherit;
    font-size: 14px;
  }

  .box:after {
    content: ".";
    display: block;
    line-height: 0;
    width: 0;
    height: 0;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }

  .ui-link img {
    width: 49px;
  }

  .ui-link{
    float:left;
    margin-right:20px;
    margin-bottom:20px;
  }

  .indexFooter {
    position: fixed;
    width: 100%;
    bottom: 0px;
    padding: 10px;
    border-top: 1px solid #dcdcdc;
    /* background: white; */
  }

  .help {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../../../static/images/help.png) no-repeat center;
    background-size: 16px 16px;
  }

  .phone {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../../../static/images/phone.png) no-repeat center;
    background-size: 16px 16px;
  }

</style>
