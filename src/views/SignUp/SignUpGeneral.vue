<template>
  <div class="container">
    <div class="wave">
      <svg
        id="visual"
        viewBox="0 0 675 900"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
        class="background"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="0" width="675" height="900" fill="#ffffff"></rect>
        <path
          d="M0 584L675 338L675 901L0 901Z"
          fill="#0066FF"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>
    <h1>¿QUÉ TIPO DE USUARIO ERES?</h1>
    <div class="card-container">
      <router-link to="/registro/dev" class="card">
        <div class="dev-card">
          <h2>DESARROLLADOR</h2>
          <svg
            width="68"
            height="66"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 9C27 13.9725 22.9725 18 18 18C13.0275 18 9 13.9725 9 9C9 4.0275 13.0275 0 18 0C22.9725 0 27 4.0275 27 9Z"
              fill="url(#paint0_linear_156_91)"
            />
            <path
              d="M18 20C11.9925 20 0 23.0347 0 28V34H36V28C36 23.0347 24.0075 20 18 20Z"
              fill="url(#paint1_linear_156_91)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_156_91"
                x1="18"
                y1="0"
                x2="18.5605"
                y2="28.3223"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF5C00" />
                <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_156_91"
                x1="18"
                y1="20"
                x2="18.1696"
                y2="42.0358"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF5C00" />
                <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </router-link>
      <router-link to="/registro/empresa" class="card">
          <div class="company-container">
        <h2>EMPRESA</h2>
        <svg
          width="70"
          height="70"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 14C4.44772 14 4 14.4477 4 15V38H2V15C2 13.3431 3.34315 12 5 12H17C18.6569 12 20 13.3431 20 15V38H18V15C18 14.4477 17.5523 14 17 14H5Z"
            fill="url(#paint0_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 16H28V14H35C36.6569 14 38 15.3431 38 17V38H36V17C36 16.4477 35.5523 16 35 16Z"
            fill="url(#paint1_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 2C13.4477 2 13 2.44772 13 3V13H11V3C11 1.34315 12.3431 0 14 0H26C27.6569 0 29 1.34315 29 3V38H27V3C27 2.44772 26.5523 2 26 2H14Z"
            fill="url(#paint2_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 40H0V38H40V40Z"
            fill="url(#paint3_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 4C15.4477 4 15 4.44772 15 5V7C15 7.5523 15.4477 8 16 8H18C18.5523 8 19 7.5523 19 7V5C19 4.44772 18.5523 4 18 4H16Z"
            fill="url(#paint4_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 16C6.4477 16 6 16.4477 6 17V19C6 19.5523 6.4477 20 7 20H9C9.5523 20 10 19.5523 10 19V17C10 16.4477 9.5523 16 9 16H7Z"
            fill="url(#paint5_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 16C12.4477 16 12 16.4477 12 17V19C12 19.5523 12.4477 20 13 20H15C15.5523 20 16 19.5523 16 19V17C16 16.4477 15.5523 16 15 16H13Z"
            fill="url(#paint6_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 10C15.4477 10 15 10.4477 15 11V13C15 13.5523 15.4477 14 16 14H18C18.5523 14 19 13.5523 19 13V11C19 10.4477 18.5523 10 18 10H16Z"
            fill="url(#paint7_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 22C6.4477 22 6 22.4477 6 23V25C6 25.5523 6.4477 26 7 26H9C9.5523 26 10 25.5523 10 25V23C10 22.4477 9.5523 22 9 22H7Z"
            fill="url(#paint8_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 28C6.4477 28 6 28.4477 6 29V31C6 31.5523 6.4477 32 7 32H9C9.5523 32 10 31.5523 10 31V29C10 28.4477 9.5523 28 9 28H7Z"
            fill="url(#paint9_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 22C12.4477 22 12 22.4477 12 23V25C12 25.5523 12.4477 26 13 26H15C15.5523 26 16 25.5523 16 25V23C16 22.4477 15.5523 22 15 22H13Z"
            fill="url(#paint10_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 28C12.4477 28 12 28.4477 12 29V31C12 31.5523 12.4477 32 13 32H15C15.5523 32 16 31.5523 16 31V29C16 28.4477 15.5523 28 15 28H13Z"
            fill="url(#paint11_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 4C21.4477 4 21 4.44772 21 5V7C21 7.5523 21.4477 8 22 8H24C24.5523 8 25 7.5523 25 7V5C25 4.44772 24.5523 4 24 4H22Z"
            fill="url(#paint12_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 10C21.4477 10 21 10.4477 21 11V13C21 13.5523 21.4477 14 22 14H24C24.5523 14 25 13.5523 25 13V11C25 10.4477 24.5523 10 24 10H22Z"
            fill="url(#paint13_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 16C21.4477 16 21 16.4477 21 17V19C21 19.5523 21.4477 20 22 20H24C24.5523 20 25 19.5523 25 19V17C25 16.4477 24.5523 16 24 16H22Z"
            fill="url(#paint14_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 22C21.4477 22 21 22.4477 21 23V25C21 25.5523 21.4477 26 22 26H24C24.5523 26 25 25.5523 25 25V23C25 22.4477 24.5523 22 24 22H22Z"
            fill="url(#paint15_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 18C30.4477 18 30 18.4477 30 19V21C30 21.5523 30.4477 22 31 22H33C33.5523 22 34 21.5523 34 21V19C34 18.4477 33.5523 18 33 18H31Z"
            fill="url(#paint16_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 24C30.4477 24 30 24.4477 30 25V27C30 27.5523 30.4477 28 31 28H33C33.5523 28 34 27.5523 34 27V25C34 24.4477 33.5523 24 33 24H31Z"
            fill="url(#paint17_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 30C30.4477 30 30 30.4477 30 31V33C30 33.5523 30.4477 34 31 34H33C33.5523 34 34 33.5523 34 33V31C34 30.4477 33.5523 30 33 30H31Z"
            fill="url(#paint18_linear_159_239)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 28C21.4477 28 21 28.4477 21 29V31C21 31.5523 21.4477 32 22 32H24C24.5523 32 25 31.5523 25 31V29C25 28.4477 24.5523 28 24 28H22Z"
            fill="url(#paint19_linear_159_239)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_159_239"
              x1="11"
              y1="12"
              x2="10.0615"
              y2="46.4367"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_159_239"
              x1="33"
              y1="14"
              x2="31.5624"
              y2="45.7462"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_159_239"
              x1="20"
              y1="0"
              x2="17.9969"
              y2="50.2881"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_159_239"
              x1="20"
              y1="38"
              x2="19.9975"
              y2="40.6509"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_159_239"
              x1="17"
              y1="4"
              x2="16.9"
              y2="9.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_159_239"
              x1="8"
              y1="16"
              x2="7.9"
              y2="21.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_159_239"
              x1="14"
              y1="16"
              x2="13.9"
              y2="21.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_159_239"
              x1="17"
              y1="10"
              x2="16.9"
              y2="15.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_159_239"
              x1="8"
              y1="22"
              x2="7.9"
              y2="27.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_159_239"
              x1="8"
              y1="28"
              x2="7.9"
              y2="33.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_159_239"
              x1="14"
              y1="22"
              x2="13.9"
              y2="27.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_159_239"
              x1="14"
              y1="28"
              x2="13.9"
              y2="33.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_159_239"
              x1="23"
              y1="4"
              x2="22.9"
              y2="9.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_159_239"
              x1="23"
              y1="10"
              x2="22.9"
              y2="15.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_159_239"
              x1="23"
              y1="16"
              x2="22.9"
              y2="21.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_159_239"
              x1="23"
              y1="22"
              x2="22.9"
              y2="27.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_159_239"
              x1="32"
              y1="18"
              x2="31.9"
              y2="23.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_159_239"
              x1="32"
              y1="24"
              x2="31.9"
              y2="29.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_159_239"
              x1="32"
              y1="30"
              x2="31.9"
              y2="35.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_159_239"
              x1="23"
              y1="28"
              x2="22.9"
              y2="33.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5C00" />
              <stop offset="1" stop-color="#FF5C00" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpGeneral",
};
</script>

<style scoped>
* {
  overflow-x: hidden;
}
.container {
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container .wave {
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  bottom: -5px;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

.container h1 {
  margin-top: 70px;
  font-size: 1.5rem;
}

.card-container {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.dev-card,
.company-container {
  min-width: 300px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(92, 92, 92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.card {
  min-width: 300px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 8px;
 box-shadow: 0 3.5px 7px rgb(114, 114, 114);
  text-decoration: none;
  color: #000;
}
/****RESPONSIVE****/

@media screen and (min-width: 1000px) {
  .container h1 {
    font-size: 2.1rem;
  }

  .dev-card,
.company-container {
   height: 220px;
}

  .card{
    height: 220px;
  }
  
}
</style>