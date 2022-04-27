<template>
  <div class="container-profile-company">WORKS COMPANY</div>
</template>

<script>
export default {
  name: "ProfileCompany",
  data() {
    return {};
  },
  props: {
    own: {
      type: Boolean,
      required: true,
    },
    user : {
      type: Object,
      required: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>