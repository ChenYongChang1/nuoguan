<template>
  <view>
    <login-first
      v-if="step === 0 || step === 1"
      :step="step"
      @setStep="setStep"
    ></login-first>
    <login-genre v-else-if="step === 2" @setStep="setStep"></login-genre>
    <edit-user-info v-else-if="step === 3"></edit-user-info>
  </view>
</template>

<script>
import LoginFirst from "ngcomponents/page/user/LoginFirst";
import LoginGenre from "ngcomponents/page/user/LoginGenre";
import EditUserInfo from "ngcomponents/page/user/EditUserInfo";
export default {
  components: { LoginFirst, LoginGenre, EditUserInfo },
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    setStep(step) {
      this.step = step;
    },
    submitGenre(genre) {},
  },
};
</script>

<style></style>
