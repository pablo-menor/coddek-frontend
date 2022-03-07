<template>
    <div class="container">
        <h1>¿QUÉ TIPO DE USUARIO ERES?</h1>
        <div class="card-container">
            <div class="dev-card"></div>
            <div class="company-container"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUpGeneral',    
}
</script>

<style scoped>
    *{
        overflow-x: hidden;
    }
    .container{
         font-family: "Nunito", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container h1{
        margin-top: 70px ;
    }

</style>