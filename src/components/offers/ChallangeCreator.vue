<template>
  <div class="container-challange-creator">
    <div class="challenge-offer">
      <i
        class="fa-solid fa-x cancel-mobile"
        @click="closeChallangeCreator()"
      ></i>
      <div class="text">
        <input
          type="text"
          class="title-challange input"
          placeholder="Título del challenge"
          v-model="title"
        />
        <textarea
          class="description-text-mobile input"
          placeholder="Descripción corta..."
          v-model="description"
        ></textarea>
      </div>
      <div class="upload-area">
        <div class="uploadBtn" @click="$refs.fileInputChallenge.click()">
          Subir archivo
        </div>
        <input
          class="file-challenge"
          type="file"
          name="fileChallenge"
          ref="fileInputChallenge"
        />
      </div>
      <button @click="saveChallenge()" class="sendButton">Guardar</button>
    </div>
  </div>
</template>

<script>
import ChallengeService from "../../service/challenge.service.js";
const challengeService = new ChallengeService();
export default {
  name: "ChallengeCreator",
  components: {},
  data() {
    return {
      title: "",
      description: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    closeChallangeCreator() {
      this.title = "";
      this.description = "";
      this.$emit("closeChallangeCreator");
    },

    saveChallenge() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("challenge", this.$refs.fileInputChallenge.files[0]);

      challengeService.save(formData).then((response) => {
        this.$emit("challengeCreated", response);
        this.title = "";
        this.description = "";
      });
    },
  },
};
</script>

<style scoped>
.container-challange-creator {
  width: 100vw;
  display: flex;
  justify-content: center;
  font-family: "Nunito", sans-serif;
}
.challenge-offer {
  border-radius: 5px;
  width: 85%;
  max-width: 555px;
  height: 90vh;
  position: fixed;
  z-index: 5;
  top: calc(50vh - 45vh);
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
.upload-area {
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0 10px;
  border: 2px dotted rgba(180, 180, 180, 0.867);
}
.uploadBtn {
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

.file-challenge {
  display: none;
}
.title-challange {
  width: 60%;
  margin-top: 70px;
  outline: none;
  margin-top: 70px;
}
.description-text-mobile {
  width: 95%;
  height: 100px;
  margin-top: 40px;
  outline: none;
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