<template>
  <div class="container-desktop-options">
    <div
      ref="devOptionsDesktop"
      class="options-developer-desktop"
      v-if="role === 'developer'"
    >
      <span @click="select(0)" class="selected">Historial</span>
      <span @click="select(1)">Ofertas guardadas</span>
      <span @click="select(2)">Mis currículums</span>
    </div>
    <div
      ref="devOptionsDesktop"
      class="options-developer-desktop"
      v-if="role === 'company'"
    >
      <span @click="select(0)" class="selected">Ofertas</span>
      <span @click="select(1)">Challenges</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopOptions",
  data() {
    return {};
  },
  components: {},
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
      let options = this.$refs.devOptionsDesktop.children;
      for (const option of options) {
        option.classList.remove("selected");
      }
      options[index].classList.add("selected");
      this.$emit("changeContent", index);
    },
  },
};
</script>
    
<style scoped>
.options-developer-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  gap: 50px;
}

.options-developer-desktop span {
  cursor: pointer;
}
</style>