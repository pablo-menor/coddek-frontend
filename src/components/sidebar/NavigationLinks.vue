<template>
    <div class="navigation" v-show="role=='developer'">
      <router-link :to="profileLink" class="link">Perfil</router-link>
      <router-link to="/dashboard" class="link">Dashboard</router-link>
      <router-link to="/login" class="link">Training</router-link>
    </div>

    <div class="navigation" v-show="role=='company'">
      <router-link :to="profileLink" class="link">Perfil</router-link>
      <router-link to="/login" class="link">Nueva oferta</router-link>
      <router-link to="/dashboard" class="link">Dashboard</router-link>
    </div>
</template>

<script>
export default {
    name: "NavigationLinks",
    props: {
        role: String,
    },
    data() {
        return {
          profileLink: `/${this.$store.state.username}`,
        };
    },
}
</script>

<style scoped>
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
</style>