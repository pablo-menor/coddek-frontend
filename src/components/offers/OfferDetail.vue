<template>
  <!--------------------------MOBILE VERSION--------------------------------------- -->
  <div class="container-offer-detail-mobile">
    <section class="company-info-mobile">
      <div class="img-container"></div>
      <p class="company-name">{{ offer.company.name }}</p>
    </section>
    <section class="main-details">
      <h2 class="title-mobile">{{ offer.title }}</h2>
      <div class="details-mobile">
        <span class="detail-mobile">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.73949 5.24957V4.3235C5.73949 3.63772 6.24121 3.05514 6.9194 2.95341L7.88516 2.80854C8.95567 2.64797 10.0441 2.64797 11.1147 2.80854L12.0804 2.95341C12.7586 3.05514 13.2603 3.63772 13.2603 4.3235V5.24957L14.6173 5.3591C15.6562 5.44297 16.5037 6.22525 16.6704 7.25419C17.0387 9.52828 17.0387 11.8468 16.6704 14.1209C16.5037 15.1498 15.6562 15.9321 14.6173 16.016L13.1353 16.1356C10.7156 16.3309 8.28416 16.3309 5.86448 16.1356L4.38254 16.016C3.34357 15.9321 2.49606 15.1498 2.32943 14.1209C1.96115 11.8468 1.96115 9.52828 2.32943 7.25419C2.49606 6.22525 3.34357 5.44297 4.38254 5.3591L5.73949 5.24957ZM8.06132 3.9829C9.01504 3.83985 9.98478 3.83985 10.9385 3.9829L11.9043 4.12777C12.0012 4.1423 12.0728 4.22553 12.0728 4.3235V5.16631C10.3589 5.06856 8.64088 5.06856 6.92699 5.16631V4.3235C6.92699 4.22553 6.99867 4.1423 7.09555 4.12777L8.06132 3.9829ZM5.96002 6.42313C8.31611 6.23295 10.6837 6.23295 13.0398 6.42313L14.5217 6.54275C15.0158 6.58264 15.4189 6.95468 15.4982 7.44403C15.5475 7.74876 15.5899 8.05434 15.6252 8.36052C11.7638 10.2619 7.23605 10.2619 3.37461 8.36053C3.40996 8.05434 3.45231 7.74876 3.50166 7.44403C3.5809 6.95468 3.98397 6.58264 4.47808 6.54275L5.96002 6.42313ZM3.26861 9.62407C7.22647 11.4241 11.7733 11.4241 15.7312 9.62407C15.8067 11.0619 15.729 12.5057 15.4982 13.9311C15.4189 14.4204 15.0158 14.7925 14.5217 14.8323L13.0398 14.952C10.6837 15.1421 8.31611 15.1421 5.96002 14.952L4.47808 14.8323C3.98397 14.7925 3.5809 14.4204 3.50166 13.9311C3.27083 12.5057 3.19315 11.0619 3.26861 9.62407Z"
              fill="black"
            />
          </svg>

          Sueldo:
          {{ getSalary() }}€
        </span>
        <span class="detail-mobile">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 4.5C9.05109 4.5 8.86032 4.42098 8.71967 4.28033C8.57902 4.13968 8.5 3.94891 8.5 3.75C8.5 3.55109 8.57902 3.36032 8.71967 3.21967C8.86032 3.07902 9.05109 3 9.25 3C9.44891 3 9.63968 3.07902 9.78033 3.21967C9.92098 3.36032 10 3.55109 10 3.75C10 3.94891 9.92098 4.13968 9.78033 4.28033C9.63968 4.42098 9.44891 4.5 9.25 4.5ZM8.5 6.75C8.5 6.94891 8.57902 7.13968 8.71967 7.28033C8.86032 7.42098 9.05109 7.5 9.25 7.5C9.44891 7.5 9.63968 7.42098 9.78033 7.28033C9.92098 7.13968 10 6.94891 10 6.75C10 6.55109 9.92098 6.36032 9.78033 6.21967C9.63968 6.07902 9.44891 6 9.25 6C9.05109 6 8.86032 6.07902 8.71967 6.21967C8.57902 6.36032 8.5 6.55109 8.5 6.75ZM9.25 10.5C9.15151 10.5 9.05398 10.4806 8.96299 10.4429C8.87199 10.4052 8.78931 10.35 8.71967 10.2803C8.65003 10.2107 8.59478 10.128 8.55709 10.037C8.5194 9.94602 8.5 9.84849 8.5 9.75C8.5 9.65151 8.5194 9.55398 8.55709 9.46299C8.59478 9.37199 8.65003 9.28931 8.71967 9.21967C8.78931 9.15003 8.87199 9.09478 8.96299 9.05709C9.05398 9.0194 9.15151 9 9.25 9C9.44891 9 9.63968 9.07902 9.78033 9.21967C9.92098 9.36032 10 9.55109 10 9.75C10 9.94891 9.92098 10.1397 9.78033 10.2803C9.63968 10.421 9.44891 10.5 9.25 10.5V10.5ZM5.5 3.75C5.5 3.94891 5.57902 4.13968 5.71967 4.28033C5.86032 4.42098 6.05109 4.5 6.25 4.5C6.44891 4.5 6.63968 4.42098 6.78033 4.28033C6.92098 4.13968 7 3.94891 7 3.75C7 3.55109 6.92098 3.36032 6.78033 3.21967C6.63968 3.07902 6.44891 3 6.25 3C6.05109 3 5.86032 3.07902 5.71967 3.21967C5.57902 3.36032 5.5 3.55109 5.5 3.75ZM6.25 7.5C6.05109 7.5 5.86032 7.42098 5.71967 7.28033C5.57902 7.13968 5.5 6.94891 5.5 6.75C5.5 6.55109 5.57902 6.36032 5.71967 6.21967C5.86032 6.07902 6.05109 6 6.25 6C6.44891 6 6.63968 6.07902 6.78033 6.21967C6.92098 6.36032 7 6.55109 7 6.75C7 6.94891 6.92098 7.13968 6.78033 7.28033C6.63968 7.42098 6.44891 7.5 6.25 7.5ZM5.5 9.75C5.5 9.94891 5.57902 10.1397 5.71967 10.2803C5.86032 10.421 6.05109 10.5 6.25 10.5C6.44891 10.5 6.63968 10.421 6.78033 10.2803C6.92098 10.1397 7 9.94891 7 9.75C7 9.55109 6.92098 9.36032 6.78033 9.21967C6.63968 9.07902 6.44891 9 6.25 9C6.05109 9 5.86032 9.07902 5.71967 9.21967C5.57902 9.36032 5.5 9.55109 5.5 9.75ZM3.25 10.5C3.15151 10.5 3.05398 10.4806 2.96299 10.4429C2.87199 10.4052 2.78931 10.35 2.71967 10.2803C2.65003 10.2107 2.59478 10.128 2.55709 10.037C2.5194 9.94602 2.5 9.84849 2.5 9.75C2.5 9.65151 2.5194 9.55398 2.55709 9.46299C2.59478 9.37199 2.65003 9.28931 2.71967 9.21967C2.78931 9.15003 2.87199 9.09478 2.96299 9.05709C3.05398 9.0194 3.15151 9 3.25 9C3.44891 9 3.63968 9.07902 3.78033 9.21967C3.92098 9.36032 4 9.55109 4 9.75C4 9.94891 3.92098 10.1397 3.78033 10.2803C3.63968 10.421 3.44891 10.5 3.25 10.5V10.5ZM11.5 16C11.6326 16 11.7598 15.9473 11.8536 15.8536C11.9473 15.7598 12 15.6326 12 15.5V1.5C12 1.10218 11.842 0.720644 11.5607 0.43934C11.2794 0.158035 10.8978 0 10.5 0H4.5C4.10218 0 3.72064 0.158035 3.43934 0.43934C3.15804 0.720644 3 1.10218 3 1.5V6H1.5C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5V15.5C0 15.6326 0.052678 15.7598 0.146446 15.8536C0.240214 15.9473 0.367392 16 0.5 16H11.5ZM11 1.5V15H9V12.5C9 12.3674 8.94732 12.2402 8.85355 12.1464C8.75979 12.0527 8.63261 12 8.5 12H3.5C3.36739 12 3.24021 12.0527 3.14645 12.1464C3.05268 12.2402 3 12.3674 3 12.5V15H1V7.5C1 7.36739 1.05268 7.24021 1.14645 7.14645C1.24021 7.05268 1.36739 7 1.5 7H3.5C3.63261 7 3.75979 6.94732 3.85355 6.85355C3.94732 6.75979 4 6.63261 4 6.5V1.5C4 1.36739 4.05268 1.24021 4.14645 1.14645C4.24021 1.05268 4.36739 1 4.5 1H10.5C10.6326 1 10.7598 1.05268 10.8536 1.14645C10.9473 1.24021 11 1.36739 11 1.5ZM4 13H5.5V15H4V13ZM6.5 13H8V15H6.5V13Z"
              fill="black"
            />
          </svg>

          Experiencia:
          {{ offer.experienceRequired || "no requerida" }}
        </span>
        <span class="detail-mobile">
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.97341 6.92708C2.97341 4.85026 4.657 3.16667 6.73383 3.16667C8.81065 3.16667 10.4942 4.85026 10.4942 6.92708C10.4942 9.0039 8.81065 10.6875 6.73383 10.6875C4.657 10.6875 2.97341 9.0039 2.97341 6.92708ZM6.73383 4.35417C5.31284 4.35417 4.16091 5.5061 4.16091 6.92708C4.16091 8.34807 5.31284 9.5 6.73383 9.5C8.15481 9.5 9.30674 8.34807 9.30674 6.92708C9.30674 5.5061 8.15481 4.35417 6.73383 4.35417Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0239461 6.02209C0.304455 2.61902 3.14824 0 6.56285 0H6.9048C10.3194 0 13.1632 2.61902 13.4437 6.02209C13.5944 7.85017 13.0297 9.66537 11.8686 11.0854L8.0741 15.726C7.38139 16.5731 6.08626 16.5731 5.39355 15.726L1.59905 11.0854C0.437942 9.66537 -0.126739 7.85017 0.0239461 6.02209ZM6.56285 1.1875C3.76626 1.1875 1.43717 3.3325 1.20743 6.11964C1.08202 7.6411 1.55199 9.15185 2.51835 10.3337L6.31285 14.9743C6.53043 15.2403 6.93722 15.2403 7.1548 14.9743L10.9493 10.3337C11.9157 9.15185 12.3856 7.6411 12.2602 6.11964C12.0305 3.3325 9.7014 1.1875 6.9048 1.1875H6.56285Z"
              fill="black"
            />
          </svg>
          {{ offer.location || "no especificado" }}
        </span>
      </div>
    </section>
    <section class="description">
      <p class="description-text-mobile">{{ offer.description }}</p>
      <button class="challange-details">Inscribirse</button>
    </section>
    <div class="save-offer-mobile" @click="save()">
      <i
        v-bind:class="{ 'far fa-bookmark': !saved, 'fas fa-bookmark': saved }"
      ></i>
    </div>
    <i class="fa-solid fa-x cancel-mobile" @click="cancel()"></i>
  </div>
  <!--------------------------DESKTOP VERSION--------------------------------------- -->
