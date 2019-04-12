<!--业务页面头部公共组件-->
<template>
  <div class="headerCont">
    <mt-header fixed :title="header.title">
      <mt-button v-if="showBack" icon="back" slot="left" @click="goBack"></mt-button>
      <mt-button slot="right" v-if="header.link" @click="goRightLink">{{ header.link.text }}</mt-button>
    </mt-header>
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
    header: {
      type: Object,
      default: function () {

      }
    },
    showBack: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    goBack() {
      history.go(-1)
    },
    goRightLink() {
      this.$router.push({name: this.header.link.name})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
