<template>
	<div class="box">
		<div class="video-box">
			<video ref="video1" id="video1" src="./bgmovie.mp4" type="video/mp4" autoplay loop></video>
		</div>
		<div class="control-box">
			<div style="display: flex;margin-bottom: 5px;">
				<div style="width: 50px;">文字</div>
				<input type="text" v-model="name" maxlength="10" placeholder="可以在input里面输入内容" />
			</div>
			<div style="display: flex;margin-bottom: 5px;">
				<div style="width: 50px;">x</div>
				<input type="number" v-model="x" maxlength="10" placeholder="x位置" />
			</div>
			<div style="display: flex;margin-bottom: 5px;">
				<div style="width: 50px;">y</div>
				<input type="number" v-model="y" maxlength="10" placeholder="y位置" />
			</div>
		</div>
		<svg class="svg" viewbox="0 0 500 300" preserveAspectRatio="xMidYMid slice">
			<defs>
				<mask id="mask" x="0" y="0" width="100%" height="100%">
					<rect class="mask-rect" x="0" y="0" width="100%" height="100%"></rect>
					<text class="mask-text" :x="x == null ? oldX : x"
						:y="y == null ? oldY + '%' : y + '%'">{{ name == '' ? oldName : name }}</text>
				</mask>
			</defs>
			<rect class="svg-rect" x="0" y="0" width="100%" height="100%"></rect>
		</svg>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				oldName: '冯民杰',
				name: '',
				oldX: 745,
				x: null,
				y: null,
				oldY: 60,
				fs: null,
				oldF: 80
			}
		},
		mounted() {
			this.$nextTick(() => {
				//调整音量为0
				this.$refs.video1.volume = 0;
				var video = document.getElementById('video1');
				video.play();
			})
		},
		methods: {
			inputUp(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="less" scoped>
	.box {
		width: 100vw;
		height: 100vh;
		display: flex;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.video-box {
		position: absolute;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	video {
		/*position: absolute;
	    top: 0%;
	    left: 0%;
	    min-width: 100%;
	    min-height: 100%;
	    width: auto;
	    height: auto;*/
		object-fit: fill;
	}

	.svg {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.mask-rect {
		fill: rgb(240, 240, 240);
	}

	.mask-text {
		font-size: 120px;
		font-weight: 900;
		text-anchor: middle;
		dominant-baseline: baseline;
		fill: black;
		display: block;
		width: 50px;
		height: 50px;
	}

	.svg-rect {
		fill: white;
		mask: url(#mask);
	}

	.control-box {
		width: 280px;
		height: 164px;
		background-color: rgba(0, 0, 0, .1);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		box-sizing: border-box;
		padding: 20px;
	}
</style>
