<template>
  <div class="container">
    <form action="">
      <input
        class="username"
        v-model="username"
        type="text"
        placeholder="Usuario"
        @keyup="signUp()"
      />
      <input
        class="email"
        v-model="email"
        type="text"
        placeholder="Correo electrónico"
        @keyup="signUp()"
      />
      <input
        class="password"
        v-model="password"
        type="password"
        placeholder="Contraseña"
        @keyup="signUp()"
      />
      <input
        class="password"
        v-model="password2"
        type="password"
        placeholder="Repetir contraseña"
        @keyup="signUp()"
      />
    </form>
    <input class="submit-btn" @click="signUp()" type="submit" value="Acceder" />
    <div class="signup">
      <p>¿Ya estás registrado?</p>
      <router-link to="/login" class="go-to-login">Inicia sesión</router-link>
    </div>
  </div>
</template>

<script>
import DeveloperService from "../../service/developer.service";
const devService = new DeveloperService();
export default {
  name: "DevSignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    signUp() {
      if (!this.checkFields()) {
        alert("Campos mal mal");
        return;
      }
      let dev = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      devService
        .signUp(dev)
        .then((res) => {
          if (res) {
            this.$router.push("/login");
          } else {
            alert("Error al registrarse");
          }
        })
        .catch((err) => {
          alert("Error al registrarse");
        });
    },
    checkFields() {
      if (
        this.username.length > 2 &&
        this.email.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        ) &&
        this.password.length > 7 &&
        this.password === this.password2
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}
.container form {
  overflow-x: hidden;
  width: 100vw;
  margin-bottom: 25px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container form input {
  width: 200px;
  padding: 15px;
  text-align: center;
  margin-top: 30px;
  outline: none;
  border-radius: 30px;
  border: 1px solid rgb(68, 68, 68);
}
.container .submit-btn {
  width: 130px;
  padding: 15px;
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
}
.container .submit-btn:hover {
  cursor: pointer;
}
.container .signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.container .go-to-login {
  color: #00b7ac;
  text-decoration: none;
}

/***********RESPONSIVE***** */

/*HEIGHT */
@media screen and (max-height: 600px) {
  .container form {
    margin-top: 5px;
    height: 350px;
  }
  .container form input {
    width: 180px;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
    outline: none;
    border-radius: 30px;
    border: 1px solid rgb(68, 68, 68);
  }
  .container .submit-btn {
    margin-top: 20px;
    padding: 0px;
    width: 130px;
    height: 60px;
  }
  .container .signup {
    margin-top: 10px;
    height: 100px;
  }
}
</style>
