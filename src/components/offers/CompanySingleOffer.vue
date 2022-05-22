<template>
  <div class="container-single-offer" @click="selected()">
    <div class="data-offer">
      <h3 class="title">{{ offer.title }}</h3>
      <div class="tags-offer">
        <span v-for="(tag, i) in offer.tags" :key="i">{{ tag.name }}</span>
      </div>
    </div>
    <div class="inscribed-devs">
      <span>{{ offer.devs.length }}</span>
      <svg
        width="35"
        height="35"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 9C27 13.9725 22.9725 18 18 18C13.0275 18 9 13.9725 9 9C9 4.0275 13.0275 0 18 0C22.9725 0 27 4.0275 27 9Z"
          fill="url(#paint0_linear_156_91)"
        />
        <path
          d="M18 20C11.9925 20 0 23.0347 0 28V34H36V28C36 23.0347 24.0075 20 18 20Z"
          fill="url(#paint1_linear_156_91)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_156_91"
            x1="18"
            y1="0"
            x2="18.5605"
            y2="28.3223"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF5C00" />
            <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_156_91"
            x1="18"
            y1="20"
            x2="18.1696"
            y2="42.0358"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF5C00" />
            <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
// Services
import OfferService from "../../service/offer.service";

const offerService = new OfferService();

export default {
  name: "CompanySingleOffer",
  data() {
    return {
      saved: false,
    };
  },
  props: {
    offer: Object,
  },
  created() {},
  mounted() {},
  methods: {
    selected() {
      this.$emit("selected", this.offer);
    },
  },
};
</script>

<style scoped>
.container-single-offer {
  box-shadow: 1px 1px 5px #b1b1b1c5;
  border-radius: 5px;
  width: 85%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 35px 10px 25px;
  position: relative;
  z-index: 1;
  max-width: 550px;
  background-color: #fff;
}
.data-offer {
  display: flex;
  flex-direction: column;
  max-width: 215px;
  margin-top: 4px;
}
.title {
  font-size: 1rem;
}
.tags-offer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
  padding: 5px;
  margin-top: 5px;
  align-items: center;
  height: 65px;
  width: 130px;
}
.tags-offer span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 249, 249);
  box-shadow: 1px 1px 3px #a8a8a8;
  color: rgb(0, 0, 0);
  font-size: 0.7rem;
  height: 25px;
  /* padding: 0 10px; */
  border-radius: 3px;
  text-align: center;
}
.save-offer {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2rem;
}

.salary-container {
  position: absolute;
  right: 13px;
  top: 120px;
  font-size: 0.8rem;
}

.inscribed-devs {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;
}
</style>