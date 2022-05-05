<template>
  <div class="container-profile">
    <!-- Menu mobile-->
    <sidebar-mobile
      class="menu-mobile"
      :role="$store.state.role"
    ></sidebar-mobile>
    <!-- Back to Dashboard -->
    <router-link to="/dashboard">
      <i class="fa-solid fa-arrow-left-long back-to-dashboard"></i
    > </router-link>
    <side-arrow @open-menu="openMenu()" class="side-arrow"></side-arrow>
    <close-menu @close-menu="closeMenu()" class="close-menu"></close-menu>
    <profile-company
      v-if="role === 'company'"
      :own="own"
      :user="user"
      class="profile-component"
    />
    <profile-dev
      v-if="role === 'developer'"
      :own="own"
      :user="user"
      class="profile-component"
    />
  </div>
</template>

<script>
// Components
import ProfileCompany from "../../components/Profile/ProfileCompany.vue";
import ProfileDev from "../../components/Profile/ProfileDev.vue";
import SidebarMobile from "../../components/sidebar/SidebarMobile.vue";
import SideArrow from "../../components/sidebar/OpenMenu.vue";
import CloseMenu from "../../components/sidebar/CloseMenu.vue";
// Services
import AuthService from "../../service/auth.service";
const authService = new AuthService();
export default {
  name: "Profile",
  components: {
    ProfileCompany,
    ProfileDev,
    SidebarMobile,
    SideArrow,
    CloseMenu,
  },
  data() {
    return {
      role: "",
      own: false,
      user: {},
    };
  },
  created() {
    authService
      .getRoleAndOwnership(this.$route.params.username)
      .then((data) => {
        console.log(data);
        if (!data.message) {
          this.role = data.role;
          this.own = data.owned;
          this.user = data.user;
        } else {
          // If user not found do something
          this.$router.push("/404");
        }
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
.profile-component {
  margin-left: 2vw;
  width: 98vw;
}
.back-to-dashboard {
  position: absolute;
  top: 35px;
  left: 35px;
  cursor: pointer;
  z-index: 6;
  color: rgb(228, 228, 228);
  font-size: 1.8rem;
  display: none;
}

/* --------------RESPONSIVE------------------ */
@media screen and (min-width: 700px) {
  .menu-mobile,
  .side-arrow,
  .close-menu {
    display: none;
  }
  .profile-component {
    margin-left: 0;
    width: 100vw;
  }
  .back-to-dashboard {
    display: flex;
  }
}
</style>