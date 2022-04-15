<template>
  <div class="container-offers-panel">
    <single-offer
      v-for="(offer, i) in offers"
      :key="i"
      :offer="offer"
      @selected="showDetails(offer)"
    ></single-offer>
    <offer-detail v-if="selectedOffer" :offer="selectedOffer"></offer-detail>
  </div>
</template>

<script>
// Components
import SingleOffer from "./SingleOffer.vue";
import OfferDetail from "./OfferDetail.vue";

// Services
import OfferService from "../../service/offer.service";
const offerService = new OfferService();

export default {
  name: "SidebarMobile",
  components: {
    SingleOffer,
    OfferDetail,
  },
  data() {
    return {
      offers: [],
      selectedOffer: null,
    };
  },
  props: {},
  created() {
    offerService.getAllActiveOffers().then((offers) => {
      this.offers = offers;
    });
  },
  mounted() {},
  methods: {
    showDetails(offer) {
      this.selectedOffer = offer;
    },
  },
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