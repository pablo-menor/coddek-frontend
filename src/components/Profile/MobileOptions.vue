<template>
  <div class="container-mobile-options">
    <div
      class="options options-developer"
      v-if="role == 'developer'"
      ref="devOptions"
    >
      <i
        class="fa-solid fa-clock-rotate-left icon selected"
        @click="select(0)"
      ></i>
      <i class="fa-regular fa-bookmark icon" @click="select(1)"></i>
      <i class="fa-regular fa-file-lines icon" @click="select(2)"></i>
    </div>
    <div
      class="options options-company"
      v-if="role == 'company'"
      ref="companyOptions"
    >
            <i
        class="fa-solid fa-clock-rotate-left icon selected"
        @click="selectCompany(0)"
      ></i>
      <i class="fa-solid fa-folder-open icon" @click="selectCompany(1)"></i>
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
  methods: {
    select(index) {
      let icons = this.$refs.devOptions.children;
      for (const icon of icons) {
        icon.classList.remove("selected");
      }
      icons[index].classList.add("selected");
      this.$emit("changeContent", index);
    },
     selectCompany(index) {
      let icons = this.$refs.companyOptions.children;
      for (const icon of icons) {
        icon.classList.remove("selected");
      }
      icons[index].classList.add("selected");
      this.$emit("changeContent", index);
    },
  },
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
  z-index: 6;
}
.options {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}
.icon {
  font-size: 2em;
  color: #5f5f5f;
}
.selected {
  color: #108cd4;
  padding-bottom: 5px;
  border-bottom: 2px solid #02b194;
}
</style>