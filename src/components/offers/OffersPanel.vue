<template>
  <div class="container-offers-panel">
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
   <single-offer></single-offer>
  </div>
</template>

<script>
import SingleOffer from "./SingleOffer.vue";
export default {
    name: "SidebarMobile",
    components: {
        SingleOffer
    },
    props: {
        
    },
}
</script>

<style scoped>
* {
    font-family: "Nunito", sans-serif;
    padding: 0;
    margin: 0;
}

.container-offers-panel{
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
}
</style>