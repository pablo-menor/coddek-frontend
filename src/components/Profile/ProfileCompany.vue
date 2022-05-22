<template>
  <div class="container-profile-company">
    <div class="wrapper">
      <section class="user-info">
        <div class="picture-name">
          <div
            @click="selectProfilePic()"
            class="picture"
            ref="imgCompanyProfile"
          >
            <img
              src="../../assets/default_avatar_dev.png"
              class="no-pic"
              alt="defaul profile picture"
              v-if="user.avatar === 'default_avatar_company.jpg'"
            />
            <input
              @change="updateImg()"
              type="file"
              id="pictureFile"
              ref="inputFileCompany"
            />
          </div>
          <span class="username">{{ user.name }}</span>
        </div>
        <span class="edit-links" v-if="own" @click="editLinks()"
          ><i class="fa-regular fa-pen-to-square"></i
        ></span>
        <div class="social" v-show="own || user.website">
          <div class="github">
            <span v-show="user.website">
              <a class="links-url" ref="web">Mi web</a></span
            >
            <span v-show="!user.website && own">Añadir web</span>
          </div>
        </div>
      </section>
      <div class="editingLinks" v-show="editingLinks">
        <div class="link-input">
          <span>URL:</span>
          <input type="text" ref="webURL" />
        </div>
        <i
          class="fa-solid fa-circle-check confirm-changes-about"
          v-show="editingLinks"
          @click="updateLinks()"
          ref="confirmLinks"
        ></i>
        <i
          class="fa-solid fa-xmark cancel-changes-about"
          v-show="editingLinks"
          @click="editingLinks = false"
        ></i>
      </div>
      <section class="section about">
        {{ user.about || "¡Describe tu empresa!" }}
        <span class="edit-about" v-if="own"
          ><i class="fa-regular fa-pen-to-square" @click="editAbout()"></i
        ></span>
        <textarea
          class="editing-about"
          ref="editAboutCompany"
          v-show="editingAbout"
          maxlength="280"
        />
        <i
          class="fa-solid fa-circle-check confirm-changes-about"
          v-show="editingAbout"
          @click="updateAboutCompany()"
        ></i>
        <i
          class="fa-solid fa-xmark cancel-changes-about"
          v-show="editingAbout"
          @click="editingAbout = false"
        ></i>
      </section>
      <desktop-options
        @changeContent="changeContent($event)"
        class="desktop-options"
        :role="'company'"
        v-if="own"
      />
      <section class="section content" ref="content">
        <div class="track-record">
          <span>Ofertas</span>
          <div
             v-show="myOffers.length > 0"
            class="applied-offer"
            v-for="(ele, i) in myOffers"
            :key="i"
            @selected="showDetails(offer)"
          >
            <span class="title">{{ ele.title }}</span>
            <span class="company-name"> {{ ele.company_name }}</span>
          </div>
          <div class="no-data" v-show="myOffers.length == 0">
            No se han encontrado ofertas
          </div>
        </div>
        <div class="track-record">
          <span>Challenges</span>
          <div
            v-show="true"
            class="applied-offer"
            v-for="(ele, i) in appliedOffers"
            :key="i"
            @selected="showDetails(offer)"
          >
            <span class="title">{{ ele.title }}</span>
            <span class="company-name"> {{ ele.company_name }}</span>
          </div>
          <div class="no-data" v-show="appliedOffers == 0">
            No se han encontrado ofertas
          </div>
        </div>
      </section>
      <banner />
      <mobile-options
        v-if="own"
        :role="'company'"
        @changeContent="changeContent($event)"
        class="mobile-options"
        ref="mobileOptions"
      />
    </div>
  </div>
</template>

<script>
// Components
import MobileOptions from "./MobileOptions.vue";
import Banner from "./Banner.vue";
import DesktopOptions from "./DesktopOptions.vue";

// Services
import CompanyService from "../../service/company.service";
const companyService = new CompanyService();
import OfferService from "../../service/offer.service";
const offerService = new OfferService();

