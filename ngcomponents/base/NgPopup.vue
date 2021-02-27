<template>
  <view>
    <view v-if="maskShow" class="mask-modal" @tap="maskClose">
      <view
        class="content"
        :class="{ [direction]: true, [activeClass]: show }"
        :style="setActivePosition"
        @tap.stop=""
      >
        <slot v-if="show"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "NgPopup",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "right", // 方向  top，bottom，left，right
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    positon: { // 现在的位置
      type: Object,
      default: () => ({}),
    },
    activePositon: { // 激活的位置
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      maskShow: false,
      show: false,
    };
  },
  computed: {
    setActivePosition() {
      return this.show ? this.activePositon : this.positon;
    },
    activeClass() {
      return this.$strJoin(this.direction, "-active");
    },
  },
  watch: {
    showModal(val) {
      if (val) {
        this.maskShow = true;
        setTimeout(() => {
          this.show = true;
        }, 0);
      } else {
        this.show = false;
        setTimeout(() => {
          this.maskShow = false;
        }, 300);
      }
    },
  },
  methods: {
    maskClose() {
      if (this.autoClose) {
        this.close();
      }
    },
    close() {
      this.$emit("update:showModal", false);
      this.$emit("close", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.mask-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba($color: #000000, $alpha: 0.63);
  z-index: 333;
  top: 0;
  left: 0;
  .content {
    position: absolute;
  }
  .top {
    width: 100%;
    background: white;
    top: -100%;
    transition: all 0.3s ease;
  }
  .top-active {
    top: 0;
  }
  .bottom {
    width: 100%;
    background: white;
    bottom: -100%;
    transition: all 0.3s ease;
  }
  .bottom-active {
    bottom: 0;
  }
  .right {
    height: 100%;
    background: white;
    right: -100%;
    transition: all 0.3s ease;
  }
  .right-active {
    right: 0;
  }
  .left {
    height: 100%;
    background: white;
    left: -10%;
    transition: all 0.3s ease;
  }
  .left-active {
    left: 0;
  }
}
</style>
