<template>
  <div class="challenge-offer">
    <i class="fa-solid fa-x cancel-mobile" @click="cancelChallenge()"></i>
    <div class="text">
      <h2>{{ challenge.title }}</h2>
    </div>
    <p class="desc-challenge">
      {{ challenge.description }}
    </p>
    <button @click="showArchives()" class="downloadBtn">Ver archivos</button>

    <div class="upload-area">
      <div class="uploadBtn" @click="$refs.fileInputSolution.click()">
        Subir archivo
      </div>
      <input
        class="file-challenge"
        type="file"
        name="fileSolution"
        ref="fileInputSolution"
      />
    </div>

    <form>
      <label for="cv">Selecciona un currículum: </label>
      <select name="cv" id="cv" ref="cvSelector">
        <option v-for="(cv, index) in cvs" :key="index" :value="cv.title">
          {{ cv.title }}
        </option>
      </select>
    </form>
    <button class="sendButton" @click="uploadSolution()">Enviar</button>
  </div>
</template>

<script>
// Services
import ChallengeService from "../../service/challenge.service";
const challengeService = new ChallengeService();
import DeveloperService from "../../service/developer.service";
const developerService = new DeveloperService();
export default {
  name: "Challenge",
  props: {
    challengeId: String,
    offerId: String,
  },
  data() {
    return {
      challenge: {},
      cvs: [],
    };
  },
  created() {
    this.fetchChallenge();
    this.fetchCVs();
  },
  methods: {
    cancelChallenge() {
      this.$emit("cancelChallenge");
    },
    fetchChallenge() {
      challengeService.getById(this.challengeId).then((challenge) => {
        this.challenge = challenge;
      });
    },
    showArchives() {
      window.open(`http://localhost:3008/${this.challenge.archives}`);
    },
    uploadSolution() {
      const file = this.$refs.fileInputSolution.files[0];
      const selectedCV = this.$refs.cvSelector.value;
      const formData = new FormData();
      formData.append("solution", file);
      formData.append("cv", selectedCV);
      challengeService.uploadSolution(formData, this.offerId).then(() => {
        this.$emit("cancelChallenge");
        this.$emit("solutionUploaded");
      });
    },
    fetchCVs() {
      developerService.getCVs().then((cvs) => {
        this.cvs = cvs;
      });
    },
  },
};
</script>

<style scoped>
.challenge-offer {
  border-radius: 5px;
  width: 85%;
  max-width: 490px;
  height: 97vh;
  max-height: 850px;
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
  height: 70px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
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
.upload-area {
  width: 60%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0 10px;
  border: 2px dotted rgb(221, 144, 1);
}
.uploadBtn {
  width: 170px;
  margin: 0;
  padding: 12px 10px 12px 10px;
  border-radius: 20px;
  border: none;
  background: rgb(1, 221, 184);
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

.desc-challenge {
  width: 90%;
  height: 120px;
  font-size: 0.9rem;
  border: 1px solid rgb(1, 122, 192);
  padding: 3px;
  word-break: break-all;
}
</style>