export default {
  name: "ProfileCompany",
  data() {
    return {
      editingLinks: false,
      editingAbout: false,
      myOffers: [],
    };
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
  components: {
    MobileOptions,
    Banner,
    DesktopOptions,
  },
  created() {},
  mounted() {
    this.changeContent(0);
    this.getProfilePicture();
    this.getCompanyOffers()

  },
  methods: {
    changeContent(index) {
      let contentChilds = this.$refs.content.children;
      for (const contentChild of contentChilds) {
        contentChild.classList.add("hide-section");
      }
      contentChilds[index].classList.remove("hide-section");
    },
    editLinks() {
      this.editingLinks = true;
      this.$refs.webURL.value = this.user.website || "";
    },
    updateLinks() {
      this.editingLinks = false;
      this.user.website = this.$refs.webURL.value;
      companyService.updateWeb(this.user.website);
    },
    editAbout() {
      this.editingAbout = true;
      this.$refs.editAboutCompany.value =
        this.user.about || "¡Describe tu empresa!";
    },
    updateAboutCompany() {
      this.editingAbout = false;
      this.user.about = this.$refs.editAboutCompany.value;
      companyService.updateAbout(this.user.about);
    },
    selectProfilePic() {
      this.$refs.inputFileCompany.click();
    },
    updateImg() {
      // GET IMG and render on page
      let file = this.$refs.inputFileCompany.files[0];
      let reader = new FileReader(); // HTML5 FileReader API
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.user.avatar = e.target.result;
        this.$refs.imgCompanyProfile.style.backgroundImage = `url(${this.user.avatar})`;
        this.$refs.imgCompanyProfile.style.backgroundPosition = "center center";
        this.$refs.imgCompanyProfile.style.backgroundSize = "cover";
        this.$refs.imgCompanyProfile.style.backgroundRepeat = "no-repeat";
      };
      // Send img to server
      let formData = new FormData();
      formData.append("avatar", file);
      companyService.updateAvatar(formData);
    },
    getProfilePicture() {
      if (this.user.avatar === "default_avatar_company.jpg") {
        return;
      }
      companyService.getProfilePicture(this.user.avatar).then((response) => {
        this.user.avatar = response.url;
        this.$refs.imgCompanyProfile.style.backgroundImage = `url(${response.url})`;
        this.$refs.imgCompanyProfile.style.backgroundPosition = "center center";
        this.$refs.imgCompanyProfile.style.backgroundSize = "cover";
        this.$refs.imgCompanyProfile.style.backgroundRepeat = "no-repeat";
      });
    },
    getCompanyOffers() {
      offerService.getAllCompanyOffers().then((response) => {
        console.log(response);
        this.myOffers = response;
      });
    },
  },
};
</script>

<style>
.container-profile-company {
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
  min-height: 800px;
}

.user-info {
  margin-top: 15px;
  width: 100%;
  height: 200px;
  min-height: 200px;
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
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(113, 113, 113);
  cursor: pointer;
  z-index: 3;
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
.editingLinks {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  background-color: #0a71d8;
  height: 200px;
  width: 90%;
  max-width: 400px;
  top: 200px;
  z-index: 9;
  border-radius: 3px;
}
.editingLinks .link-input {
  display: flex;
  justify-content: space-between;
  width: 87%;
  height: 30px;
  align-items: center;
}
.editingLinks span {
  color: #ffffff;
}
.editingLinks input {
  height: 30px;
  width: 70%;
  padding-left: 5px;
  outline: none;
}

.links-url {
  color: #000;
  text-decoration: none;
}
.links-url:hover {
  color: rgb(78, 78, 78);
}

.section {
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #6eb1e9;
  width: 93%;
  /* min-height: 400px; */
}
.about {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  padding-top: 35px;
  padding-right: 35px;
  position: relative;
  height: auto;
  min-height: 85px;
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

.saved-offer-detail-profile,
.apply-offer-profile {
  z-index: 6;
}

.no-pic {
  width: 105px;
  height: 105px;
  border-radius: 50%;
}
#pictureFile {
  visibility: hidden;
  position: absolute;
}

.cv-section-container {
  position: relative;
}
.add-cv {
  position: absolute;
  right: 0;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #0070f1;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
}

.cvs-container {
  margin-top: 20px;
  /* margin-right: 10%; */
  display: flex;
  gap: 10px;
  padding: 10px;
}

.cv-profile {
  width: 30%;
  height: 180px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 247, 247);
  gap: 15px;
  box-shadow: 0 0 5px rgb(156, 145, 145);
}

.see-cv-btn {
  font-size: 1rem;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid #01b890;
  padding: 1px 8px;
  border-radius: 20px;
  transition: 0.2s ease-in-out;
}

.see-cv-btn:hover {
  background-color: #01b890;
  border: 1px solid #ffffff;
  color: #fff;
}

.see-cv-btn span {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-cv-btn {
  font-size: 1rem;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid #f15c00;
  padding: 5px 8px;
  border-radius: 20px;
  transition: 0.2s ease-in-out;
}
.delete-cv-btn i {
  font-size: 1.2rem;
  color: #f15c00;
}
.delete-cv-btn:hover {
  background-color: #f15c00;
  border: 1px solid #ffffff;
  color: #fff;
}
.delete-cv-btn:hover i {
  color: #fff;
}

.cv-template {
  width: 30%;
  height: 180px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 247, 247);
  gap: 15px;
  /* box-shadow: 0 0 5px rgb(156, 145, 145); */
  border: 1px dashed #01b890;
  position: relative;
}
.new-title-cv {
  width: 80%;
  border: none;
  outline: none;
  text-align: center;
  padding: 4px;
}
.new-cv-input {
  display: none;
}
.close-template-cv {
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  color: rgb(255, 102, 0);
  padding: 5px;
  border-radius: 3px;
}

.add-pdf-btn {
  border: 1px solid #0f9c79;
  padding: 5px;
  font-size: 0.9rem;
  border-radius: 20px;
  cursor: pointer;
}

.add-pdf-btn:hover {
  background-color: #0f9c79;
  border: 1px solid #ffffff;
  color: #fff;
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
    min-height: 60px;
  }
  .cv-profile,
  .cv-template {
    height: 270px;
  }
}

@media screen and (max-width: 440px) {
  .delete-cv-btn,
  .delete-cv-btn i {
    font-size: 0.8rem;
  }

  .cv-profile,
  .cv-template {
    width: 35%;
  }
}
</style>