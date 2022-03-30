<template>
  <div class="container">
    <div class="navigation">
      <router-link to="/login" class="link">Ofertas</router-link>
      <router-link to="/login" class="link">Perfil</router-link>
      <router-link to="/login" class="link">Training</router-link>
      <router-link to="/login" class="link">Explorer</router-link>
    </div>

    <button class="logout-btn">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  name: "SidebarMobile",
};
</script>

<style scoped>
* {
  font-family: "Nunito", sans-serif;
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  background: rgb(1, 221, 184);
  background: linear-gradient(
    0deg,
    rgb(27, 158, 235) 0%,
    rgb(3, 156, 203) 9%,
    rgb(0, 128, 197) 29%,
    rgb(0, 86, 179) 51%
  );
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}
.link {
  color: white;
  font-size: 2.5rem;

  text-decoration: none;
}

.logout-btn {
  width: 150px;
  padding: 18px;
  text-align: center;
  background: rgb(255, 92, 0);
  background: linear-gradient(
    100deg,
    rgba(255, 92, 0, 1) 20%,
    rgba(255, 150, 0, 1) 92%
  );
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 30px;
  border: none;
  font-size: 1.1rem;
}
</style>