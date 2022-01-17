<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to asasasasasas"/> -->
    <section class="first-panel">
      <nav>
        <h1 class="logo">CODDEK</h1>
        <div class="access">
          <router-link to="/login" class="links">LOGIN</router-link>
          <router-link to="/registro" class="links">REGISTRO</router-link>
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
      <div class="jobs-btn">
        OFERTAS DE <br />
        EMPLEO
      </div>
      <div class="img-container">
        <img src="../assets/peopleHome.jpg" class="peopleImg" />
      </div>
    </section>

    <section class="cards-panel">
      <div class="dev-card">
        <header>DESARROLLADORES</header>
        <section class="card-content">
          <p>
            <i class="fas fa-check-circle"></i>Oferta de empleo en el sector
          </p>
          <p><i class="fas fa-check-circle"></i>Comunidad de desarrolladores</p>
          <p><i class="fas fa-check-circle"></i>Entrevistas técnicas online</p>
          <p>
            <i class="fas fa-check-circle"></i>Ponte a prueba con enunciados
            reales
          </p>
          <button>¡COMIENZA!</button>
        </section>
      </div>
      <div class="company-card">
        <header>EMPRESAS</header>
        <section class="card-content">
          <p><i class="fas fa-check-circle"></i>Encuentra el mejor talento</p>
          <p>
            <i class="fas fa-check-circle"></i>Agiliza los procesos de selección
          </p>
          <p>
            <i class="fas fa-check-circle"></i>Comunicación directa y sencilla
          </p>
          <p>
            <i class="fas fa-check-circle"></i>Aumenta la visibilidad de tu empresa
          </p>
          <button>¡ÚNETE!</button>
        </section>
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
.home {
  overflow: hidden;
}
.first-panel {
  height: 500px;
  background: rgb(0, 38, 171);
  background: linear-gradient(
    117deg,
    rgba(0, 38, 171, 1) 14%,
    rgba(17, 82, 213, 1) 57%,
    rgba(75, 146, 255, 1) 91%,
    rgba(134, 181, 255, 1) 100%
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
  background-color: #00ffc2;
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
.first-panel nav .access .links {
  position: relative;
  color: #ffff;
  text-decoration: none;
}

.first-panel nav .access .links:hover {
  cursor: pointer;
}
.first-panel nav .access .links::after {
  content: "";
  background-color: #93ffd0;
  width: 100%;
  height: 2px;
  position: absolute;
  display: block;
  border-radius: 5px;
  transform: scale(0);
  transition: all 0.2s ease-out;
}
.first-panel nav .access .links:hover::after {
  transform: scale(1);
}

.first-panel .wave {
  overflow: hidden;
  position: absolute;
  bottom: -5px;
  width: 100vw;
  height: 280px;
}

.first-panel .jobs-btn {
  background-color: #ff5b96;
  width: 180px;
  text-align: center;
  position: absolute;
  top: 300px;
  left: 200px;
  font-family: "Poppins", sans-serif;
  color: #fff;
  border-radius: 50px;
  padding: 10px;
}

.first-panel .jobs-btn:hover {
  cursor: pointer;
}
.first-panel .img-container {
  width: 300px;
  height: 300px;
  background-color: #f7f7f7;
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
  border: 1px solid rgb(218, 218, 218);
}
.first-panel .img-container .peopleImg {
  width: 320px;
  height: 300px;
}
/*************CARDS SECTION***************/
.cards-panel {
  height: 500px;
  /* background-color: rgb(114, 25, 25); */
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cards-panel .dev-card,
.company-card {
  height: 350px;
  width: 380px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(92, 92, 92);
  font-family: "Nunito", sans-serif;
}
.cards-panel .dev-card header,
.company-card header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 0 0;
  letter-spacing: 0.3px;
  font-size: 1.1em;
}
.cards-panel .dev-card header {
  background-color: #f6b819;
}
.cards-panel .company-card header {
  background-color: #00cdc1;
}

.cards-panel .card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cards-panel .card-content p {
  font-size: 1.1em;
  margin-top: 17px;
}
.cards-panel .card-content p i {
  margin: 0px 15px 0px 15px;
  font-size: 1.5em;
  color: rgb(0, 196, 33);
}
.cards-panel .card-content button {
  width: 170px;
  margin: auto;
  margin-top: 35px;
  padding: 12px 10px 12px 10px;
  border-radius: 20px;
  border: none;
  background-color: #0070c1;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
</style>
