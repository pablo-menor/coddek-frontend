<template>
  <div class="container-single-offer" @click="selected()">
    <div class="img-company"></div>
    <div class="data-offer">
      <h3 class="title">{{ offer.title }}</h3>
      <h5>{{ offer.company.name }}</h5>
      <div class="tags-offer">
        <span v-for="(tag, i) in offer.tags" :key="i">{{ tag.name }}</span>
      </div>
    </div>
    <!-- <div class="save-offer">
      <i
        v-bind:class="{ 'far fa-bookmark': !saved, 'fas fa-bookmark': saved }"
      ></i>
    </div> -->
    <div v-if="offer.salary" class="salary-container">
      <span>{{ getSalary() }}€ bruto/año</span>
    </div>
  </div>
</template>

<script>
// Services
import OfferService from "../../service/offer.service";
import DeveloperService from "../../service/developer.service";

const offerService = new OfferService();
const developerService = new DeveloperService();

export default {
  name: "SingleOffer",
  data() {
    return {
      saved: false,
    };
  },
  props: {
    offer: Object,
  },
  created() {
    this.getSavedOffers();
  },
  mounted() {},
  methods: {
    selected() {
      this.$emit("selected", this.offer);
    },
    getSalary() {
     let range  = offerService.convertSalary(this.offer.salary.amount);
      return `${range.min}- ${range.max}`;
    },
    getSavedOffers() {
      developerService.getSavedOffers().then((response) => {
        this.saved = response.some((offer) => offer.offerId === this.offer._id);
      });
    },
  },
};
</script>

<style scoped>
.container-single-offer {
  box-shadow: 1px 1px 5px #b1b1b1c5;
  border-radius: 5px;
  width: 85%;
  height: 150px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  position: relative;
  z-index: 1;
  max-width: 550px;
  background-color: #fff;
}
.img-company {
  border-radius: 50%;
  border: 1px solid #333;
  width: 50px;
  height: 50px;
}
.data-offer {
  display: flex;
  flex-direction: column;
  max-width: 220px;
  margin-top: 4px;
}
.title {
  font-size: 1rem;
}
.tags-offer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
  padding: 5px;
  margin-top: 5px;
  align-items: center;
  height: 65px;
  width: 130px;
}
.tags-offer span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 249, 249);
  box-shadow: 1px 1px 3px #a8a8a8;
  color: rgb(0, 0, 0);
  font-size: 0.7rem;
  height: 25px;
  /* padding: 0 10px; */
  border-radius: 3px;
  text-align: center;
}
.save-offer {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2rem;
}

.salary-container {
  position: absolute;
  right: 13px;
  top: 120px;
  font-size: 0.8rem;
}
</style>