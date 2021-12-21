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
}

.first-panel nav{
  margin: auto;
  height: 80px;
  width: 85vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding-top: 40px;
  font-family: 'Nunito', sans-serif;
}
.first-panel nav .logo{
  font-size: 1.5em;
  color: #fff;
  letter-spacing: 1.5px;
  font-weight: 200;
  position: relative;
}
.first-panel nav .logo::after{
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: rgb(0, 216, 133);
  border-radius: 50%;
  top: 15px;
  left: 101%;
}
.first-panel nav .access{
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 1.2em;
  color: #fff;

}
</style>
