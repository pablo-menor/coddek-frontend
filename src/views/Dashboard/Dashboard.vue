<template>
  <div class="container">
    <!-- Menu mobile-->
    <sidebar-mobile class="menu-mobile"></sidebar-mobile>
    <side-arrow @open-menu="openMenu()" class="side-arrow"></side-arrow>

    <!-- buscador -->
    <!--Componente OffersPanel -->
  </div>
</template>

<script>
import SidebarMobile from "../../components/sidebar/SidebarMobile.vue";
import SideArrow from "../../components/sidebar/SideArrow.vue";
export default {
  name: "Dashboard",
  components: {
    SidebarMobile,
    SideArrow,
  },
  methods: {
    openMenu() {
      let menuMobile = document.querySelector(".menu-mobile");
      menuMobile.style.marginLeft = "0";
      let sideArrow = document.querySelector(".side-arrow");
        sideArrow.style.display = "none";
    },
  },
};
</script>

<style scoped>
.menu-mobile {
  margin-left: -98vw;
  transition: 0.3s ease-in-out;
}
</style>