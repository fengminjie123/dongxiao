<template>
	<div ref="box" class="box" @click="aa">
		<div class="mask">
			<div style="width: 100%;height: 50px;display: flex;justify-content: center;align-items: center;">
				点击屏幕生成小球</div>
			<div
				style="width: 100%;height: 30px;display: flex;justify-content: center;align-items: center;color: #F47378;">
				当前小球速度： {{ s }}</div>
			<div
				style="width: 100%;height: 20px;display: flex;justify-content: center;align-items: center;color: #F47378;">
				当前小球个数</div>
			<div
				style="width: 100%;height: 0px;flex: 1;display: flex;justify-content: center;align-items: center;font-size: 100px;">
				{{ ballList.length }}
			</div>
		</div>
		<div v-for="item in ballList"
			:class="item.s > 0 && item.s <= 2 && item.Vx == 0 && item.Vy == 0 ? 'a1 ball' : item.s > 2 && item.s <= 4 && item.Vx == 0 && item.Vy == 0 ? 'a2 ball' : item.s > 4 && item.s <= 6 && item.Vx == 0 && item.Vy == 0 ? 'a3 ball' : item.s > 6 && item.s <= 8 && item.Vx == 0 && item.Vy == 0 ? 'a4 ball' : item.s > 8 && item.s <= 10 && item.Vx == 0 && item.Vy == 0 ? 'a5 ball' : 'ball'"
			@click="bb" @mousedown="(e) => { cc(e, item) }" @mouseup="(e) => { dd(e, item) }"
			:style="{ left: item.left + 'px', top: item.top + 'px', width: item.r + 'px', height: item.r + 'px', background: item.color }" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ballList: [],
				sList: [1, -1],
				rList: [30, 35, 40, 45, 50, 55, 60],
				clientWidth: 0,
				clientHeight: 0,
				timer: null,
				s: 0
			}
		},
		watch: {
			/* 监听*/
			clientHeight(val) {
				console.log('36', val)
				this.ballList.forEach(item => {
					item.maxHeight = document.documentElement.clientHeight - item.r
				})
			},
			clientWidth(val) {
				console.log('42', val)
				this.ballList.forEach(item => {
					item.maxWidth = document.documentElement.clientWidth - item.r
				})
			}
		},
		mounted() {
			setInterval(this.move, 1000 / 60)
			window.onresize = () => { //屏幕尺寸变化就重新赋值
				return (() => {
					this.clientHeight = document.documentElement.clientHeight
					this.clientWidth = document.documentElement.clientWidth
				})()
			}
		},
		methods: {
			cc(e, item) {
				console.log('68', e)
				if (item.Vx != 0 && item.Vy != 0) return
				this.timer = setInterval(() => {
					this.s += 1
					if (this.s > 10) {
						this.s = 10
						clearInterval(this.timer)
						item.Vx = this.s * this.sList[Math.floor(Math.random() * this.sList.length)]
						item.Vy = this.s * this.sList[Math.floor(Math.random() * this.sList.length)]
						this.s = 0
					}
					item.s = this.s
				}, 500)
			},
			dd(e, item) {
				console.log('76', e, item)
				if (item.Vx != 0 && item.Vy != 0) return
				clearInterval(this.timer)
				item.Vx = this.s * this.sList[Math.floor(Math.random() * this.sList.length)]
				item.Vy = this.s * this.sList[Math.floor(Math.random() * this.sList.length)]
				this.s = 0
			},
			bb(e) {
				e.stopPropagation()
			},
			aa(e) {
				let arr = []
				if (this.ballList.length > 0 && this.ballList.some(item => item.Vx == 0 && item.Vy == 0)) return
				let r = this.rList[Math.floor(Math.random() * this.rList.length)]
				// let Vx = this.sList[Math.floor(Math.random() * this.sList.length)]
				// let Vy = this.sList[Math.floor(Math.random() * this.sList.length)]
				let maxHeight = Math.floor(document.documentElement.clientHeight - r)
				let maxWidth = Math.floor(document.documentElement.clientWidth - r)
				let R = Math.floor(Math.random() * 256)
				let G = Math.floor(Math.random() * 256)
				let B = Math.floor(Math.random() * 256)
				this.ballList.push({
					left: this.ee(e.offsetX, 1, e.offsetY, maxWidth, maxHeight, r),
					top: this.ee(e.offsetX, 2, e.offsetY, maxWidth, maxHeight, r),
					r: r,
					newR: r,
					flag: false,
					maxHeight: maxHeight,
					maxWidth: maxWidth,
					Vx: 0,
					Vy: 0,
					s: 0,
					color: `rgb(${ R }, ${ G }, ${ B })`
				})
				console.log('99', this.ballList)
				// this.ballList.forEach(item => {
				//     item.maxHeight = Math.floor(document.documentElement.clientHeight - item.r)
				//     item.maxWidth = Math.floor(document.documentElement.clientWidth - item.r)
				// });
			},
			ee(x, type, y, maxWidth, maxHeight, r) {
				console.log('89', x, y, r)
				if (type == 1) {
					if (x <= r / 2) {
						return 0
					} else if (x >= maxWidth - r / 2) {
						return maxWidth - r / 2
					} else if (x > r / 2 && x < maxWidth - r / 2) {
						return x - r / 2
					}
				}
				if (type == 2) {
					if (y <= r / 2) {
						return 0
					} else if (y >= maxHeight - r / 2) {
						return maxHeight - r / 2
					} else if (y > r / 2 && y < maxHeight - r / 2) {
						return y - r / 2
					}
				}
			},
			move() {
				if (JSON.stringify(this.ballList) == '[]' || !this.ballList) return
				this.ballList.forEach(item => {
					item.left += item.Vx
					item.top += item.Vy
					if (item.left > item.maxWidth) { // 右边界
						item.left = item.maxWidth
						item.Vx = -item.Vx
					} else if (item.left < 0) { //左边界
						item.left = 0
						item.Vx = -item.Vx
					} else if (item.top > item.maxHeight) { // 下边界
						item.top = item.maxHeight
						item.Vy = -item.Vy
					} else if (item.top < 0) {
						item.top = 0
						item.Vy = -item.Vy
					}
				})
				for (let i = 0; i < this.ballList.length - 1; i++) {
					for (let j = 1; j < this.ballList.length; j++) {
						let d = Math.sqrt((this.ballList[i].left - this.ballList[j].left) * (this.ballList[i]
							.left - this.ballList[j].left) + (this.ballList[i].top - this.ballList[j]
							.top) * (this.ballList[i].top - this.ballList[j].top))
						if (this.ballList[i].r / 2 > this.ballList[j].r / 2) {
							if (d >= 0 && d <= this.ballList[i].r / 2 - this.ballList[j].r / 2) {
								this.ballList[i].newR = Math.floor(this.ballList[j].r * 0.05 + this.ballList[i]
									.r)
								this.ballList[j].flag = true
							}
						}
						if (this.ballList[i].r / 2 < this.ballList[j].r / 2) {
							if (d >= 0 && d <= this.ballList[j].r / 2 - this.ballList[i].r / 2) {
								this.ballList[j].newR = Math.floor(this.ballList[i].r * 0.05 + this.ballList[j]
									.r)
								this.ballList[i].flag = true
							}
						}
					}
				}
				this.ballList.forEach((item, index) => {
					if (item.flag) {
						this.ballList.splice(index, 1)
					}
					item.r = item.newR
					item.maxHeight = document.documentElement.clientHeight - item.r
					item.maxWidth = document.documentElement.clientWidth - item.r
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.box {
		width: 100%;
		height: 100%;
	}

	.ball {
		position: absolute;
		background-color: black;
		border-radius: 50%;
		opacity: 0.3;
		cursor: pointer;
	}

	.mask {
		width: 250px;
		height: 250px;
		position: fixed;
		z-index: -1;
		background-color: rgba(0, 0, 0, .1);
		display: flex;
		flex-direction: column;
	}

	.a1 {
		animation: leftFn1 .2s infinite linear;
	}

	.a2 {
		animation: leftFn2 .2s infinite linear;
	}

	.a3 {
		animation: leftFn3 .2s infinite linear;
	}

	.a4 {
		animation: leftFn4 .2s infinite linear;
	}

	.a5 {
		animation: leftFn5 .2s infinite linear;
	}

	@keyframes leftFn1 {
		from {
			transform: translate(-1px, -1px)
		}

		50% {
			transform: translate(0px, 0px)
		}

		to {
			transform: translate(1px, 1px)
		}
	}

	@keyframes leftFn2 {
		from {
			transform: translate(-2px, -2px)
		}

		50% {
			transform: translate(0px, 0px)
		}

		to {
			transform: translate(2px, 2px)
		}
	}

	@keyframes leftFn3 {
		from {
			transform: translate(-3px, -3px)
		}

		50% {
			transform: translate(0px, 0px)
		}

		to {
			transform: translate(3px, 3px)
		}
	}

	@keyframes leftFn4 {
		from {
			transform: translate(-3.5px, -3.5px)
		}

		50% {
			transform: translate(0px, 0px)
		}

		to {
			transform: translate(3.5px, 3.5px)
		}
	}

	@keyframes leftFn5 {
		from {
			transform: translate(-4px, -4px)
		}

		50% {
			transform: translate(0px, 0px)
		}

		to {
			transform: translate(4px, 4px)
		}
	}
</style>