</template>

<script>
// Services
import OfferService from "../../service/offer.service";
import DeveloperService from "../../service/developer.service";

const offerService = new OfferService();
const developerService = new DeveloperService();

export default {
  name: "OfferDetail",
  data() {
    return {
      saved: false,
    };
  },
  props: {
    offer: Object,
  },
  created() {
    this.getSavedOffers();
  },
  mounted() {},
  methods: {
    getSalary() {
      return offerService.convertSalary(this.offer.salary.amount);
    },
    cancel() {
      this.$emit("cancel");
    },
    save() {
      if (!this.saved) {
        developerService.saveOffer(this.offer._id).then((response) => {
          if (response) {
            this.saved = true;
            this.$store.commit("addSavedOffer", this.offer);
            console.log(this.$store.state.savedOffers);
          }
        });
      } else {
        developerService.deleteSavedOffer(this.offer._id);
        this.saved = false;
        this.$store.commit("deleteSavedOffer", this.offer);
        console.log(this.$store.state.savedOffers);
      }
    },
    getSavedOffers() {
      developerService.getSavedOffers().then((response) => {
        this.saved = response.some((offer) => offer.offerId === this.offer._id);
      });
    },
  },
};
</script>

<style scoped>
/* ------------------------MOBILE VERSION--------------------------------------- */
.container-offer-detail-mobile {
  border-radius: 5px;
  width: 85%;
  max-width: 800px;
  height: 96vh;
  position: fixed;
  z-index: 5;
  top: calc(50vh - 48vh);
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(15, 136, 235);
  background-color: #fff;
}
.company-info-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1.5px solid rgb(15, 136, 235);
  flex: 1.5;
}
.img-container {
  border-radius: 50%;
  border: 1px solid #333;
  width: 70px;
  height: 70px;
}
.company-name {
  font-size: 1.2rem;
  color: rgb(54, 41, 41);
}
.main-details {
  border-bottom: 1.5px solid rgb(15, 136, 235);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  flex: 2;
}
.title-mobile {
  font-size: 1.3rem;
  color: rgb(0, 0, 0);
  text-align: center;
  width: 93%;
}
.description {
  flex: 3;
}
.details-mobile {
  width: 80%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.detail-mobile {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dots {
  color: rgb(0, 185, 124);
  font-size: 0.5rem;
}
.studies-mobile svg {
  width: 20px;
}
.description {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description-text-mobile {
  font-size: 0.9rem;
  height: 80%;
  border: 1px solid rgb(1, 122, 192);
  padding: 3px;
}
.description-text-mobile::-webkit-scrollbar {
  width: 8px;
}
.description-text-mobile::-webkit-scrollbar-thumb {
  background: rgb(138, 138, 138);
  border-radius: 4px;
}
.challange-details {
  width: 80%;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: rgb(255, 92, 0);
  background: linear-gradient(
    100deg,
    rgba(255, 92, 0, 1) 20%,
    rgba(255, 150, 0, 1) 92%
  );
  color: #fff;
  font-size: 1.2rem;
  margin-top: 15px;
}
.cancel-mobile {
  position: absolute;
  right: 30px;
  top: 20px;
  font-size: 1.5rem;
  color: rgb(255, 17, 0);
}
.save-offer-mobile {
  position: absolute;
  left: 30px;
  top: 20px;
  font-size: 1.5rem;
  color: rgb(255, 123, 0);
}
/* ------------------------DESKTOP VERSION--------------------------------------- */
</style>