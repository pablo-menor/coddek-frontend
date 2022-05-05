<template>
  <div class="container-profile-dev">
    <div class="wrapper">
      <section class="user-info">
        <div class="picture-name">
          <div class="picture"></div>
          <span class="username">{{ user.username }}</span>
        </div>
        <span class="edit-links" v-if="own"
          ><i class="fa-regular fa-pen-to-square"></i
        ></span>
        <div class="social">
          <div class="github">My Github</div>
          <div class="github">My LinkedIn</div>
        </div>
      </section>
      <section class="section about">
        {{ user.about || "Bienvenido a mi perfil" }}
        <span class="edit-about" v-if="own"
          ><i class="fa-regular fa-pen-to-square" @click="editAbout()"></i
        ></span>
       <textarea class="editing-about" ref="editAbout" v-show="editingAbout" maxlength="280"/>
       <i class="fa-solid fa-circle-check confirm-changes-about" v-show="editingAbout" @click="updateAbout()"></i>
       <i class="fa-solid fa-xmark cancel-changes-about" v-show="editingAbout" @click="editingAbout = false"></i>
      </section>
      <desktop-options class="desktop-options" />
      <section class="section content" ref="content">
        <div class="track-record">
          <span>Historial</span>
          <div
            v-show="appliedOffers.length > 0"
            class="applied-offer"
            v-for="(ele, i) in appliedOffers"
            :key="i"
            @selected="showDetails(offer)"
          >
            <span class="title">{{ ele.title }}</span>
            <span class="company-name"> {{ ele.company_name }}</span>
          </div>
          <div class="no-data" v-show="appliedOffers == 0">
            No has aplicado a ninguna oferta
          </div>
        </div>
        <div class="track-record">
          <span>Guardados</span>
        </div>
        <div class="track-record">
          <span>CV's</span>
        </div>
      </section>
    </div>
    <banner />
    <mobile-options
      v-if="own"
      :role="'developer'"
      @changeContent="changeContent($event)"
      class="mobile-options"
    />
  </div>
</template>

<script>
// Components
import MobileOptions from "./MobileOptions.vue";
import Banner from "./Banner.vue";
import DesktopOptions from "./DesktopOptions.vue";

// Services
import DeveloperService from "../../service/developer.service";
const devService = new DeveloperService();
export default {
  name: "ProfileDev",
  data() {
    return {
      appliedOffers: [],
      editingAbout: false,
    };
  },
  components: {
    MobileOptions,
    Banner,
    DesktopOptions,
  },
  props: {
    own: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  created() {},
  mounted() {
    this.changeContent(0);
    this.fetchAppliefOffers();
  },
  methods: {
    changeContent(index) {
      let contentChilds = this.$refs.content.children;
      for (const contentChild of contentChilds) {
        contentChild.classList.add("hide-section");
      }
      contentChilds[index].classList.remove("hide-section");
    },
    fetchAppliefOffers() {
      devService.getAppliedOffers(this.user._id).then((response) => {
        console.log(response);
        this.appliedOffers = response;
      });
    },
    editAbout() {
      this.editingAbout = true;
      this.$refs.editAbout.value = this.user.about || "Bienvenido a mi perfil"; 
    },
    updateAbout() {
      this.editingAbout = false;
      this.user.about = this.$refs.editAbout.value;
      console.log(this.user.about);
      devService.updateAbout(this.user.about)
    },
  },
};
</script>

<style scoped>
.container-profile-dev {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
  font-family: "Nunito", sans-serif;
}

.wrapper {
  /* background-color: rgb(155, 155, 155); */
  width: 95%;
  max-width: 950px;
  /* height: 150vh; */
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.user-info {
  margin-top: 15px;
  width: 100%;
  height: 200px;
  position: relative;
}
.picture-name {
  width: 180px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 5px;
  background-color: rgb(177, 177, 177);
}
.username {
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.social {
  height: 70px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 20px;
}

.user-info .edit-links {
  font-size: 1rem;
  color: #010101;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 100px;
  z-index: 5;
}
.section {
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #6eb1e9;
  width: 93%;
}
.about {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  padding-top: 35px;
  padding-right: 35px;
  position: relative;
  height: auto;
}
.edit-about {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-about i {
  font-size: 1.6em;
  color: #1b1a1a;
  cursor: pointer;
}
.confirm-changes-about {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.6em;
  color: #00f10c;
  cursor: pointer;
}
.cancel-changes-about {
  position: absolute;
  top: 10px;
  right: 50px;
  font-size: 1.6em;
  color: #f15c00;
  cursor: pointer;
}
.editing-about {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 35px;
  padding-right: 35px;
  padding-left: 10px;
  resize: none;
  border: none;
  outline: none;
}
.content {
  /* padding-top: 30px; */
}
.hide-section {
  display: none;
}

.applied-offer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  border-radius: 3px;
  border: 1px solid #84919c;
  margin-top: 10px;
  cursor: pointer;
  gap: 5px;
}
.applied-offer .title {
  font-size: 1rem;
  font-weight: bold;
}
.applied-offer .company-name {
  font-size: 0.8rem;
  font-weight: bold;
}
.desktop-options {
  display: none;
}

/* --------------------------------Responsive---------------------------------- */

@media screen and (min-width: 700px) {
  .user-info {
    display: flex;
    justify-content: center;
  }
  .mobile-options {
    display: none;
  }
  .desktop-options {
    display: flex;
  }
}
</style>