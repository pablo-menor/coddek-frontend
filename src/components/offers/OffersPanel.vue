<template>
  <div class="container-offers-panel">
    <single-offer v-for="(offer, i) in offers" :key="i" :offer="offer"></single-offer>
  </div>
</template>

<script>
import SingleOffer from "./SingleOffer.vue";
import OfferService from "../../service/offer.service";
const offerService = new OfferService();
export default {
  name: "SidebarMobile",
  components: {
    SingleOffer,
  },
  data() {
    return {
      offers: [],
    };
  },
  props: {},
  created() {
    offerService.getAllActiveOffers().then((offers) => {
      this.offers = offers;
      console.log(offers);
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
* {
  font-family: "Nunito", sans-serif;
  padding: 0;
  margin: 0;
}

.container-offers-panel {
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>