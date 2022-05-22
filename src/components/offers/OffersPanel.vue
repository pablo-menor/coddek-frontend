<template>
  <div class="container-offers-panel">
    <single-offer
      v-for="(offer, i) in offers"
      :key="i"
      :offer="offer"
      @selected="showDetails(offer)"
      class="pointer"
    ></single-offer>
    <offer-detail
      v-if="selectedOffer"
      :offer="selectedOffer"
      @cancel="selectedOffer = false"
      @showChallenge="showChallengeDetails($event)"
    ></offer-detail>

    <challenge
      v-if="showChallenge"
      @cancelChallenge="showChallenge = false"
      @solutionUploaded="selectedOffer = null"
      :challengeId="challengeId"
      :offerId="offerId"
    >
    </challenge>
  </div>
</template>

<script>
// Components
import SingleOffer from "./SingleOffer.vue";
import OfferDetail from "./OfferDetail.vue";
import Challenge from "./Challenge.vue";

// Services
import OfferService from "../../service/offer.service";
const offerService = new OfferService();

export default {
  name: "SidebarMobile",
  components: {
    SingleOffer,
    OfferDetail,
    Challenge,
  },
  data() {
    return {
      offers: [],
      selectedOffer: null,
      showChallenge: false,
      challengeId: null,
      offerId: null,
      filters: {},
    };
  },
  props: {},
  created() {
    this.getAllOffers();
  },
  mounted() {},
  methods: {
    getAllOffers() {
      offerService.getAllActiveOffers().then((offers) => {
      this.offers = offers;
    })},
    showDetails(offer) {
      this.selectedOffer = offer;
    },
    getOffersByTitle(input) {
      offerService.findOfferByTitle(input).then((offers) => {
        this.offers = offers;
      });
    },
    showChallengeDetails(challengeId) {
      this.challengeId = this.selectedOffer.challengeId;
      this.offerId = this.selectedOffer._id;
      this.showChallenge = true;
    },
    getOffersByFilters(filters) {
      this.filters = filters;
      offerService.getOffersByFilters(this.offers, filters).then((offers) => {
        this.offers = offers;
      });
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

.pointer {
  cursor: pointer;
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
}

/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 749px) {
  .container-offers-panel {
    margin-top: 60px;
  }
}
</style>