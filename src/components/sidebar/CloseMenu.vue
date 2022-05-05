<template>
  <div class="container" @click="$emit('close-menu')">
    <!-- <span class="material-icons-outlined icon"> navigate_next </span> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </svg>
  </div>
</template>
<script>
export default {
  name: "CloseMenu",
};
</script>

<style scoped>
.container {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 30%;
  left: calc(1% - 20px);
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
  position: fixed;
    z-index: 8;
}
</style>