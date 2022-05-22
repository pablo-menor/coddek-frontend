<template>
  <div class="container-offers-panel">
    <company-single-offer
      v-for="(offer, i) in offers"
      :key="i"
      :offer="offer"
      @selected="showDetails(offer)"
    ></company-single-offer>
    <company-offer-detail
      v-if="selectedOffer"
      :offer="selectedOffer"
      @cancel="selectedOffer = false"
    ></company-offer-detail>

  </div>
</template>

<script>
// Components
import CompanySingleOffer from "./CompanySingleOffer.vue";
import CompanyOfferDetail from "./CompanyOfferDetail.vue";
import Challenge from "./Challenge.vue";

// Services
import OfferService from "../../service/offer.service";
const offerService = new OfferService();
// Services
import AuthService from "../../service/auth.service";
const authService = new AuthService();

export default {
  name: "CompanyOffersPanel",
  components: {
    CompanySingleOffer,
    CompanyOfferDetail,
    Challenge,
  },
  data() {
    return {
      offers: [],
      selectedOffer: null,
      showChallenge: false,
      challengeId: null,
      offerId: null,
    };
  },
  props: {},
  created() {
    
  },
  mounted() {
    offerService.getAllCompanyOffers().then((offers) => {
      this.offers = offers;
    });
  },
  methods: {
    showDetails(offer) {
      this.selectedOffer = offer;
    },
    getOffersByTitle(input) {
      offerService.findOfferByTitle(input).then((offers) => {
        this.offers = offers;
      });
    },
    filterOffersByOrder() {
      console.log("filtro por orden");
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
  margin-top: 10px;
  z-index: 10;
}

/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 749px) {
  .container-offers-panel {
    margin-top: 60px;
  }
}
</style>