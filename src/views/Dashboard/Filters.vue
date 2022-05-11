<template>
    <div class="container-filters">
      <div class="filters"></div>
    </div>
</template>
<script>

export default {
  name: "Filters",
  components: {},
  data() {
  },
  created() { },
  mounted() {},
  methods: {


   },
};
</script>
<style scoped>
.container-filters{
  min-width: 320px; 
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 70px;
  padding-bottom: 20px;
}

.filters{
  border-radius: 5px;
  width: 85%;
  height: 90vh;
  max-width: 555px; 
  position: fixed;
  z-index: 5;
  top: calc(50vh - 42.5vh);
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(15, 136, 235);
  background-color: #fff;
}


/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 800px) {
.container-filters{
  display: flex;

}
.filters{
  display: flex;
  max-width: 300px;
  top: 70px;
  left: 10px;
  position: fixed;
}
}
</style>