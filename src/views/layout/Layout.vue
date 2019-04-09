<template>
  <div class="app-wrapper">
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    AppMain,
  },
  computed: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
