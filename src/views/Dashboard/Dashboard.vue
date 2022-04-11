<template>
  <div class="container">
    <!-- Menu mobile-->
    <sidebar-mobile class="menu-mobile" :role="role"></sidebar-mobile>
    <side-arrow @open-menu="openMenu()" class="side-arrow"></side-arrow>
    <close-menu @close-menu="closeMenu()" class="close-menu"></close-menu>

    <!-- buscador -->
    <search-input class="search-input"></search-input>

    <!--Componente OffersPanel -->
    <offers-panel class="offers-panel" v-show="role==='developer'" ></offers-panel>
  </div>
</template>

<script>
// Components
import SidebarMobile from "../../components/sidebar/SidebarMobile.vue";
import SideArrow from "../../components/sidebar/OpenMenu.vue";
import CloseMenu from "../../components/sidebar/CloseMenu.vue";
import OffersPanel from "../../components/offers/OffersPanel.vue";
import SearchInput from "../../components/search-jobs/SearchInput.vue";

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
  },
  data() {
    return {
      role: "",
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
  },
};
</script>

<style scoped>
.container {
  overflow-x: hidden;
}
.offers-panel,
.search-input {
  margin-left: 2vw;
}

.search-input{
  margin-top: 20px;
}
</style>