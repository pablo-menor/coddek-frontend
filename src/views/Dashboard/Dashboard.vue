<template>
  <div class="container">
    <!-- Menu mobile-->
    <sidebar-mobile class="menu-mobile" :role="role"></sidebar-mobile>
    <side-arrow @open-menu="openMenu()" class="side-arrow"></side-arrow>
    <close-menu @close-menu="closeMenu()" class="close-menu"></close-menu>

    <!-- buscador -->
    <search-input
      class="search-input"
      @search="searchByTitle($event)"
      v-show="role === 'developer'"
    ></search-input>

    <!--  Desktop Banner-->
    <banner
      class="banner"
      :role="role"
      @search="searchByTitle($event)"
    ></banner>

    <!--OffersPanel Component -->
    <offers-panel
      class="offers-panel"
      v-show="role === 'developer'"
      ref="panel"
    >
    </offers-panel>

    <!--Filters-->
    <filters class="filters-component"
      v-show="role === 'developer'" @filters="filter($event)">
    </filters>

    <!-- Dashboard Company -->
    <dashboard-company
      class="company-options"
      v-show="role === 'company' && companyOptions"
      ref="dashcompany"
      @showOfferCreator="showOfferCreator = true"
      @showMyOffers="showMyOffers = true"
    >
    </dashboard-company>

    <!-- OfferCreator -->
    <offer-creator
      class="offer-creator"
      v-show="role === 'company' && showOfferCreator"
      @closeOfferCreator="showOfferCreator = false"
    >
    </offer-creator>

    <!--OffersPanelCompany Component -->
    <company-offers-panel
      class="offers-panel-company"
      v-show="role === 'company' && showMyOffers"
      @closeMyOffers="showMyOffers = false"
    >
      >
    </company-offers-panel>
  </div>
</template>

<script>
// Components
import SidebarMobile from "../../components/sidebar/SidebarMobile.vue";
import SideArrow from "../../components/sidebar/OpenMenu.vue";
import CloseMenu from "../../components/sidebar/CloseMenu.vue";
import OffersPanel from "../../components/offers/OffersPanel.vue";
import SearchInput from "../../components/search-jobs/SearchInput.vue";
import Banner from "../../views/Dashboard/Banner.vue";
import Filters from "../../views/Dashboard/Filters.vue";
import ButtonFilters from "../../views/Dashboard/Filters-button.vue";
import OfferCreator from "../../components/offers/OfferCreator.vue";
import DashboardCompany from "../../components/Dashboard-Company/DashboardCompany.vue";
import CompanyOffersPanel from "../../components/offers/CompanyOffersPanel.vue";

// Services
import AuthService from "../../service/auth.service";
const authService = new AuthService();

export default {
  name: "Dashboard",
  components: {
    SidebarMobile,
    SideArrow,
    CloseMenu,
    OffersPanel,
    SearchInput,
    Banner,
    Filters,
    ButtonFilters,
    OfferCreator,
    DashboardCompany,
    CompanyOffersPanel,
  },
  data() {
    return {
      role: "",
      showOfferCreator: false,
      showMyOffers: true,
      companyOptions: true,
    };
  },
  created() {
    authService.getRoleOrSendToLogin(this.$router).then((role) => {
      this.role = role;
    });
  },
  mounted() {
    this.closeMenu();
  },
  methods: {
    openMenu() {
      let menuMobile = document.querySelector(".menu-mobile");
      menuMobile.style.marginLeft = "0";
      let sideArrow = document.querySelector(".side-arrow");
      sideArrow.style.display = "none";
      let closeMenu = document.querySelector(".close-menu");
      closeMenu.style.display = "";
    },
    closeMenu() {
      let menuMobile = document.querySelector(".menu-mobile");
      menuMobile.style.marginLeft = "-98vw";
      let sideArrow = document.querySelector(".side-arrow");
      sideArrow.style.display = "";
      let closeMenu = document.querySelector(".close-menu");
      closeMenu.style.display = "none";
    },
    searchByTitle(input){
      if(input == "") {
        this.$refs.panel.getAllOffers();
      }
      this.$refs.panel.getOffersByTitle(input);
    },
    filter(filters){
      this.$refs.panel.getOffersByFilters(filters);
    },
  },
};
</script>

<style scoped>
.container {
  overflow-x: hidden;
}
.offers-panel,
.search-input,
.offer-creator,
.company-options,
.filters-component {
  margin-left: 2vw;
}
.search-input {
  margin-top: 2vw;
}
.offers-panel {
  top: 60px;
}

/* ---------- RESPONSIVE --------- */
@media screen and (min-width: 749px) {
  .menu-mobile {
    display: none;
  }
  .side-arrow {
    display: none;
  }
  .close-menu {
    display: none;
  }
  .banner {
    display: flex;
  }
  .search-input {
    display: none;
  }
  .company-options {
    margin-left: 0;
  }
}
</style>