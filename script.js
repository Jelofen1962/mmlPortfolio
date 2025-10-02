let currentTheme = 'light';

function switchTheme(){
  console.log('clicked');
  const styleElement = document.getElementById("mainStyle");

  if (currentTheme == "light"){
    styleElement.textContent = themes.dark;
    currentTheme = "dark";
  } else {
    styleElement.textContent = themes.light;
    currentTheme = "light";
  }
}

const themes = {
  light:`
  @font-face {
  font-family: sf;
  src: url(./assets/IRANSANSXREGULAR.TTF);
}
@font-face {
  font-family: jetbrain;
  src: url(./assets/JETBRAINSMONO-REGULAR.TTF);
}
body::selection{
  background-color:hsl(0,0,70%);
  color:rgb(129, 128, 128);
}
::-webkit-scrollbar {
  display: none;
}

* {
    transition: all 200ms ease;
  }

body {
  background-color: hsl(0, 0%, 90%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sf;
  min-height: 100vh;
}

.container {
  position: relative;
  border: 1px solid hsl(0, 0%, 95%);
  width: 400px;
  height: 600px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 6px 6px 12px #ccc, -6px -6px 12px #ffffffd0;
  overflow: visible;
  text-align: center;
  transition: box-shadow 0.5s ease;
}

.container::after {
  content: "";
  position: absolute;
  inset: -8px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 8, 1) 0%,
    rgba(255, 255, 255, 1) 55%,
    rgba(255, 0, 0, 1) 100%
  );
  border-radius: 15px;
  z-index: -1;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.container:has(.topbar img:hover)::after {
  opacity: 1;
}

.container::before {
  content: "";
  background-color: #eaeaea;
  position: absolute;
  inset: 0;
  border-radius: 10px;
  z-index: 0;
}

.container * {
  position: relative;
  z-index: 1;
}

p {
  text-transform: capitalize;
  color: hsl(0, 0%, 50%);
  padding: 6px;
  transition: 100ms;
}
p:not(.des):hover {
  cursor: pointer;
  transform: scale(1.5, 1.5);
  transition: 250ms;
  color: hsl(0, 0%, 10%);
}

.name{
  margin-top: 0;
  color: black;
  font-weight: 700;
  font-size: larger;
}

.des {
  direction: rtl;
}

.topbar {
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

.pfp {
  position: relative;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 0 0 12px hsla(0, 0%, 0%, 0.1);
  transition: 250ms;
}
.pfp:active{
    animation-name: glow;
    animation-duration:1s;
}

@keyframes glow {
    50% {
    transform: scale(15,1);
    }
  }

.container:has(.topbar img:hover)::before {
  opacity: 1;
}

.socials {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400;
  height: 100;
}
a {
  font-family: jetbrain;
  text-decoration: none;
  color: hsl(0, 0%, 10%);
}

.fa .fa-instagram {
  width: 50;
}


.htmlLogo,
.cssLogo {
  margin: 20;
  height: 100;
  width: 100;
}

.circleOrange {
  position: fixed;
  top: -200px;
  left: -300px;
  background-color: rgba(255, 140, 0, 0.2);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  animation: move 2s infinite;
}
.circleBlue {
  position: fixed;
  bottom: -200px;
  right: -300px;
  background-color: rgba(0, 0, 255, 0.2);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  animation: move 2s infinite;
}

@keyframes move {
  50%{
      filter: blur(50px);
  }
  100%{
      filter: blur(100px);
  }
}

.seperator {
  margin-top: 2rem;
  margin-bottom: 10px;
  display: block;
  width: 400;
  height: 2;
  background: hsla(0, 0%, 100%, 0.5);;
  box-shadow: 0 0 10px #fff;
}

.fa-telegram{
  color: rgb(0, 115, 255);
}
.fa-telegram:hover{
  color: hsl(213, 100%, 40%);
}

.fa-instagram{
  color:rgb(235, 39, 120);
}
.fa-instagram:hover{
  color:hsl(335, 83%, 40%);
}

.fa-github{
  color: rgb(60, 60, 60);
}
.fa-github:hover{
  color: rgb(0, 0, 0);
}

.role{
  margin-top: -25;
  font-weight: 800;
}


.switch{
  position: absolute;
  top: 1rem;
  border-radius: 100%;
  background-color: #ffffffaa;
  box-shadow: 0 0 20px #fff;
}
.switch:hover{
  background-color:hsl(0, 0%, 85%)
}
  
  `,
  dark:`
  @font-face {
  font-family: sf;
  src: url(./assets/IRANSANSXREGULAR.TTF);
}
@font-face {
  font-family: jetbrain;
  src: url(./assets/JETBRAINSMONO-REGULAR.TTF);
}
body::selection{
  background-color:hsl(0,0,30%);
  color:rgb(200, 200, 200);
}
::-webkit-scrollbar {
  display: none;
}

* {
    transition: all 200ms ease;
  }

body {
  background-color: hsl(0, 0%, 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sf;
  min-height: 100vh;
}

.container {
  position: relative;
  border: 1px solid hsl(0, 0%, 20%);
  width: 400px;
  height: 600px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 6px 6px 12px #000, -6px -6px 12px #1a1a1a;
  overflow: visible;
  text-align: center;
  transition: box-shadow 0.5s ease;
}

.container::after {
  content: "";
  position: absolute;
  inset: -8px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 8, 1) 0%,
    rgba(100, 100, 100, 1) 55%,
    rgba(255, 0, 0, 1) 100%
  );
  border-radius: 15px;
  z-index: -1;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.container:has(.topbar img:hover)::after {
  opacity: 1;
}

.container::before {
  content: "";
  background-color: #1a1a1a;
  position: absolute;
  inset: 0;
  border-radius: 10px;
  z-index: 0;
}

.container * {
  position: relative;
  z-index: 1;
}

p {
  text-transform: capitalize;
  color: hsl(0, 0%, 60%);
  padding: 6px;
  transition: 100ms;
}
p:not(.des):hover {
  cursor: pointer;
  transform: scale(1.5, 1.5);
  transition: 250ms;
  color: hsl(0, 0%, 90%);
}

.name{
  margin-top: 0;
  color: white;
  font-weight: 700;
  font-size: larger;
}

.des {
  direction: rtl;
}

.topbar {
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

.pfp {
  position: relative;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 0 0 12px hsla(0, 0%, 100%, 0.3);
  transition: 250ms;
}
.pfp:active{
    animation-name: glow;
    animation-duration:1s;
}

@keyframes glow {
    50% {
    transform: scale(15,1);
    }
  }

.container:has(.topbar img:hover)::before {
  opacity: 1;
}

.socials {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400;
  height: 100;
}
a {
  font-family: jetbrain;
  text-decoration: none;
  color: hsl(0, 0%, 90%);
}

.fa .fa-instagram {
  width: 50;
}


.htmlLogo,
.cssLogo {
  margin: 20;
  height: 100;
  width: 100;
}

.circleOrange {
  position: fixed;
  top: -200px;
  left: -300px;
  background-color: rgba(255, 140, 0, 0.15);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  animation: move 2s infinite;
}
.circleBlue {
  position: fixed;
  bottom: -200px;
  right: -300px;
  background-color: rgba(0, 100, 255, 0.15);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  animation: move 2s infinite;
}

@keyframes move {
  50%{
      filter: blur(50px);
  }
  100%{
      filter: blur(100px);
  }
}

.seperator {
  margin-top: 2rem;
  margin-bottom: 10px;
  display: block;
  width: 400;
  height: 2;
  background: hsla(0, 0%, 30%, 0.5);
  box-shadow: 0 0 10px #333;
}

.fa-telegram{
  color: rgb(50, 150, 255);
}
.fa-telegram:hover{
  color: hsl(213, 100%, 60%);
}

.fa-instagram{
  color:rgb(255, 80, 150);
}
.fa-instagram:hover{
  color:hsl(335, 100%, 60%);
}

.fa-github{
  color: rgb(200, 200, 200);
}
.fa-github:hover{
  color: rgb(255, 255, 255);
}

.role{
  margin-top: -25;
  font-weight: 800;
}


.switch{
  position: absolute;
  top: 1rem;
  border-radius: 100%;
  background-color: #cdcdcdaa;
  box-shadow: 0 0 20px #000;
}
.switch:hover{
  background-color:hsl(0, 0%, 25%)
}

  `
};