<template>
	<footer class="v-footer">
		<ul>
			<li>
				<nuxt-link to="/">首页</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/news">新闻</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/article">详情</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/mine">我的</nuxt-link>
			</li>
		</ul>
	</footer>
</template>

<style scoped>
	ul{
		position:fixed;
		width: 100%;
		bottom: 0;
		height: 1rem;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #ccc;
	}
	li{
		flex: 1;
	}
	a{
		color: #fff;
	}
</style>
