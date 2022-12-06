<template>
  <div class="my-container">
    <transition name="route" mode="out-in">
      <NavBar />
    </transition>

     
    <NuxtPage />
   
  </div>
  <TheFooter />
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.btn-dark {
  background-color: var(--gold);
  border-color: var(--gold);
}

:root {
  --gold: #a77e50;
}
a {
  color: #212529;
}
a:hover {
  color: #212529;
}
u {
  text-decoration: underline 1px;
}

@keyframes comeInOut {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.sparkling {
  position: relative;
  display: inline-block;
  z-index: 0;
}

.star {
  z-index: -1;
  position: absolute;
  display: block;
  animation: comeInOut 700ms forwards;
}

.sparkling > span > svg {
  display: block;
  animation: spin 1000ms linear;
}

button {
  font-family: "Work Sans", sans-serif;
}

blockquote {
  font-style: italic;
}
button {
  border-radius: 30px !important;
  text-transform: uppercase;
}
.error {
  text-align: center;
  color: red;
}

@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,700;1,200;1,400;1,700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@0,200;0,400;1,100;1,400&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,400;0,700;1,400&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap");

body {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 130px);
  background: #99af9e;
  font-weight: 400;
}
body {
  background: #99af9e;
}

html {
  background: #99af9e;
}

h2 {
  font-family: "Piazzolla", serif;
  font-style: italic;
}

@media only screen and (min-width: 575px) {
  #app {
    min-height: calc(100vh - 140px);
  }
  .my-container {
    min-height: calc(100vh - 140px);
  }
}

.my-container {
  min-height: calc(100vh - 300px);
}

.route-enter-from,
.route-leave-to {
  opacity: 0.1;
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
