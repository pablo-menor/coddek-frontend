<template>
  <div class="container">
    <div class="img-company"></div>
    <div class="data-offer">
      <h3>{{ offer.title }}</h3>
      <h5>{{ offer.company.name }}</h5>
      <div class="tags-offer">
        <p v-for="(tag, i) in offer.tags" :key="i">{{ tag.name }}</p>
      </div>
    </div>
    <div class="save-offer"><i class="far fa-bookmark"></i></div>
  </div>
</template>

<script>
export default {
  name: "SingleOffer",
  data() {
    return {};
  },
  props: {
    offer: Object,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.container {
  box-shadow: 1px 1px 5px #919191;
  border-radius: 5px;
  width: 85%;
  height: 130px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  position: relative;
  z-index: 1;
  max-width: 550px;
}
.img-company {
  border-radius: 50%;
  border: 1px solid #333;
  width: 50px;
  height: 50px;
}
.data-offer {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tags-offer {
  display: flex;
  gap: 5px;
}
.save-offer {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.2rem;
}
.tags-offer p {
  border: 2px solid grey;
  border-radius: 20%;
  background-color: grey;
  color: white;
}
p {
  font-size: 10px;
}
</style>