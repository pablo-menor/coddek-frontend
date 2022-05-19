<template>
    <div class="container-challange-creator">
        <div class="challenge-offer">
            <i class="fa-solid fa-x cancel-mobile" @click="closeChallangeCreator()"></i>
            <div class="text">
                <input
                    type="text"
                    class="title-challange input"
                    placeholder="Titulo de la oferta"
                />
                <textarea
                    name="Descripcion deL challange"
                    class="description-text-mobile input"
                ></textarea>
            </div>
            <button class="downloadBtn">Descargar archivos</button>

            <div class="dragdrop">
            </div>

            <form>
            <label for="cv">Selecciona un currículum: </label>
            <select name="cv" id="cv">
                <option value="cv1">Currículum 1</option>
                <option value="cv2">Currículum 2</option>
                <option value="cv3">Currículum 3</option>
            </select>
            </form>
            <button class="sendButton">Enviar</button>
        </div>
  </div>
</template>

<script>
export default {
  name: "ChallengeCreator",
  components: {},
  data() {
    return {
      
    };
  },
  created() {},
  mounted() {},
  methods: {
    closeChallangeCreator() {
      document.querySelector(".container-challange-creator").style.display = "none";
    },
  },
};
</script>

<style scoped>
.container-challange-creator{
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: "Nunito", sans-serif;
}
.challenge-offer {
  border-radius: 5px;
  width: 85%;
  max-width: 555px;
  height: 97vh;
  position: fixed;
  z-index: 5;
  top: calc(50vh - 48.5vh);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgb(15, 136, 235);
  background-color: #fff;
}
.dragdrop {
    width: 75%;
    height: 40%;
    display: flex;
    align-items: flex-start;
    padding: 10px 10px 0 10px;
    border: 2px dotted rgba(180, 180, 180, 0.867);
}
.text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5%;
    gap: 30px;
    margin-left: 5%;
    margin-right: 5%;
    width: 80%;
}
.text p {
text-align: justify;
}
.cancel-mobile {
  position: absolute;
  right: 30px;
  top: 20px;
  font-size: 1.5rem;
  color: rgb(255, 17, 0);
  cursor: pointer;
}
.sendButton {
  width: 80%;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: rgb(255, 92, 0);
  background: linear-gradient(
    100deg,
    rgba(255, 92, 0, 1) 20%,
    rgba(255, 150, 0, 1) 92%
  );
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 5%;
}
.downloadBtn {
  width: 170px;
  margin: 0;
  padding: 12px 10px 12px 10px;
  border-radius: 20px;
  border: none;
  background: rgb(1, 221, 184);
  background: linear-gradient(
    100deg,
    rgba(1, 221, 184, 1) 0%,
    rgba(3, 181, 203, 1) 36%,
    rgba(4, 140, 212, 1) 52%,
    rgba(4, 107, 219, 1) 77%
  );
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  left: calc(50% - 85px);
}
.title-challange{
    width: 60%;
}
.description-text-mobile{
  width: 95%;
  height: 100px;
}
.input {
  border: none;
  background-color: rgb(244, 244, 244);
  padding: 10px 10px 10px 10px;
  box-shadow: 2px 2px 2px #d9d9d999;
  border-radius: 5px;
  border: 0.1px solid rgba(15, 136, 235, 0.595);
}

</style>