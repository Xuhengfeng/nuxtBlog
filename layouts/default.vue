<template>
  <div>
    <!-- <VHeader></VHeader> -->
    <nuxt/>
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from "~/components/common/header"
import VFooter from "~/components/common/footer"
export default {
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 50px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>

