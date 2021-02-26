<template>
	<view class="play-box ng-flex ng-flex-space">
		<view
			class="play-item"
			v-for="(item, index) in list"
			:key="$strJoin('play-', index)"
		>
        <image :src="item.src" mode="scaleToFill"
		/></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					href: "",
					src: "/static/imgs/4@2x.png",
				},
				{
					href: "",
					src: "/static/imgs/5@2x.png",
				},
				{
					href: "",
					src: "/static/imgs/6@2x.png",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.play-box {
	width: 100%;
	.play-item {
		width: 220rpx;
		height: 148rpx;
	}
}
</style>
