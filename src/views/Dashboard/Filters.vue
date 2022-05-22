<template>
  <div class="container-filters">
    <div class="filters">
      <section class="section-tags-filter section-filter">
        <label for="tag-filter" class="label">Tags</label>
        <input type="search" name="tag-filter" class="tag-filter" v-model="tag">
      </section>
      <section class="section-salary-filter section-filter">
        <label for="" class="label" >Salario mínimo</label>
        <input type="range" name="salary-filter" class="salary-filter" min="10.000" max="60.000">
        <div class="min-max-salary">
          <span>10.000 €</span>
          <span>60.000 €</span>
        </div>
      </section>
      <section class="section-location-filter section-filter">
        <label for="" class="label">Localización</label>
        <input type="search" name="tag-filter" class="location-filter" v-model="location">
      </section>
      <section class="section-complete-filter section-filter">
        <label for="" class="label">Ofertas completas</label>
        <span class="complete-filter">Filtar por ofertas completas
          <i class="fa-solid fa-toggle-off" v-show="complete == false" @click="changeComplete()"></i>
          <i class="fa-solid fa-toggle-on" v-show="complete == true"  @click="changeComplete()"></i>
        </span>
      </section>
      <section class="section-btn-filter section-filter">
        <button class="btn-filter" @click="sendFilters()" >
            Filtrar
          </button>
      </section>
    </div>
  </div>
</template>
<script>

export default {
  name: "Filters",
  components: {},
  data() {
    return{
      tag: "",
      salary: "",
      location: "",
      complete: false,
    }
  },
  created() {
 
  },
  mounted() {},
  methods: {
    changeComplete(){
      this.complete = !this.complete;
    },
    sendFilters(){
      this.$emit("filters", {
        tag: this.tag,
        salary: this.salary,
        location: this.location,
        complete: this.complete,
      });
    }
  },
};
</script>
<style scoped>
.container-filters {
  min-width: 320px;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 70px;
  padding-bottom: 20px;
  font-family: "Nunito", sans-serif;
}

.filters {
  border-radius: 5px;
  width: 85%;
  height: 90vh;
  max-width: 555px;
  position: fixed;
  z-index: 5;
  top: calc(50vh - 42.5vh);
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(15, 136, 235);
  background-color: #fff;
  box-shadow: 1px 1px 3px #a8a8a8;
  color: rgb(0, 0, 0);
  max-height: 700px;
  padding: 15px;
  gap: 40px;
}

.label{
  font-weight: bold;
  font-size: 1.2em;
}

.section-filter{
  display: flex;
  flex-direction: column;
  gap:10px;
}

.order-filter{
  padding: 10px;
  border: 1px solid rgb(0, 98, 255);
  color: rgb(0, 98, 255);
  border-radius: 2px;
}

.tag-filter,
.location-filter{
  padding: 10px;
  border: 1px solid rgb(0, 98, 255);
  border-radius: 2px;
}

.salary-filter input{
  border: 1px solid rgb(0, 98, 255);
  background: rgb(132, 37, 37);
  outline: none;

}

.min-max-salary{
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.complete-filter{
  gap:15px;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;

}
.complete-filter i{
  font-size: 1.2rem;
  color: #f15c00;
}

.section-btn-filter{
  display: flex;
  flex:3;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
}

.btn-filter{
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  height: 45px;
  width: 200px;
  background: rgb(255, 92, 0);
  background: linear-gradient(
    100deg,
    rgb(0, 119, 255) 20%,
    rgb(0, 216, 191) 92%
  );
}
/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 1170px) {
  .container-filters {
    display: flex;
  }
  .filters {
    display: flex;
    max-width: 300px;
    top: 75px;
    left: 3vw;
    position: fixed;
  }
}
</style>