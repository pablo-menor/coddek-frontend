<template>
  <div class="container-button-filters">
    <div
      class="button-container filterOff"
      ref="buttonFilter"
      @click="filters()"
    >
      <i class="fa-solid fa-filter" ref="iconFilter"></i>
    </div>
  </div>
</template>
<script>
import Filters from "../../views/Dashboard/Filters.vue";
export default {
  name: "ButtonFilters",
  components: {
    Filters,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    filters() {
      let filterComponent = document.querySelector(".container-filters");
      filterComponent.style.display = "none";
      var clases = this.$refs.buttonFilter.classList;
      clases.forEach((element) => {
        if (element == "filterOff") {
          this.$refs.buttonFilter.classList.add("filterOn");
          this.$refs.buttonFilter.classList.remove("filterOff");
          this.$refs.buttonFilter.style.borderColor = "rgba(255, 92, 0, 1)";
          this.$refs.iconFilter.style.color = "rgba(255, 92, 0, 1)";
          filterComponent.style.display = "flex";
        } else if (element == "filterOn") {
          this.$refs.buttonFilter.classList.add("filterOff");
          this.$refs.buttonFilter.classList.remove("filterOn");
          this.$refs.buttonFilter.style.borderColor = "#0075f3";
          this.$refs.iconFilter.style.color = "#0075f3";
          filterComponent.style.display = "none";
        }
      });
    },
  },
};
</script>
<style scoped>
.container-button-filters {
  display: flex;
  justify-content: center;
}

.button-container {
  height: 35px;
  width: 45px;
  border: 2px solid #0075f3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 13px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
}
.fa-filter {
  color: #0075f3;
}

/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 1170px) {
  .container-button-filters {
    display: none;
  }
}

</style>