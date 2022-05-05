<template>
  <div class="container" @click="$emit('open-menu')">
    <!-- <span class="material-icons-outlined icon"> navigate_next </span> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#fff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
    </svg>
  </div>
</template>
<script>
export default {
  name: "SideArrow",
};
</script>

<style scoped>
.container {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 30%;
  left: calc(1% - 20px);
  background-color: #0056b3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
  position: fixed;
  z-index: 8;
}
</style>