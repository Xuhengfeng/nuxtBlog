<template>
	<footer>
		<nuxt-link to="/" @click.native="tabNumBtn(1)">
			<div><span class="image" :class="{active: tabNum==1}"></span></div>
			<div>首页</div>
		</nuxt-link>
		<nuxt-link to="/news" @click.native="tabNumBtn(2)">
			<div><span class="image" :class="{active: tabNum==2}"></span></div>
			<div>新闻</div>
		</nuxt-link>
		<nuxt-link to="/article" @click.native="tabNumBtn(3)">
			<div><span class="image" :class="{active: tabNum==3}"></span></div>
			<div>文章</div>
		</nuxt-link>
		<nuxt-link to="/mine" @click.native="tabNumBtn(4)">
			<div><span class="image" :class="{active: tabNum==4}"></span></div>
			<div>我的</div>
		</nuxt-link>
	</footer>
</template>
<script>
export default {
	data:()=>{
		return {
			tabNum: 0
		}
	},
	methods: {
		tabNumBtn(num){
			this.tabNum=num;
		}
	}
}
</script>

<style lang="less" scoped>
footer{
	position:fixed;
	width: 100%;
	bottom: 0;
	height: 1rem;
	padding: 0.2rem 0;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	text-align: center;
	background: #ccc;
}
a{
	flex: 1;
	color: #fff;
	-webkit-tap-highlight-color:transparent; 
	display: inline-block;
}
a div{
	height: 0.3rem;
	font-size: 0.3rem;
	overflow: visible;
}
span.image{
	float: left;
	width: 100%;
	height: 0.5rem;
	background: url('~assets/images/logo.jpg') center center no-repeat;
	background-size: 20%;
}
/*
a.nuxt-link-exact-active{
	color: red;
}
span.image{
	float: left;
	width: 25%;
	height: 0.3rem;
	background: url('~assets/images/logo.jpg') center center no-repeat;
	background-size: 20%;
	transition: all 0.3s ease;
}*/
span.active{
	animation: pulse 0.3s;
}
@keyframes pulse {
	50%{background-size: 80%;}
	100%{background-size: 0;}
} 
</style>
