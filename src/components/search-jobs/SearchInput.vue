<template>
  <div class="container-search-input">
      <div class="input-container">
           <input class="input-field" type="text" v-model="inputSearch" @keyup="filterOffersByTitle()">
           <i class="fas fa-search" @click="filterOffersByTitle()"></i>
      </div>
      <!-- Boton filtros -->
    <button-filters class="button-filters"></button-filters>
  </div>
</template>

<script>
//Components
import ButtonFilters from "../../views/Dashboard/Filters-button.vue";


export default {
  name: "SearchInput",
  components: {
     ButtonFilters,
  },
  data() {
    return {
      inputSearch: '',
    };
  },
  created() {},
  mounted() {},
  methods: {
    filterOffersByTitle() {
      this.$emit("search", this.inputSearch);
    }
  },
};
</script>

<style scoped>
.container-search-input {
  display: flex;
  justify-content: center;
  gap:5px;
}

.input-container{
    height: 35px;
    border: 2px solid #0075f3;
    display: flex;
    align-items: center;
    width: 70%;
    min-width: 230px;
    max-width: 400px;
    justify-content: space-around;
    border-radius: 13px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
}
.input-field{
    border: none;
    outline: none;  
    width: 85%;
    height: 25px;
    font-size: 1rem;
}

</style>