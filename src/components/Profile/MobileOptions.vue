<template>
  <div class="container-mobile-options">
      <div class="options options-developer" v-if="role == 'developer'">
          <i class="fa-regular fa-bookmark"></i>
          <i class="fa-regular fa-file"></i>
          <i class="fa-solid fa-clock-rotate-left"></i>
      </div>
      <div class="options options-company" v-if="role == 'company'">
        OPTIONs Company
      </div>
  </div>
</template>

<script>
export default {
  name: "MobileOptions",
  data() {
    return {};
  },
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
.container-mobile-options {
  background-color: #ffffff;
  width: 98vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #c7c7c7;
}
.options{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
}

.options i{
    font-size: 2em;
    color: #5f5f5f;
}
</style>