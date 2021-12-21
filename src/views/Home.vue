<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to CODDEK"/> -->
    <section class="first-panel">
      <nav>
        <h1 class="logo">CODDEK</h1>
        <div class="access">
          <p>LOGIN</p>
          <p>REGISTRO</p>
        </div>
      </nav>
      <div class="wave">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M-4.32,94.25 C204.47,238.32 245.76,-0.47 499.72,1.50 L500.00,150.00 L-0.84,151.49 Z"
            style="stroke: none; fill: #ffffff"
          ></path>
        </svg>
      </div>
      <div class="img-container">
        <img src="../assets/peopleHome.jpg" class="peopleImg">
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.first-panel {
  height: 500px;
  background: rgb(0, 46, 208);
  background: linear-gradient(
    117deg,
    rgba(0, 46, 208, 1) 15%,
    rgba(31, 87, 235, 1) 37%,
    rgba(9, 102, 240, 1) 51%,
    rgba(20, 109, 255, 1) 62%,
    rgba(65, 168, 255, 1) 89%
  );
  position: relative;
}

.first-panel nav {
  margin: auto;
  height: 80px;
  width: 85vw;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding-top: 40px;
  font-family: "Nunito", sans-serif;
}
.first-panel nav .logo {
  font-size: 1.5em;
  color: #fff;
  letter-spacing: 1.5px;
  font-weight: 200;
  position: relative;
}
.first-panel nav .logo::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #00FFC2;
  border-radius: 50%;
  top: 15px;
  left: 103%;
}
.first-panel nav .access {
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 1.2em;
  color: #fff;
}

.first-panel .wave {

  overflow: hidden;
  position: absolute;
  bottom: -5px;
  width: 100vw;
  height: 280px;
}
.first-panel .img-container {

  width: 300px;
  height: 300px;
  background-color: #F7F7F7;
  position: absolute;
  top: 180px;
  right: 130px;
  /* top: 18vw;
  right: 10vw; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  

}
.first-panel .img-container .peopleImg{
  width: 320px;
  height: 300px;

}
</style>
