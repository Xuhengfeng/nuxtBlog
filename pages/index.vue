<template>
  <section class="container">
    <div>
      <app-logo/>
        首页
      <div v-for="(item,index) in brokers" :key="index">{{item.sdid}}</div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
console.log(111)
export default {
  components: {
    AppLogo
  },
  async asyncData({store, req}){
    let brokers = await $axios.post($url.URL.BROKERS_LIST,{'scity': 'beihai'});
    return {
      brokers: brokers.data.data
    }
  },
  mounted() {
    document.cookie="scity=beihai";
    document.cookie="token=fasdf";    
    document.cookie="user={'name':'Xuhengfeng'}";    

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>

