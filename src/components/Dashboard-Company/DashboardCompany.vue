<template>
  <div class="dashboard-company-panel">
    <div class="wrap-companypanel">
      <div class="logo-name">
        <i class="fa-solid fa-jedi"></i>
        <h1>Gugel</h1>
      </div>
      <div class="buttons">
        <router-link :to="profileLink" class="option-company">Mi Perfil</router-link>
        <span class="option-company" @click="showOfferCreator()">Crear Oferta</span>
        <span class="option-company">Mis Ofertas</span>
        <span class="option-company">Candidatos</span>
      </div>
    </div>

  </div>
</template>

<script>
//prueba offer creator
import OfferCreator from "../../components/offers/OfferCreator.vue";

export default {
  name: "DashboardCompany",
  components: {
    OfferCreator,
  },
  data() {
        return {
          profileLink: `/${this.$store.state.username}`,
        };
    },
    methods: {
    showOfferCreator(){
      let createOfferCreator = document.querySelector(".container-offer-creator");
      createOfferCreator.style.display = "flex";
    }
  },
};
</script>

<style scoped>
.dashboard-company-panel {
  font-family: "Nunito", sans-serif;
  min-width: 320px;
  width: 98vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 70px;
}
.wrap-companypanel {
  border-radius: 5px;
  width: 85%;
  /* height: 90vh; */
  max-width: 555px;
  position: fixed;
  z-index: 5;
  top: calc(50vh - 42.5vh);
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(15, 136, 235);
  background-color: #fff;
  background-color: rgb(250, 249, 249);
  box-shadow: 1px 1px 3px #a8a8a8;
  color: rgb(0, 0, 0);
}
.logo-name {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 60px;
  margin-bottom: 60px;
}
.logo-name h1 {
  font-size: 40px;
  margin-top: 30px;
}
.buttons {
  display: flex;
  flex: 2;
  align-items: center;
  flex-direction: column;
}
.option-company{
  font-size: 1.8rem;
  cursor: pointer;
  text-decoration: none;
  color: rgb(0, 0, 0);
  border-bottom: 2px solid rgb(15, 136, 235);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.option-company:last-child {
    border-bottom: 0px;
}

.option-company:hover{

}

/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 749px) {
    .dashboard-company-panel {
        position:fixed;
        max-width: 300px;
        top: 75px;
        left: 10px;
    }
    .wrap-companypanel {
        top: 75px;
        max-width: 300px;
        max-height: 700px;
    }
}
</style>