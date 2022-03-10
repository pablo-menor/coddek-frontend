<template>
  <div class="container">
    <form action="">
      <input class="username" type="text" placeholder="Empresa" />
      <input class="email" type="text" placeholder="Correo electrónico" />
      <input class="password" type="text" placeholder="Contraseña" />
      <input class="password" type="text" placeholder="Repetir contraseña" />
    </form>
    <input class="submit-btn" type="submit" value="Acceder" />
    <div class="signup">
      <p>¿Ya estás registrado?</p>
      <router-link to="/login" class="go-to-login">Inicia sesión</router-link>
    </div>
  </div>
</template>

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
  background-color: #00b7ac;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 30px;
  border: 1px solid rgb(68, 68, 68);
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


