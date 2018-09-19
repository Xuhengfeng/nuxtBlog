<template>
    <div class="mine">
        我的

        <ul>
            <li>
                <a href="/mine/1">问题一</a>
                <a href="/mine/2">问题二</a>
                <a href="/mine/3">问题三</a>
                <nuxt-link to="/">首页</nuxt-link>

                <nuxt-link to="/mine/1">1</nuxt-link>
                <nuxt-link to="/mine/2">2</nuxt-link>
                <nuxt-link to="/mine/3">3</nuxt-link>


                <nuxt-link :to="{name:'mine-id',params:{id:'1'}}">111</nuxt-link>
                <nuxt-link :to="{name:'mine-id',params:{id:'2'}}">222</nuxt-link>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.mine{
    background: green;
}
</style>
