<template>
  <div class="container">
    <!-- Menu mobile-->
    <sidebar-mobile class="menu-mobile"></sidebar-mobile>
    <side-arrow @open-menu="openMenu()" class="side-arrow"></side-arrow>
    <close-menu @close-menu="closeMenu()" class="close-menu"></close-menu>
    <single-offer></single-offer>

    <!-- buscador -->
    <!--Componente OffersPanel -->
  </div>
</template>

<script>
import SidebarMobile from "../../components/sidebar/SidebarMobile.vue";
import SideArrow from "../../components/sidebar/OpenMenu.vue";
import CloseMenu from "../../components/sidebar/CloseMenu.vue";
import SingleOffer from "../../components/offers/SingleOffer.vue"; /*PROVISIONAL, esto hay que importarlo en offerspanel*/ 

export default {
  name: "Dashboard",
  components: {
    SidebarMobile,
    SideArrow,
    CloseMenu,
    SingleOffer,
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
.container{
    overflow-x: hidden;
}
.menu-mobile {
  margin-left: -98vw;
  transition: 0.3s ease-in-out;
}
</style>