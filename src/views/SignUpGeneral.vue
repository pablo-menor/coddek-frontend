<template>
  <div class="container">
    <div class="wave">
      <svg
        id="visual"
        viewBox="0 0 675 900"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
        class="background"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="0" width="675" height="900" fill="#ffffff"></rect>
        <path
          d="M0 584L675 338L675 901L0 901Z"
          fill="#0066FF"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>
    <h1>¿QUÉ TIPO DE USUARIO ERES?</h1>
    <div class="card-container">
      <div class="dev-card">dev</div>
      <div class="company-container">enterprise</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpGeneral",
};
</script>

<style scoped>
* {
  overflow-x: hidden;
}
.container {
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container .wave {
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  bottom: -5px;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

.container h1 {
  margin-top: 70px;
  font-size: 1.2rem;
}

.card-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.dev-card,
.company-container {
  min-width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(92, 92, 92);
}
</style>