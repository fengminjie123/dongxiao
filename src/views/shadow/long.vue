<template>
	<div class="mainBox">
		<!-- <div class="box2"></div> -->
		<div class="container">
			<div class="box"></div>
		</div>
		<svg class="svg" viewbox="0 0 500 300" preserveAspectRatio="xMidYMid slice">
		    <defs>
		        <mask id="mask" x="0" y="0" width="100%" height="100%">
		            <rect class="mask-rect" x="0" y="0" width="100%" height="100%"></rect>
		            <text class="mask-text" :x="x == null ? oldX : x" :y="y == null ? oldY + '%' : y + '%'">{{ name == '' ? oldName : name }}</text>
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
				oldX: 770,
				x: null,
				y: null,
				oldY: 60,
				fs: null,
				oldF: 80
			}
		}
	}
</script>

<style lang="less" scoped>
	.mainBox {
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: #efefef;
	}
	#app {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		height: 400px;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, .8);
		box-shadow: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: .5s;
	}
	.container:hover {
		box-shadow: 
		  5px 5px 0px #595959,
			10px 10px 0px #595959,
			15px 15px 0px #595959,
			20px 20px 0px #595959,
			25px 25px 0px #595959
	}
	.box {
		width: 200px;
		height: 200px;
		border-radius: 100px;
		transform: rotate(0deg);
		animation: rotatefn 5s infinite linear;
		box-shadow:
		  20px 10px 40px #f1f1f1,
			-30px -10px 40px #245635
	}
	@keyframes rotatefn {
	  from {
	    transform: rotate(0deg);
	  }
	
	  to {
	    transform: rotate(360deg);
	  }
	}
	.svg {
	    width: 100vw;
	    height: 100vh;
	    position: absolute;
			top: 0;
			left: 0;
	}
	
	.mask-rect {
	    fill: rgb(240, 240, 240);
	}
	
	.mask-text {
	    font-size: 200px;
	    font-weight: 900;
	    text-anchor: middle;
	    dominant-baseline: baseline;
	    fill: black;
	    display: block;
	    width: 50px;
	    height: 50px;
	}
	.box2 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 500px;
		height: 300px;
	}
	.svg-rect {
	    fill: white;
	    mask: url(#mask);
	}
</style>