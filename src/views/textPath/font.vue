<template>
	<div class="box">
		<svg id="svgbox" class="svgbox" width="300" height="400" viewbox="0 0 300 400"
			enable-background="new 0 0 200 200">
			<defs>
				<g id="path">
					<path d="M68.18066,68.18066L131.81934,131.81934"></path>
					<path d="M68.18066,131.82031L131.81934,68.17969"></path>
					<path d="M35,100A65,65 0,1,1 165,100A65,65 0,1,1 35,100"></path>
					<path d="M25,100A75,75 0,1,1 175,100A75,75 0,1,1 25,100"></path>
					<path d="M15,100A85,85 0,1,1 185,100A85,85 0,1,1 15,100"></path>
					<path d="M5,100A95,95 0,1,1 195,100A95,95 0,1,1 5,100"></path>
				</g>
			</defs>
			<use class="path-group path-group-1" xlink:href="#path" x="50" y="100" />
		</svg>
		<div style="width: 0;flex: 1;height: 100%;justify-content: center;align-items: center;display: flex;">
			<div class="main-box">
				<div style="display: flex;">
					<div style="margin-right: 10px;line-height: 32px;color: #F7A800">类型</div>
					<div @click="changeType('delayed')" :class="type == 'delayed' ? 'active-color a1' : 'a1'">
						delayed</div>
					<div @click="changeType('scenario-sync')"
						:class="type == 'scenario-sync' ? 'active-color a1' : 'a1'">scenario-sync</div>
					<div @click="changeType('oneByOne')" :class="type == 'oneByOne' ? 'active-color a1' : 'a1'">
						oneByOne</div>
				</div>
				<div style="display: flex;">
					<div style="margin-right: 10px;line-height: 32px;color: #F7A800">动画</div>
					<div @click="changeAnim('LINEAR')" :class="anim == 'LINEAR' ? 'active-color a1' : 'a1'">
						linear</div>
					<div @click="changeAnim('EASE')" :class="anim == 'EASE' ? 'active-color a1' : 'a1'">ease
					</div>
					<div @click="changeAnim('EASE_IN')" :class="anim == 'EASE_IN' ? 'active-color a1' : 'a1'">
						ease-in</div>
					<div @click="changeAnim('EASE_OUT')" :class="anim == 'EASE_OUT' ? 'active-color a1' : 'a1'">
						ease-out</div>
					<div @click="changeAnim('EASE_OUT_BOUNCE')"
						:class="anim == 'EASE_OUT_BOUNCE' ? 'active-color a1' : 'a1'">ease-out bounce</div>
				</div>
				<div style="display: flex;width: 100%;justify-content: space-around;margin-top: 20px;">
					<div @click="synthD.reset().play()" :class="anim == 'LINEAR' ? 'a1' : 'a1'">重新播放</div>
					<div @click="synthD.play(-3)" :class="anim == 'EASE' ? 'a1' : 'a1'">逆向播放</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vivus from "vivus";
	export default {
		data() {
			return {
				myVivus: '',
				type: 'delayed',
				anim: 'LINEAR'
			}
		},
		mounted() {
			this.synthD = new Vivus('svgbox', {
				type: this.type,
				duration: 100,
				start: 'manual',
				animTimingFunction: Vivus[this.anim]
			});
			this.synthD.reset().play(); //播放动画
		},
		methods: {
			changeType(type) {
				this.type = type
				// newType = this.type
				this.synthD && this.synthD.stop().destroy();
				this.synthD = new Vivus('svgbox', {
					type: this.type,
					duration: 100,
					start: 'manual',
					animTimingFunction: Vivus[this.anim]
				});
				this.synthD.reset().play(); //播放动画
				//svgbox.reset().play(); //重新播放动画
				// svgbox.play(-3); //倒带，反向收回之前完成的动画 
			},
			changeAnim(anim) {
				this.anim = anim
				// newAnim = this.anim
				this.synthD && this.synthD.stop().destroy();
				this.synthD = new Vivus('svgbox', {
					type: this.type,
					duration: 100,
					start: 'manual',
					animTimingFunction: Vivus[this.anim]
				});
				this.synthD.reset().play(); //播放动画
				//svgbox.reset().play(); //重新播放动画
				//svgbox.play(-3); //倒带，反向收回之前完成的动画 
			}
		}
	}
</script>

<style lang="less" scoped>
	.main-box {
		width: 100%;
		height: 140px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.active-color {
		background-color: #F7A800 !important;
		color: #fff !important;
	}

	.a1 {
		min-width: 10px;
		box-sizing: border-box;
		padding: 3px 10px;
		height: 32px;
		border: 2px solid #F7A800;
		border-radius: 3px;
		margin-right: 3px;
		color: #F7A800;
		cursor: pointer;
	}

	.box {
		width: 811px;
		height: 400px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
		box-shadow: 0px 0px 8px 2px #efefef;
		overflow: hidden;
		display: flex;
	}

	.path-group {
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 560;
		stroke-dashoffset: 560;

		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
		animation-direction: alternate;
	}

	.path-group-1 {
		stroke: #F7A800;
		stroke-width: 5px;
		animation-name: strokeText1;
	}

	@keyframes strokeText1 {
		10% {
			stroke-dashoffset: 560;
		}

		40%,
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
