<template>
    <div class="mineIdPage">
         <P>mineId: {{$route.params.id}}</P>
         <!-- <a href="/">home</a> -->
         <nuxt-link :to="{name:'index'}">首页</nuxt-link>
    </div>
</template>
