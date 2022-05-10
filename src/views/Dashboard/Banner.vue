<template>
  <div class="container">
    <!-- search input -->
    <search-input
      class="search-input"
      v-if="role === 'developer'"
      :own="own"
      :user="user"
    ></search-input>

    <!-- profile pic -->
    <svg
      class="profile"
      @click="popMenu = !popMenu"
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60 33.75C60 37.7282 58.4196 41.5436 55.6066 44.3566C52.7936 47.1696 48.9782 48.75 45 48.75C41.0218 48.75 37.2064 47.1696 34.3934 44.3566C31.5804 41.5436 30 37.7282 30 33.75C30 29.7718 31.5804 25.9564 34.3934 23.1434C37.2064 20.3304 41.0218 18.75 45 18.75C48.9782 18.75 52.7936 20.3304 55.6066 23.1434C58.4196 25.9564 60 29.7718 60 33.75ZM52.5 33.75C52.5 35.7391 51.7098 37.6468 50.3033 39.0533C48.8968 40.4598 46.9891 41.25 45 41.25C43.0109 41.25 41.1032 40.4598 39.6967 39.0533C38.2902 37.6468 37.5 35.7391 37.5 33.75C37.5 31.7609 38.2902 29.8532 39.6967 28.4467C41.1032 27.0402 43.0109 26.25 45 26.25C46.9891 26.25 48.8968 27.0402 50.3033 28.4467C51.7098 29.8532 52.5 31.7609 52.5 33.75Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45 3.75C22.2188 3.75 3.75 22.2188 3.75 45C3.75 67.7812 22.2188 86.25 45 86.25C67.7812 86.25 86.25 67.7812 86.25 45C86.25 22.2188 67.7812 3.75 45 3.75ZM11.25 45C11.25 52.8375 13.9237 60.0525 18.405 65.7825C21.5521 61.6496 25.6121 58.3003 30.2679 55.9962C34.9236 53.692 40.049 52.4955 45.2437 52.5C50.3712 52.4951 55.4322 53.6607 60.041 55.9079C64.6498 58.1552 68.6849 61.4247 71.8387 65.4675C75.0879 61.206 77.2756 56.2321 78.2209 50.9572C79.1661 45.6824 78.8416 40.2583 77.2744 35.1337C75.7071 30.0091 72.9421 25.3314 69.2081 21.4876C65.4741 17.6439 60.8784 14.7445 55.8014 13.0294C50.7244 11.3143 45.312 10.8329 40.012 11.6249C34.712 12.4169 29.6767 14.4596 25.3229 17.584C20.9691 20.7083 17.4218 24.8245 14.9746 29.592C12.5274 34.3595 11.2507 39.6411 11.25 45ZM45 78.75C37.2523 78.7616 29.7385 76.0963 23.73 71.205C26.1485 67.7428 29.3675 64.9159 33.1132 62.9651C36.8589 61.0142 41.0205 59.997 45.2437 60C49.4144 59.9967 53.5256 60.9884 57.236 62.8928C60.9464 64.7973 64.1489 67.5595 66.5775 70.95C60.5224 76.0001 52.8847 78.7611 45 78.75Z"
        fill="white"
      />
    </svg>
    <!-- POP options menu -->
    <div class="options-menu" v-show="popMenu">
      <div @click="profile()" class="go-to-profile">Perfil</div>
      <div @click="logout()" class="sign-out">Salir</div>
      <i
        @click="popMenu = false"
        class="fa-solid fa-xmark cancel-menu-profile"
      ></i>
    </div>
  </div>
</template>
<script>
import SearchInput from "../../components/search-jobs/SearchInput.vue";

export default {
  name: "Banner",
  components: {
    SearchInput,
  },
  props: {
    role: String,
  },
  data() {
    return {
      profileLink: `/${this.$store.state.username}`,
      popMenu: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    profile() {
      this.$router.push(this.profileLink);
    },
    logout() {
      this.$store.dispatch("setLogout");
      localStorage.removeItem("vuex");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 60px;
  background: linear-gradient(
    100deg,
    rgba(1, 73, 234, 1) 8%,
    rgba(0, 173, 237, 1) 80%,
    rgb(1, 188, 209) 98%
  );
  top: 0;
  display: none;
  align-items: center;
  justify-content: center;
}
.profile {
  height: 60px;
  position: absolute;
  right: 0;
  padding: 7px;
}

.profile:hover {
  cursor: pointer;
}

.options-menu {
  position: absolute;
  top: 55px;
  right: 15px;
  background: #fff;
  width: 200px;
  height: 100px;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(66, 63, 63, 0.5);
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  z-index: 9;
}

.options-menu div {
  cursor: pointer;
  height: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.options-menu .cancel-menu-profile {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.5rem;
  color: rgb(245, 57, 0);
  cursor: pointer;
}
</style>