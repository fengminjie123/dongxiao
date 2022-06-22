<template>
  <div class="container">
		<div class="nav">目录</div>
		<div class="content-box">
			<!-- 第一行 -->
			<div style="margin-bottom: 25px;display: flex;justify-content: start;" v-for="(item, index) in list" :key="index">
				<div v-for="(sitem , sindex) in item" :key="sindex" class="item">
					<router-link :to="sitem.path">{{ sitem.text }}</router-link>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			list: [
				[
					{
						path: '/ball',
						text: '1-弹弹球'
					},
					{
						path: '/font',
						text: '9-文字路径'
					},
					{
						path: '/text',
						text: '8-镂空文本'
					},
					{
						path: '/canvas',
						text: '41-canvas基础'
					}
				], //第一行
				[
					{
						path: '/long',
						text: '28-长影子'
					},
					{
						path: '/dice',
						text: '2-旋转的骰子'
					},
					{
						path: '',
						text: ''
					},
					{
						path: '',
						text: ''
					}
				] // 第二行
			]
		}
	}
}
</script>
<style lang="less" scoped>
	 a {
	   text-decoration: none; //去掉原有链接文字下划线
	 }
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		.nav {
			width: 100%;
			height: 44px;
			font-size: 18px;
			font-weight: 700;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.content-box {
			width: 50%;
			margin: 0 auto;
			height: 0;
			flex: 1;
			.item {
				width: 0;
				flex: 1;
				height: 100%;
			}
		}
	}
</style>
