<template>
  <div class="container-offer-details">
      {{offer.title}}
      {{offer.description}}
  </div>
</template>

<script>
export default {
  name: "OfferDetail",
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
* {
  font-family: "Nunito", sans-serif;
  padding: 0;
  margin: 0;
}
.container-offer-details {
  background-color: aquamarine;
  border-radius: 5px;
  width: 85%;
  max-width: 800px;
  height: 96vh;
  position: absolute;
  z-index: 5;
  top: 2vh;
  display: flex;
  flex-direction: column;
}
</style>