<template>
	<div class="box">
		<canvas id="canvas" width="500" height="500" style="background: #000;"></canvas>
		<button id="btn">开始排序</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			console.log('18', [...Array(180).keys()])
			const canvas = document.getElementById('canvas')
			const ctx = canvas.getContext('2d')
			ctx.fillStyle = 'white' // 设置画画的颜色
			ctx.translate(250, 250) // 移动中心点到(250, 250)

			let nums = []
			for (let i = 0; i < 4; i++) {
				// 生成一个 0 - 180的有序数组
				const arr = [...Array(180).keys()] // [...Array(180).keys()] 生成数组
				const res = []
				while (arr.length) {
					// 打乱
					const randomIndex = Math.random() * arr.length - 1 // Math.random() 0 ~ 1 随机数
					res.push(arr.splice(randomIndex, 1)[0])
				}
				nums = [...nums, ...res]
			}
			// 单个长方形构造函数
			function Rect(x, y, width, height) {
				this.x = x // 坐标x
				this.y = y // 坐标y
				this.width = width // 长方形的宽
				this.height = height // 长方形的高
			}

			//单个长方形的渲染函数
			Rect.prototype.draw = function() {
				ctx.beginPath() // 开始画一个
				ctx.fillRect(this.x, this.y, this.width, this.height) // 画一个
				ctx.closePath() // 结束画一个
			}

			const CosandSin = []
			for (let i = 0; i < 360; i++) {
				const jiaodu = i / 180 * Math.PI
				console.log('56', jiaodu)
				CosandSin.push({
					cos: Math.cos(jiaodu),
					sin: Math.sin(jiaodu)
				})
			}
			console.log('74', CosandSin)

			function drawAll(arr) {
				return new Promise((resolve) => {
					setTimeout(() => {
						ctx.clearRect(-250, -250, 500, 500) // 清空画布
						const rects = [] // 用来存储720个长方形
						for (let i = 0; i < arr.length; i++) {
							const num = arr[i]
							const {
								cos,
								sin
							} = CosandSin[Math.floor(i / 2)] // 一个角画两个
							const x = num * cos // x = ρ * cosθ
							const y = num * sin // y = ρ * sinθ
							rects.push(new Rect(x, y, 5, 3)) // 收集所有长方形
						}
						rects.forEach(rect => rect.draw()) // 遍历渲染
						resolve('draw success')
					}, 10)
				})
			}
			drawAll(nums) // 执行渲染函数
			// // 冒泡排序
			async function bubbleSort(arr) {
				var len = arr.length;
				for (var i = 0; i < len; i++) {
					for (var j = 0; j < len - 1 - i; j++) {
						if (arr[j] > arr[j + 1]) { //相邻元素两两对比
							var temp = arr[j + 1]; //元素交换
							arr[j + 1] = arr[j];
							arr[j] = temp;
						}
					}
					await drawAll(arr) // 一边排序一边重新画
				}
				return arr;
			}

			document.getElementById('btn').onclick = function() {
				bubbleSort(nums) // 点击执行
			}
		}
	}
</script>

<style>
	.box {
		width: 100vw;
		height: 100vh;
	}
</style>
