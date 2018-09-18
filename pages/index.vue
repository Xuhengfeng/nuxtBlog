<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxtdemo
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link to="/mine">1212</nuxt-link>
      </div>
      <!-- <div v-for="(item,index) in brokers" :key="index">{{item.sdid}}</div> -->
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  async asyncData({store, req}){
    let brokers = await $axios.post($url.URL.BROKERS_LIST,{'scity': 'beihai'});
    // return {
    //   brokers: brokers.data.data
    // }
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

