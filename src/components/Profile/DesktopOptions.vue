<template>
  <div class="container-desktop-options">
    <div class="options-developer-desktop" v-if="role===developer">
        <span>Historial</span>
        <span>Ofertas guardadas</span>
        <span>Mis currículums</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "DesktopOptions",
    data() {
        return {};
    },
    components: {},
    props: {
        role: {
            type: String,
            required: true,
        },
    },
    created() {},
    mounted() {},
    methods: {},
}
</script>
    
<style scoped>
.options-developer-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    gap: 50px;
}
</style>