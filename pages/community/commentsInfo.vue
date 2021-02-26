<template>
	<view>
		<comments-title @collected="collected" :isCollect="isCollect"></comments-title>
		<view class="empty"></view>
		<comments-item></comments-item>
	</view>
</template>

<script>
	import CommentsTitle from '../../ngcomponents/page/community/CommentsTitle.vue'
	import CommentsItem from '../../ngcomponents/page/community/CommentsItem.vue'
	export default {
		components: {
			CommentsTitle,
			CommentsItem
		},
		data() {
			return {
				isCollect: false  //收藏
			};
		},
		methods: {
			collected() {
				this.isCollect = !this.isCollect
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding:10px 20px;
		box-sizing: border-box;
	}
	.empty {
		width: 100%;
		height: 100rpx;
	}
</style>
