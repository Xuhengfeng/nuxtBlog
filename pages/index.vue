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
        <button @click="btn()">test</button>

          <!-- {{userInfo.name}}
          {{userInfo.age}}
          {{userInfo.sex}} -->
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  async asyncData(){
    // console.log(process)
    // https://api.myjson.com/bins/yn6hc
    console.log($url.URL.SHOPERS_LIST)
    let userInfo = await $axios.post($url.URL.BROKERS_LIST,{'scity': 'beihai'});
    console.log(userInfo.data)
    // return {
    //   userInfo: userInfo.data
    // }
  },
  mounted() {
    //  console.log($url)
    document.cookie="scity=beihai";
    document.cookie="a=fasdf";
    document.cookie="b=fdasd";
    document.cookie="c=asdf";
    
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

