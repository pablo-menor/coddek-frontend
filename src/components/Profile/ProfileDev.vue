<template>
  <div class="container-profile-dev">
    <div class="wrapper">
      <section class="user-info"></section>
    </div>
    <banner/>
    <mobile-options v-if="own" :role="'developer'" />
  </div>
</template>

<script>
// Components
import MobileOptions from "./MobileOptions.vue";
import Banner from "./Banner.vue";
export default {
  name: "ProfileDev",
  data() {
    return {};
  },
  components: {
    MobileOptions,
    Banner,
  },
  props: {
    own: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
.container-profile-dev {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
}

.wrapper {
  /* background-color: rgb(155, 155, 155); */
  width: 95%;
  max-width: 1200px;
  height: 150vh;
  z-index: 5;
}

.user-info{
  margin-top: 15px;
    width: 100%;
    height: 200px;
    background-color: #242525;
}
</style>