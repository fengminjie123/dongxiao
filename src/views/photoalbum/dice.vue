<template>
	<div class="container">
		<div v-if="showFlag != 1" :class="flag == 0 ? 'main-box' : flag == 1 ? 'hide main-box' : 'show main-box'">
			<div class="box">
				<!-- 小骰子 -->
				<div class="s-face s-one-face">
					<img class="img" src="./1.jpg" alt="">
				</div>
				<div class="s-face s-two-face">
					<img class="img" src="./2.jpg" alt="">
				</div>
				<div class="s-face s-three-face">
					<img class="img" src="./3.jpg" alt="">
				</div>
				<div class="s-face s-four-face">
					<img class="img" src="./4.jpg" alt="">
				</div>
				<div class="s-face s-five-face">
					<img class="img" src="./5.jpg" alt="">
				</div>
				<div class="s-face s-six-face">
					<img class="img" src="./6.jpg" alt="">
				</div>
				<!-- 大骰子 -->
				<div class="b-face b-one-face" @click="hideFn">
					<img class="img1" src="./1.jpg" alt="">
				</div>
				<div class="b-face b-two-face" @click="hideFn">
					<img class="img1" src="./2.jpg" alt="">
				</div>
				<div class="b-face b-three-face" @click="hideFn">
					<img class="img1" src="./3.jpg" alt="">
				</div>
				<div class="b-face b-four-face" @click="hideFn">
					<img class="img1" src="./4.jpg" alt="">
				</div>
				<div class="b-face b-five-face" @click="hideFn">
					<img class="img1" src="./5.jpg" alt="">
				</div>
				<div class="b-face b-six-face" @click="hideFn">
					<img class="img1" src="./6.jpg" alt="">
				</div>
			</div>
		</div>
		<div v-else :class="flag == 0 ? 'w-main-box' : flag == 1 ? 'show1 w-main-box' : 'hide1 w-main-box'">
			<div style="color: #fff;margin-top: 10px;margin-left: 10px;cursor: pointer;display: flex;justify-content: start;" @click="showFn">返回</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showFlag: 0,
				flag: 0
			}
		},
		methods: {
			hideFn() {
				this.flag = 1
				setTimeout(() => {
					this.showFlag = 1
				}, 200)
			},
			showFn() {
				this.flag = 2
				setTimeout(() => {
					this.showFlag = 2
				}, 500)
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main-box {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		animation: rotateFn 8s infinite linear;
	}
	.box {
		width: 700px;
		height: 400px;
		transform-style: preserve-3d;
		position: relative;
		transform: rotateX(-45deg) rotateY(45deg);
		animation: rotateFn1 8s infinite linear;
	}
	@keyframes rotateFn {
	  from {
	    transform: rotateY(0deg);
	  }
	
	  to {
	    transform: rotateY(360deg);
	  }
	}
	@keyframes rotateFn1 {
	  from {
	    transform: rotateX(0deg);
	  }
	
	  to {
	    transform: rotateX(360deg);
	  }
	}
	.s-face {
		width: 100px;
		height: 100px;
		position: absolute;
		top: 50%;
		left: 50%;
		overflow: hidden;
	}
	.b-face {
		width: 260px;
		height: 260px;
		position: absolute;
		top: 50%;
		left: 50%;
		opacity: 0.3;
	}
	.b-one-face {
		background-color: #97CC52;
		transform: translate(-50%, -50%) translateY(-130px) rotateX(90deg);
		animation: rotateFnb1 6s infinite linear;
	}
	.b-two-face {
		background-color: #A13333;
		transform: translate(-50%, -50%) translateY(130px) rotateX(-90deg);
		animation: rotateFnb2 6s infinite linear;
	}
	.b-three-face {
		background-color: #254982;
		transform: translate(-50%, -50%) translateZ(130px);
		animation: rotateFnb3 6s infinite linear;
	}
	.b-four-face {
		background-color: #564721;
		transform: translate(-50%, -50%) translateZ(-130px);
		animation: rotateFnb4 6s infinite linear;
	}
	.b-five-face {
		background-color: #658102;
		transform: translate(-50%, -50%) translateX(-130px) rotateY(-90deg);
		animation: rotateFnb5 6s infinite linear;
	}
	.b-six-face {
		background-color: #985725;
		transform: translate(-50%, -50%) translateX(130px) rotateY(90deg);
		animation: rotateFnb6 6s infinite linear;
	}
	@keyframes rotateFnb1 {
	  0% {
	    transform: translate(-50%, -50%) translateY(-130px) rotateX(90deg);
			opacity: 0.3;
	  }
	
	  50% {
	    transform: translate(-50%, -50%) translateY(-230px) rotateX(90deg);
			opacity: 1;
	  }
		
		100% {
			transform: translate(-50%, -50%) translateY(-130px) rotateX(90deg);
			opacity: 0.3;
		}
	}
	@keyframes rotateFnb2 {
	  0% {
	    transform: translate(-50%, -50%) translateY(130px) rotateX(-90deg);
			opacity: 0.3;
	  }
	
	  50% {
	    transform: translate(-50%, -50%) translateY(230px) rotateX(-90deg);
			opacity: 1;
	  }
		
		100% {
			transform: translate(-50%, -50%) translateY(130px) rotateX(-90deg);
			opacity: 0.3;
		}
	}
	@keyframes rotateFnb3 {
	  0% {
	    transform: translate(-50%, -50%) translateZ(130px);
			opacity: 0.3;
	  }
	
	  50% {
	    transform: translate(-50%, -50%) translateZ(230px);
			opacity: 1;
	  }
		
		100% {
		  transform: translate(-50%, -50%) translateZ(130px);
			opacity: 0.3;
		}
	}
	@keyframes rotateFnb4 {
	  0% {
	    transform: translate(-50%, -50%) translateZ(-130px);
			opacity: 0.3;
	  }
	
	  50% {
	    transform: translate(-50%, -50%) translateZ(-230px);
			opacity: 1;
	  }
		
		100% {
		  transform: translate(-50%, -50%) translateZ(-130px);
			opacity: 0.3;
		}
	}
	@keyframes rotateFnb5 {
	  0% {
	    transform: translate(-50%, -50%) translateX(-130px) rotateY(-90deg);
			opacity: 0.3;
	  }
	
	  50% {
	    transform: translate(-50%, -50%) translateX(-230px) rotateY(-90deg);
			opacity: 1;
	  }
		
		100% {
		  transform: translate(-50%, -50%) translateX(-130px) rotateY(-90deg);
			opacity: 0.3;
		}
	}
	@keyframes rotateFnb6 {
	  0% {
	    transform: translate(-50%, -50%) translateX(130px) rotateY(90deg);
			opacity: 0.3;
	  }
	  50% {
	    transform: translate(-50%, -50%) translateX(230px) rotateY(90deg);
			opacity: 1;
	  }
		100% {
		  transform: translate(-50%, -50%) translateX(130px) rotateY(90deg);
			opacity: 0.3;
		}
	}
	.s-one-face {
		background-color: #97CC52;
		transform: translate(-50%, -50%) translateY(-50px) rotateX(90deg);
	}
	.s-two-face {
		background-color: #A13333;
		transform: translate(-50%, -50%) translateY(50px) rotateX(-90deg);
	}
	.s-three-face {
		background-color: #254982;
		transform: translate(-50%, -50%) translateZ(50px);
	}
	.s-four-face {
		background-color: #564721;
		transform: translate(-50%, -50%) translateZ(-50px);
	}
	.s-five-face {
		background-color: #658102;
		transform: translate(-50%, -50%) translateX(-50px) rotateY(-90deg);
	}
	.s-six-face {
		background-color: #985725;
		transform: translate(-50%, -50%) translateX(50px) rotateY(90deg);
	}
	.w-main-box {
		width: 800px;
		height: 600px;
		background-color: rgba(0, 0, 0, .2);
		border-radius: 10px;
		opacity: 0;
		position: relative;
	}
	.hide {
		opacity: 0!important;
		transition: opacity .5s;
	}
	.show {
		opacity: 1!important;
		transition: opacity .5s;
	}
	.hide1 {
		opacity: 0!important;
		transition: opacity 3.5s;
	}
	.show1 {
		opacity: 1!important;
		transition: opacity .2s;
	}
	.img {
		width: 100px;
		height: 100px;
	}
	.img1 {
		width: 260px;
		height: 260px;
	}
</style>
