<template>
    <div class="popup" v-bind:class="{correct: isOk, bad: !isOk}">
        <p><i v-show= !isOk class="fa-solid fa-square-xmark wrong"></i><i v-show= isOk class="fa-solid fa-square-check right"></i>{{message}}</p>
    </div>
</template>

<script>
export default {
    name: "ErrorPopUp",
    props: {
        message: String,
        isOk: Boolean,
    },
    data() {
        return {};
    },
}
</script>

<style scoped>
    .popup {
        font-family: "Nunito", sans-serif;
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: fit-content;
        padding: 20px;
        border-radius: 10px;
    }
    .popup p {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .wrong {
        color: #ff0000b5;
    }
    .bad {
        background-color: #e3c8c2;
        border: 2px solid #ff0000b5;
    }
    .right {
        color: #30c55a;
    }
    .correct {
        background-color: #b7dec2;
        border: 2px solid #00ff48;
    }
</style>